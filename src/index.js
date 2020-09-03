import React, {useState} from 'react';
import { render } from 'react-dom';
import App from './App';
import FacebookLogin from 'react-facebook-login';

const ReactFacebookLogin = () => {

  const [accessToken, setAccessToken] = useState("");

  const responseFacebook = (response) => {
    console.log(response);
    setAccessToken(response.accessToken);
  }

  const componentClicked = (response) => {
    console.log(response);
  }

  return (
    <div>
      <App />
      {accessToken}
      <FacebookLogin
        appId="1643380219164794"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
        textButton="Login com Facebook"
      />
    </div>
  );
}

render(
  <ReactFacebookLogin />,
  document.getElementById('root')
);
