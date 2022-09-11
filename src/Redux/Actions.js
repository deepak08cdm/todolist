export function addToList (value){
    return{
        type:'ADDTOLIST',    // unique identifier
        payload:value        // data we are storing inside redux store
    }
}


//middleware comes btw action and reducer