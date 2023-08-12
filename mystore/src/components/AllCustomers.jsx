
const AllCustomers = ({ customers, getCustomer }) => {
    return (
        <>
            <div>
                <select style={{ width: "max-content" }} onChange={e => getCustomer(e.target.value)}>
                    <option value="" hidden></option>
                    {
                        customers.map(customer => {
                            return <option key={customer.id} value={customer.id}>{customer.firstName}</option>
                        })
                    }
                </select>
            </div>
        </>
    )
}

export default AllCustomers
