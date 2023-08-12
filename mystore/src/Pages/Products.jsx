import { useSelector } from "react-redux"
import Product from "./Product"
import { useEffect, useState } from "react"

const Products = () => {

    const products = useSelector(state => state.products)
    const purchases = useSelector(state => state.purchases)
    const [total, settotal] = useState(0)

    useEffect(() => {
        var totalA = 0
        purchases.map((p) => {
            return totalA = totalA + p.price
        })
        settotal(totalA)
    }, [])

    return (
        <>
            <div style={{ textAlign: "center", backgroundColor: "green" }}>
                <h1>Products</h1>
            </div>
            <div style={{ textAlign: "center" }}>
                <strong> Total Amount:</strong> {total}
                {
                    products.map(product => {
                        return <Product key={product.id} product={product} showlist={true} />
                    })
                }
            </div>
        </>
    )
}

export default Products
