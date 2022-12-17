// ACTION
const increment = (num) => {
    return {
        type: "INC",
        payload: num ? num : 1
    }
}
const decrement = (num) => {
    return {
        type: "DEC",
        payload: num ? num : 1
    }
}
const login = () => {
    return {
        type: "LOGIN"
    }
}
const logout = () => {
    return {
        type: "LOGOUT"
    }
}
export {increment, decrement, login, logout}