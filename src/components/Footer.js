import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>New Age Marketing</h2>
      <p>
        We take whatever you dream of and provide proven results to get the
        revenue, clients, leads, followers, or growth that you want.
      </p>
      <ul className="actions">
        <li>
          <Link to="/generic" className="button">
            Learn More
          </Link>
        </li>
      </ul>
    </section>
    <section>
      <h2>Contact Us</h2>
      <dl className="alt">
        <dt>Address</dt>
        <dd>1201 Dunes Street &bull; Fredericksburg, VA 22401 &bull; USA</dd>
        <dt>Phone</dt>
        <dd>(540) 455-5837</dd>
        <dt>Email</dt>
        <dd>
          <a href="mailto:contact@newagemarketing.io">
            contact@newagemarketing.io
          </a>
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/huntaroSan"
            className="icon fa-twitter alt"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://codebushi.com" className="icon fa-facebook alt">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://codebushi.com" className="icon fa-instagram alt">
            <span className="label">Instagram</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">
      &copy;<span>New Age Marketing</span>.
    </p>
  </footer>
)

export default Footer
