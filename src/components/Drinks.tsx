import React from "react";

const Drinks = () => {
  return (
    <div className="menu-container">
      <h1>İçecekler</h1>
      <div className="menu">
        <div className="card">
          <div className="info">
            <img
              src="https://i2.gazetevatan.com/i/gazetevatan/75/0x0/627b6729a3705a2644753a1e.jpg"
              alt="foodImage"
            />
            <h3>Kola</h3>
            <h3>15.90TL</h3>
          </div>
        </div>
        <div className="card">
          <div className="info">
            <img
              src="https://cdn.yemek.com/mncrop/940/625/uploads/2021/08/feslegenli-taze-naneli-ayran-yemekcom.jpg"
              alt="foodImage"
            />
            <h3>Ayran</h3>
            <h3>11.90TL</h3>
          </div>
        </div>
        <div className="card">
          <div className="info">
            <img
              src="https://cdn.yemek.com/mncrop/940/625/uploads/2018/10/salgam-suyu-faydalari-1.jpg"
              alt="foodImage"
            />
            <h3>Şalgam</h3>
            <h3>11.90TL</h3>
          </div>
        </div>
        <div className="card">
          <div className="info">
            <img
              src="https://cdn.yemek.com/mnresize/940/940/uploads/2014/08/ev-yapimi-limonata-yemekcom.jpg"
              alt="foodImage"
            />
            <h3>Limonata</h3>
            <h3>13.90TL</h3>
          </div>
        </div>
        <div className="card">
          <div className="info">
            <img
              src="https://cdn.yemek.com/mncrop/940/625/uploads/2015/04/turkiyede-cay-kulturu22.jpg"
              alt="foodImage"
            />
            <h3>Çay</h3>
            <h3>8.00TL</h3>
          </div>
        </div>
        <div className="card">
          <div className="info">
            <img
              src="https://cdn1.ntv.com.tr/gorsel/ROzuKAEMqUibLE0iDX5oFw.jpg?width=1000&height=663&mode=crop&scale=both&v=20201205073916088"
              alt="foodImage"
            />
            <h3>Türk Kahvesi</h3>
            <h3>15.00TL</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drinks;
