import {AiTwotoneStar} from 'react-icons/ai';
import {AiOutlineCalendar} from 'react-icons/ai';
import {FaPhoneAlt} from 'react-icons/fa';

const Doc = ({docSearchResult}) =>{
  const {name, num, job, image, rating} = docSearchResult;
  return <>
    <div className="doctor">
      <div className="rating">
        <AiTwotoneStar className="star-doc"/>
        <span>{rating}</span>
      </div>
      <div className="doctor-image">
        <img src={image} alt=""/>
      </div>
      <h2>{name}</h2>
      <h4>{num}</h4>
      <div className="job">{job}</div>
      <div className="booking">
        <span><AiOutlineCalendar className="mg c"/> Availability</span>
        <span><FaPhoneAlt className="mg"/> Book Now</span>
      </div>
    </div>
  </>
}

export default Doc;
