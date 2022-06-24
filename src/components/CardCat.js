import React from "react";
import "./CardCat.scss";
import star from "../././assets/images/star/star.png";
import star2x from "../././assets/images/star/star@2x.png";

class CardCat extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleActionClick = this.handleActionClick.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);

    this.upTitle = this.upTitle.bind(this);
    this.footerAction = this.footerAction.bind(this);

    this.state = {
      isHover: false,
      isMouseLeave: false,
    };
  }

  handleClick() {
    if (this.props.disabled) return;
    this.props.onHandleClick(this.props.id);
  }

  handleActionClick(e) {
    if (this.props.disabled) return;
    e.stopPropagation(); // всплытие, сработает событие и на родительском блоке, что в итоге вернет props.selected в изначальное значение
    this.props.onHandleClick(this.props.id);
  }

  handleMouseEnter() {
    if (this.state.isMouseLeave) this.setState({ isHover: true });
  }

  handleMouseLeave() {
    if (this.props.selected) {
      this.setState({ isMouseLeave: true, isHover: false });
    } else {
      this.setState({ isMouseLeave: false, isHover: false });
    }
  }

  footerAction(action, onSelectedAction, subtitle) {
    if (this.props.disabled) {
      return <span>{"Печалька, " + subtitle + " закончился."}</span>;
    } else if (!this.props.selected) {
      return (
        <span>
          {action},&nbsp;
          <a href="#!" onClick={this.handleActionClick}>
            купи.
          </a>
        </span>
      );
    } else {
      return <span>{onSelectedAction}</span>;
    }
  }

  upTitle(uptitle, onHoverUptitle) {
    if (this.state.isHover) {
      return (
        <span className="card-cat__uptitle --hover">{onHoverUptitle}</span>
      );
    }
    return <span className="card-cat__uptitle">{uptitle}</span>;
  }

  render() {
    const {
      title,
      subtitle,
      uptitle,
      onHoverUptitle,
      desc,
      weight,
      action,
      onSelectedAction,
      className,
    } = this.props;

    return (
      <div
        className={"card-cat" + className}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onClick={this.handleClick}
      >
        <div className="card-cat__body">
          <img
            className="card-cat__bg-image"
            src={star}
            srcSet={star2x}
            alt="cat star"
          />

          {this.upTitle(uptitle, onHoverUptitle)}

          <h2 className="card-cat__title">{title}</h2>
          <h3 className="card-cat__subtitle">{subtitle}</h3>
          <p
            className="card-cat__desc"
            dangerouslySetInnerHTML={{ __html: desc }}
          ></p>
          <div className="card-cat__weight">
            <span>
              {weight} <span>кг</span>
            </span>
          </div>
        </div>
        <div className="card-cat__footer">
          {this.footerAction(action, onSelectedAction, subtitle)}
        </div>
      </div>
    );
  }
}

export default CardCat;
