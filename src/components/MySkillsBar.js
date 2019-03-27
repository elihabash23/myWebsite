import React, { Component } from 'react'
import SkillBar from 'react-skillbars';

class MySkillsBar extends Component {

  constructor(props) {
    super(props);
    this.skills = [
      {type: "Java", level: 80},
      {type: "HTML/HTML5", level: 75},
      {type: "CSS/CSS3", level: 75},
      {type: "Javascript", level: 75},
      {type: "jQuery", level: 60},
      {type: "React.js", level: 60},
      {type: "Node.js", level: 60},
      {type: "MongoDB", level: 60},
      {type: "Angular2", level: 50},
      {type: "TypeScript", level: 50},
      {type: "Python", level: 50},
      {type: "MySQL", level: 50}
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
        <SkillBar skills={this.skills} colors={this.colors} height={30}/>
      </div>
    )
  }
}

export default MySkillsBar;
