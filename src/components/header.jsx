import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/eq0s1atl_K0?si=b22Mi4tpdj86WAJ5&autoplay=1&mute=1&loop=1&playlist=eq0s1atl_K0"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Background Video"
          ></iframe>
        </div>
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
