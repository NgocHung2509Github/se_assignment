import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { FiMessageSquare } from 'react-icons/fi'
import SecondTab from './SecondTab';
import Info01 from '../Info/Info01';
import Info02 from '../Info/Info02';
import Info03 from '../Info/Info03';
import Info04 from '../Info/Info04';
import Info11 from '../Info/Info11';
import Info12 from '../Info/Info12';
import Info13 from '../Info/Info13';
import Info14 from '../Info/Info14';

const FirstTab = () => {
    return (
      <div className="FirstTab">
        <div className="n01">
          <img src="https://yourclubhire.com/public/img/testimonios_avatar.png" class="avt" alt="avt"/>
          <FiMessageSquare className="mess-icon"></FiMessageSquare>
          <Link to="/cnvs/i01" className="name">CNVS01</Link>
          <p id="status-onl"><span class="dot-green"></span> Hoạt động</p>
        </div>
        <div className="n02">
          <img src="https://yourclubhire.com/public/img/testimonios_avatar.png" class="avt" alt="avt"/>
          <FiMessageSquare className="mess-icon"></FiMessageSquare>
          <Link to="/cnvs/i02" className="name">CNVS02</Link>
          <p id="status-working"><span class="dot-yellow"></span> Đang làm việc</p>
        </div>
        <div className="n03">
          <img src="https://yourclubhire.com/public/img/testimonios_avatar.png" class="avt" alt="avt"/>
          <FiMessageSquare className="mess-icon"></FiMessageSquare>
          <Link to="/cnvs/i03" className="name">CNVS03</Link>
          <p id="status-off"><span class="dot-grey"></span> Không hoạt động</p>
        </div>
        <div className="n04">
          <img src="https://yourclubhire.com/public/img/testimonios_avatar.png" class="avt" alt="avt"/>
          <FiMessageSquare className="mess-icon"></FiMessageSquare>
          <Link to="/cnvs/i04" className="name">CNVS04</Link>
          <p id="status-onl"><span class="dot-green"></span> Hoạt động</p>
        </div>
        <Routes>
          <Route path="/cncr" element={<SecondTab />} />
          <Route path="/cnvs/i01" element={<Info01 />} />
          <Route path="/cnvs/i02" element={<Info02 />} />
          <Route path="/cnvs/i03" element={<Info03 />} />
          <Route path="/cnvs/i04" element={<Info04 />} />
          <Route path="/cncr/i01" element={<Info11 />} />
          <Route path="/cncr/i02" element={<Info12 />} />
          <Route path="/cncr/i03" element={<Info13 />} />
          <Route path="/cncr/i04" element={<Info14 />} />
        </Routes>
      </div>
    );
    
  };
  
  

  export default FirstTab;