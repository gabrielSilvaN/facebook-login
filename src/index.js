import React, { useState } from 'react';
import { render } from 'react-dom';
import App from './App';
import FacebookLogin from 'react-facebook-login';

const ReactFacebookLogin = () => {

  const [authenticated, setAuthenticated] = useState(false);

  const [profilePicture, setProfilePicture] = useState("");
  const [profileName, setProfileName] = useState("");
  const [profileEmail, setProfileEmail] = useState("");


  const responseFacebook = (response) => {
    console.log(response);
    setProfileName(response.name);
    setProfilePicture(response.picture.data.url);
    setProfileEmail(response.email);
    setAuthenticated(true);

  }

  const componentClicked = (response) => {
    console.log(response);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
      <App />

      {authenticated ? (
        <div style={{ backgroundColor: '#d4d4d4', height: 250, width: 250, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={profilePicture} alt={profileName} style={{ height: 50, borderRadius: '50%' }} />
          <div>
            <h3>{profileName}</h3>
            <p>{profileEmail}</p>
          </div>
        </div>
      ) : (
          <FacebookLogin
            appId="1643380219164794"
            autoLoad={true}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook}
            textButton="Login com Facebook"
          />
        )}

    </div>
  );
}

render(
  <ReactFacebookLogin />,
  document.getElementById('root')
);
