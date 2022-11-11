function resolvePromise(promiseToResolve, promiseState){
promiseState.promise=promiseToResolve;
promiseState.data= null;         
promiseState.error= null;
if(promiseToResolve == null){
    return "Error" + promiseState;
}
function saveDataACB(result){ 
	if(promiseState.promise !== promiseToResolve)   
        return; 
    promiseState.data= result; 
}
function saveErrorACB(err)  { 
    if(promiseState.promise !== promiseToResolve) 
        return; 
    promiseState.error= err;
}
promiseToResolve.then(saveDataACB).catch(saveErrorACB);

}

// if(promiseState.promise 
//     && !promiseState.data && !promiseState.error)  // not yet resolved/rejected
//        cancelPromise(promiseState.promise); 
//    promiseState.promise=promise;

export default resolvePromise