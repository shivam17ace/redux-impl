const Reducer=(state=100,action)=>{
    if(action.type==='Add'){
        return state+action.payload;
    }
    if(action.type==='Remove'){
        return state-action.payload;
    }
    else {
        return state;
    }
}
export default Reducer;
