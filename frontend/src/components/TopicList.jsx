import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";


const TopicList = ({onSelectTopic, topics}) => {
  return (
    <div className="top-nav-bar__topic-list" >
      {topics.map((topicData) => (
        <TopicListItem key={topicData.id} topicData={topicData}  onSelectTopic={onSelectTopic}
        />
      ))}
    </div>
  );
};

export default TopicList;
