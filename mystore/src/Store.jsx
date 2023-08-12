import { Link, Outlet, Route, Routes } from 'react-router-dom'

const Store = () => {

    return (
        <>
            <div style={{ textAlign: "center", backgroundColor: "green" }}>
                <h1>Store</h1>
                <Link style={{ color: "black", textDecoration: "unset" }} to="/menu" >Menu</Link>
                <Link style={{ color: "black", marginLeft: "20px", textDecoration: "unset" }} to="/products">Products</Link>
                <Link style={{ color: "black", marginLeft: "20px", textDecoration: "unset" }} to="/customers">Customers</Link>
            </div>
        </>
    )
}

export default Store
