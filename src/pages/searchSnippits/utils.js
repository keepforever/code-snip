export const trimSearch = (snipSoup, search) => {
  let match = []
  snipSoup.forEach((item, index) => {
    const bagToString = item.bagOfWords.join(" ")
    if (bagToString.includes(search.trim().toLowerCase())) {
      match.push(index)
    }
  })
  return match
}
