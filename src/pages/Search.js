import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {data} from '../data';
import Doc from '../components/doc';

const Search = ({docat}) => {
  const globalStor = JSON.parse(localStorage.getItem('category'));
  const [statement, setStatement] = useState(globalStor);
  localStorage.setItem('category', JSON.stringify(statement))
  const filterData = data.filter((e)=> e.job === statement);

  return <>
    <div className="diff_colr">
      <div className="search_content">
        <div className="search_filter">
          <ul>
            <Link to="/">
              <button className="backtoback"></button>
            </Link>
            <h2>CATEGORY</h2>
            <li onClick={()=>setStatement('Cardiologist')}>
              Cardiologist
              <span className={globalStor === 'Cardiologist' ? 'check vis' : 'check inv'}></span>
            </li>
            <li onClick={()=>setStatement('Orthopedics')}>Orthopedics
              <span className={globalStor === 'Orthopedics' ? 'check vis' : 'check inv'}></span>
            </li>
            <li onClick={()=>setStatement('Concology')}>Concology
              <span className={globalStor === 'Concology' ? 'check vis' : 'check inv'}></span>
            </li>
            <li onClick={()=>setStatement('Dermatology')}>Dermatology
              <span className={globalStor === 'Dermatology' ? 'check vis' : 'check inv'}></span>
            </li>
            <li onClick={()=>setStatement('Surgery')}>Surgery
              <span className={globalStor === 'Surgery' ? 'check vis' : 'check inv'}></span>
            </li>
            <li onClick={()=>setStatement('Gyncology')}>Gyncology
              <span className={globalStor === 'Gyncology' ? 'check vis' : 'check inv'}></span>
            </li>
          </ul>
        </div>
        <div className="filtred_content">
          {filterData.map((docSearchResult)=>{
            return <Doc docSearchResult={docSearchResult} key={docSearchResult.id}/>
          })}
        </div>
      </div>
    </div>
  </>
}

export default Search;
