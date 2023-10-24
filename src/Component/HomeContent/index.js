import React from 'react'
import PizzeriaLogo from "../Assets/PizzeriaLogo.png";
import Navigation from '../Navigation';
import './home.css'

const HomeContent = () => {
  return (
     <div className='home-container'>
        <Navigation/>
        <div className='ps-5 pe-5'>
        <div className='text-center mt-3 h3'>
            Our story
        </div>
        <p className='text-start fs-6'>
        We believe in good. We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan page. Fans were given situations where they had to come up
        with wacky and fun excuses. The person with the best excuse won the Best Excuse Badge and won Pizzeria's vouchers. Their enthusiastic response proved
        that Pizzeria's Fresh Pan Pizza is the Tastiest Pan Pizza. Ever!
        </p>
        <p className='text-start fs-6'>
        Ever since we launched the Tastiest Pan Pizza, ever, people have not been able to resist the softest, cheesiest, crunchiest, butteriest Domino's Fresh Pan
Pizza. They have been leaving the stage in the middle of a performance and even finding excuses to be disqualified in a football match.
        </p>
        <p className='text-start fs-6'>
        We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan page. Fans were given situations where they had to come up with wacky and fun
excuses. The person with the best excuse won the Best Excuse Badge and won Domino's vouchers. Their enthusiastic response proved that Pizzeria's Fresh
Pan Pizza is the Tastiest Pan Pizza. Everl
        </p>
        <div class="row border-bottom pb-3 mb-3 pt-3">
            <div class="col-5">
                <img className='pizza-img' src="https://www.shutterstock.com/image-photo/raw-dough-pizza-ingredients-spices-260nw-526830277.jpg"/>
            </div>
            <div class="col-7 pizza-content">
                <div className='h3'>Ingredients</div>
                <p>We're ruthless about goodness. We have no qualms about tearing up a day-old
                lettuce leaf (straight from the farm), or steaming a baby (carrot). Cut. Cut. Chop.
                Chop. Steam. Steam. Stir Stir. While they're still young and fresh - that's our motto. It
                makes the kitchen a better place</p>
            </div>
         </div>
        <div class="row border-bottom pb-3 mb-3">
        <div class="col-7 pizza-content">
                <div className='h3'>Our Chefs</div>
                <p>They make sauces sing and salads dance. They create magic with skill,
                    knowledae. passion, and stirring spoons (among other things). They
                    make goodness so good, it doesn't know what to do with itself. We do
                    though. We send it to you</p>
            </div>
            <div class="col-5">
                <img className='pizza-img' src="https://www.shutterstock.com/image-photo/happy-chef-260nw-437116033.jpg"/>
            </div>
           
         </div>
        <div class="row border-bottom pb-3 mb-3">
            <div class="col-5">
                <img className='w-100' src="https://www.shutterstock.com/image-photo/vintage-analog-kitchen-countdown-timer-600w-669255388.jpg"/>
            </div>
            <div class="col-7 pizza-content">
                <div className='h3'>45 min delivery</div>
            </div>
         </div>
        </div>
     </div>
  )
}

export default HomeContent;