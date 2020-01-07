/* eslint-disable react/display-name */
import React from 'react'
import { Accordion, Header } from 'semantic-ui-react'

import './style.less'


const panels = [
  {
    key   : 1,
    title : {
      content : <a href="#summary">Summary</a>,
      icon    : 'no-question',
    },
    content: {
      content: (
        <></>
      ),
    },
  },
  {
    key   : 2,
    title : {
      content : <a href="#introduction">Introduction</a>,
      icon    : 'no-question',
    },
    content: {
      content: (
        <></>
      ),
    },
  },
  {
    key   : 3,
    title : {
      content : <a href="#solving">Solving the Equity Inequity</a>,
      icon    : 'no-question',
    },
    content: {
      content: (
        <></>
      ),
    },
  },
  {
    key   : 4,
    title : {
      content : <a href="#introduction">How the CSO Works:</a>,
      icon    : 'question',
    },
    content: {
      content: (
        <ul>
          <li><a href="#introduction">Simplified Reporting;</a></li>
          <li><a href="#introduction">Aligning the Company and Investors;</a></li>
          <li><a href="#introduction">Compatibility with Equity Investments;</a></li>
        </ul>
      ),
    },
  },
]

const ContentList = () => (
  <div className="content-list">
    <Header>Contents</Header>
    <Accordion defaultActiveIndex={0} panels={panels} />
  </div>
)

export default ContentList
