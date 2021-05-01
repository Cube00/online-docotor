import React, {useReducer} from 'react';
import {Link} from "react-router-dom";
import {data} from '../data';
import Doc from '../components/doc';

const reducer = (state,action)=> {
  switch (action.type) {
    case 'All':
      return action.payload = 'All';
    case 'Cardiologist':
      return action.payload = 'Cardiologist';
    case 'Orthopedics':
      return action.payload = 'Orthopedics';
    case 'Concology':
      return action.payload = 'Concology';
    case 'Dermatology':
      return action.payload = 'Dermatology';
    case 'Surgery':
      return action.payload = 'Surgery';
    case 'Ginecology':
      return action.payload = 'Ginecology';
    default:
      return ''
  }
}

const Search = ({docat}) => {
  const globalStor = JSON.parse(localStorage.getItem('category'));
  const [state, dispatch] = useReducer(reducer, globalStor);
  localStorage.setItem('category', JSON.stringify(state))
  const filterData = data.filter((e)=> e.job === state);

  return <>
    <div className="diff_colr">
      <div className="search_content">
        <div className="search_filter">
          <ul>
            <Link to="/">
              <button className="backtoback"></button>
            </Link>
            <h2>CATEGORY</h2>
            <li onClick={(e)=>dispatch({type: `Cardiologist`, payload: globalStor})}>
              Cardiologist
              <span className={state === 'Cardiologist' ? 'check vis' : 'check inv'}></span>
            </li>
            <li onClick={(e)=>dispatch({type: `Orthopedics`, payload: globalStor})}>Orthopedics
              <span className={state === 'Orthopedics' ? 'check vis' : 'check inv'}></span>
            </li>
            <li onClick={(e)=>dispatch({type: `Concology`, payload: globalStor})}>Concology
              <span className={state === 'Concology' ? 'check vis' : 'check inv'}></span>
            </li>
            <li onClick={(e)=>dispatch({type: `Dermatology`, payload: globalStor})}>Dermatology
              <span className={state === 'Dermatology' ? 'check vis' : 'check inv'}></span>
            </li>
            <li onClick={(e)=>dispatch({type: `Surgery`, payload: globalStor})}>Surgery
              <span className={state === 'Surgery' ? 'check vis' : 'check inv'}></span>
            </li>
            <li onClick={(e)=>dispatch({type: `Ginecology`, payload: globalStor})}>Ginecology
              <span className={state === 'Ginecology' ? 'check vis' : 'check inv'}></span>
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
