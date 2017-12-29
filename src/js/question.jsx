import React from 'react';

import cheerio from 'cheerio';

import { markdown } from 'markdown';

export default class Question extends React.Component {
  render() {
    const $ = cheerio.load(markdown.toHTML(this.props.markdown));

    let question = $("h1").text();
    let answer = $("p").text();

    return (
      <div className="question">
        <div className="contents">
          <div className="right-speech-arrow">
            <br />
              <br />
                <br />
                  <div>
                    <h1>&gt;</h1>
                  </div>
          </div>
          <div className="bubble left" dangerouslySetInnerHTML={{ __html: `<strong>${question}</strong>` }} />
          <div className="bubble right large" dangerouslySetInnerHTML={{ __html: answer }}/>
          <div style={{ clear: "both" }}/>
        </div>
      </div>
    );
  }
}
