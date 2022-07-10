import React, { useState, useEffect } from "react";
import "./App.scss";
import Card from "./components/Card.tsx";

export interface CardInterface {
  id: Number;
  uptitle: String;
  onHoverUptitle: String;
  title: String;
  subtitle: String;
  desc: String;
  weight: String;
  action: String;
  onSelectedAction: String;
  selected: Boolean;
  disabled: Boolean;
}

const App = () => {
  const [items, setItems] = useState<CardInterface[]>([]);
  const [loader, setLoader] = useState<Boolean>(true);

  useEffect(() => {
    setLoader(true);

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

    setItems(murMur);

    setTimeout(() => setLoader(false), 1000);
  }, []);

  const handleClick = (id: Number) => {
    setItems(
      items.map((item) => {
        if (item.id === id) item.selected = !item.selected;
        return item;
      })
    );
  };

  const cards = (className: String) =>
    items.map((item) => (
      <Card
        className={[
          className,
          item.disabled ? " disabled" : "",
          item.selected ? " selected" : "",
        ]}
        key={item.id}
        item={item}
        onHandleClick={handleClick}
      />
    ));

  return (
    <main className="app">
      <section className="container">
        <h1>Ты сегодня покормил кота?</h1>
        {loader ? (
          <div>Loading...</div>
        ) : (
          <div className="row">{cards("col")}</div>
        )}
      </section>
    </main>
  );
};

export default App;
