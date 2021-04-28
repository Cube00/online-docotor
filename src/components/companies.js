import Builder from '../images/companies/builders.png';
import Featured from '../images/companies/featured.png';
import Pozible from '../images/companies/pozible.png';
import Shortpress from '../images/companies/shortpress.png';
import Startcon from '../images/companies/startcon.png';

const CompaniesList = () => {
  return <>
    <div className="comp-logos">
      <img src={Builder} alt=""/>
      <img src={Featured} alt=""/>
      <img src={Pozible} alt=""/>
      <img src={Shortpress} alt=""/>
      <img src={Startcon} alt=""/>
    </div>
  </>
}

export default CompaniesList;
