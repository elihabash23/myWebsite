import React, { Component } from 'react'
import SkillBar from 'react-skillbars';

class MySkillsBar extends Component {

  constructor(props) {
    super(props);
    this.skills = [
      {type: "HTML/HTML5", level: 75},
      {type: "CSS/CSS3", level: 75},
      {type: "JavaScript", level: 75},
      {type: "React.js", level: 70},
      {type: "Java", level: 60},
      {type: "Selenium", level: 50},
      {type: "Node.js", level: 50},
      {type: "MongoDB", level: 50},
      {type: "AWS", level: 30}
    ];
    this.colors = {
      "bar": "#363c47",
      "title": {
        "text": "#fff",
        "background": "#171b21"
      }
    }
  }
  render() {
    return (
      <div className="skills">
        <SkillBar skills={this.skills} colors={this.colors} height={25}/>
      </div>
    )
  }
}

export default MySkillsBar;
