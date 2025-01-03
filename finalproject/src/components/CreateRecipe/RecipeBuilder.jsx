import React, {useState} from 'react'
import './RecipeBuilder.css'
const RecipeBuilder = () => {
const [ingredients, setIngredients] = useState([]);
const [ingredientName, setIngredientName] = useState ("");
const [ingredientAmount, setIngredientAmount] = useState(1);

const nameChange = (e) => {
    setIngredientName(e.target.value)
};
const amountChange = (e) => {
    setIngredientAmount (Number(e.target.value))
};
const addIngredient = () => {
    if (ingredientName.trim() !== '') {
        setIngredients([...ingredients, {name: ingredientName, amount: ingredientAmount},

        ]);
        setIngredientName('');
        setIngredientAmount(1);
    }
};

const deleteIngredient = (index) => {
    const updateIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(updateIngredients);
};
return (
    <>
    <div className='panel-container'>
    <div className='panel-box'>
        <h2 className='texto4'>Panel de ingredientes</h2>
        <input  className='input2'
            type="text"
            value={ingredientName}
            onChange={nameChange}
            placeholder="Nombre del ingrediente"
        />
        <input className='input2'
            type="number"
            value={ingredientAmount}
            onChange={amountChange}
            min="1"
            placeholder="Cantidad"
        />

        <button className="btn3" onClick={addIngredient}>
            Agregar Ingrediente
        </button>
    <a href="/" className='enlace'>Volver al inicio</a>
        </div>
        
        <div>
        <h2 className='texto5'>Ingredientes Seleccionados</h2>
        
        {ingredients.length === 0 ? (
            <p className='parrafo'>No hay ingredientes seleccionados</p>
        ) : (
            <ul>
            {ingredients.map((ingredient, index) => (
                <li key={index}>
                <span>
                    {ingredient.name} - {ingredient.amount}{" "}
                    {ingredient.amount > 1 ? "unidades" : "unidad"}
                </span>
                <button className='btn4' onClick={() => deleteIngredient(index)}>Eliminar</button>
                </li>
            ))}
            
            </ul>
        )}
        
        </div>
    </div>
    
    </>
)
}

export default RecipeBuilder