# How to Contribute to `form_validator` Package 

## Steps Are As Follows : 

### Step1
>> Go to [https://github.com/settings/tokens/new](https://github.com/settings/tokens/new)
>> Give a Note like `Git_package`
>> now scope to `read` `write` `repo` package and then Token is there 

### Step2 
>> Open Working Dir and enter command
```
git clone https://github.com/TeamYourCircle/form-validator
```
>> cd form-validator 
>> in form-validator create a .npmrc file and enter a line 
```
//npm.pkg.github.com/:_authToken=TOKEN
@TeamYourCircle:registry=https://npm.pkg.github.com
```
>> in place of TOKEN enter yoour token

# How to install this package
## step 1 
>>  "@teamyourcircle/form-validator": "1.0.0" add this dependency with version in package.json

>> create token as tell above

>> create a .npmrc file and enter some command
```
//npm.pkg.github.com/:_authToken=TOKEN
registry=https://npm.pkg.github.com/TeamYourCircle
```

## step 2
```js

data.map(d=>{
    d.then((s)=>console.log(s)).catch((err)=>{
        console.log(err.message);
    })
})
``` 

>> import {number_module} from @teamyourcircle/form-validator
>> number_module([{"name":"not_more_than_10_digits","params":[12234343]}])

