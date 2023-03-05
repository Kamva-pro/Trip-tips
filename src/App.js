import './App.css';
import Data from './Data.js';
import Card from './Card.jsx';
import Header from './Header';

function App() {
  const travelData = Data.map(travel => {
    return (
      <Card 
      {...travel}/>
    )
  })
  return (
    <main>
      
     <Header/>
      {travelData}
    </main>
  );
}

export default App;

