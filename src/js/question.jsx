import React from 'react';

import cheerio from 'cheerio';

import { markdown } from 'markdown';

import md5 from 'md5';

export default class Question extends React.Component {
  render() {
    let html = markdown.toHTML(this.props.markdown);
    const $ = cheerio.load(html);

    let question = $("h1").text();

    let answer = [];

    $("p").each((_index, p) => {
      let innerHTML = $(p).html();
      debugger;
      answer.push((<p key={md5(innerHTML)} dangerouslySetInnerHTML={{ __html: innerHTML }} />));
    });

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
          <div className="bubble right large">{answer}</div>
          <div style={{ clear: "both" }}/>
        </div>
      </div>
    );
  }
}
