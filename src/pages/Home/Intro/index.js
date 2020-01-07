import React from 'react'
import { Header, Button, Image } from 'semantic-ui-react'

import {
  HomeIntroFg,
  BlueCirclePng,
  ArrowsFramePng,
  DoubleCirclePng,
  QuaterRoundVectorPng
} from '../../../assets/images/homepage'
import './style.less'

const Intro = () => (
  <section className="intro-section">
    <div className="container">
      <Header className="title">Reimagining going public with Continuous Securities Offerings</Header>
      <div className="desc">
        Fairmint allows private companies to get financing globally, continuously and compliantly with a simple "Invest now" button. You can invest in Fairmint right now and support this movement.
      </div>
      <div className="btns-container">
        <a href="https://preview.fairmint.co/signup">
          <Button
            primary
            className="invest-btn"
          >
            Invest now
          </Button>
        </a>
        <Button as="a" href="#learn-more" primary basic className="learn-more-btn">
          Learn more
        </Button>
      </div>
      <Image className="intro-fg" src={HomeIntroFg} />
      <>
        <Image className="arrows-frame-png" src={ArrowsFramePng} />
        <Image className="half-circle-vector" src={BlueCirclePng} />
        <Image className="quater-round-vector-png" src={QuaterRoundVectorPng} />
        <Image className="quater-double-round-vector-png" src={DoubleCirclePng} />
      </>
    </div>
  </section>
)

export default Intro
