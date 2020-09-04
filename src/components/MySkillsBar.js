import React, { Component } from 'react'
import SkillBar from 'react-skillbars';

class MySkillsBar extends Component {

  constructor(props) {
    super(props);
    this.skills = [
      {type: "HTML/HTML5", level: 75},
      {type: "CSS/CSS3", level: 75},
      {type: "JavaScript", level: 75},
      {type: "jQuery", level: 60},
      {type: "React.js", level: 60},
      {type: "Node.js", level: 60},
      {type: "MongoDB", level: 60},
      {type: "Java", level: 60},
      {type: "AWS", level: 50}
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
      <div>
        <SkillBar skills={this.skills} colors={this.colors} height={25}/>
      </div>
    )
  }
}

export default MySkillsBar;
