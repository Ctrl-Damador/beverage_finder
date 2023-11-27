import { Button, Form, Row, Col, Alert } from 'react-bootstrap'
import useCategories from '../hooks/useCategories'
import { useState } from 'react'
import useDrinks from '../hooks/useDrinks'
const Formulary = () => {

  const { getDrinks } = useDrinks()
  const [ alert, setAlert ] = useState()
  const { categories, getId } = useCategories()
  const [search, setSearch] = useState({
    name: '',
    category: ''
  })

  const handleSubmit = e => {
    e.preventDefault()

    if(Object.values(search).includes('')){
      setAlert('Acción denegada: Todos los campos son obligatorios.')
      return
    }
    setAlert('')
    getDrinks(search)

  }
 
  return (
    <Form
      onSubmit={handleSubmit}
    >
      {alert && <Alert variant='danger' className='text-center'>{alert}</Alert>}
      <Row>
        <Col md={6}>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='name'>Nombre licor</Form.Label>
            <Form.Control
              id='name'
              type='text'
              placeholder='Ej: Tequila, Vodka, etc'
              name='name'
              value={search.name}
              onChange={e => setSearch({
                ...search,
                [e.target.name]: e.target.value
              })}

            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='category'>Categoria</Form.Label>
            <Form.Select
              id='category'
              name='category'
              value={search.category}
              onChange={e => setSearch({
                ...search,
                [e.target.name]: e.target.value
              })}
            >
              <option>- Selecciona Categoria -</option>
              {categories.map(category =>(
                <option
                  key={getId()}
                  value={category.strCategory}

                >
                  {category.strCategory}
                  
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row className='justify-content-end'>
        <Col md={3}>
          <Button
            variant='outline-danger'
            className='text-uppercase w-100'
            type='Submit'
          >
            Buscar bebidas
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default Formulary