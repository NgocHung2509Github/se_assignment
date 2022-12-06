import { useState } from "react";
import { DatePicker, Space} from "antd";
import Multiselect from "multiselect-react-dropdown";
import NavBar from "./navbar";

export default function AssignTask() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const Janitors = ["CNVS01","CNVS02", "CNVS03","CNVS04"];
  const Collector = ["CNCR01","CNCR02", "CNCR03","CNCR04"];
  const vehicle = ["Xe01", "Xe02","Xe03","Xe04","Xe05"]
  const MCPs = ["MCP01","MCP02", "MCP03","MCP04","MCP05", "MCP06","MCP07", "MCP08","MCP09","MCP10"];
  const Calendar = ["Ca 1", "Ca 2", "Ca 3", "Ca 4"];
  return (
    <>
      <NavBar />
      <div class = "task-side-bar">
        <h3>Danh sách</h3>
        <ul>
    	    <li>
        	  <div class = "task-border-top"></div>
        	  <a href = '/task'>Việc đã giao</a>
          </li>
          <li><a class = "side-bar-active" href = '/assign'>+ Thêm</a></li>
        </ul>
      </div>

      <div class = "task-content">
        <h1>Giao Việc</h1>
        <p class = "assign-label">1. Chọn Ngày</p>
        <br/>
        <div class = "date-picker">
          <Space direction='horizontal'>
            <span>Ngày bắt đầu: </span>
            <DatePicker 
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            />
            <span>Ngày kết thúc: </span>
            <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            />
          </Space>
        </div>

        <p class = "assign-label">2. Chọn Công Nhân</p>
        <Multiselect 
          className= "Choose-bar"
          isObject={false}
          onKeyPressFn={function noRefCheck(){}}
          onRemove={function noRefCheck(){}}
          onSearch={function noRefCheck(){}}
          onSelect={function noRefCheck(){}}
          options={Janitors}
          showCheckbox
          placeholder="Chọn công nhân vệ sinh"
          hidePlaceholder = {true}
          style={{

            chips: {
              background: '#FF7777',
            },
            multiselectContainer: {
              color: 'black',
              'width': '950px',           
            },            
            inputField: {
              margin: '7px',
              'margin-left': '5px'
            },
            searchBox: {
              border: '2px solid gray',
              'width': '950px',
              'height': '44px',
              'margin': '15px',
              'border-radius': '15px',
              'box-shadow': '0px 4px 4px rgba(0, 0, 0, 0.10)'
            }
          }}
        />
        <Multiselect 
          className= "Choose-bar"
          isObject={false}
          onKeyPressFn={function noRefCheck(){}}
          onRemove={function noRefCheck(){}}
          onSearch={function noRefCheck(){}}
          onSelect={function noRefCheck(){}}
          options={Collector}
          showCheckbox
          placeholder="Chọn công nhân chở rác"
          hidePlaceholder = {true}
          style={{

            chips: {
              background: '#FF7777',
            },
            multiselectContainer: {
              color: 'black',
              'width': '950px',             
            },            
            inputField: { // To change input field position or margin
              margin: '7px',
              'margin-left': '5px'
            },
            searchBox: {
              border: '2px solid gray',
              'width': '950px',
              'height': '44px',
              'margin': '15px',
              'border-radius': '15px',
              'box-shadow': '0px 4px 4px rgba(0, 0, 0, 0.10)'
            }
          }}
        />
        <p class = "assign-label">3. Chọn Tuyến Đường</p>
        <Multiselect 
          className= "Choose-bar"
          isObject={false}
          onKeyPressFn={function noRefCheck(){}}
          onRemove={function noRefCheck(){}}
          onSearch={function noRefCheck(){}}
          onSelect={function noRefCheck(){}}
          options={MCPs}
          showCheckbox
          placeholder="Chọn địa điểm"
          hidePlaceholder = {true}
          style={{

            chips: {
              background: '#FF7777',
            },
            multiselectContainer: {
              color: 'black',
              'width': '950px',             
            },            
            inputField: { // To change input field position or margin
              margin: '7px',
              'margin-left': '5px'
            },
            searchBox: {
              border: '2px solid gray',
              'width': '950px',
              'height': '44px',
              'margin': '15px',
              'border-radius': '15px',
              'box-shadow': '0px 4px 4px rgba(0, 0, 0, 0.10)'
            }
          }}
        />
        <Multiselect 
          className= "Choose-bar"
          isObject={false}
          onKeyPressFn={function noRefCheck(){}}
          onRemove={function noRefCheck(){}}
          onSearch={function noRefCheck(){}}
          onSelect={function noRefCheck(){}}
          options={vehicle}
          showCheckbox
          placeholder="Chọn xe"
          hidePlaceholder = {true}
          style={{

            chips: {
              background: '#FF7777',
            },
            multiselectContainer: {
              color: 'black',
              'width': '950px',             
            },            
            inputField: { // To change input field position or margin
              margin: '7px',
              'margin-left': '5px'
            },
            searchBox: {
              border: '2px solid gray',
              'width': '950px',
              'height': '44px',
              'margin': '15px',
              'border-radius': '15px',
              'box-shadow': '0px 4px 4px rgba(0, 0, 0, 0.10)'
            }
          }}
        />
        <p class = "assign-label">4. Chọn Ca Làm</p>
        <Multiselect 
          className= "Choose-bar"
          isObject={false}
          onKeyPressFn={function noRefCheck(){}}
          onRemove={function noRefCheck(){}}
          onSearch={function noRefCheck(){}}
          onSelect={function noRefCheck(){}}
          options={Calendar}
          showCheckbox
          placeholder="Chọn ca làm"
          hidePlaceholder = {true}
          style={{

            chips: {
              background: '#FF7777',
            },
            multiselectContainer: {
              color: 'black',
              'width': '950px',             
            },            
            inputField: {
              margin: '7px',
              'margin-left': '5px'
            },
            searchBox: {
              border: '2px solid gray',
              'width': '950px',
              'height': '44px',
              'margin': '15px',
              'border-radius': '15px',
              'box-shadow': '0px 4px 4px rgba(0, 0, 0, 0.10)'
            }
          }}
        />
        <p class = "assign-note">
        Ca 1: CNVS: 22:00 đến 00:00, CNCR: 01:00 đến 03:00<br/>
        Ca 2: CNVS: 02:00 đến 04:00, CNCR: 05:00 đến 07:00<br/>
        Ca 3: CNVS: 11:00 đến 13:00, CNCR: 14:00 đến 16:00<br/>
        Ca 4: CNVS: 17:00 đến 19:00, CNCR: 20:00 đến 22:00<br/>
        </p>
        <div class = "task-btn">
          <a href = "/task"><button class = "finish-btn">Hoàn thành</button></a>
        </div>
      </div>
    </>
  );
}