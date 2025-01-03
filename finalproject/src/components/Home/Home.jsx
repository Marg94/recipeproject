import React, {useState} from 'react'
import './Home.css'
import img from '../img/postres.jpg'
import { GiCook } from "react-icons/gi";
import RecipeCard from '../RecipeHistory/RecipeCard';
const Home = ({setView}) => {

const [hover, setHover] = useState(false);

return (
    <>
    <div className='nav'>
    <h1>Armentina</h1>
    <button onMouseEnter={() => setHover(true)} 
    onMouseLeave={() => setHover(false)} 
    onClick={() => setView('create-recipe')}
    className='btn1'> 
    { hover ? (
        <span>Crear Receta</span>
    ) : (<GiCook className='icono'/>)} </button>
    
    </div>

    <div className='home'>
    <img className='img1' src={img} alt="" />
    </div>
    <RecipeCard setView={setView}/>
    <GiCook />
    </>
)
}

export default Home