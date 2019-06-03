import React from 'react';
 
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ( props ) => {//ingrediants is obj, transforming object in array
    let transformedIngredients = Object.keys( props.ingredients ) //object.keys - give us a array with string (becon, meat..)
        .map( igKey => {//maps execute a function on each element in  input array. igKey is argument (salat or smth).
            return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {//Array() metod, a 'i' je 1.2.3. i sl
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            } );
        } )
        .reduce((arr, el) => { //allows us to transform an array into something else (previosVaule and currentVaule)
            return arr.concat(el)
        }, []); 
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;