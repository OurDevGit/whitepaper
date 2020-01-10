import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid, Divider } from 'semantic-ui-react'
import { connect } from 'react-redux'
import ReactGA from 'react-ga'
import MetaTags from 'react-meta-tags'

import { Creators as globalCreators } from '../../redux/actions/global'

import { HomeHeader } from '../../components'
import GetStarted from './GetStarted'
import Footer from './Footer';
import Summary from './Summary'
import Equity from './Equity';
import HowItWorks from './HowItWorks';
import Lifecycle from './Lifecycle';
import Tokens from './Tokens';
import Intoruduction from './Introduction';
import ContentList from './ContentList'
import MobileContentList from './MobileContentList'
import './style.less'


class WhitePaper extends Component {
  showFinancingClicked = () => {
    const { showGetFinancingModal } = this.props
    showGetFinancingModal(true)

    ReactGA.modalview('/founders/apply')
  }

  render() {
    return (
      <>
        <MetaTags>
          <title>Fairmint WhitePaper</title>
        </MetaTags>
        <HomeHeader />
        <Grid className="pages page-whitepaper">
          <Grid.Row>
            <Grid.Column width={16}>
              <GetStarted getFinancingClicked={this.showFinancingClicked} />
              <Grid columns={2} container divided>
                <Grid.Row only="computer">
                  <Grid.Column width={11}>
                    <Summary />
                    <Intoruduction/>
                    <Equity/>
                    <HowItWorks/>
                    <Lifecycle/>
                    {/* <Tokens/> */}
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <ContentList />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row only="mobile tablet">
                  <Grid.Column width={16}>
                      <ContentList />
                  </Grid.Column>
                  <Grid.Column width={16}>
                    <Summary />
                    <Intoruduction/>
                    <Equity/>
                    <HowItWorks/>
                    <Lifecycle/>
                    <Tokens/>
                  </Grid.Column>
                </Grid.Row>
              </Grid>

              
              <Footer />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    )
  }
}

const mapStateToProps = store => ({
  global: store.global,
})

const mapDispatchToProps = {
  ...globalCreators
}

WhitePaper.propTypes = {
  global                : PropTypes.object,
  showGetFinancingModal : PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(WhitePaper)
