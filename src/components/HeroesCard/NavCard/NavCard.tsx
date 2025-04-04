import './NavCard.scss';

interface NavCardProps {
    title: string;
    image: string;
    description: string;
  }

const NavCard = ({ title, image, description }: NavCardProps) => {
  return (
    <article className="nav-card">
      <div className="orange-box"></div>
      <div className="nav-card-img" style={{ backgroundImage: `url(${image})` }}></div>
      <h2>{title}<span>-</span></h2>
      <p>{description}</p>
    </article>
  );
};

export default NavCard;
