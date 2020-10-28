import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/pic01.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="New Age Marketing" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Who We Are</h2>
                </header>
                <p>
                  New Age Marketing is a fast growing agency of experience ad
                  managers, lead form creators, content managers, web
                  developers, and more. With a team of three doing $1.2 million
                  for our clients already we take your business and scale it
                  online.
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/who" className="button">
                      Learn About The Team
                    </Link>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={pic01} alt="" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>What We Do</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-line-chart"></span>
                <h3>Multiplatform Ads</h3>
                <p>
                  Paid ads is an easy way to get sales, leads and clients. We
                  have experts that can get a stratigic plan together and run
                  through details to show you how much you are missing out by
                  not running paid ads for you business.
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-instagram"></span>
                <h3>Social Media Growth</h3>
                <p>
                  New Age Marketing has grown accounts ogranically over mulitple
                  platforms. Currently managing accounts totatling over 650k
                  followers we constantly engage followers and view trends in
                  getting constant growth.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-send-o"></span>
                <h3>Lead Generation</h3>
                <p>
                  If your business is not getting leads, we have the perfect
                  solution for you. Our team builds high converting landing
                  pages for any type of business. Currently we average at a
                  conversion rate of over 8% for all lead generation pages we
                  have built.
                </p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Our Results</h2>
              <p>
                With our stratigic plans we have proven we can take businesses
                to the next level.
                <br />
                Our current and constantly updating results are as shown.
              </p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-money"></span>
                <strong>1.2M</strong> Client Revenue
              </li>
              <li className="style2">
                <span className="icon fa-users"></span>
                <strong>10</strong> Current Happy Clients
              </li>
              <li className="style3">
                <span className="icon fa-signal"></span>
                <strong>45k</strong> Monthly Ad Spend
              </li>
              <li className="style4">
                <span className="icon fa-laptop"></span>
                <strong>3</strong> Team Members
              </li>
              <li className="style5">
                <span className="icon fa-diamond"></span>
                <strong>650k</strong> Followers Gained
              </li>
            </ul>
            <p className="content">
              As an Agency we've generated over $1.2M in client revenue managing
              over $45k a week in ad spend. Throughout this process we've seen
              and studied first hand a mass amount of data between all major
              marketing platforms and a range of different industries giving us
              insight to exactly what it takes for highly successful campaigns.
              Bringing on a digital marketing agency to handle the online
              success of your business can sometimes be scary without knowing if
              they will actually be able generate results for your business. Our
              goal at New Age Marketing is to create a stress free relationship
              between us and our clients by providing real results we've a
              accomplished and bringing tangable results to their business!
            </p>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Contact Us For a Free Consultaion</h2>
              <p>
                Schedule a free Consultaion with one of our experts today!
                <br />
                Get a stratigic plan to grow your business!
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button special">
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
