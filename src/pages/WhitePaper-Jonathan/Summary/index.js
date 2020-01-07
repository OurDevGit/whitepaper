import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import MainItems from './MainItem/';
import './style.less'

const Summary = () => (
  <div className="whitepaper-summary-section" id="summary">
    <Grid container>
        <Grid.Column>
          <Header className="header">Summary</Header>
          <div className="content">
            <p className="top-text">
              A Continuous Securities Offering (CSO) is a new investment vehicle, updated for the digital era. The CSO enables companies with growth potential to raise funding by selling a claim on a reserve, funded primarily by a fixed portion of revenues. The CSO offers several advantages over traditional financing:
              </p>
            <MainItems/>
            <p className="bottom-text">
            Fairmint offers a turnkey solution that streamlines companies’ ability to launch and manage their own CSO. This document explains the market shortcomings that the CSO solves and  provides an overview of how a CSO works, including the lifecycle and parameters for trading.
            </p>
          </div>
        </Grid.Column>
    </Grid>
  </div>
)

export default Summary
