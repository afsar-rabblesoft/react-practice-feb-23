import Card from './Card';
import React, { useState } from 'react';
function App() {
  const [showCard, setshowCard] = useState(true)
  const [cards, setCards] = useState([
    {
      id: "jhajhaj",
      name: 'Afsar',
      title: 'working',
      avatar: "https://www.w3schools.com/howto/img_avatar.png"
    }, {
      id: "jhajhajaaa",
      name: 'Himanshu',
      title: 'working',
      avatar: "https://www.w3schools.com/howto/img_avatar.png"
    }
    , {
      id: "jhajhajakndka",
      name: 'Ankush',
      title: 'working',
      avatar: "https://www.w3schools.com/howto/img_avatar.png"
    }
  ])

  const deleteCardHAndler = (cardIndex) => {
    const cards_copy = [...cards]
    cards_copy.splice(cardIndex, 1)
    setCards(cards_copy)
  }
  const toggleShowCard = () =>
    setshowCard(!showCard)

  const changeNameHandler = (event, id) => {
    const cardIndexs = cards.findIndex(card => card.id == id)
    const copy_cards = [...cards]
    copy_cards[cardIndexs].name = event.target.value
    setCards(copy_cards)
  }

  const cardMArkup = showCard && (
    cards.map((card, index) =>
      <Card name={card.name} title={card.title} avatar={card.avatar} key={card.id} onChangeName={(event) => changeNameHandler(event, card.id)} onDelete={() => deleteCardHAndler(index)} />
    )
  )
  return (
    <div className="App">
      <h1>Hello</h1>
      <button className="button text-center" onClick={toggleShowCard}>Toggle Show/Hide</button>
      {cardMArkup}

      {/* <Card name='Ankush' title="Working">
        {buttonsMarkup}
      </Card>

      <Card name='Ankush' title="Working">
        {buttonsMarkup}
      </Card>

      <Card name='Afsar' title="Learning React">
        {buttonsMarkup}
      </Card> */}

    </div>
  );
}

export default App;
