import './App.css'
import { Colors } from './Colors'


function App() {
  const colorList = [
    { id: 1, name: "Red" },
    { id: 2, name: "Green" },
    { id: 3, name: "Blue" },
    { id: 4, name: "Green" },

  ];
 
  return (
    <div>
      <h1>Lista dei Colori:</h1>
      <Colors colorList={colorList} />
    </div>
  );

}

export default App
