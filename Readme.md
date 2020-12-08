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

>>  "@teamyourcircle/form-validator": "1.0.0" add this dependency with version in package.json

>> create token as tell above

>> create a .npmrc file and enter some command
```
//npm.pkg.github.com/:_authToken=TOKEN
registry=https://npm.pkg.github.com/TeamYourCircle
```
