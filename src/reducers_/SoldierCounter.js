const counterReducer = (state = 0, action) => {
    switch(action.type){
        case 'ADD':
            return state + action.soldiers;
        case 'DEL':
            return state - action.soldiers;
        default: return state;
    }
}

export default counterReducer;