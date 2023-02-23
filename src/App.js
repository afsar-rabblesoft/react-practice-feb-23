import Card from './Card';
import React ,{useState} from 'react';
function App() {
  const [name,setName]=useState('Ankush');
  const changeNameHandler=(name)=>{
    setName(name)
  }
  const buttonsMarkup = (
    <div>
      <button className="button">YES</button>
      <button className="button button3">NO</button>
    </div>
  )
  return (
    <div className="App">
      <h1>Hello</h1>
      <button className="button" onClick={()=>changeNameHandler('Himanshu')}>Change Name</button>

      <Card name={name} title="Working" onChangeName={()=>changeNameHandler('Afsar')}>
        {buttonsMarkup}
      </Card>

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
