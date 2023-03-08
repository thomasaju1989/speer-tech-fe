import React, { useState, useEffect } from "react";
import Feeditem from "./Feeditem.js";
import { useNavigate } from 'react-router-dom';

const Archive = ( ) => {
  const [activities, setActivities] = useState({});
  const [dates, setDates] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const url = "https://aircall-job.herokuapp.com/activities";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        let feed = {};
        let dates = [];
        let res = json.sort(
          (a, b) => Date.parse(b.created_at) - Date.parse(a.created_at)
        );
        let archivedFeed = res.filter(function(item){return item.is_archived;});

        archivedFeed.forEach((item) => {
          let date = new Date(item.created_at);
          let dateFormat =date.toLocaleString('default', { month: 'long' }) +", " +date.getDay() +" " +date.getFullYear();
          item.callTime = date.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          });
          if (feed[dateFormat]) {
            feed[dateFormat].push(item);
          } else {
            feed[dateFormat] = [item];
            dates.push(dateFormat);
          }
        });
        
        setActivities(feed);
        setDates(dates);
      })
      .catch((error) => console.error(error));
  }, []);
  const archive = () => {
    navigate("/");
  };
  return (
    <div className="feed-container">
      <div className="archive" onClick={archive}>
        Back to Main
      </div>
      <h1>Archived List</h1>
      {dates.length ? 
        dates.map((date) => {
          return (
            <div key={date}>
              <div className="date">{date}</div>
              {activities[date].length &&
                activities[date].map((activity, index) => {
                  return (
                    <div key={index}>
                      <Feeditem activity={activity} />
                    </div>
                  );
                })}
            </div>
          );
        }) : (<div className="no">No Archived Calls</div>)}
    </div>
  );
};



export default Archive;
