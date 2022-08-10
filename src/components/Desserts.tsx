import React from "react";

const Desserts = () => {
  return (
    <div className="menu-container">
      <h1>Tatlılar</h1>
      <div className="menu">
        <div className="card">
          <div className="info">
            <img
              src="https://cdn.yemek.com/mncrop/940/625/uploads/2017/06/fistikli-baklava-yemekcom1.jpg"
              alt="foodImage"
            />
            <h3>Baklava (Fıstıklı)</h3>
            <h3>34.90TL</h3>
          </div>
        </div>
        <div className="card">
          <div className="info">
            <img
              src="https://cdn.yemek.com/mncrop/940/625/uploads/2021/08/kazandibi-yemekcom.jpg"
              alt="foodImage"
            />
            <h3>Kazandibi</h3>
            <h3>26.00TL</h3>
          </div>
        </div>
        <div className="card">
          <div className="info">
            <img
              src="https://cdn.yemek.com/mnresize/940/940/uploads/2020/09/pratik-tiramisu-tarifi.jpeg"
              alt="foodImage"
            />
            <h3>Tiramisu</h3>
            <h3>26.00TL</h3>
          </div>
        </div>
        <div className="card">
          <div className="info">
            <img
              src="https://cdn.yemek.com/mnresize/1250/833/uploads/2021/05/tam-kivaminda-supangle-hatice.jpg"
              alt="foodImage"
            />
            <h3>Supangle</h3>
            <h3>22.90TL</h3>
          </div>
        </div>
        <div className="card">
          <div className="info">
            <img
              src="https://cdn.yemek.com/mnresize/940/940/uploads/2015/06/kadayif-yeni-one-cikan.jpg"
              alt="foodImage"
            />
            <h3>Kadayıf</h3>
            <h3>34.90TL</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desserts;
