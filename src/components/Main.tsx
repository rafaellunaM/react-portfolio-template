import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={`${process.env.PUBLIC_URL}/avatar.jpg`} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/rafaellunaM" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/rafael-luna-b6b9282a3/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Rafael Luna</h1>
          <p>DevOps / Platform Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/rafaellunaM" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/rafael-luna-b6b9282a3/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;