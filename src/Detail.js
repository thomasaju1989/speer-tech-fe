import React, { useState, useEffect } from "react";
import { useHistory, useParams, useNavigate } from "react-router-dom";
const Detail = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const url = "https://aircall-job.herokuapp.com/activities/" + id;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setActivity(json);
      })
      .catch((error) => console.log(error));
  }, []);
  const goBack = () => {
    activity.is_archived ? navigate("/archive") : navigate("/");
  };
  return (
    <div className="detail-container">
      <h1>Details</h1>
      <div className="row">
        <div className="heading">From</div>
        <div className="value">{activity.from}</div>
      </div>
      <div className="row">
        <div className="heading">To</div>
        <div className="value">{activity.to}</div>
      </div>
      <div className="row">
        <div className="heading">Call Type</div>
        <div className="value">{activity.call_type}</div>
      </div>
      <div className="row">
        <div className="heading">Direction</div>
        <div className="value">{activity.direction}</div>
      </div>
      <div className="row">
        <div className="heading">Duration</div>
        <div className="value">{activity.duration} S</div>
      </div>
      <div className="row">
        <div className="heading">Via</div>
        <div className="value">{activity.via}</div>
      </div>
      <div className="go-back" onClick={goBack}>
        Go Back
      </div>
    </div>
  );
};

export default Detail;
