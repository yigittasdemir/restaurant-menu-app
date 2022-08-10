import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {

  const myFunction = (e) =>  {
    var x = document.getElementById("toggle-menu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  
  }
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Anasayfa</Link>
        </li>
        <li>
          <Link to="ana-yemekler">Ana Yemekler</Link>
        </li>
        <li>
          <Link to="salatalar">Salatalar</Link>
        </li>
        <li>
          <Link to="tatlilar">Tatlılar</Link>
        </li>
        <li>
          <Link to="icecekler">İçecekler</Link>
        </li>
      </ul>
      <div className="mobile-menu">
      <a href="javascript:void(0);" className='icon' onClick={myFunction}><i class="fa-solid fa-bars"></i></a>
      </div>
      <div id='toggle-menu'>
        <ul>
            <li>
          <Link to="/">Anasayfa</Link>
        </li>
        <li>
          <Link to="ana-yemekler">Ana Yemekler</Link>
        </li>
        <li>
          <Link to="salatalar">Salatalar</Link>
        </li>
        <li>
          <Link to="tatlilar">Tatlılar</Link>
        </li>
        <li>
          <Link to="icecekler">İçecekler</Link>
        </li>
       </ul>
        </div>
    </header>
  );
};

export default Header;
