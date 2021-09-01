import { Link } from 'react-router-dom'
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap'
import Rating from '../components/Rating'
import { useEffect, useState } from 'react'
import axios from 'axios'

const ProductScreen = ({ match }) => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`/api/products/${match.params.id}`)
            setProduct(data)
        }
        fetchProduct()
    }, [match.params.id])

    const { image, name, rating, numReviews, price, description, countInStock } = product

    return (
        <>
            <Link className='btn btn-light my-3' to='/'>Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image fluid src={image} alt={name} />
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>{name}</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={rating} text={`${numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: ${description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price:
                                    </Col>
                                    <Col>
                                        <strong>${price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Status:
                                    </Col>
                                    <Col>
                                        {countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className='btn-block w-100' type='button' disabled={countInStock === 0}>Add To Cart</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen
