import { Container } from "react-bootstrap"
import Formulary from "./components/Formulary"
import ListDrinks from "./components/ListDrinks"
import { CategoriesProvider } from "./context/CategoriesProvider"
import { DrinksProvider } from "./context/DrinksProvider"
import ModalDrink from "./components/ModalDrink"

function App() {

  return (
    <CategoriesProvider>
      <DrinksProvider>
        <header className="py-5">
          <h1>Buscador de bebidas</h1>
        </header>
        <Container className="mt-5">
          <Formulary />
          <ListDrinks/>
          <ModalDrink/>
        </Container>
      </DrinksProvider>
    </CategoriesProvider>
  )
}

export default App
