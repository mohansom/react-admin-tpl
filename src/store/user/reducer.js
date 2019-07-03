import * as user from './action-type';

let defaultState = {
    age:22,
    name:"ljf"
}
export const modifyUserInfo = (state = defaultState,action = {}) => {
    switch(action.type){
        case user.ADD_Age:
            state.age += 22;
            return {...state};
        case user.ADD_Name:
            state.name += 'fx';
            return {...state};
        default:
            return {...state}
    }
}