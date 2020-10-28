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
        <Helmet title="Gatsby Starter - Stellar" />

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
                  New Age Marketing is a fast growing company of experience ad
                  managers, lead form creators, content managers, web
                  developers, and more. With a team of three doing $1.2 million
                  for out clients we take your ideas and dreams and turn them
                  into a reality.
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
                <strong>45k</strong> Weekly Ad Spend
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
              New Age Marketing currently has 10 clients they manage with an
              average ad spend of 45k a week through 3 team memembers.
              askjdfhalksjdfhajklsdhfkajlsdhfiuqwhefiasjkdhflkajsdhfkjlasdfNew
              Age Marketing currently has 10 clients they manage with an average
              ad spend of 45k a week through 3 team memembers.
              askjdfhalksjdfhajklsdhfkajlsdhfiuqwhefiasjkdhflkajsdhfkjlasdfNew
              Age Marketing currently has 10 clients they manage with an average
              ad spend of 45k a week through 3 team memembers.
              askjdfhalksjdfhajklsdhfkajlsdhfiuqwhefiasjkdhflkajsdhfkjlasdfNew
              Age Marketing currently has 10 clients they manage with an average
              ad spend of 45k a week through 3 team memembers.
              askjdfhalksjdfhajklsdhfkajlsdhfiuqwhefiasjkdhflkajsdhfkjlasdfNew
              Age Marketing currently has 10 clients they manage with an average
              ad spend of 45k a week through 3 team memembers.
              askjdfhalksjdfhajklsdhfkajlsdhfiuqwhefiasjkdhflkajsdhfkjlasdf
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
