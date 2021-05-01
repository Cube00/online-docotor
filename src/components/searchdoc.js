import React, {useState} from 'react';
import {Link} from "react-router-dom";
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

  const setSearch = () => {
    localStorage.setItem('category', JSON.stringify(docat));
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
        <Link to="/search">
          <button onClick={()=>setSearch()} className="btn-searchdoc">Search Doctor</button>
        </Link>
        <div className={blockApp ? 'docat visible' : 'docat invisible' }>
        <ul>
        <li onClick={(e)=>{setDoc(e)}}>Cardiologist</li>
        <li onClick={(e)=>{setDoc(e)}}>Orhopedics</li>
        <li onClick={(e)=>{setDoc(e)}}>Concology</li>
        <li onClick={(e)=>{setDoc(e)}}>Dermatology</li>
        <li onClick={(e)=>{setDoc(e)}}>Surgery</li>
        <li onClick={(e)=>{setDoc(e)}}>Ginecology</li>
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
