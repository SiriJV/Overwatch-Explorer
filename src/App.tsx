import './App.scss'

// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Heroes from "./pages/Heroes/Heroes";
// import Maps from "./pages/Maps/Maps";
// import Gamemodes from "./pages/GameModes/GameModes";
// import Home from './pages/Home/Home';
// import HeroesCard from './components/HeroesCard/HeroesCard';

// const App: React.FC = () => {
//   return (
//     <Router>
//       <nav>
//             {/* <Link to="/"></Link> */}
//             <Link to="/heroes"><HeroesCard /></Link>
//             <Link to="/maps">Maps</Link>
//             <Link to="/gamemodes">Game Modes</Link>
//       </nav>
//       {/* <Home /> */}
//       <h2>whaaat</h2>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/heroes" element={<Heroes />} />
//         <Route path="/maps" element={<Maps />} />
//         <Route path="/gamemodes" element={<Gamemodes />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;



// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Heroes from "./pages/Heroes/Heroes";
// import Maps from "./pages/Maps/Maps";
// import Gamemodes from "./pages/GameModes/GameModes";
// import HeroesCard from './components/HeroesCard/HeroesCard';

// const Home = () => (
//   <nav>
//     <Link to="/heroes"><HeroesCard /></Link>
//     <Link to="/maps">Maps</Link>
//     <Link to="/gamemodes">Gamemodes</Link>
//   </nav>
// );

// function App() {
//   return (
//     <Router>
//       <Home />
//       <div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/heroes" element={<Heroes />} />
//           <Route path="/maps" element={<Maps />} />
//           <Route path="/gamemodes" element={<Gamemodes />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Heroes from "./pages/Heroes/Heroes";
import Maps from "./pages/Maps/Maps";
import Gamemodes from "./pages/GameModes/GameModes";
import Layout from "./layouts/Outlet"; // New Layout Component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="heroes" element={<Heroes />} />
          <Route path="maps" element={<Maps />} />
          <Route path="gamemodes" element={<Gamemodes />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
