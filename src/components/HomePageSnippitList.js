import React from "react";
import SnipListItem from "./snip-list-item/SnipListItem";

const HomePageSnippitList = props => {
  const { soup, snips } = props;
  return (
    <div className="container">
      {snips.map((item, index) => {
        const itemsSoup = soup.filter(el => {
          return el.id === item.id;
        });
        return (
          <React.Fragment key={index}>
            <SnipListItem soup={itemsSoup[0].bagOfWords} snip={item} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default HomePageSnippitList;
