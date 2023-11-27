import { useState, useEffect, createContext } from "react";
import axios from "axios";

const DrinksContext = createContext()

const DrinksProvider = ({children}) => {

    const [ drinks, setDrinks ] = useState([])
    const [modal, setmodal] = useState(false)

    const getDrinks = async details => {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${details.name}&c=${details.category}`
            const { data } = await axios(url)

            setDrinks(data.drinks)
        } catch (error) {
            console.log(error)
        }
    }
    
    const handleModalClick = () => {
        setmodal(!modal)
    }

    return(
        <DrinksContext.Provider
            value={{
               getDrinks, 
               drinks, 
               handleModalClick,
               modal
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