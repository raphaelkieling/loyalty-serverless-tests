# Loyalty Serveless

Relax. It's not the next system that I've been working to be a millionaire. It's just a project to study AWS lambda and other services from AWS. 

Why use NestJS? Because I consider nest a good framework for dependency injection, this make difference for the project? No, but I wanna see what happens when I use this with an existing big framework.

```
presentation --------- app ------- domain ------- infra
cli                     |                            ^
lambda <<               |____________________________|
http
```

## Rules

### User

- Can create a user using the cpf and name

### Cashback

- Can receive points based on the order (total, subTotal, or other value) and category
- Can transfer points to other user
- Cannot transter points if the value to be transfered is more than the current value of the user balance
- Can get the extract
- Can spend cashback
- Cannot spend cashback if the balance is less than cashback spent


## Project history study

0 - How i started the project:
```
nest new loyaltyServeless
cd loyaltyServeless 
sls create --template aws-nodejs
```

For sure i deleted the handle.js and init work in the nestjs project. The main folder for serverless is `presentation/lambda`

1 - The serverless framework is simple to deploy and test. I've been problems using next because in local using `SLS invoke local -f <myFn>` it's work but I have some problems using relative paths in the cloud.