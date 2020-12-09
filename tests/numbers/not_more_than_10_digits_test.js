const assert = require('chai').assert;
const not_more_than_10_digits = require('../../src/not_more_than_10_digits');

describe('Test for src not_more_than_10_digits', function(){

    it('test case 1 input - [10] ', (done)=>{
        not_more_than_10_digits([10])
        .then((s)=>{
           assert.strictEqual(s,true);
           done()
        })
        .catch((err)=>{
            done(err);
        })
        
    })

    it('test case 2 input - [12345678900] ', (done)=>{
        not_more_than_10_digits([12345678900])
        .then((s)=>{
           assert.strictEqual(s,false);
           done()
        })
        .catch((err)=>{
            done(err);
        })
        
    })

})