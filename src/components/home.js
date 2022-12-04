import NavBar from "./navbar";
import './Home_components/Home.css';
import { Routes, Route, Link } from 'react-router-dom';
import FirstTab from './Home_components/AllTabs/FirstTab';
import SecondTab from './Home_components/AllTabs/SecondTab';


export default function Home() {
  return (
    <>
      <NavBar />
        <div className="app">
          <b class="worker">Công nhân</b>
          <nav>
            <ul className="nav">
              <li>
                <div class = "border-top"></div>
                <Link to="/cncr" className="cn">Công nhân chở rác</Link>
              </li>
              <li>
                <Link to="/cnvs" className="cn">Công nhân vệ sinh</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/cnvs" element={<FirstTab />} />
            <Route path="/cncr" element={<SecondTab />} />
          </Routes>
        </div>
    </>
  );
}
