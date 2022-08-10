import React from "react";

const Salads = () => {
  return (
    <div className="menu-container">
      <h1>Salatalar</h1>
      <div className="menu">
        <div className="card">
          <div className="info">
            <img
              src="https://cdn.yemek.com/mnresize/940/940/uploads/2021/07/coban-salata-one-cikan.jpg"
              alt="foodImage"
            />
            <h3>Çoban Salata</h3>
            <h3>24.90TL</h3>
          </div>
        </div>
        <div className="card">
          <div className="info">
            <img
              src="https://cdn.yemek.com/mnresize/940/940/uploads/2017/10/karisik-piyaz-tarifi.jpg"
              alt="foodImage"
            />
            <h3>Karışık Piyaz</h3>
            <h3>20.90TL</h3>
          </div>
        </div>
        <div className="card">
          <div className="info">
            <img
              src="https://cdn.yemek.com/mnresize/940/940/uploads/2018/08/dereotlu-cevizli-salata.jpg"
              alt="foodImage"
            />
            <h3>Dereotlu Cevizli Salata</h3>
            <h3>24.90TL</h3>
          </div>
        </div>
        <div className="card">
          <div className="info">
            <img
              src="https://img-s1.onedio.com/id-61fa43ded6c2da47602d5f09/rev-0/w-620/f-jpg/s-c686f47f7a0dd71cdb4907a30edfd1a755bd4766.jpg"
              alt="foodImage"
            />
            <h3>Tavuklu Salata</h3>
            <h3>28.90TL</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Salads;
