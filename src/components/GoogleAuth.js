import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "544887809849-jok6v1jgfq4gosmru98u5cqb0f6ds19h.apps.googleusercontent.com",
        scope: "email"
      });
    });
  }

  render() {
    return <div> Google Auth</div>;
  }
}

export default GoogleAuth;
