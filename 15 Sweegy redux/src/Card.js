import { useState } from "react";
import FoodCart from "./FoodCart";
const foodItems = [
    { id: 1, food: "pizza", Price: "200" },
    { id: 2, food: "Burgur", Price: "120" },
    { id: 3, food: "Pasta", Price: "80" },
    { id: 4, food: "Choumin", Price: "50" },
    { id: 5, food: "Rasmalai", Price: "40" },
    { id: 6, food: "Momo", Price: "50" },
    { id: 7, food: "Poha", Price: "30" }
];

export default function Card() {

    return (
        <div id="box" style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
            {foodItems.map((value) => {
                return (
                    <div id="card" key={value.id}>
                        <FoodCart value={value}></FoodCart>
                    </div>
                )
            })}
        </div>
    )
}