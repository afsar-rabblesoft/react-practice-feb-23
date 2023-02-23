import Card from './Card';
import React, { useState } from 'react';
function App() {
  const [name, setName] = useState('Ankush');
  const [showCard, setshowCard] = useState(true)
  const changeNameHandler = (name) => {
    setName(name)
  }
  const changeInputHandler = (event) => {
    setName(event.target.value)
  }
  const toggleShowCard = () =>
    setshowCard(!showCard)

  const buttonsMarkup = (
    <div>
      <button className="button">YES</button>
      <button className="button button3">NO</button>
    </div>
  )
  const cardMArkup = showCard ?
    <Card name={name} title="Working" onChangeName={() => changeNameHandler('Afsar')} onChangeInput={changeInputHandler}>
      {buttonsMarkup}
    </Card> : null

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
