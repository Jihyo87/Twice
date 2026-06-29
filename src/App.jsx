import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainlayout from './layouts/mainlayout.jsx';
import Home from './pages/home/home.jsx';
import About from './pages/about/about.jsx';
import Members from './pages/member/members.jsx';
import TWICE_MEMBERS from './assets/data/membersdata.jsx';
import TwiceDiscography from './assets/data/albumdata.jsx';
import Discography from './pages/discography/discography.jsx';
import AlbumDetail from './pages/albumdetail/albumdetail.jsx';


function App() {
    return(
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Home />} />
          <Route path="members" element={<Members/>} />
          <Route path="discography" element={<Discography/>} />
          <Route path="discography/:slug" element={<AlbumDetail/>} />
          <Route path="about" element={<About/>} />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Route>z
      </Routes>
    </BrowserRouter>
    )
}

export default App;
