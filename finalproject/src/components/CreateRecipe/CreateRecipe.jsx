import React, {useState} from 'react'
import './CreateRecipe.css'
import IngredientList from './IngredientList';
import RecipeBuilder from './RecipeBuilder';
import postremaracuyaimg from '../img/postre maracuya.webp'
const CreateRecipe = () => {

const [recipes, setRecipes] = useState([]);

const [recipesName, setRecipesName] = useState ("");

const addRecipes = () => {

    if (recipesName.trim()) {
        setRecipes([...recipes, { name: recipesName, completed: false}]);

        setRecipesName("");
    }
};


return (
    <>
    <div className='CreateRecipe-container'>
    <h2 className='texto1'>La receta mas popular</h2>
    <h3>Cheesecake de maracuyá</h3>
    <img className='img-recipe' src={postremaracuyaimg} alt="cheesecake de maracuya" />


    <div className='recipe-box'>
<h3>Preparación de la Receta</h3>
<h5>Para la base</h5>
<li>200 g de galletas</li>
<li>100 g de mantequilla derretida</li>

<h5>Para el relleno</h5>
<li>500g de queso crema (tipo Philadelphia) a temperatura ambiente</li>
<li>200g de crema de leche</li>
<li>100g de azúcar</li>
<li>4 hojas de gelatina</li>
<li>150 ml de pulpa de maracuyá(fresca o envasada)</li>
<li>2 cucharaditas de esencia de vainilla(opcional)</li>

<h5>Para la cobertura</h5>
<li>150 ml de pulpa de maracuyá(fresca o envasada)</li>
<li>50 g de azúcar</li>
<li>3 hojas de gelatina(o 5 g de gelatina en polvo sin sabor)</li>
    </div>
    

        <IngredientList />
        <RecipeBuilder />
    </div>
    
    </>
)
}

export default CreateRecipe