export const add = (amount)=>{
    return(dispatch)=>{
        dispatch({
            type:'Add',
            payload:amount
        })
    }
}
export const remove = (amount)=>{
    return(dispatch)=>{
        dispatch({
            type:'Remove',
            payload:amount
        })
    }
}