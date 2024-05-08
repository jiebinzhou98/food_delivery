import React, {Component} from "react";
import "./home.css";
import Header from "./header";
import Footer from "./footer"
import Menu1 from "../images/Assets/menu_1.png"
import Menu2 from "../images/Assets/menu_2.png"
import Menu3 from "../images/Assets/menu_3.png"
import Menu4 from "../images/Assets/menu_4.png"
import Menu5 from "../images/Assets/menu_5.png"
import food1 from "../images/Assets/food_1.png"
import food2 from "../images/Assets/food_2.png"
import food3 from "../images/Assets/food_3.png"
import food4 from "../images/Assets/food_4.png"
import food5 from "../images/Assets/food_5.png"
import food6 from "../images/Assets/food_6.png"
import food7 from "../images/Assets/food_7.png"
import food8 from "../images/Assets/food_8.png"
import food9 from "../images/Assets/food_9.png"
import food10 from "../images/Assets/food_10.png"
import food11 from "../images/Assets/food_11.png"
import food12 from "../images/Assets/food_12.png"
import food13 from "../images/Assets/food_13.png"
import food14 from "../images/Assets/food_14.png"
import food15 from "../images/Assets/food_15.png"
import food16 from "../images/Assets/food_16.png"
import food17 from "../images/Assets/food_17.png"
import food18 from "../images/Assets/food_18.png"
import food19 from "../images/Assets/food_19.png"
import food20 from "../images/Assets/food_20.png"


const Home = () => {

    const foodImages = [food1,food2,food3,food4,food5,food6,food7,
        food8,food9,food10,food11,food12,food13,food14,food15,food16,
        food17,food18,food19,food20]

    return (
      <div className="home">
        <div className="dish-category">
            <div className="category-item">
                <img src={Menu1}/>
                <span>Noodle</span>
            </div>
            <div className="category-item">
                <img src={Menu2}/>
                <span>Spring Roll</span>
            </div>
            <div className="category-item">
                <img src={Menu3}/>
                <span>PanCake</span>
            </div>
            <div className="category-item">
                <img src={Menu4}/>
                <span>Sandwitch</span>
            </div>
            <div className="category-item">
                <img src={Menu5}/>
                <span>Dessert</span>
            </div>
        </div>
        <div className="featured-dishes">
            <h1>Top Selling Dishes</h1>
            <div className="food-images">
                {foodImages.map((foodImage, index) => (
                <img src={foodImage} alt={`Food ${index + 1}`} key={index}/>
                ))}
            </div>
        </div>
      </div>
    );
  };
  
  export default Home;