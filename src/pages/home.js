import Header from '../components/header';
import Image from '../images/docimage.png';
import SearchDoc from '../components/searchdoc';
import CompaniesList from '../components/companies';
import Doctors from '../components/doctors';

const Home = () => {
  return <>
    <section className="header-section">
      <Header />
      <div className="header-wrapper" style={{padding:'0px'}}>
        <div className="find-doctor">
          <h2>Find a doctor and book online</h2>
          <span className="fn-d-pr">Easily book a doctor anywhere in the world with ala.doc</span>
          <SearchDoc />
        </div>
        <img className="doc-image" src={Image} alt=""/>
      </div>
    </section>
    <section className="friend-companies">
      <div className="comp-wrap">
        <CompaniesList />
      </div>
    </section>
    <section className="browse-doctors">
      <div className="browse-blocks">
        <div className="browse-heading">
          <h2>Browse Doctors</h2>
          <span>Easily book a doctor anywhere in the world with ala.doc</span>
        </div>
        <div className="browse-info-pat">
          <h2>We have served many patients</h2>
          <span>1758+ patients</span>
        </div>
      </div>
    </section>
    <div className="diff_colr">
      <Doctors />
    </div>
  </>
}

export default Home;
