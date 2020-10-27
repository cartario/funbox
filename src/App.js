const Card = () => {
  return (
    <li className="card">
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
        <p className="text__info">Сказочное заморское явство</p>
        <h2 className="text__title">Нямушка</h2>
        <h3 className="text__type">с фуа-гра</h3>
        <div className="text__options">
          <p>12 порций</p>
          <p>мышь в подарок</p>
        </div>        
      </div>
      <div className="card__img"></div>
      <button className="card__circle">0,5<br/>кг</button>
      <p className="card__bottom">
        Чего сидишь? Порадуй котэ,&nbsp;  
        <a className="card__link" href="#" onClick={(e)=>{e.preventDefault()}}>купи</a>        
      </p>            
    </li>
  );
}

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <h1 className="title">Ты сегодня покормил кота?</h1>
        <ul className="cards">
          <Card />
          <Card />
          <Card />        
        </ul>
        
      </div>
    </div>
  );
}

export default App;
