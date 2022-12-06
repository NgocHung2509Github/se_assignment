import NavBar from "./navbar";


export default function Vehicle() {
  return (
    <>
      <NavBar />
      <div class = "v-side-bar">
        <h3>Danh sách</h3>
        <ul>
    	    <li>
        	  <div class = "task-border-top"></div>
        	  <a class = "side-bar-active" href = "#xe01">Xe 01</a>
          </li>
          <li><a class = "side-bar-active" href = "#xe02">Xe 02</a></li>
          <li><a class = "side-bar-active" href = "#xe03">Xe 03</a></li>
          <li><a class = "side-bar-active" href = "#xe04">Xe 04</a></li>
          <li><a class = "side-bar-active" href = "#xe05">Xe 05</a></li>
        </ul>
      </div>

      <div class = "v-content">
        <div id = "xe01" class = "vehicle-item">
          <img class = "v-img" src = "https://www.linkpicture.com/q/xe-ep-rac-isuzu-FVR34LE4-2.jpg" alt = ""></img>
          <span id = "vehicle-info">
            Xe 01 <br/>
            <br/>
            Biển số: 51B-12345 <br/>
            <br/>
            Tình trạng: Sẵn sàng <br/>
          </span>
          <br/>
          <img class = "info-img" src = "https://i.ibb.co/6HwzFTy/01.png" alt = "" width = "50%"></img>
        </div>
        <div id = "xe02" class = "vehicle-item">
          <img class = "v-img" src = "https://i.ibb.co/9V9gPYS/02.png" alt = ""></img>
          <span id = "vehicle-info">
            Xe 02 <br/>
            <br/>
            Biển số: 76B-10973 <br/>
            <br/>
            Tình trạng: Sẵn sàng <br/>
          </span>
          <br/>
          <img class = "info-img" src = "https://i.ibb.co/6B1rNZ1/02.png" alt = "" width = "50%"></img>
        </div>
        <div id = "xe03" class = "vehicle-item">
          <img class = "v-img" src = "https://i.ibb.co/ZzYS6mq/03.png" alt = ""></img>
          <span id = "vehicle-info">
            Xe 03 <br/>
            <br/>
            Biển số: 51B-12315 <br/>
            <br/>
            Tình trạng: Sẵn sàng <br/>
          </span>
          <br/>
          <img class = "info-img" src = "https://i.ibb.co/J2f4pmm/03.png" alt = "" width = "50%"></img>
        </div>
        <div id = "xe04" class = "vehicle-item">
          <img class = "v-img" src = "https://i.ibb.co/J33cRMf/04.png" alt = ""></img>
          <span id = "vehicle-info">
            Xe 04 <br/>
            <br/>
            Biển số: 51B-12945 <br/>
            <br/>
            Tình trạng: Sẵn sàng <br/>
          </span>
          <br/>
          <img class = "info-img" src = "https://i.ibb.co/PccTLpC/04.png" alt = "" width = "50%"></img>
        </div>
        <div id = "xe05" class = "vehicle-item">
          <img class = "v-img" src = "https://i.ibb.co/8M31r1g/05.png" alt = ""></img>
          <span id = "vehicle-info">
            Xe 05 <br/>
            <br/>
            Biển số: 51B-02345 <br/>
            <br/>
            Tình trạng: Sẵn sàng <br/>
          </span>
          <br/>
          <img class = "info-img" src = "https://i.ibb.co/t4QjLHB/05.png" alt = "" width = "50%"></img>
        </div>
      </div>
      <br/>
    </>
  );
}