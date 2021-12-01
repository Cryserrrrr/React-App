import React from 'react';

//Function
import App from './app';
import HomeMenu from './menu';
import TitleMenu from '../theme/title';

//Media
import background from '../media/VIDEO_BACKGROUND.mp4'

//Styled Components
import { VideoBackground } from '../theme/appTheme';

//Redux
import { makeSelectIsMenuOpen } from './selectors';
import { createStructuredSelector } from 'reselect';


function AllApp(isMenuOpen) {

  console.log('redux', isMenuOpen)
    
  return (
    <div>
      <VideoBackground autoPlay loop src={background} />
      { isMenuOpen ? 
          <HomeMenu/>
        :
          <div>
            <TitleMenu/>
            <App />
          </div>
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  isMenuOpen: makeSelectIsMenuOpen()
});


export default AllApp;