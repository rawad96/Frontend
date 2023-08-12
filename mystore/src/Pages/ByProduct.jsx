import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"


const ByProduct = () => {

    const products = useSelector(state => state.products)
    const Allcustomers = useSelector(state => state.customers)
    const [product, setproduct] = useState({})
    const [customer, setcustomer] = useState({})

    const { id } = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        setcustomer(Allcustomers.find(customer => customer.id === id))
    }, [])


    const byProduct = (e) => {
        e.preventDefault()
        dispatch({ type: 'BY', payload: { productid: product.id, customerid: customer.id, price: product.price, date: new Date().toLocaleString() } })
    }

    return (
        <>
            <div style={{ backgroundColor: "green", textAlign: "center" }}>
                <h1>By Product</h1>
            </div>
            <div style={{ textAlign: "center" }}>
                <form onSubmit={byProduct}>
                    <label htmlFor="products">Products: </label>
                    <select name="products" id="products" onChange={e => setproduct(products.find(prod => prod.id === e.target.value))}>
                        <option value="" hidden></option>
                        {
                            products.map(product => {
                                return <option key={product.id} value={product.id}>{product.name}</option>
                            })
                        }
                    </select>
                    <br /> <br />
                    <button>By Product</button>
                </form>
            </div>
        </>
    )
}

export default ByProduct
