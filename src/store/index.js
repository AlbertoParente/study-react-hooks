import { reducer } from './reducers'
import { numberAdd2 } from './actions/number'

export const initiaState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}

export {
    initialState,
    reducer
}
