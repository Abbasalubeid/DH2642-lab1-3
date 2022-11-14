function promiseNoData(promiseState){

    if (!(promiseState.promise))
    return <div>no data</div>

    //There is a promise but no data or error, we wait...
    if(promiseState.promise)
        if(!promiseState.data)
            if(!promiseState.error)
                return <img height="250" src="loading_anim.gif"></img>

    
    if(promiseState.error)
        return <div>{promiseState.error.toString()}</div>
    
    // Error is falsy, the rendering can be done
    if (promiseState.promise && !(promiseState.data))
    return false;

}





export default promiseNoData