import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import Customer from "../components/Customer"


const Product = ({ product, showlist }) => {

    const purchases = useSelector(state => state.purchases)



    return (
        <>
            <div style={{ border: "1px solid red", marginTop: "10px", width: "max-content", marginLeft: "auto", marginRight: "auto" }}>
                Name:{product.name} - <Link to={'/editproduct/' + product.id} >Edit {product.name}</Link><br />
                Price: {product.price} <br />
                Quantity: {product.quantity} <br />
                <li style={{ display: !showlist ? "unset" : "block" }}>
                    {
                        purchases.map(obj => {
                            return obj.productid === product.id ? <Customer key={obj.customerid} customerId={obj.customerid} productId={product.id} purchases={purchases} /> : ""
                        })
                    }
                </li>
            </div>
        </>
    )
}

export default Product
