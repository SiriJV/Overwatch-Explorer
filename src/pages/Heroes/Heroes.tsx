import React from "react";
import './Heroes.scss';
import { Link } from "react-router-dom";
import HeroCard from "../../components/HeroesCard/HeroCard/HeroCard";

const Heroes: React.FC = () => {
  return <>
  <section className="heroes-page">
    <Link to="/">← Home</Link>
    <h1 className="blue">Heroes</h1>
    <button>FILTER</button>
    <article className="hero-card-container">
      <HeroCard heroName="ANA" heroDescription="50something" imageUrl="public/images/ana.jpg"/>
      <HeroCard heroName="ANA" heroDescription="50something" imageUrl="public/images/ana.jpg"/>
    </article>
  </section>
  </>
};

export default Heroes;
