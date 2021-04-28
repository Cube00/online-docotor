import React, {useState} from 'react';
import {FaStethoscope} from 'react-icons/fa';
import {AiTwotoneStar} from 'react-icons/ai';

const SearchDoc = () => {
  const [docat, setDocat] = useState('Cardiologist');
  const [blockApp, setBlockApp] = useState(false);

  const docatFunc = () =>{
    if(blockApp === false){
      setBlockApp(true)
    }else{
      setBlockApp(false)
    }
  }

  const setDoc = (e) => {
    setDocat(e.target.textContent);
    setBlockApp(false);
  }

  return <>
    <div className="searchForm">
      <div className="docChange">
        <div className="choose-doc" onClick={()=> docatFunc()}>
        <FaStethoscope className="phonescope" />
        <span>{docat}</span>
        </div>
        <div className="btn-searchdoc">Search Doctor</div>
        <div className={blockApp ? 'docat visible' : 'docat invisible' }>
        <ul>
        <li onClick={(e)=>{setDoc(e)}}>Cardiologist</li>
        <li onClick={(e)=>{setDoc(e)}}>Orhopedics</li>
        <li onClick={(e)=>{setDoc(e)}}>Concology</li>
        <li onClick={(e)=>{setDoc(e)}}>Dermatology</li>
        <li onClick={(e)=>{setDoc(e)}}>Surgery</li>
        <li onClick={(e)=>{setDoc(e)}}>Gyncology</li>
        </ul>
        </div>
      </div>
      <div className="rateDoc">
        <AiTwotoneStar className="star-doc" />
        <AiTwotoneStar className="star-doc" />
        <AiTwotoneStar className="star-doc" />
        <AiTwotoneStar className="star-doc" />
        <AiTwotoneStar className="star-doc" />
        <span>Five Star Ratings on</span>
      </div>
    </div>
  </>
}

export default SearchDoc;
