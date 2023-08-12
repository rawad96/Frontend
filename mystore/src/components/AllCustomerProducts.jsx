import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const AllCustomerProducts = ({ customerId }) => {

    const purchases = useSelector(state => state.purchases)
    const products = useSelector(state => state.products)

    const [names, setnames] = useState([])

    useEffect(() => {
        purchases.map(p => {
            if (p.customerid === customerId) {
                products.map(prod => {
                    if (prod.id === p.productid) {
                        setnames([...names, prod])
                    }
                    console.log(names);
                })
            }
        })

    }, [])


    return (
        <>
            <li>
                {
                    names?.map((prod, index) => {
                        return <ul key={index}><Link to={'/editproduct/' + prod.id}>{prod.name}</Link></ul>
                    })
                }
            </li>
        </>
    )
}

export default AllCustomerProducts
