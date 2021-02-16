import { LOGIN } from "../action/type"

const initialState = {
    login: false,

}
const indexReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            state.login = action.payload
            return { ...state }
        default:
            return { ...state }
    }
}
export default indexReducer;