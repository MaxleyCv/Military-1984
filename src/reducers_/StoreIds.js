const storeReducer = (state=[], action) => {
    switch(action.type){
        case 'ADD':
            return state.add(action.element);
        case 'DEL':
            return state.filter((weapon) => {return weapon.id !== action.element.id});
        default:
            return state;
    }
}

export default storeReducer;