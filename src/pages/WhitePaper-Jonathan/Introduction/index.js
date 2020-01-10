import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import './style.less'
import companyCaptureWithCSO from '../../../assets/images/whitepaper/company-capture1.svg'
import companyCaptureWithoutCSO from '../../../assets/images/whitepaper/company-capture2.svg'
import MainItems from './MainItems';
import CompanyItems from './CompanyItems'

const Introduction = () => (
  <div className="whitepaper-introduction-section" id="introduction">
    <Grid container>
        <Grid.Column>
          <Header className="header">Introduction</Header>
          <div className="content">
            <p className="top-text">
                A Continuous Securities Offering (CSO) is a new, updated way for companies to raise funding. The CSO democratizes investing and modernizes it for the digital era. It expands the pool of potential investors, allowing all stakeholders — not just a small group of privileged, wealthy investors — to share in the value created by a company’s success.
             </p>
             <p className="top-text">
                Consider this: although <a>AirBnB’s 650,000 hosts</a> are critical to its success, most of the $35 billion in value created by the company will flow to a small number of investors. The CSO was designed to disrupt this model and balance the playing field.
              </p>
            <CompanyItems />
            <div class="chart_content">
                <p className="caption">Company Value Captured</p>
                <img src={companyCaptureWithCSO} />
                <span id="red">Without CSO</span>
            </div>
            <div class="chart_content">
                <p className="caption">Company Value Captured</p>
                <img src={companyCaptureWithoutCSO} />
                <span id="blue">With CSO</span>
            </div>
            <p className="top-text">
                Fairmint provides a turnkey cloud-based web application that enables companies to raise funding through a CSO with confidence and minimal effort. Using Fairmint technology, a company can easily run a CSO on its own website or app, raising capital and letting investors trade in securities backed by a portion of the company’s revenues. Fairmint’s goal is to disrupt the investment banking industry by providing companies with financing solutions that are fairer and easier to manage.
            </p>
            <p className="top-text">
            We developed the CSO model in response to widespread recognition that current investing options are inadequate. To craft a better solution, we interviewed hundreds of people at growth-oriented companies, including founders, investors, employees and marketplace suppliers (such as AirBnB hosts and Uber drivers). Our model gives each stakeholder what they want most:
            </p>

            <MainItems/>
            <p className="top-text">
                To ensure that the CSO idea and the Fairmint technology are robust, we have conducted extensive research with leading firms. Our legal work was performed by top-tier technology law firms specializing in securities law serving premium startups and emerging growth companies. To develop a sound and transparent tax and accounting framework, we have worked with a “Big Four” auditing firm. We have subjected the CSO model to comprehensive economic proofs, conducted by BlockScience, an engineering, R&D, and analytics firm specializing in complex systems. Lastly, the technology behind our solutions has been reviewed and audited extensively by Consensys Diligence, one of the most reputable auditing firms in our specialized field.
            </p>
            <p className="top-text">
            This document provides an overview of how CSOs work and how they improve on the current system of financing. 
            </p>

        </div>
    </Grid.Column>
</Grid>
</div>
)

export default Introduction
