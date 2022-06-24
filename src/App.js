import React from "react";
import "./App.scss";
import CardCat from "./components/CardCat.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const murMur = [
      {
        id: 1,
        uptitle: "Сказочное заморское яство",
        onHoverUptitle: "Котэ не одобряет?",
        title: "Нямушка",
        subtitle: "с фуа-гра",
        desc: "10 порций <br /> мышь в подарок",
        weight: "0,5",
        action: "Чего сидишь? Порадуй котэ",
        onSelectedAction: "Печень утки разварная с артишоками.",
        selected: false,
        disabled: false,
      },
      {
        id: 2,
        uptitle: "Сказочное заморское яство",
        onHoverUptitle: "Котэ не одобряет?",
        title: "Нямушка",
        subtitle: "с рыбой",
        desc: "40 порций <br /> 2 мыши в подарок",
        weight: "2",
        action: "Чего сидишь? Порадуй котэ",
        onSelectedAction: "Печень утки разварная с артишоками.",
        selected: false,
        disabled: false,
      },
      {
        id: 3,
        uptitle: "Сказочное заморское яство",
        onHoverUptitle: "Котэ не одобряет?",
        title: "Нямушка",
        subtitle: "с курой",
        desc: "100 порций <br /> 5 мышей в подарок <br /> заказчик доволен ",
        weight: "5",
        action: "Чего сидишь? Порадуй котэ",
        onSelectedAction: "Печень утки разварная с артишоками.",
        selected: false,
        disabled: true,
      },
    ];

    this.setState({ data: murMur });
  }

  handleClick(id) {
    const data = this.state.data;

    this.setState({
      data: data.map((item) => {
        if (item.id === id) item.selected = !item.selected;
        return item;
      }),
    });
  }

  render() {
    const items = this.state.data;

    const cards = (className) =>
      items.map((item) => (
        <CardCat
          className={
            " " +
            className +
            (item.disabled ? " disabled" : "") +
            (item.selected ? " selected" : "")
          }
          key={item.id}
          {...item}
          onHandleClick={this.handleClick}
        />
      ));

    return (
      <main className="app">
        <section className="container">
          <h1>Ты сегодня покормил кота?</h1>
          <div className="row">{cards("col")}</div>
        </section>
      </main>
    );
  }
}

export default App;
