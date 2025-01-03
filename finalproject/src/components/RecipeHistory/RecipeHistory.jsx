import React from 'react';
import './RecipeHistory.css'
import './RecipeCard'
import RecipeSummary from '../CreateRecipe/RecipeSummary';

const RecipeHistory = ({setView}) => {
    const selectedRecipe = JSON.parse(localStorage.getItem('SelectedRecipe'));
    if (!selectedRecipe) {
        return <p>No hay datos disponibles para esta receta.</p>;
    }
    
return (
    <div className='recipe-container'>
        <div className='detail-container'>
        <div className='detail-box'>
        <h1>Detalles de la receta</h1>
        <h2>{selectedRecipe.title}</h2>
        <img className='recipe-img' src={selectedRecipe.img} alt={selectedRecipe.title} />
        </div>
        <div>
        <h3>Ingredientes:</h3>
        <ul className='ul-box'>
            {selectedRecipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
            ))}
        </ul>
        </div>
        <div className='instruction-box'>
        <h3>Instrucciones:</h3>
        <p>{selectedRecipe.instructions}</p>
        </div>
        <button className='btn3' onClick={() => setView('home')}>Volver a las recetas</button>
        </div>
        <RecipeSummary recipe={selectedRecipe} />
    </div>
    
)
}

export default RecipeHistory;