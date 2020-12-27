const storeReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD':
            let isPresent = false;
            state.forEach(el => {
                if (el.id === action.element.id){
                    isPresent = true;
                }
            })
            if (isPresent){
                state.map(
                    (weapon) => {
                        if (weapon.id === action.element.id){
                            weapon.count += 1;
                        }
                    }
                )
            }
            else {state.push(action.element);}
            
            return state;

        case 'DEL':
            let isCount = 1;
            state.forEach(el => {
                if (el.id === action.element.id){
                    isCount = el.count;
                }
            })
            if (isCount === 1) {return state.filter((weapon) => {return (weapon.id !== action.element.id)});}
            else{
                state.map(
                    (weapon) => {
                        if (weapon.id === action.element.id){
                            weapon.count -= 1;
                        }
                    }
                )
                return state;
            }
        case 'CLEAR':
            return [];
        default:
            return state;
    }
}

export default storeReducer;