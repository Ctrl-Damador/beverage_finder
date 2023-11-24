import { useState, useEffect, createContext } from "react";
import axios from "axios";

const CategoriesContext = createContext()

const CategoriesProvider = ({children}) => {

    const [ categories, setCategories] = useState([])

    const getCategories = async () => {
        try {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

            const { data } = await axios(url)

            setCategories(data.drinks)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        getCategories()
     
    }, [])

    const getId = () => {
        const random = Math.random().toString(36).substr(2)
        const fecha = Date.now().toString(36)
  
        return random + fecha
     }
  
    

    return(
        <CategoriesContext.Provider
            value={{
                categories,
                getId
            }}
        >
            {children}
        </CategoriesContext.Provider>
    )
}

export {
    CategoriesProvider
}

export default CategoriesContext