import React from 'react'
import './navigation.css'
import { Link } from 'react-router-dom'; 
import PizzeriaLogo from "../Assets/PizzeriaLogo.png";

const Navigation = () => {
  return (
      <div className='navigation'>
          <div className='navigation_left'>
              
              <Link to='/'>
              <h3 className='navigation_main_text' style={{color:'grey'}}>Pizzeria</h3>
              </Link>
            
              <img src={PizzeriaLogo} style={{ height:'44px'}}/>
              <Link to='/pizza'>
              <div className='navigation_text' style={{color:'grey'}} >
              <bold> Order Pizza</bold>
              
              </div>
              </Link>
              <Link to='/buildPizza'>
              <div className='navigation_text' style={{color:'grey'}}>
                 <bold> Build Ur Pizza</bold>
              </div>
              </Link>
                     
 
              
          </div>
          <div className='navigation_right'>
            <button type="button" class="btn btn-warning navigation_shopping_btn">Shopping Cart</button>
          </div>
      </div>
  )
}

export default Navigation;