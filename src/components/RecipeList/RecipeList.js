import { Link } from 'react-router-dom'
import './RecipeList.css'

export default function RecipeList({ recipes }) {

    if(recipes.length === 0) {
        return (
            <div className="recipe">
                <div className="card-no-recipe">No recipes to load...</div>
            </div>
        )
    }

    return (
        <div className="recipe-list">
            { 
                recipes.map((recipe) => (
                    <div key={recipe.id} className='card'>
                        <h2>{recipe.title}</h2>
                        <p>Cooking time: {recipe.cookingTime}</p>
                        <div>Method: {recipe.method && recipe.method.substring(0, 50)}</div>
                        <Link to={`/recipe/${recipe.id}`}>Cook This</Link>
                    </div>
                )) 

                
            }
        </div>
    )
}
