import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import pic04 from '../assets/images/pic04.jpg'
import { Link } from 'gatsby'

class Generic extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="Generic Page Title" />
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <span className="image main">
              <img src={pic04} alt="" />
            </span>
            <h2>James Crandall</h2>
            <h3>Web Developer</h3>
            <p>
              New Age Marketing's web developer. He has a degree in Computer
              Science and has been in the field for 5 years. He is constantly
              learning the newest technologies to keep up with all the current
              best ways to tackle problems. He can build anything and everything
              in either a low-code/ no-code environment or any custom code
              websites preferably built in a MERN stack.
            </p>

            <h2>Jagger Vennemann</h2>
            <h3>Ad Account Manager</h3>

            <p>
              New Age Marketing's lead ad manager. With experience in every
              platform of online ads Jagger has proven results providing
              businesses with an increase in lead flow, customers, and revenue.
              With over 4 years of experience and a small porfolio, in the year
              of 2020 he has provided businesses with over $1.2 million in
              sales. Jagger is constantly working on new stratigies for getting
              more sales, leads, or customers for our clients.
            </p>
            <h2>Payton Holmes</h2>
            <h3>Social Media Account Manager</h3>
            <p>
              New Age Marketing's social media manager. Payton specializes in
              the organic growth and promotion of branded media accounts on all
              platforms by developing page themes, branded content, content
              distribution, page interaction, and more. She keeps your brand
              pages active and takes away the stress of not knowing if customers
              are getting interaction on your pages.
            </p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
