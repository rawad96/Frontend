import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Customer from "../components/Customer"

const EditProduct = () => {

    const products = useSelector(state => state.products)
    const purchases = useSelector(state => state.purchases)

    const { id } = useParams()

    const [product, setproduct] = useState(products.find(product => product.id === id))

    const [name, setname] = useState(product.name)
    const [price, setprice] = useState(product.price)
    const [quantity, setquantity] = useState(product.quantity)

    const [update, setupdate] = useState(true)

    const dispatch = useDispatch()



    const updateOrDeleteData = (e) => {
        e.preventDefault()
        const obj = { id: id, name: name, price: price, quantity: quantity }
        if (update) {
            dispatch({ type: 'UPDATEPRODUCT', payload: obj })
        }
        else {
            dispatch({ type: 'DELETEPRODUCT', payload: obj.id })
        }
    }


    return (
        <>
            <div style={{ textAlign: "center", backgroundColor: "green" }}>
                <h1>Edit Product</h1>
            </div>
            <div style={{ textAlign: "center" }}>
                <form onSubmit={updateOrDeleteData}>
                    Name: <input type="text" defaultValue={product.name} onChange={e => setname(e.target.value)} /> <br /><br />
                    Price: <input type="number" defaultValue={product.price} onChange={e => setprice(e.target.value)} /> <br /><br />
                    Quantiy: <input type="number" defaultValue={product.quantity} onChange={e => setquantity(e.target.value)} /> <br /><br />

                    <button onClick={() => setupdate(true)}>Update</button>
                    <button onClick={() => setupdate(false)}>Delete</button>
                </form>
                <li>
                    {
                        purchases?.map(customer => {
                            return customer.productid === product.id ? <Customer key={customer.customerid} customerId={customer.customerid} productId={product.id} purchases={purchases} /> : ''
                        })
                    }
                </li>
            </div>
        </>
    )
}

export default EditProduct
