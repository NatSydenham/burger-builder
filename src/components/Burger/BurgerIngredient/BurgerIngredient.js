import React from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerIngredient.module.css';

const burgerIngredient = (props) => {
    let ingredient = null;
    switch (props.type) {
        case ('bread-bottom'):
            ingredient = <div className={styles.BreadBottom}></div>;
            break;
        case ('bread-top'):
            ingredient = (
                <div className={styles.BreadTop}>
                    <div className={styles.Seeds1}></div>
                    <div className={styles.Seeds2}></div>
                </div>
            );
            break;
        case ('meat'):
        case ('cheese'):
        case ('salad'):
        case ('bacon'):
            const ingredientClass = props.type.charAt(0).toUpperCase() + props.type.slice(1);
            ingredient = <div className={styles[ingredientClass]}></div>
            break;
        default: 
            ingredient = null;
            break;
    }
    return ingredient;
};

burgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default burgerIngredient;