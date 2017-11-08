import React from 'react';

import Landing from './landing';

import { Scroller, Section } from 'react-fully-scrolled';

import md5 from 'md5';

// TODO i'm sure there's some webpack config we can set to make this look like
//      a standard ES6 module
const { markdown } = require('markdown');

import _ from 'lodash';

import Question from './question';

export default class FAQ extends React.Component {
  constructor(props) {
    super(props);

    this.slides = this.slides.bind(this);
    this.loadQuestions = this.loadQuestions.bind(this);
  }

  render() {
    return (
      <Scroller>
        {this.slides()}
      </Scroller>
    );
  }

  slides() {
    return _.concat([
      (<Section key="landing"><Landing /></Section>)
    ], this.loadQuestions());
  }

  loadQuestions() {
    return _.map(globals.questionsMarkdown, (md) => {
      return (<Section key={md5(md)}><Question markdown={md} /></Section>);
    });
  }
}
