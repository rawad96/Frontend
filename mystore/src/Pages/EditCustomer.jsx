import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Product from "./Product"
import { useParams } from "react-router"

const EditCustomer = () => {
    const dispatch = useDispatch()

    const customers = useSelector(state => state.customers)
    const purchases = useSelector(state => state.purchases)
    const products = useSelector(state => state.products)

    const { id } = useParams()

    const [customer, setcustomer] = useState(customers.find(customer => customer.id === id))


    const [firstName, setfirstName] = useState(customer.firstName)
    const [lastName, setlastName] = useState(customer.lastName)
    const [city, setcity] = useState(customer.city)

    const [update, setupdate] = useState(true)

    const updateOrDeleteData = (e) => {
        e.preventDefault()
        const obj = { id: id, firstName: firstName, lastName: lastName, city: city }
        if (update) {
            dispatch({ type: 'UPDATECUSTOMER', payload: obj })
        }
        else {
            dispatch({ type: 'DELETECUSTOMER', payload: obj.id })
        }
    }


    return (
        <>
            <div style={{ textAlign: "center", backgroundColor: "green" }}>
                <h1>Edit Customer</h1>
            </div>
            <div style={{ textAlign: "center" }}>
                <form onSubmit={updateOrDeleteData}>
                    First Name: <input type="text" defaultValue={customer.firstName} onChange={e => setfirstName(e.target.value)} /> <br /><br />
                    Last Name: <input type="text" defaultValue={customer.lastName} onChange={e => setlastName(e.target.value)} /> <br /><br />
                    City: <input type="text" defaultValue={customer.city} onChange={e => setcity(e.target.value)} /> <br /><br />

                    <button onClick={() => setupdate(true)}>Update</button>
                    <button onClick={() => setupdate(false)}>Delete</button>
                </form>

                {
                    purchases.map(p => {
                        return p.customerid === customer.id ? <Product product={products.find(prod => prod.id === p.productid)} purchases={purchases} showlist={false} key={p.productid} /> : ""
                    })
                }

            </div>
        </>
    )
}

export default EditCustomer
