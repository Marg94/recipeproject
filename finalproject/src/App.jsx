import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateRecipe from './components/CreateRecipe/CreateRecipe'
import Home from './components/Home/Home'
import RecipeHistory from './components/RecipeHistory/RecipeHistory'

const App = () => {

  const [view, setView] = useState('home');
  
    return (
      <>
      <div className='app-container'>

      {view === 'home' && <Home setView={setView} />}
      {view === 'create-recipe' && <CreateRecipe/>}
      {view === 'recipe-history' && <RecipeHistory setView={setView}/>}

  </div>
      </>
    )
  }
  
  export default App
