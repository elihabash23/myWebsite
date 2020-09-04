import React, { Component } from "react";
import Projects from "./Projects.js";
import ProfilePic from "../screenshots/ProfilePic.jpg";
import Footer from "./Footer";
import MySkillsBar from "./MySkillsBar.js";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row align-items-center margin-bottom-200">
            <div className="col-lg-8">
              <h2 id="Top" className="about-me-header">Welcome to My Web Portfolio!</h2>
              <p className="about-me">
                Full stack engineer based in San Jose California. My main expertise 
                is in web development and the tools I use today are MERN stack and 
                AWS for development. 
              </p>

              <p className="about-me">
                I don’t consider myself an expert in any 
                particular language or framework. Im an engineer at heart, 
                and I like to solve problems. I take pride in my ability to to 
                tackle any project or problem in any language and grind out a solution.
              </p>

              <p className="about-me">
                Check out my projects below! If you're a
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
          <MySkillsBar />
          <hr />
          <Projects />
        </div>
        <Footer />
      </div>
    );
  }
}
