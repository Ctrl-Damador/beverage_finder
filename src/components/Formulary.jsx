import { Button, Form, Row, Col } from 'react-bootstrap'
import useCategories from '../hooks/useCategories'
import { useState } from 'react'

const Formulary = () => {

  const { categories, getId } = useCategories()
  const [Search, setSearch] = useState({
    name: '',
    category: ''
  })
 
  return (
    <Form>
      <Row>
        <Col md={6}>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='name'>Nombre licor</Form.Label>
            <Form.Control
              id='name'
              type='text'
              placeholder='Ej: Tequila, Vodka, etc'
              name='name'
              value={Search.name}
              onChange={e => setSearch({
                ...Search,
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
              value={Search.category}
              onChange={e => setSearch({
                ...Search,
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
          >
            Buscar bebidas
          </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default Formulary