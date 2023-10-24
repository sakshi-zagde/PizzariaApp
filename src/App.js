import './App.css';
import {Routes , Route } from "react-router-dom" 
import Home from './Component/Home';
import PizzaItem from './PizzaItem';
import BuildUrPizza from './BuildUrPizza';

function App() {
  return (
    <div className="App">
        <Routes> 
            <Route path="/" element={<Home/> } /> 
            <Route path="/pizza" element={<PizzaItem/> } /> 
            <Route path='/buildPizza' element={<BuildUrPizza/>}/>
       </Routes>   
    </div>
  );
}

export default App;
