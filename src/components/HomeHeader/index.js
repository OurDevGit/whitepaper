/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react'
import { Menu, Grid, Image, Button } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

import QuestionSVG from '-!svg-react-loader!../../assets/images/question.svg'
import logoPng from '../../assets/images/logo_colored.png'
import mobileMenuPng from '../../assets/images/mobile-menu.png'
import mobileCloseMenuPng from '../../assets/images/cross.png'
import { PaperPlaneIcon, StarIcon } from '../../assets/icons'
import './header.less'

const style = {
  noPaddingStyle: {
    padding: 0,
  },
}

class HomeHeader extends React.Component {
  state = {
    mobileMenuOpen: false,
  }

  openMobileMenu = (status) => {
    this.setState({ mobileMenuOpen: status })
  }

  openContactUsModal = () => {
    window.Intercom('showNewMessage')
  }

  render() {
    const { mobileMenuOpen } = this.state
    return (
      <div className="home-header">
        <Grid container>
          <Grid.Row only="computer">
            <Grid.Column>
              <Menu borderless className="desktop-menu-style">
                <NavLink to="/"><Image src={logoPng} className="logo" /></NavLink>
                <Menu.Item position="right" style={style.noPaddingStyle}>
                  <Menu.Item as={NavLink} to="/founders">
                    <StarIcon className="star-icon" />
                    Founders space
                  </Menu.Item>
                  <Menu.Item onClick={this.openContactUsModal}>
                    <PaperPlaneIcon className="paper-plane-icon" />
                    Contact us
                  </Menu.Item>
                  <Button
                    as="a"
                    href="https://preview.fairmint.co/signin"
                    primary
                    basic
                    className="investBtnStyle login-btn"
                  >
                    Log in
                  </Button>
                  <Button
                    as="a"
                    href="https://preview.fairmint.co/signup"
                    primary
                    className="investBtnStyle"
                  >
                    Invest now
                  </Button>
                </Menu.Item>
              </Menu>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only="mobile tablet" className={mobileMenuOpen ? 'mobile-navbar open' : 'mobile-navbar'}>
            <Grid.Column width={16}>
              <Menu borderless className="mobile-navmenu">
                <Menu.Item header as={NavLink} to="/">
                  <Image src={logoPng} style={{ width: 130 }} />
                </Menu.Item>
                <Menu.Item position="right" style={style.noPaddingStyle}>
                  <Menu.Item onClick={() => this.openMobileMenu(!mobileMenuOpen)}>
                    {!mobileMenuOpen && <Image src={mobileMenuPng} style={{ width: 36 }} />}
                    {mobileMenuOpen && <Image src={mobileCloseMenuPng} style={{ width: 36 }} />}
                  </Menu.Item>
                </Menu.Item>
              </Menu>
            </Grid.Column>
            {mobileMenuOpen
              && (
                <Grid.Column width={16} onClick={() => this.openMobileMenu(false)}>
                  <Menu borderless vertical>
                    <Menu.Item style={style.noPaddingStyle}>
                      <Menu.Item as={NavLink} to="/founders">
                        <StarIcon className="star-icon" />
                        Founders space
                      </Menu.Item>
                      <Menu.Item as="a" onClick={this.openContactUsModal}>
                        <PaperPlaneIcon className="paper-plane-icon" />
                        Contact us
                      </Menu.Item>
                      <Menu.Item as="a" href="http://help.fairmint.co/en" target="_blank">
                        <QuestionSVG className="verticalMenuItemSvgStyle" />
                        Help
                      </Menu.Item>
                    </Menu.Item>
                    <Grid.Column width={16}>
                      <Button
                        as="a"
                        href="https://preview.fairmint.co/signin"
                        primary
                        basic
                        className="login-btn"
                      >
                        Log in
                      </Button>
                    </Grid.Column>
                    <Grid.Column width={16}>
                      <Button
                        as="a"
                        href="https://preview.fairmint.co/signup"
                        primary
                        className="invest-btn"
                      >
                        Invest now
                      </Button>
                    </Grid.Column>
                  </Menu>
                </Grid.Column>
              )}
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default HomeHeader
