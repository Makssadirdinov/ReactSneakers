
import Card from "./components/Card/Card"
import Drawer from "./components/Drawer";
import Header from "./components/Header";


const arr = [
{title: "Мужские Кроссовки Nike Blazer Mid Suede", price: 12999, imageUrl: "/img/sneakers/1.jpg"},
{title: "Мужские Кроссовки Nike Air Max 270", price: 15999, imageUrl: "/img/sneakers/2.jpg"},
{title: "Мужские Кроссовки Nike Blazer Mid Suede", price: 8499, imageUrl: "/img/sneakers/3.jpg"},
{title: "Кроссовки Puma X Aka Boku Future Rider", price: 8999, imageUrl: "/img/sneakers/4.jpg"},
]

function App() {
  return (
  <div className="wrapper clear"> 


  <Drawer/>
 <Header/>

  <div className="content p-40">
    <div className="d-flex align-center justify-between mb-40">
      <h1>Все кроссовки</h1>
      <div className="search__block d-flex">
        <img src="/img/search.svg" alt="search"/>
        <input placeholder="Поиск..." />
      </div>

    </div>

    <div className="d-flex">
  
    
      {
      arr.map((el) => (
        <Card 
        title={el.title}
        price={el.price}
        imageUrl={el.imageUrl} 
        onClick={() => console.log(el)}
        />))
      }
    </div>

  </div>
  </div>
  )
}

export default App;
