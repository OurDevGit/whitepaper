import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import ReactGA from 'react-ga'
import MetaTags from 'react-meta-tags'

import { Creators as globalCreators } from '../../redux/actions/global'

import { HomeHeader } from '../../components'
import GetStarted from './GetStarted'
import Footer from './Footer'
import Summary from './Summary'
import ContentList from './ContentList'
import Content from './Content'
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
              <Summary />
              <Grid container>
                <Grid.Row only="computer">
                  <Grid.Column width={11}>
                    <Content />
                  </Grid.Column>
                  <Grid.Column width={5}>
                    <ContentList />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row only="mobile">
                  <Grid.Column width={16}>
                    <MobileContentList />
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
