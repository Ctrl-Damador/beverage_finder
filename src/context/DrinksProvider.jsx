import { useState, useEffect, createContext } from "react";
import axios from "axios";

const DrinksContext = createContext()

const DrinksProvider = ({children}) => {

    const [ drinks, setDrinks ] = useState([])
    const [modal, setmodal] = useState(false)
    const [drinkId, setDrinkId] = useState(null)
    const [ recipe, setRecipe ] = useState({})

    useEffect(() => {
        const getRecipe = async () => {
            if(!drinkId) return

            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`

                const { data } = await axios(url)

                setRecipe(data.drinks[0])
            } catch (error) {
                console.log(error)
            }
        }
        getRecipe()
    }, [drinkId])

    const getDrinks = async details => {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${details.name}&c=${details.category}`
            const { data } = await axios(url)

            console.log(data)
            setDrinks(data.drinks)
        } catch (error) {
            console.log(error)
        }
    }
    
    const handleModalClick = () => {
        setmodal(!modal)
    }

    const handleDrinkIdClick = id => {
        setDrinkId(id)
    }

    return(
        <DrinksContext.Provider
            value={{
               getDrinks, 
               drinks, 
               handleModalClick,
               modal,
               handleDrinkIdClick, 
               recipe,
               setRecipe
            }}
        >
            {children}
        </DrinksContext.Provider>
    )
}

export {
    DrinksProvider
}

export default DrinksContext