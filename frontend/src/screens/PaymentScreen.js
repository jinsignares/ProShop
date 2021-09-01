import { useState } from "react"
import { Form, Button, Col, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import CheckOutSteps from "../components/CheckOutSteps"
import FormContainer from '../components/FormContainer'
import { savePaymentMethod } from "../redux/actions/cartActions"

const PaymentScreen = ({ history }) => {
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    if (!shippingAddress) {
        history.push('/shipping')
    }

    const dispatch = useDispatch()

    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }

    return (
        <FormContainer>
            <CheckOutSteps step1 step2 step3 />
            <h1>Payment Method</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label as='legend'>
                        Select Method
                    </Form.Label>
                    <Row>
                        <Col>
                            <Form.Check type='radio' label='PayPal or Credit Card' id='PayPal' name='paymentMethod' value='PayPal' checked onChange={(e) => setPaymentMethod(e.target.value)}></Form.Check>
                            <Form.Check type='radio' label='PSE' id='PSE' name='paymentMethod' value='PSE' checked onChange={(e) => setPaymentMethod(e.target.value)}></Form.Check>
                        </Col>
                    </Row>
                </Form.Group>
                <Button type='submit' variant='primary' className='mt-3 w-100'>Continue</Button>
            </Form>
        </FormContainer>
    )
}

export default PaymentScreen
