import { useParams, Link } from 'react-router-dom'
// styles
import './Recipe.css'
// hooks
import { useFetch } from '../../Hooks/useFetch';

export default function Recipe() {
    const { id } = useParams()
    const url = 'http://localhost:4000/recipes/'+id;
    const { data: recipe, error } = useFetch(url)

    
    return (
        <div className='recipe'>
            {error && <div>{error}</div>}
            {recipe && (
                <div key={recipe.id} className='card'>
                    <h2>{recipe.title}</h2>
                    <p>Cooking time: {recipe.cookingTime}</p>
                    <ul>
                        { recipe.ingredients.map(ing => <li key={ing}><p>{ing}</p></li>) }
                    </ul>
                    <div>{recipe.method}</div>
                    <Link to="/">Back...</Link>
                </div>
            )}
        </div>
    )
}
