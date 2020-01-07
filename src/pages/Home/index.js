import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import MetaTags from 'react-meta-tags'

import { HomeHeader, OurPartners, Quotes } from '../../components'
import Intro from './Intro'
import TrustedBy from './TrustedBy'
import Footer from './Footer'
import SupportCarousel from  './SupportCarousel'
import Impact from './Impact'
import VirtuousCircle from './VirtuousCircle'
import './style.less'

import SlidesJSON from './data/slides.json'

class Home extends Component {
  state = {}

  render() {
    return (
      <>
        <MetaTags>
          <title>Fairmint - The Continuous Securities Offerings Platform</title>
        </MetaTags>
        <HomeHeader />
        <Grid className="pages page-index">
          <Grid.Row>
            <Grid.Column width={16}>
              <Intro />
              <TrustedBy />
              <SupportCarousel />
              <Quotes quotes={SlidesJSON.quotes} />
              <VirtuousCircle />
              <Impact />
              <OurPartners />
              <Footer />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    )
  }
}

export default Home
