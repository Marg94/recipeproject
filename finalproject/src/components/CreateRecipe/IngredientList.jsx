import React from 'react'
import './IngredientList.css'
const IngredientList = () => {
    const ingredients = [
        {
            type: 'Tortas',
            list: ['Harina', 'Azucar', 'Huevos', 'Manteca', 'Polvo para hornear'],
        },
        {
            type: 'Postres',
            list: ['Chocolate', 'Leche condensada', 'Gelatina', 'Crema', 'Galletas', 'Mermelada']
        },
        {
            type: 'Frutas',
            list: ['Manzana', 'Naranja', 'Banana', 'Frutilla', 'Kiwi', 'Cereza']
        }
        ];
return (
    <>
    <div>
    <h2 className='texto3'>Nuestros ingredientes</h2>
    </div>
    <div className='ingredient-container'>
    
    {ingredients.map(({type, list}) => (
<div
    key={`${type}-${list}`}>
    <h2>{type}</h2>
    <ul className='ingredient-list'>
        {list.map((item) => (
            <li key={`${item}-${list}`}>{item}</li>
        ))}
    </ul>
</div>
))}
    
    </div>
    
    </>
)
}

export default IngredientList