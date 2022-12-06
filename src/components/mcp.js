import NavBar from "./navbar";

export default function MCP() {
  return (
    <>
      <NavBar />
      <h2 class = "mcp-title">Các địa điểm thu gom rác chính</h2>
      <div class = "mcp-row">
        <div class = "mcp-box">
          <span id = "hole"></span>
          <h3 class = "mcp-name">MCP01</h3>
          <p>Địa chỉ: số 1, đường A1, Quận 1, TPHCM</p>
          <p>Tình trạng</p>
          <span id = "not-full">Chưa đầy</span>
        </div>
        <div class = "mcp-box">
          <span id = "hole"></span>
          <h3 class = "mcp-name">MCP02</h3>
          <p>Địa chỉ: số 1, đường A2, Quận 1, TPHCM</p>
          <p>Tình trạng</p>
          <span id = "full">Đã đầy</span>
        </div>
        <div class = "mcp-box">
          <span id = "hole"></span>
          <h3 class = "mcp-name">MCP03</h3>
          <p>Địa chỉ: số 1, đường A3, Quận 1, TPHCM</p>
          <p>Tình trạng</p>
          <span id = "not-full">Chưa đầy</span>
        </div>
      </div>
      <br/>
      <div class = "mcp-row">
        <div class = "mcp-box">
          <span id = "hole"></span>
          <h3 class = "mcp-name">MCP04</h3>
          <p>Địa chỉ: số 1, đường B4, Quận 5, TPHCM</p>
          <p>Tình trạng</p>
          <span id = "full">Đã đầy</span>
        </div>
        <div class = "mcp-box">
          <span id = "hole"></span>
          <h3 class = "mcp-name">MCP05</h3>
          <p>Địa chỉ: số 1, đường B5, Quận 5, TPHCM</p>
          <p>Tình trạng</p>
          <span id = "full">Đã đầy</span>
        </div>
        <div class = "mcp-box">
          <span id = "hole"></span>
          <h3 class = "mcp-name">MCP06</h3>
          <p>Địa chỉ: số 1, đường B6, Quận 5, TPHCM</p>
          <p>Tình trạng</p>
          <span id = "not-full">Chưa đầy</span>
        </div>
      </div>
      <br/>
      <div class = "mcp-row">
        <div class = "mcp-box">
          <span id = "hole"></span>
          <h3 class = "mcp-name">MCP07</h3>
          <p>Địa chỉ: số 1, đường A7, Quận 10, TPHCM</p>
          <p>Tình trạng</p>
          <span id = "not-full">Chưa đầy</span>
        </div>
        <div class = "mcp-box">
          <span id = "hole"></span>
          <h3 class = "mcp-name">MCP08</h3>
          <p>Địa chỉ: số 1, đường A8, Quận 10, TPHCM</p>
          <p>Tình trạng</p>
          <span id = "not-full">Chưa đầy</span>
        </div>
        <div class = "mcp-box">
          <span id = "hole"></span>
          <h3 class = "mcp-name">MCP09</h3>
          <p>Địa chỉ: số 1, đường A9, Quận 10, TPHCM</p>
          <p>Tình trạng</p>
          <span id = "full">Đã đầy</span>
        </div>
      </div>
      <br/>
      <div class = "mcp-row">
        <div class = "mcp-box">
          <span id = "hole"></span>
          <h3 class = "mcp-name">MCP10</h3>
          <p>Địa chỉ: số 1, đường A10, Quận 10, TPHCM</p>
          <p>Tình trạng</p>
          <span id = "not-full">Chưa đầy</span>
        </div>
      </div>
      <br/>
      <br/>
    </>
  );
}