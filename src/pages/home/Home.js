// styles
import './Home.css'
// hooks
import { useFetch } from '../../Hooks/useFetch';
//components
import Loading from '../../components/Loading/Loading';
import RecipeList from '../../components/RecipeList/RecipeList';


export default function Home() {
    const {data: recipes, isPending, error } = useFetch("http://localhost:4000/recipes")
    return (
        <div className="home">
            { isPending &&  <Loading /> }
            { error && <div>{ error } </div> }
            { recipes && <RecipeList recipes = {recipes} /> }
            
        </div>
    )
}
