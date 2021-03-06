import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { IState } from './models/interfaces';
import { reducer } from './redux/reducer';

import App from './routes/App';

const initialState:any = {
    "user":{
        "auth":false,
        "email": null,
        "password": null,
        "name": null
    },
    "cart" : [],
    "orders": [],
    "products": [
        {
            "id":1,
            "image":"https://firebasestorage.googleapis.com/v0/b/milky-makers.appspot.com/o/cake%20(1).png?alt=media&token=c33fb3fe-0224-42c9-acb6-06d884f34903",
            "title":"Signature Chocolate Chip Lactation Cookies",
            "price": 18.95,
            "description": "We combined the richness of creamy all-natural peanut butter with the goodness of oats into a baked soft and chewy cookie which creates the perfect balance of salty and sweet.",
            "newProduct":true
        },
        {
            "id":2,
            "image":"https://firebasestorage.googleapis.com/v0/b/milky-makers.appspot.com/o/cake%20(2).png?alt=media&token=188f5872-8efc-4d3f-aea1-bd4258e781b9",
            "title":"Peanut Butter Lactation Cookies",
            "price": 17.99,
            "description": "We combined the richness of creamy all-natural peanut butter with the goodness of oats into a baked soft and chewy cookie which creates the perfect balance of salty and sweet.",
            "newProduct":false
        },
        {
            "id":3,
            "image":"https://firebasestorage.googleapis.com/v0/b/milky-makers.appspot.com/o/cake%20(3).png?alt=media&token=618b4cbc-fe49-4e44-84cc-7c4b36fe0d46",
            "title":"Raisin Almond Lactation Cookies",
            "price": 16.99,
            "description": "We combined the richness of creamy all-natural peanut butter with the goodness of oats into a baked soft and chewy cookie which creates the perfect balance of salty and sweet.",
            "newProduct":false
        },
        {
            "id":4,
            "image":"https://firebasestorage.googleapis.com/v0/b/milky-makers.appspot.com/o/cake%20(4).png?alt=media&token=166d3078-2358-4e01-85bb-192ca4e78dc8",
            "title":"Power Boost Coconut Lactation Cookies",
            "price": 19.90,
            "description": "We combined the richness of creamy all-natural peanut butter with the goodness of oats into a baked soft and chewy cookie which creates the perfect balance of salty and sweet.",
            "newProduct":false
        },
        {
            "id":5,
            "image":"https://firebasestorage.googleapis.com/v0/b/milky-makers.appspot.com/o/cake%20(5).png?alt=media&token=d6c05f5b-fdda-4fab-bc56-6a713939832f",
            "title":"Signature Lactation Brownies",
            "price": 20.50,
            "description": "We combined the richness of creamy all-natural peanut butter with the goodness of oats into a baked soft and chewy cookie which creates the perfect balance of salty and sweet.",
            "newProduct":false
        },
        {
            "id":6,
            "image":"https://firebasestorage.googleapis.com/v0/b/milky-makers.appspot.com/o/cake%20(6).png?alt=media&token=fc7b7210-587b-43e8-a644-ffa3222efc74",
            "title":"Chocolate light lactation cookies",
            "price": 21.47,
            "description": "We combined the richness of creamy all-natural peanut butter with the goodness of oats into a baked soft and chewy cookie which creates the perfect balance of salty and sweet.",
            "newProduct":false
        },
        {
            "id":7,
            "image":"https://firebasestorage.googleapis.com/v0/b/milky-makers.appspot.com/o/milkcake.jpg?alt=media&token=acd7d634-997b-464d-b79c-5f1f6c15f953",
            "title":"Signature Chocolate Chip Lactation Cookies",
            "price": 27.00,
            "description": "We combined the richness of creamy all-natural peanut butter with the goodness of oats into a baked soft and chewy cookie which creates the perfect balance of salty and sweet.",
            "newProduct":true
        }
    ]
}

export const store = createStore(reducer , initialState);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));