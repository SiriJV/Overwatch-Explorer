import './HeroesCard.scss';

const HeroesCard = () => {
    return (
    <article className="heroes-card">
        <div className="orange-box"></div>
        <div className="heroes-img"></div>
        <div className="heroes-icon"></div>
        <h2>HEROES<span>-</span></h2>
        <p>View all Overwatch heroes at a glance.</p>
    </article>
    )
}

export default HeroesCard;