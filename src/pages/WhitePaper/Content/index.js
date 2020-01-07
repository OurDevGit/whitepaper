import React from 'react'
import { Header } from 'semantic-ui-react'

import { InfoIcon } from '../../../assets/icons'

import './style.less'

const Content = () => (
  <div className="main-content">
    <div className="sub-content" id="introduction">
      <Header>Introduction</Header>
      <div className="desc">
        <p>
          A Continuous Securities Offering (CSO) is a new, updated way for companies to raise funding. The CSO democratizes investing and modernizes it for the digital era. It expands the pool of potential investors, allowing all stakeholders — not just a small group of privileged, wealthy investors — to share in the value created by a company’s success.
        </p>
        <p>
          Consider this: although <a>AirBnB’s 650,000 hosts</a> are critical to its success, most of the $35 billion in value created by the company will flow to a small number of investors. The CSO was designed to disrupt this model and balance the playing field.
          <div className="info-icon-wrapper">
            <InfoIcon className="info-icon" />
            <div className="arrow-box bottom-arrow-box">
              Certain jurisdictions' laws may limit the transactions or functions described in this paper. This paper presents an ideal scenario, assuming a jurisdiction that allows for best-case execution of the CSO and Fairmint’s technology.
            </div>
          </div>
        </p>
        <p>
          Fairmint provides a turnkey cloud-based web application that enables companies to raise funding through a CSO with confidence and minimal effort. Using Fairmint technology, a company can easily run a CSO on its own website or app, raising capital and letting investors trade in securities backed by a portion of the company’s revenues. Fairmint’s goal is to disrupt the investment banking industry by providing companies with financing solutions that are fairer and easier to manage.
          <div className="info-icon-wrapper">
            <InfoIcon className="info-icon" />
            <div className="arrow-box bottom-arrow-box">
              Certain jurisdictions' laws may limit the transactions or functions described in this paper. This paper presents an ideal scenario, assuming a jurisdiction that allows for best-case execution of the CSO and Fairmint’s technology.
            </div>
          </div>
        </p>
        <p>
         We developed the CSO model in response to widespread recognition that current investing options are inadequate. To craft a better solution, we interviewed hundreds of people at growth-oriented companies, including founders, investors, employees and marketplace suppliers (such as AirBnB hosts and Uber drivers). Our model gives each stakeholder what they want most:
        </p>
        <p>
          <ul>
            <li>Founders get financing without sacrificing ownership of the company. They also get a vehicle to align the company’s wellbeing with their stakeholders and customers;</li>
            <li>Investors get liquidity, so that they can buy and sell whenever they want within the boundaries set by securities law in the applicable jurisdictions;</li>
            <li>Stakeholders — such as employees and platform users — get access to a security that lets them participate financially in the company’s growth.</li>
          </ul>
        </p>
        <p />
      </div>
    </div>
  </div>
)

export default Content
