/*
    this is function to check whether number is in range or not
*/
const range_with_min_max = (number) => {

    return new Promise((resolve, reject) => {
        range_with_min_max_functionality(number, resolve, reject);
    })
}

function range_with_min_max_functionality(number, successCallback, errorCallback) {
    
    let min = 1;
    let max = 50;
    // successfull callback
    if(number >= min && number <= max)
        successCallback(true);
    // error callback
    else
        errorCallback( new Error("number not in range of 1 to 50"));
}

// demo testing
// range_with_min_max([55]).then((success)=>{console.log(success)}).catch((err)=>{console.log(err)});

module.exports = range_with_min_max;