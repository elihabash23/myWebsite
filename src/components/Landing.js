import React, { Component } from "react";
import Projects from "./Projects.js";
import ProfilePic from "../screenshots/ProfilePic.jpg";
import Footer from "./Footer";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row align-items-center margin-bottom-200">
            <div className="col-lg-8">
              <h2 id="Top" className="about-me-header">Welcome to My Web Portfolio!</h2>
              <p className="about-me">
                Hello, my name is Elias Habash and I am a recent graduate
                from San Jose State University. I graduated with a Bachelor’s of
                Science in Software Engineering in December of 2018 and I'm
                currently actively looking for entry-level/Jr. software
                engineering/developer roles.
              </p>

              <p className="about-me">
                My main expertise is in web development using the MERN Stack and
                mobile development for Android. My favorite langauge to code in
                is Java but am confident in my ability to efficiently learn any 
                programming language or framework.
              </p>

              <p className="about-me">
                Check out my web and mobile projects below! If you're a
                recruiter looking to connect, feel free to email me at
                eliashabash18@gmail.com or call my cell phone number at
                (408) 658-4036 to get in touch.
              </p>
            </div>
            <div className="col-lg-4">
              <img
                className="crop-image img-thumbnail profilePic"
                alt="Project 1"
                src={ProfilePic}
              />
            </div>
          </div>
          <hr />
          <Projects />
        </div>
        <Footer />
      </div>
    );
  }
}
