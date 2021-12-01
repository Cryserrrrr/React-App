import styled from "styled-components";
import close from '../media/close_big.svg'

import { openMenu } from "./action";

const CloseMenu = styled.img`
  position: absolute;

  top: 1%;
  left: 58.3%;

  width: 70px;
  height: 70px;

  cursor: pointer;

  transition: transform 500ms;

  &:hover{
    transform: rotate(90deg)
  }
`

const Menu = styled.div`
  position: absolute;

  top: 30%;
  left: 53%;
  margin-top: 0;

  text-align: center;
  font-size: 3vw;
  line-height: 60px;
  cursor: pointer;
  
  color: white;
`
const FirstLetter = styled.span`
  color: #ff06fe;

  transition: color 250ms;

`
const ClassAnimation = styled.div`
  margin-bottom: 30px;
  padding-bottom: 10px;
  padding-top: 10px;

  background-image: linear-gradient(to top, #ff06fe, #ff06fe);
  background-size: 25% 2px;
  background-position: bottom;
  background-repeat: no-repeat;

  transition: background-size 500ms, line-height 500ms, padding-bottom 500ms, padding-top 500ms;

  &:hover{
    background-size: 80% 2px;

    padding-bottom: 15px;
    padding-top: 15px;
  }
`

function HomeMenu({ isConnected, onOpenMenu}) {

  return (
    <div>
      <CloseMenu src={close} onClick={onOpenMenu}/>
      <Menu>
        <ClassAnimation><FirstLetter>A</FirstLetter>ccueil</ClassAnimation>
        <ClassAnimation><FirstLetter>P</FirstLetter>lanning</ClassAnimation>
        {
          !isConnected ?
            <ClassAnimation><FirstLetter>C</FirstLetter>onnexion</ClassAnimation>
          :
            <ClassAnimation><FirstLetter>D</FirstLetter>econnexion</ClassAnimation>
        }
      </Menu>
    </div>
  )
}

export function mapDispatchToProps(dispatch) {
  return {
    onOpenMenu: evt => dispatch(openMenu(evt.target.value)),
  };
}

export default HomeMenu;