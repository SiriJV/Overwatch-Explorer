// import React from "react";
// import { Link } from "react-router-dom";
// import './Home.scss';
// import HeroesCard from "../../components/HeroesCard/HeroesCard";

// const Home: React.FC = () => {
//   return (
//     <div></div>
//   );
// };

// export default Home;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavCard from "../../components/HeroesCard/NavCard/NavCard";
import './Home.scss';

const navItems = [
  {
    title: "Heroes",
    image: "public/images/ow-heroes.webp",
    description: "View all Overwatch heroes at a glance.",
    path: "/heroes"
  },
  {
    title: "Maps",
    image: "public/images/ow-heroes.webp",
    description: "Explore all Overwatch maps.",
    path: "/maps"
  },
  {
    title: "Gamemodes",
    image: "public/images/ow-heroes.webp",
    description: "Check out different Overwatch game modes.",
    path: "/gamemodes"
  }
];

const Home = () => {
  const [messages, setMessages] = useState<string[]>(['[Genji]: I need healing!']);
  const [inputValue, setInputValue] = useState<string>('');

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      setMessages([...messages, inputValue]);

      setInputValue('');
    }
  };

  return (
    <section className="home-page">

    <nav className="nav-container">
      {/* <Link to="/heroes"><HeroesCard /></Link>
      <Link to="/maps">Maps</Link>
      <Link to="/gamemodes">Gamemodes</Link> */}
      {navItems.map((item, index) => (
        <Link key={index} to={item.path} className="nav-link">
          <NavCard title={item.title} image={item.image} description={item.description} />
        </Link>
      ))}
    </nav>
    <article className="chat">
    <section className="chat-display">
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
    </section>
    <input
        type="text"
        className="chat-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="PRESS ENTER TO CHAT"
      />
    </article>
    </section>
  );
};

export default Home;
