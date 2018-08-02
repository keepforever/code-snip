<View style={styles.container} >
  <View>
    <TextField
      kolor="black"
      value={search}
      name="search..."
      onChangeText={this.onChangeText}
    />
  </View>
  <View style={styles.sortRow}>
    <Button style={styles.sortButton} title="Text" onPress={() =>
      !loading && refetch({
        orderBy: variables.orderBy === 'text_ASC' ? 'text_DESC' : 'text_ASC',
        after: null
      })} />
    <Button style={styles.sortButton} title="Title" onPress={() =>
      !loading && refetch({
        orderBy: variables.orderBy === 'title_ASC' ? 'title_DESC' : 'title_ASC',
        after: null
    })} />
  </View>
  <Button
    title="Nav to CreateOffer"
    onPress={this.navToCreateOffer}
  />
  <Text style={{ marginTop: 10, fontSize: 20 }}>Offers:</Text>
  <FlatList
    keyExtractor={item => item.id }
    data={offersConnection.edges
      .map(x => ({
        ...x.node,
        showButtons: userId === x.node.author.id,
      }))
    .filter((x) => {
      if(offersMap[x.id]) {
        return false
      }
      offersMap[x.id] = 1
      return true
    })}
    renderItem={({ item }) => (
      <OfferRow
        offerAuthorId={item.author.id}
        userId={userId}
        item={item}
        edit={this.editOffer}
        delete={this.deleteOffer}
        showButtons={item.showButtons}
        viewThisOffer={this.navToSpecificOffer}
      />
    )}
    onEndReached={() => {
      if (!loading && offersConnection.pageInfo.hasNextPage) {
        fetchMore({
          variables: {
            after: offersConnection.pageInfo.endCursor,
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            //clearLog('previousResult', previousResult)
            //clearLog('fetchMoreResult', fetchMoreResult)
            if (!fetchMoreResult) {
              return previousResult;
            }
            if (
              !previousResult ||
              !previousResult.offersConnection ||
              !previousResult.offersConnection.edges
            ) {
              return fetchMoreResult
            }
            return {
              offersConnection: {
                __typename: 'OfferConnection',
                pageInfo: fetchMoreResult.offersConnection.pageInfo,
                edges: [
                  ...previousResult.offersConnection.edges,
                  ...fetchMoreResult.offersConnection.edges,
                ],
              },
            };
          },
        });
      }
    }}
    onEndReachedThreshold={0}
    ListFooterComponent={() => (
      offersConnection.pageInfo.hasNextPage ? <ActivityIndicator size="large" color="#00ff00"/> : null)}
  />
</View>
