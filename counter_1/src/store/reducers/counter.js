let initialCount = 0
const counter = (state = initialCount, action) => {
    switch (action.type) {

        case 'INCREMENT': return state += 1;
        case 'DECREMENT': return state -= 1;
        case 'RESET': return initialCount
        default: return state
    }
}
export default counter