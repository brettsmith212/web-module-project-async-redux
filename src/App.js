import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getBoredObj } from "./actions/";
import styled from "styled-components";

const BoredContainer = styled.div`
  margin-top: 2rem;

  button {
    padding: 0.8rem;
    border-radius: 10px;
  }
  button:hover {
    color: blue;
    transform: scale(1.05)
  }
`;

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
        <BoredContainer>
          <h2>Error occured: {error}</h2>
        </BoredContainer>
      </div>
    );
  }

  if (isFetching) {
    return (
      <div className="App">
        <BoredContainer>
          <h2>Fetching a new activity!</h2>
        </BoredContainer>
      </div>
    );
  }

  return (
    <div className="App">
      <BoredContainer>
        <h1>Bored API</h1>
        <p>Activity: {activity}</p>
        <p>Activity type: {type}</p>
        <p>Price: {price}</p>
        <p>Participants: {participants}</p>
        <button onClick={handleClick}>Get Activity</button>
      </BoredContainer>
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
