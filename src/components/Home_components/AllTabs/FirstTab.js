import React from 'react'
import { FiMessageSquare } from 'react-icons/fi'
import NavBar from '../../navbar';
import SideBar from '../sidebar';

const FirstTab = () => {
    return (
      <>
      <NavBar />
      <SideBar />
      <div className="FirstTab">
        <div className="n01">
          <img src="https://yourclubhire.com/public/img/testimonios_avatar.png" class="avt" alt="avt"/>
          <a href="/message"><FiMessageSquare className="mess-icon"></FiMessageSquare></a>
          <a href="/cnvs01" className="name">CNVS01</a>
          <p id="status-onl"><span class="dot-green"></span> Hoạt động</p>
        </div>
        <div className="n02">
          <img src="https://yourclubhire.com/public/img/testimonios_avatar.png" class="avt" alt="avt"/>
          <a href="/message"><FiMessageSquare className="mess-icon"></FiMessageSquare></a>
          <a href="/cnvs02" className="name">CNVS02</a>
          <p id="status-working"><span class="dot-yellow"></span> Đang làm việc</p>
        </div>
        <div className="n03">
          <img src="https://yourclubhire.com/public/img/testimonios_avatar.png" class="avt" alt="avt"/>
          <a href="/message"><FiMessageSquare className="mess-icon"></FiMessageSquare></a>
          <a href="/cnvs03" className="name">CNVS03</a>
          <p id="status-off"><span class="dot-grey"></span> Không hoạt động</p>
        </div>
        <div className="n04">
          <img src="https://yourclubhire.com/public/img/testimonios_avatar.png" class="avt" alt="avt"/>
          <a href="/message"><FiMessageSquare className="mess-icon"></FiMessageSquare></a>
          <a href="/cnvs04" className="name">CNVS04</a>
          <p id="status-onl"><span class="dot-green"></span> Hoạt động</p>
        </div>
      </div>
      </>
    );
    
  };
  
  

  export default FirstTab;