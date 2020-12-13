const assert = require('chai').assert;
const range_with_min_max = require('../../src/range_with_min_max');


describe('Test is src range_with_min_max', function(){

    it('Test to check for value 1 for [25]', (done) => {
        range_with_min_max([25])
        .then((s) => {
            assert.strictEqual(s, true)
            done()
        })
        .catch((err) => {
            done(err);
        })
    })

    it('Test to check for value 2 for [54]', (done) => {
        range_with_min_max([54])
        .then((s) => {  
            assert.strictEqual(s,false);
           done()
        })
        .catch((err) => {
            assert.equal("Number not in range of 1-50",err.message);
            done();
        })
    })

})