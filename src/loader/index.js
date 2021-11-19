import React from "react";
import loader from '../media/Transition_1.webm'
import styled from "styled-components";

const Loader = styled.video`
  position: fixed;
`

class LoadingPage extends React.Component {
render() {
  return <Loader autoPlay src={loader}/>
  } 
};

export default LoadingPage;