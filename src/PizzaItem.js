import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "./Component/Navigation";
import PizzeriaLogo from "./Component/Assets/PizzeriaLogo.png";
import Footer from "./Component/Footer";

const ingredientData = [
  {
    menu_name: "Panner Tikka",
    type: "veg",
    price: "290",
    img: "https://thumb9.shutterstock.com/display_pic_with_logo/376831/127528958/stock-photo-delicious-italian-pizza-over-white-127528958.jpg",
    description:
      "This is popular italian pizzaa flavoured with maintined tikka sauce and paneer",
    ingredients: ["dough", "pizza sauce", "seasoning sauce"],
    toppings: ["panner", "fried onion", "capsicum"],
  },
  {
    menu_name: "Chicken Italiaona",
    type: "veg",
    price: "260",
    img:"https://thumb7.shutterstock.com/display_pic_with_logo/96886/96886,1274350207,7/stock-photo-pizza-53553874.jpg",
    description:
    "This is popular italian pizza flavoured with light sugary taste and creamy touch",
    ingredients: [ "deep dish pizza mix",
    "pizza saucce",
    "pizza sauce seasoning",
    "cheese",
    "plain butter"],
    toppings: ["Pepperoni",
    "Mushroom",
    "Capsicum",
    "Black beans"],
  },
  {
    menu_name: "Margherita Pizza",
    type: "veg",
    price: "260",
    img:"https://thumb7.shutterstock.com/display_pic_with_logo/96886/96886,1274350207,7/stock-photo-pizza-53553874.jpg",
    description:
      "A classic Italian pizza with tomato sauce, fresh mozzarella, and basil leaves",
    ingredients: ["dough", "tomato sauce", "mozzarella cheese", "basil leaves"],
    toppings: ["black olives", "mushrooms"],
  },

  {
    menu_name: "Chicken Tikka Pizza",
    type: "non-veg",
    price: "380",
    img:"https://thumb9.shutterstock.com/display_pic_with_logo/2793292/332497832/stock-photo-mixture-pizza-italian-food-332497832.jpg",
    description:
      "Pizza topped with tomato sauce, spicy chicken tikka, onions, and green peppers",
    ingredients: [
      "dough",
      "tomato sauce",
      "spicy chicken tikka",
      "onions",
      "green peppers",
    ],
    toppings: ["cheddar cheese", "coriander leaves"],
  },

  {
    menu_name: "Veggie Supreme Pizza",
    type: "veg",
    price: "340",
    img:"https://thumb7.shutterstock.com/display_pic_with_logo/2793292/246331354/stock-photo-pizza-margherita-italian-246331354.jpg",
    description:
      "A vegetarian pizza loaded with tomato sauce, cheese, onions, mushrooms, and bell peppers",
    ingredients: [
      "dough",
      "tomato sauce",
      "cheese",
      "onions",
      "mushrooms",
      "bell peppers",
    ],
    toppings: ["feta cheese", "olives", "jalapenos"],
  },

  {
    menu_name: "Pepperoni Pizza",
    type: "non-veg",
    price: "400",
    img:"https://thumb9.shutterstock.com/display_pic_with_logo/2793292/332497832/stock-photo-mixture-pizza-italian-food-332497832.jpg",
    description:
      "A classic pizza topped with tomato sauce, mozzarella cheese, and spicy pepperoni",
    ingredients: ["dough", "tomato sauce", "mozzarella cheese", "pepperoni"],
    toppings: ["parmesan cheese", "red chili flakes"],
  },

  {
    menu_name: "Margarita Pasta",
    type: "veg",
    price: "220",
    img:"https://thumb9.shutterstock.com/display_pic_with_logo/376831/127528958/stock-photo-delicious-italian-pizza-over-white-127528958.jpg",
    description:
      "A classic Italian pasta dish made with fresh tomato sauce, basil, and Parmesan cheese",
    ingredients: ["pasta", "tomato sauce", "basil", "Parmesan cheese"],
    toppings: ["sundried tomatoes", "green olives"],
  },

  {
    menu_name: "BBQ Chicken Pizza",
    type: "non-veg",
    price: "420",
    img:"https://thumb9.shutterstock.com/display_pic_with_logo/376831/127528958/stock-photo-delicious-italian-pizza-over-white-127528958.jpg",
    description:
      "Pizza topped with BBQ sauce, grilled chicken, onions, and green peppers",
    ingredients: [
      "dough",
      "BBQ sauce",
      "grilled chicken",
      "onions",
      "green peppers",
    ],
    toppings: ["cheddar cheese", "barbecue chicken"],
  },
];

const PizzaItem = ({
  name,
  image,
  description,
  price,
  ingredients,
  toppings,
}) => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setloading(true);
    axios
      .get("http://localhost:7000/Ingredients")
      .then((response) => {
        setdata(response.data);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
        setloading(false);
        // handle the error, e.g. display an error message in your application
      });
  }, []);
  console.log("data", data);
  if (loading) {
    return <h1>loading</h1>;
  }
  return (
    <>
      <Navigation />
      <div className="pizza-item">
        <div class="row m-0">
          {ingredientData.map((val) => (
            <div class="col-6 mb-3 border">
              <div class="row ">
                <div class="col">
                  <p class="fs-5"><bold><h4>{val.menu_name}</h4></bold></p>
                  
                  <p class="fs-6 mt-2 mb-2"  style={{width:'15px',height:'15px', background : val.type === 'veg' ? 'green' : 'red' }}><br/>{val.type}</p><br/><br/>
                  <p class="fs-6 mt-2 mb-2">₹{val.price}.00</p>
                </div>
                <div class="col">
                  <p class="fs-6 mt-2 mb-2">{val.description}</p>
                  <p class="fs-6 mt-2 mb-2">
                   <h6> Ingredients</h6> : {val.ingredients.join(", ")}
                  </p>
                  <p class="fs-6 mt-2 mb-2">
                  <h6>Toppings</h6>: {val.toppings.join(", ")}
                  </p>
                </div>
                <div class="col">
                
                  <img
                    class="img-fluid mt-3"
                    src={val.img}
                    style={{ height: "150px" }}
                    alt={val.menu_name}
                  /><br/>
                  <button type="button" class="btn btn-warning mt-3">Add Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    <Footer/>
    </>
  );
};

export default PizzaItem;
