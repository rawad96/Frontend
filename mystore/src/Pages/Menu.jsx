
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <>
            <div style={{ textAlign: "center", backgroundColor: "green" }}>
                <h1>Menu</h1>
                <Link style={{ color: "black", textDecoration: "unset" }} to="/products">Products</Link>
                &nbsp;
                <Link style={{ color: "black", marginLeft: "20px", textDecoration: "unset" }} to="/customers">Customers</Link>
                &nbsp;
                <Link style={{ color: "black", marginLeft: "20px", textDecoration: "unset" }} to="/purchases">Purchases</Link>
            </div>
        </>
    )
}

export default Menu
