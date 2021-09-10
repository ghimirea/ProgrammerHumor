export const sortList=(state)=>{
    return state.sort((a, b)=>(a.data.num_comments > b.data.num_comments)?-1:1)
}

export const evenOddScore = (state)=>{
    if(state % 2 === 0) return true;
    else return false;
}