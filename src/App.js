import React from 'react';
import logo from './media/logo.png'
import background from './media/VIDEO_BACKGROUND.mp4'
import styled from 'styled-components';
import loader from './media/Transition_1.mp4'

const VideoBackground = styled.video`
  position: relative;

  width: 100%;
  height: auto;

`

const Title = styled.h1`
  position: absolute;

  top: 5px;
  left: 56%;
  margin-top: 0;
  cursor: pointer;

  background: linear-gradient(to right, #ff06fe 66%, white 10%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  background-position: 100%;
  transition: background-position 800ms ease, background 800ms ease;

  font-size: 50px;

  &:hover {
    background-position: 0 ;
  }

`

const Loader = styled.video`
  position: absolute;

  width: 100%;
  height: 100%;

  left: 0;

  object-fit: cover;
`
let Logo = styled.img`
  position: absolute;

  width: 400px;
  height: auto;

  left: 47%;
  top: 33%;
`

const DivMenu = styled.div`
  position: absolute;

  left: 37.5%;
  top: 0;

  width: 44%;
  height: 92%;

  transform: rotate(44.5deg);
  background-color: #00e5ff;
  opacity: 50%;
`

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = { 
      isLoading: true, 
      isMenuOpen: false,
    }
  }

  componentDidMount() {
      this.setState({isLoading: false})
  }

  logoOnScroll() {
    Logo = styled.img`
      position: fixed;

      width: 50px;
      height: auto;

      top: 20px;
      left: 20px;
    `
  }

  openMenu = () => {
    this.setState({isMenuOpen: true})
  }

  render() {
    
    return (
      this.state.isLoading ? 
      <Loader autoPlay loop src={loader}>Loading</Loader>
      :
      <div>
        <header>
          <VideoBackground autoPlay loop src={background} />
          <Title onClick={this.openMenu}>Menu</Title>
          <Logo src={logo} alt="Logo" />
        </header>
          {
            this.state.isMenuOpen ?
              <DivMenu></DivMenu>
            :
              null
          }
      </div>
    );
  }
}

export default App;
