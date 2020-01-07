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
      icon    : 'question',
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
      content : <a href="#cso-works">How the CSO Works:</a>,
      icon    : 'question',
    },
    content: {
      content: (
        <ul>
          <li><a href="#cso-reporting">Simplified Reporting;</a></li>
          <li><a href="#aligning">Aligning the Company and Investors;</a></li>
          <li><a href="#reporting">Compatibility with Equity Investments;</a></li>
        </ul>
      ),
    },
  },
  {
    key   : 5,
    title : {
      content : <a href="#cso-lifecycle">The CSO Lifecycle</a>,
      icon    : 'question',
    },
    content: {
      content: (
        <ul>
          <li><a href="#initial-stage">Initialization Stage:</a></li>
          <li><a href="#running-stage">Running Stage:</a></li>
          <li><a href="#closing-stage">Closing Stage:</a></li>
        </ul>
      ),
    },
  },
  {
    key   : 6,
    title : {
      content : <a href="#cso-webapp">Fairmint’s CSO Web Application</a>,
      icon    : 'no-question',
    },
    content: {
      content: (
        <></>
      ),
    },
  },
  {
    key   : 7,
    title : {
      content : <a href="#tokens">Pricing and Trading Tokens</a>,
      icon    : 'question',
    },
    content: {
      content: (
        <ul>
          <li><a href="#minting-tokens">Minting Tokens;</a></li>
          <li><a href="#buying-tokens">Buying Tokens;</a></li>
          <li><a href="#selling-tokens">Selling Tokens:</a></li>
          <li><a href="#redeeming-tokens">Redeeming Tokens:</a></li>
          <li><a href="#allocating-liquidity">Allocating Liquidity:</a></li>
        </ul>
      ),
    },
  },
  {
    key   : 8,
    title : {
      content : <a href="#investor-perspective">Illustrative CSO Example from an Investor’s Perspective</a>,
      icon    : 'no-question',
    },
    content: {
      content: (
        <div></div>
      ),
    },
  },
  {
    key   : 9,
    title : {
      content : <a href="#founder-perspective">Illustrative CSO Example from a Founder’s Perspective</a>,
      icon    : 'no-question',
    },
    content: {
      content: (
        <div></div>
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
