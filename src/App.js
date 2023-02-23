import Card from './Card';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
const theme = {
  primary: '#4caf50',
  pinkish: 'pink'
}
const Button = styled.button`
  background-color: ${props => props.length > 2 ? 'red' : props.length < 2 ? "yellow" : 'pink'}
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`
function App() {
  const [showCard, setshowCard] = useState(true)
  const [cards, setCards] = useState([])

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=10').then((res) => {
      console.log(res.data.results);
      setCards(res.data.results)
    }).catch(err => {
      console.log(err);
    })
  }, [])
  const deleteCardHAndler = (cardIndex) => {
    const cards_copy = [...cards]
    cards_copy.splice(cardIndex, 1)
    setCards(cards_copy)
  }
  const toggleShowCard = () =>
    setshowCard(!showCard)
  // const buttonStyle = {
  //   backgroundColor: null
  // }
  const classes = ['button']
  if (cards.length < 3) classes.push('yellow')
  if (cards.length < 2) classes.push('blue text')

  const changeNameHandler = (event, id) => {
    const cardIndexs = cards.findIndex(card => card.login.uuid == id)
    const copy_cards = [...cards]
    copy_cards[cardIndexs].name.first = event.target.value
    setCards(copy_cards)
  }

  const cardMArkup = showCard && (
    cards.map((card, index) =>
      <Card name={card.name.first} email={card.email} avatar={card.picture.large} key={card.login.uuid}
        // name={card.name} title={card.title} avatar={card.avatar} key={card.id}
        onChangeName={(event) => changeNameHandler(event, card.login.uuid)} onDelete={() => deleteCardHAndler(index)} />
    )
  )
  return (
    <div className="App">
      <h1>Hello</h1>
      {/* <Button>Toggle</Button>
      <button className={classes.join(' ')} onClick={toggleShowCard}>Toggle Show/Hide</button> */}
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
