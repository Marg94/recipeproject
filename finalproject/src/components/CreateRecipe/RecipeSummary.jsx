import React from 'react';
import './RecipeSummary.css';

const RecipeSummary = ({ recipe }) => {

const calculateNutritionalScore = (ingredients) => {
    const scores = {
    'Frutilla': 10,
    'Banana': 8,
    'Nutella': -5,
    'Panqueque': -2,
    'Manzana': 9,
    'Kiwi': 9,
    'Cereza': 7,
    'Galletas de oreo': -8,
    'Dulce de leche': -6,
    'Crema': -4,
    'Queso crema': 6,
    'Gelatina': 5,
    'Arandanos': 10,
    };

    let totalScore = 0;
    ingredients.forEach((ingredient) => {
    totalScore += scores[ingredient] || 0;
    });
    return totalScore;
};


const nutritionalScore = calculateNutritionalScore(recipe.ingredients);

return (
    <div className="recipe-summary">
    <h2>{recipe.title}</h2>
    <p><strong>Resumen:</strong> {recipe.instructions}</p>
    <p><strong>Ingredientes:</strong></p>
    <ul>
        {recipe.ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
        ))}
    </ul>
    <div className="nutritional-score">
        <h3>Puntaje nutricional: {nutritionalScore}</h3>
        <p>{nutritionalScore > 0 ? 'Receta saludable' : 'Receta con alto contenido calórico'}</p>
    </div>
    </div>
);
};

export default RecipeSummary;
