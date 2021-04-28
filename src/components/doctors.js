import React, {useState, useReducer} from 'react';
import {data} from '../data';
import EachItem from './eachitem';

const reducer = (state,action)=> {
  if(action.type==='All'){
    return action.payload = 'All';
  }else if(action.type === 'Cardiologist'){
    return action.payload = 'Cardiologist';
  }else if(action.type === 'Orthopedics'){
    return action.payload = 'Orthopedics';
  }else if(action.type === 'Concology'){
    return action.payload = 'Concology';
  }else if(action.type === 'Dermatology'){
    return action.payload = 'Dermatology';
  }else if(action.type === 'Surgery'){
    return action.payload = 'Surgery';
  }else if(action.type === 'Ginecology'){
    return action.payload = 'Ginecology';
  }
}

const value = 'All';
const Doctors = () => {
  const [state, dispatch] = useReducer(reducer, value);
  const filtred = data.filter((e)=> e.job === state);
  console.log(filtred);
  return <>
    <div className="cont-filt">
      <div className="filter-specialty">
        <ul>
          <li
            className={state === 'All' ? 'choosed': 'default'}
            onClick={(e)=>dispatch({type: `All`, payload: value})}>
            All
          </li>
          <li
            className={state === 'Cardiologist' ? 'choosed': 'default'}
            onClick={(e)=>dispatch({type: `Cardiologist`, payload: value})}>
            Cardiologist
          </li>
          <li
            className={state === 'Orthopedics' ? 'choosed': 'default'}
            onClick={(e)=>dispatch({type: `Orthopedics`, payload: value})}>
            Orthopedics
          </li>
          <li
            className={state === 'Concology' ? 'choosed': 'default'}
            onClick={(e)=>dispatch({type: `Concology`, payload: value})}>
            Concology
          </li>
          <li
            className={state === 'Dermatology' ? 'choosed': 'default'}
            onClick={(e)=>dispatch({type: `Dermatology`, payload: value})}>
            Dermatology
          </li>
          <li
            className={state === 'Surgery' ? 'choosed': 'default'}
            onClick={(e)=>dispatch({type: `Surgery`, payload: value})}>
            Surgery
          </li>
          <li
            className={state === 'Ginecology' ? 'choosed': 'default'}
            onClick={(e)=>dispatch({type: `Ginecology`, payload: value})}>
            Ginecology
          </li>
        </ul>
      </div>
      <div className="fetchingData">
        {state === 'All' && data.map((item)=>{
            return <EachItem key={item.id} item={item} />
        })}
        {state !== 'All' && filtred.map((item)=>{
            return <EachItem key={item.id} item={item} />
        })}
      </div>
    </div>
  </>
}

export default Doctors;
