import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {AiOutlineComment} from 'react-icons/ai';
import ImageDocs from '../images/docs.jpg';

const About = () => {
  return <>
  <div className="diff_colr">
    <section className="about_page">
      <div className="doc-bout">
        <div className="doc-half-1">
          <p>Easily book a doctor anywhere in the world with ala.doc and using
          our mobile app for progreess tracking and making your life easier
          with ala app.</p>
          <h4>Want to know more about us? <Link to="/contact">Contact us</Link></h4>
        </div>
        <div className="doc-half-2">
          <img src={ImageDocs} alt=""/>
        </div>
      </div>
      <div className="flexible">
        <div className="about_us_text">
          <div className="cm-b">
            <span>
              <AiOutlineComment className="com-about" />
            </span>
          </div>
          <p>
          Since 2013 we strive to be the leading company in the
          medical industry delivering quality services at reasonable
          price.
          </p>
          <div className='bspan'>Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the release
          of Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including versions
          of Lorem Ipsum.</div>
        </div>
        <div className="our-team">
          <h3>We have served many patients</h3>
          <h2>We Are 100 now</h2>
        </div>
      </div>
    </section>

  </div>
  </>
}

export default About;
