function promiseNoData(promiseState){

    if (!(promiseState.promise))
    return <div>no data</div>

    if(promiseState.promise)
        if(!promiseState.data)
            if(!promiseState.error)
                return <img height="250" src="loading_anim.gif"></img>


    if(promiseState.error)
        return <div>{promiseState.error.toString()}</div>
    
    if (promiseState.promise && !(promiseState.data))
    return false;

}





export default promiseNoData