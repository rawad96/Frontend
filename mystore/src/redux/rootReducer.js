import { v4 as uuidv4 } from 'uuid';
const initialState = {
    customers: [{ id: uuidv4(), firstName: "Rawad", lastName: "Bader", city: "Hurfeish" }, { id: uuidv4(), firstName: "Nagham", lastName: "Hayook", city: "Hurfeish" }],
    products: [{ id: uuidv4(), name: "iphone13promax", price: 4000, quantity: 5 }, { id: uuidv4(), name: "iphone14promax", price: 5000, quantity: 10 }],
    purchases: []
};

const storeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADPRODUCTS': {
            return { ...state, products: action.payload }
        }
        case 'LOADCUSTOMERS': {
            return { ...state, customers: action.payload }
        }
        case 'BY': {
            return { ...state, purchases: [...state.purchases, { id: uuidv4(), ...action.payload }] }
        }
        case 'UPDATEPRODUCT': {
            const newproducts = [...state.products]
            const product = newproducts.findIndex(prod => prod.id === action.payload.id)
            if (product !== -1) {
                newproducts[product].name = action.payload.name
                newproducts[product].price = action.payload.price
                newproducts[product].quantity = action.payload.quantity
            }
            return { ...state, products: newproducts }
        }
        case 'DELETEPRODUCT': {
            const newproducts = [...state.products]
            const newpurchases = [...state.purchases]
            return { ...state, products: [...newproducts.filter(prod => prod.id !== action.payload)], purchases: [...newpurchases.filter(prod => prod.productid !== action.payload)] }
        }
        case 'UPDATECUSTOMER': {
            const newcustomers = [...state.customers]
            const customer = newcustomers.findIndex(cus => cus.id === action.payload.id)
            if (customer !== -1) {
                newcustomers[customer].firstName = action.payload.firstName
                newcustomers[customer].lastName = action.payload.lastName
                newcustomers[customer].city = action.payload.city
            }
            return { ...state, customers: newcustomers }
        }
        case 'DELETECUSTOMER': {
            const newcustomers = [...state.customers]
            return { ...state, customers: [...newcustomers.filter(cus => cus.id !== action.payload)] }
        }
        default: return state;
    }
}

export default storeReducer
