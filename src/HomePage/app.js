import React from 'react';

//Styled component
import { Logo } from '../theme/appTheme';
import { Loader } from '../theme/appTheme';

//Media
import logo from '../media/logo.png'
import loader from '../media/Transition_1.mp4'

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
    }
  }
  
  componentDidMount() {
    this.setState({isLoading: false})
  }
  
  render() {
    
    return (
      this.state.isLoading ? 
        <Loader autoPlay loop src={loader}>Loading</Loader>
      :
        <div>
          <Logo src={logo} alt="Logo" />
        </div>
    );
  }
}

export default App;
