import styled from "styled-components"

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

  font-size: 3vw;

  &:hover {
    background-position: 0 ;
  }
`

function TitleMenu() {
  return <Title>Menu</Title>
}

export default TitleMenu;