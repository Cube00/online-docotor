import React, {useReducer} from 'react';
import {data} from '../data';
import EachItem from './eachitem';

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

const value = 'All';
const Doctors = () => {
  const [state, dispatch] = useReducer(reducer, value);
  const filtred = data.filter((e)=> e.job === state);

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
