import React from 'react';

import classes from './PizzaImage.css';
import PizzaImage from '../../assets/pizza.jpg';

const pizzaImage = () => (
    <div className={classes.PizzaDiv}>
        <img src={PizzaImage} className={classes.PizzaImage} />
    </div>
);

export default pizzaImage;