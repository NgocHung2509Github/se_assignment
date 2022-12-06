import React from 'react'
import { FiMessageSquare } from 'react-icons/fi'
import { IoMdArrowRoundBack } from 'react-icons/io'
import NavBar from '../../navbar';
import SideBar from '../sidebar';

const Info03 = () => {
  return (
    <>
    <NavBar />
    <SideBar />
    <div className="Info">
        <img src="https://yourclubhire.com/public/img/testimonios_avatar.png" class="avtInfo" alt="abtInfo"/>
        <a href="/message"><FiMessageSquare className="messInfo"></FiMessageSquare></a>
        <a href="/cnvs"><IoMdArrowRoundBack className="back-icon"></IoMdArrowRoundBack></a>
        <p id="nameInfo">CNVS03</p>
        <p id="statusInfo-off"><span class="dot-grey"></span> Không hoạt động</p>
        <p id="Infor">Số điện thoại: 0898989898<br/>CMND/CCCD: 97532188654<br/>Địa chỉ: 123 Đường D1, Phường Tân Hưng, Quận 7, TP.HCM<br/><br/>Lịch làm việc:</p>
        <div className="shift">
        <tr>
          <td>01:00 &#8594; 02:00</td>
        </tr>
        <tr>
          <td>05:00 &#8594; 06:00</td>
        </tr>
        <tr>
          <td>14:00 &#8594; 15:00</td>
        </tr>
        <tr>
          <td>20:00 &#8594; 21:00</td>
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

export default Info03;