import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


const Customer = ({ productId, customerId, purchases }) => {

    const customers = useSelector(state => state.customers)
    const [customer, setcustomer] = useState({})
    const [date, setdate] = useState('')

    useEffect(() => {
        setcustomer(customers.find(customer => customer.id === customerId))
        purchases.map(p => {
            if (p.customerid === customerId && p.productid === productId) {
                setdate(p.date)
            }
        })
    }, [])

    return (
        <>
            <div>
                Name: <Link to={'/editcustomer/' + customerId}>{customer.firstName}{' '}{customer.lastName}</Link> <br />
                Date: {date}
            </div>
        </>
    )
}

export default Customer
