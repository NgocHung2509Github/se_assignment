function SideBar (){
    const cnvsClass = window.location.pathname.match(/^\/cnvs/) ? "active" : "";
    const cncrClass = window.location.pathname.match(/^\/cncr/) ? "active" : "";

    return(
        <>
        <div class = "task-side-bar">
        <h3>Công nhân</h3>
        <ul>
    	    <li>
        	  <div class = "task-border-top"></div>
        	  <a className={cnvsClass} href = '/cnvs'>Công nhân vệ sinh</a>
          </li>
          <li><a className={cncrClass} href = '/cncr'>Công nhân chở rác</a></li>
        </ul>
      </div>
        </>
    );
}

export default SideBar