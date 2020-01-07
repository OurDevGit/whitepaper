import React from 'react'
import { Grid, Header } from 'semantic-ui-react'

import './style.less'

const Summary = () => (
  <div className="summary-section" id="summary">
    <Grid container>
      <Grid.Row>
        <Grid.Column>
          <Header>Summary</Header>
          <div className="content">
            <p>A Continuous Securities Offering (CSO) is a new investment vehicle, updated for the digital era. The CSO enables companies with growth potential to raise funding by selling a claim on a reserve, funded primarily by a fixed portionprimarily by a fixed portion of revenues. The CSO offers several advantages over traditional financing:
              <ul>
                <li>Company owners get financing while retaining their ownership stake;</li>
                <li>Investors get better liquidity;</li>
                <li>Stakeholders get a way to participate in the company’s financial success.</li>
              </ul>
            </p>
            <p>
              Fairmint offers a turnkey solution that streamlines companies’ ability to launch and manage their own CSO. This document explains the market shortcomings that the CSO solves and  provides an overview of how a CSO works, including the lifecycle and parameters for trading.
            </p>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
)

export default Summary
