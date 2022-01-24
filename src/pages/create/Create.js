import { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useFetch } from '../../Hooks/useFetch'

import './Create.css'
export default function Create() {
    const [title, setTitle] = useState('')
    const [method, setMethod] = useState('')
    const [cookingTime, setCookingTime] = useState('')
    const [newIngredient, setNewIngredient] = useState('')
    const [ingredients, setIngredients] = useState([])
    const ingredientInput = useRef(null)
    const history = useHistory();
    

    // use Fetch
    const { postData, data } = useFetch('http://localhost:4000/recipes', 'POST')

    //  add ingredient
    const handleAddIngredient = (e) => {
        e.preventDefault()
        const ing = newIngredient.trim()

        if (ing && !ingredients.includes(ing)) {
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        }
        setNewIngredient('')
        ingredientInput.current.focus()
    }


    // submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log( title, ingredients, method, cookingTime);
        postData({ title, ingredients, method, cookingTime: cookingTime + ' minutes' })
    }

    // redirect user when we get data response
    useEffect(() => {
        if(data){
            history.push('/')
        }
    }, [data, history])

    return (
        <div className='create'>
            <h2 className='page-title'>Create Recipe</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Recipe Title</p>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} required/>
                </label>
                {/* ingredients */}

                <label>
                    <p>Recipe Ingredients</p>
                    <div className="ingredients">
                        <input type="text" 
                        onChange={(e) => setNewIngredient(e.target.value)} 
                        value={newIngredient}
                        ref={ingredientInput}/>
                        <button onClick={handleAddIngredient} className='btn'>Add</button>
                    </div>
                </label>
                <p>Current ingredients: { ingredients.map(i => <em key={i}>{i}, </em>) }</p>

                <label>
                    <p>Recipe Cooking Time</p>
                    <input type="number" onChange={(e) => setCookingTime(e.target.value)} value={cookingTime} required/>
                </label>

                <label>
                    <p>Recipe Method</p>
                    <textarea type="text" onChange={(e) => setMethod(e.target.value)} value={method} required ></textarea>
                </label>
                <button >Create</button>
            </form>
        </div>
    )
}
