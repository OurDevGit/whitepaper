import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Header, Button, Image } from 'semantic-ui-react'

import { InfoIcon } from '../../../assets/icons'
import GetStartedBg from '../../../assets/images/whitepaper/intro.png'
import './style.less'

const GetStarted = ({ getFinancingClicked }) => (
  <div className="whitepaper-get-started-card">
    <Grid container>
      <Grid.Row>
        <div className="left">
          <Header>Introducing the Continuous Securities Offering </Header>
          <div className="desc">
            Financing for the Digital Era
            <div className="info-icon-wrapper">
              <InfoIcon className="info-icon" />
              <div className="arrow-box left-arrow-box">
                Certain jurisdictions' laws may limit the transactions or functions described in this paper. This paper presents an ideal scenario, assuming a jurisdiction that allows for best-case execution of the CSO and Fairmint’s technology.
              </div>
            </div>
          </div>
          <Button basic className="get-started-btn" primary onClick={getFinancingClicked}>PDF coming soon</Button>
        </div>
        <div
          className="right"
        >
          <Image src={GetStartedBg} />
        </div>
      </Grid.Row>
    </Grid>
  </div>
)

GetStarted.propTypes = {
  getFinancingClicked: PropTypes.func
}

export default GetStarted
