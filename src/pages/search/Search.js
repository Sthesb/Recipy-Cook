import { useLocation } from 'react-router-dom'
// hooks
import { useFetch } from '../../Hooks/useFetch';
//components
import Loading from '../../components/Loading/Loading';
import RecipeList from '../../components/RecipeList/RecipeList';
// styles
import './Search.css'

export default function Search() {
    
    const queryString = useLocation().search;
    const queryParams = new URLSearchParams(queryString)
    const query = queryParams.get('q');

    const url = 'http://localhost:4000/recipes?q=' + query ;
    console.log( url)
    const { data: recipes, isPending, error } = useFetch(url)
    return (
        <div className="home">
            <h2 className='page-title' >Recipes including : {query }</h2>
            { isPending && <Loading /> }
            { error && <div>{ error } </div> }
            { recipes && <RecipeList recipes = {recipes} /> }
            
        </div>
    )
}
