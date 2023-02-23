import Card from './Card';

function App() {
  const buttonsMarkup = (
    <div>
      <button className="button">YES</button>
      <button className="button button3">NO</button>
    </div>
  )
  return (
    <div className="App">
      <h1>Hello</h1>
      <Card name='Himanshu' title="Working">
        {buttonsMarkup}
      </Card>

      <Card name='Ankush' title="Working">
        {buttonsMarkup}
      </Card>

      <Card name='Ankush' title="Working">
        {buttonsMarkup}
      </Card>

      <Card name='Afsar' title="Learning React">
        {buttonsMarkup}
      </Card>

    </div>
  );
}

export default App;
