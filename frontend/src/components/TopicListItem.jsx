import React from "react";

import "../styles/TopicListItem.scss";

// const sampleDataForTopicListItem = {
//   id: "1",
//   slug: "topic-1",
//   label: "Nature",
// };

const TopicListItem = ({topicData}) => {
  return (
    <div className="topic-list__item">
      {topicData.title}
    </div>
  );
};

export default TopicListItem;
