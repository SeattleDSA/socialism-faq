import React from 'react';

import cheerio from 'cheerio';

import { markdown } from 'markdown';

import _ from 'lodash';

export default class Question extends React.Component {
  render() {
    const $ = cheerio.load(markdown.toHTML(this.props.markdown));

    let question = $("h1").text();
    let answer = $("p").text();

    return (
      <div className="question">
        <div className="contents">
          <div className="bubble left" dangerouslySetInnerHTML={{ __html: `<strong>${question}</strong>` }} />
          <div className="bubble right large" dangerouslySetInnerHTML={{ __html: answer }}/>
          <Paginator currentPage={this.props.currentPage} totalPages={this.props.totalPages} />
          <div style={{ clear: "both" }}/>
        </div>
      </div>
    );
  }
}

class Paginator extends React.Component {
  constructor(props) {
    super(props);

    this.renderDots = this.renderDots.bind(this);
  }

  render() {
    return (
      <div className="paginator">
        {this.renderDots()}
      </div>
    );
  }

  renderDots() {
    return _.times(this.props.totalPages - 1, (i) => {
      let dotClass;

      if(i > this.props.currentPage) {
        dotClass = "fa-circle-o";
      } else {
        dotClass = "fa-circle";
      }

      return (
        <i className={`fa ${dotClass}`} key={`dot-${i}`} />
      );
    });
  }
}
