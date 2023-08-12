
const AllProducts = ({ products, getProduct }) => {


    return (
        <>
            <div>
                <select style={{ width: "max-content" }} onChange={e => getProduct(e.target.value)}>
                    <option value="" hidden></option>
                    {
                        products.map(product => {
                            return <option key={product.id} value={product.id}>{product.name}</option>
                        })
                    }
                </select>
            </div>
        </>
    )
}

export default AllProducts
