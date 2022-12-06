import React from 'react'
import { FiMessageSquare } from 'react-icons/fi'
import { IoMdArrowRoundBack } from 'react-icons/io'
import NavBar from '../../navbar';
import SideBar from '../sidebar';

const Info01 = () => {
  return (
    <>
    <NavBar />
    <SideBar />
    <div className="Info">
        <img src="https://yourclubhire.com/public/img/testimonios_avatar.png" class="avtInfo" alt="abtInfo"/>
        <a href="/message"><FiMessageSquare className="messInfo"></FiMessageSquare></a>
        <a href="/cnvs"><IoMdArrowRoundBack className="back-icon"></IoMdArrowRoundBack></a>
        <p id="nameInfo">CNVS01</p>
        <p id="statusInfo-onl"><span class="dot-green"></span> Hoạt động</p>
        <p id="Infor">Số điện thoại: 0898989898<br/>CMND/CCCD: 97532188654<br/>Địa chỉ: 123 Đường D1, Phường Tân Hưng, Quận 7, TP.HCM<br/><br/>Lịch làm việc:</p>
        <div className="shift">
        <tr>
          <td>Ca 1</td>
        </tr>
        <tr>
          <td>Ca 2</td>
        </tr>
        <tr>
          <td>Ca 3</td>
        </tr>
        <tr>
          <td>Ca 4</td>
        </tr>
        </div>
        <div className="tableInfo">
      <table>
        <tr>
          <th>Thứ hai</th>
          <th>Thứ ba</th>
          <th>Thứ tư</th>
          <th>Thứ năm</th>
          <th>Thứ sáu</th>
          <th>Thứ bảy</th>
          <th>Chủ nhật</th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td id="off"></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td id="off"></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td id="off"></td>
          <td id="off"></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td id="off"></td>
          <td id="off"></td>
        </tr>
      </table>
    </div>
    </div>
    </>
  );
}

export default Info01;