import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { getBoredObj } from "./actions/";

function App({ activity, type, price, participants, isFetching, dispatch }) {
  const handleClick = () => {
    dispatch(getBoredObj());
  };

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
  };
};

export default connect(mapStateToProps)(App);
