import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getBoredObj } from "./actions/";

function App({
  activity,
  type,
  price,
  participants,
  isFetching,
  error,
  dispatch,
}) {
  useEffect(() => {
    dispatch(getBoredObj());
  }, []);

  const handleClick = () => {
    dispatch(getBoredObj());
  };

  if (error) {
    return (
      <div className="App">
        <h2>Error occured: {error}</h2>
      </div>
    );
  }

  if (isFetching) {
    return (
      <div className="App">
        <h2>Fetching a new activity!</h2>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Bored API</h1>
      <p>Activity: {activity}</p>
      <p>Activity type: {type}</p>
      <p>Price: {price}</p>
      <p>Participants: {participants}</p>
      <button onClick={handleClick}>Get Activity</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    activity: state.boredObj.activity,
    type: state.boredObj.type,
    price: state.boredObj.price,
    participants: state.boredObj.participants,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps)(App);
