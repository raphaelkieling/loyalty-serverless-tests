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
