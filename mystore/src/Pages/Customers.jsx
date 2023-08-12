import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import AllCustomerProducts from "../components/AllCustomerProducts"


const Customers = () => {

    const customers = useSelector(state => state.customers)
    const products = useSelector(state => state.products)
    const purchases = useSelector(state => state.purchases)

    const [customerId, setcustomerId] = useState('')

    const navigat = useNavigate()

    const byProduct = () => {
        navigat('/byproduct/' + customerId)
    }


    return (
        <>
            <div style={{ textAlign: "center", backgroundColor: "green" }}>
                <h1>Customers</h1>

            </div>
            <div style={{ textAlign: "center" }}>
                <table border={1} style={{ margin: "auto" }}>
                    <tbody>
                        {
                            customers.map((customer, index) => {
                                return <tr key={index}>
                                    <td>{customer.firstName}{' '}{customer.lastName}</td>
                                    <td>
                                        <AllCustomerProducts key={customer.id} customerId={customer.id} />
                                    </td>
                                    <td>
                                        {
                                            purchases.map((p, index) => {
                                                return p.customerid === customer.id ? <ul key={index}>{p.date}</ul> : <ul key={index}></ul>
                                            })
                                        }
                                    </td>
                                    <td><button onClick={() => setcustomerId(customer.id)}>Select</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table> <br />
                <button onClick={byProduct}>By Product</button>
            </div>
        </>
    )
}

export default Customers
