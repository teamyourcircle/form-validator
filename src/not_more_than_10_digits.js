/*
this is function in which parameter goes is number
*/

const not_more_than_10_digits = (number) =>{

    return new Promise((resolve,reject)=>{
        not_more_than_10_digits_functionality(number,resolve,reject);
    })
}

function not_more_than_10_digits_functionality(number,successCallback,errorCallback){

    let count = 0;
    let number_temp = number;
    while(number_temp > 0){
        count+=1;
        number_temp = Math.floor(number_temp/10);
    }
    // send successcallBack
    if(count <= 10){
        successCallback(true);
    } 
    // error callback
    else{
        errorCallback(new Error("Number cannot exceed 10"));
    }

}

/*
//digits are 5
not_more_than_10_digits([12345]).then((success)=>{console.log(success)}).catch((err)=>{console.log(err)});
//digits are 11
not_more_than_10_digits([12345678900]).then((success)=>{console.log(success)}).catch((err)=>{console.log(err)});
*/

module.exports = not_more_than_10_digits;