import React from 'react';
import Card from './components/Card';
import {products} from './mock';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <h1 className="title">Ты сегодня покормил кота?</h1>
        <ul className="cards">
          {products.length ? products.map((card)=><Card key={card._id} product={card}/>)  
          : <p className="noProducts">Продукты совсем закончились(((((</p>}    
        </ul>
        
      </div>
    </div>
  );
}

export default App;
