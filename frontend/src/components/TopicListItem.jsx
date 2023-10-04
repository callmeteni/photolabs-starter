import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = (props) => {
  const {topicData,onSelectTopic} = props;
  return (
    <div className="topic-list__item" onClick={()=> onSelectTopic(props.topicData.id)}>
      
      <span>{topicData.title}</span>
      
    </div>
  );
};

export default TopicListItem;
