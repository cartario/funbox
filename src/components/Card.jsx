import React, {useState, memo} from 'react';
import {checkClass, checkMouses} from '../utils';

const Card = ({product}) => {
  
  const {_id: id, info, title, type, items, mouses, weight, extra, description} = product || {};  
  const [active, setActive] = useState(false);
  const disabled = !items;  

  const handleClickActive = (e) => {
    setActive(!active);    
  };

  const getDescription = (active, disabled, type, description) => {
    if(disabled){
      return `Печалька, с ${type} закончился`
    };
    if(active){
      return description
    };
    return (<>
      Чего сидишь? Порадуй котэ,&nbsp;
          <a className="card__link" href="#" onClick={(e)=>{e.preventDefault()}}>купи</a>
    </>);
  };

  return (
    <li className={checkClass(active, disabled)} onClick={handleClickActive}>
      <svg className="card__poligon"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="326px" height="486px">
        <path fillRule="evenodd"          
          strokeWidth="4px" strokeLinecap="butt" 
          strokeLinejoin="miter" 
          fill="rgb(242, 242, 242)"
          d="M310.000,482.000 L14.000,482.000 C7.373,482.000 2.000,476.627 2.000,470.000 L2.000,45.000 L45.000,2.000 L310.000,2.000 C316.627,2.000 322.000,7.372 322.000,14.000 L322.000,470.000 C322.000,476.627 316.627,482.000 310.000,482.000 Z"
        />
      </svg>
      <div className="card__text text">          
        <p className="text__info">{info}</p>
        <h2 className="text__title">{title}</h2>
        <h3 className="text__type">с {type}</h3>
        <div className="text__options">
          <p>{items ? `${items} порций`: "нет порций"}</p>
          <p>{mouses}  {checkMouses(mouses)} в подарок</p>
          {extra&&<p>{extra}</p>}
        </div>        
      </div>
      <div className="card__img" />
      <button className="card__circle">{weight}<br/>кг</button>
      <p className="card__bottom">
        {getDescription(active, disabled, type, description)}     
      </p>            
    </li>
  );
};

export default memo(Card);
