const counterReducer = (state = 0, action) => {
    switch(action.type){
        case 'ADD':
            return state + action.element.people;
        case 'DEL':
            return state - action.element.people;
        case 'CLEAR':
            return 0;
        default: return state;
    }
}

export default counterReducer;