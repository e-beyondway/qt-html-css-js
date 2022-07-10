import { useState } from "react";
import { CardInterface } from "../App";
import "./Card.scss";
import cat from "../assets/images/cat/cat.png";
import cat2x from "../assets/images/cat/cat@2x.png";

interface PropsInterface {
  onHandleClick: (id: Number) => void;
  className: String[];
  item: CardInterface;
}

const Card = ({ onHandleClick, className, item }: PropsInterface) => {
  const [isHover, setIsHover] = useState<Boolean>(false);
  const [isMouseLeave, setIsMouseLeave] = useState<Boolean>(false);

  const handleClick = () => {
    if (item.disabled) return;
    onHandleClick(item.id);
  };

  const handleActionClick = (e: Event) => {
    if (item.disabled) return;
    e.stopPropagation();
    onHandleClick(item.id);
  };

  const handleMouseEnter = () => {
    if (isMouseLeave) setIsHover(true);
  };

  const handleMouseLeave = () => {
    if (item.selected) {
      setIsMouseLeave(true);
      setIsHover(false);
    } else {
      setIsMouseLeave(false);
      setIsHover(false);
    }
  };

  const footerAction = (
    action: String,
    onSelectedAction: String,
    subtitle: String
  ) => {
    if (item.disabled) {
      return <span>{"Печалька, " + subtitle + " закончился."}</span>;
    } else if (!item.selected) {
      return (
        <span>
          {action},&nbsp;
          <a href="#!" onClick={() => handleActionClick}>
            купи.
          </a>
        </span>
      );
    } else {
      return <span>{onSelectedAction}</span>;
    }
  };

  const upTitle = (uptitle: String, onHoverUptitle: String) => {
    if (isHover) {
      return (
        <span className="card-cat__uptitle --hover">{onHoverUptitle}</span>
      );
    }
    return <span className="card-cat__uptitle">{uptitle}</span>;
  };

  const getClassName = () => {
    return " " + className.join("").replace(/\s{2,}/g, " ");
  };

  return (
    <div
      className={"card-cat" + getClassName()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="card-cat__body">
        <img
          className="card-cat__bg-image"
          src={cat}
          srcSet={cat2x}
          alt="cat star"
        />

        {upTitle(item.uptitle, item.onHoverUptitle)}

        <h2 className="card-cat__title">{item.title}</h2>
        <h3 className="card-cat__subtitle">{item.subtitle}</h3>
        <p
          className="card-cat__desc"
          dangerouslySetInnerHTML={{ __html: item.desc as string }}
        ></p>
        <div className="card-cat__weight">
          <span>
            {item.weight} <span>кг</span>
          </span>
        </div>
      </div>
      <div className="card-cat__footer">
        {footerAction(item.action, item.onSelectedAction, item.subtitle)}
      </div>
    </div>
  );
};

export default Card;
