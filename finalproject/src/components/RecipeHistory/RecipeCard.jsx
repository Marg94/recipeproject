import React from 'react'
import './RecipeCard.css'
import panquequeimg from '../img/panqueque frutilla.jpg'
import ensaladaimg from '../img/ensalada de frutas.jpg'
import postrefrutillaimg from '../img/postre en vaso frutilla.jpg'
import postreoreoimg from '../img/postre-en-vaso-dulce-leche.jpg.jpg'
import RecipeHistory from './RecipeHistory'

    const RecipeCard = ({setView}) => {

        const recipes = [
            {
                id:1,
                title: 'Panqueque de frutilla, banana y nutella',
                img: panquequeimg,
                ingredients: ['Frutilla', 'Banana', 'Nutella', 'Panqueque'],
                instructions: 'Coloca las frutas en el panqueque y agrega la nutella al gusto',
            },
            {
                id:2,
                title: 'Ensalada de frutas',
                img: ensaladaimg,
                ingredients: ['Manzana', 'Banana', 'Naranja', 'Cereza', 'Kiwi', 'Frutilla'],
                instructions: 'Coloca las frutas en el panqueque y agrega la nutella al gusto',
            },
            {
                id:3,
                title: 'Postre en vaso con frutilla',
                img: postrefrutillaimg,
                ingredients: ['Frutilla', 'Arandanos', 'Crema-yogur'],
                instructions: 'Tritura las galletas, coloca capas de crema y frutilla en un vaso',
            },
            {
                id:4,
                title: 'Postre con oreo y dulce de leche',
                img: postreoreoimg,
                ingredients: ['Galletas de oreo', 'Dulce de leche', 'Crema'],
                instructions: 'Tritura las oreos y mezcla con dulce de leche y crema',
            },
        ]
        const viewDetails = (recipe) => {
            
            localStorage.setItem('SelectedRecipe', JSON.stringify(recipe));
            setView ('recipe-history');
        }; 


return (
    <>
    <div className='cards'>
        {recipes.map((recipe) => (
            <div className='card' key={recipe.id}>
            <h4 className='recipe-title'>{recipe.title}</h4>
            <img src={recipe.img} alt="recipe.title"/>
            <button className='detail-btn' onClick={() => viewDetails (recipe)}>Ver detalles</button>
            
            </div>
        ))}
    </div>
    
    </>
)
}

export default RecipeCard