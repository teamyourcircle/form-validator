/*
    this is function to check whether number is in range or not
*/
const range_with_min_max = (number) => {

    return new Promise((resolve, reject) => {
        range_with_min_max_functionality(number, resolve, reject);
    })
}

function range_with_min_max_functionality(number, successCallback, errorCallback) {
    
    let min = number[1];
    let max = number[2];
    // successfull callback
    if(number[0] >= min && number[0] <= max)
        successCallback(true);
    // error callback
    else
        errorCallback( new Error("number not in given range"));
}

// demo testing
// range_with_min_max([5]).then((success)=>{console.log(success)}).catch((err)=>{console.log(err)});

module.exports = range_with_min_max;