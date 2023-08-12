import { useSelector } from "react-redux"
import Product from "./Product"
import AllProducts from "../components/AllProducts"
import AllCustomers from "../components/AllCustomers"
import { useMemo, useState } from "react"
import AllCustomerProducts from "../components/AllCustomerProducts"


const Purchases = () => {

    const purchases = useSelector(state => state.purchases)
    const products = useSelector(state => state.products)
    const customers = useSelector(state => state.customers)

    const [date, setDate] = useState('')
    const [product, setproduct] = useState({})
    const [customer, setcustomer] = useState({})

    const [search, setsearch] = useState(false)
    const [presentAll, setpresentAll] = useState(false)

    const handleproduct = (e) => {
        setproduct(products.find(product => product.id === e))
    }

    const handlecustomer = (e) => {
        setcustomer(customers.find(customer => customer.id === e))
    }

    const set = () => {
        if (product && customer && date) {
            setsearch(true)
            setpresentAll(false)
        } else {
            setsearch(false)
            setpresentAll(true)
        }
    }


    return (
        <>
            <div style={{ textAlign: "center", backgroundColor: "green" }}>
                <h1>Purchases</h1>
            </div>
            <div style={{ textAlign: "center" }}>
                Search: <input type="date" onInput={e => setDate(e.target.value)} /><br /><br />
                All Products: <AllProducts products={products} getProduct={handleproduct} /><br />
                All Customers: <AllCustomers customers={customers} getCustomer={handlecustomer} /><br />
                <button onClick={set}>Search</button><br /><br />
                <table style={{ display: search && !presentAll ? 'block' : 'none', width: "max-content", margin: "auto" }} border={1}>
                    <tbody>
                        {
                            purchases.map((purchase, index) => {
                                if (purchase.customerid === customer.id && purchase.productid === product.id) {
                                    return <tr key={index}>
                                        <td>{customer.firsName}{' '}{customer.lastName}</td>
                                        <td>{product.name}</td>
                                        <td>{date}</td>
                                    </tr>
                                }
                            })
                        }
                    </tbody>
                </table>
                <table style={{ display: !search && presentAll ? 'block' : 'none', width: "max-content", margin: "auto" }} border={1}>
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
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Purchases
