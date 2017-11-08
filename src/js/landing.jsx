import React from 'react';

import person1 from '../../img/201-illustration1.png';
import person2 from '../../img/201-illustration2.png';

export default class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="landing">
        <div className="first-person">
          <img src={person1} className="person" />
          <div className="bubble left">
            So what is Socialism all about, anyway?
          </div>
        </div>
        <div className="second-person">
          <img src={person2} className="person facing-right" />
          <div className="bubble right">
            I'm glad you asked!
          </div>
        </div>
        <div className="footer">

          10 frequently asked questions about SOCIALISM!
          <br/>
          Presented by the Seattle Democratic Socalists of America
        </div>
      </div>
    );
  }
}
