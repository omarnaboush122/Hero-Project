import "../App.css";
import Card from "./Card";
import Hero from "./Hero";
import Header from "./Navbar";
import data from "./data";
const App = () => {
  const cards = data.map((card) => {
    return <Card 
    key={card.id} 
    {...card} 
    />;
  });
  return (
    <div className="container">
      <Header />
      <Hero />
      <div className="main-cards">{cards}</div>
    </div>
  );
};

export default App;
