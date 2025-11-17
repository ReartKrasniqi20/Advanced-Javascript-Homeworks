/* 
Detyrat e shtepise per 13.11.2025: 
Homework 1: 
Create a BankAccount with private balance 

Goal: 
Use private fields to hide the balance. 

Requirements:
Create a BankAccount class. balance must be private using #balance. 

Methods:
deposit(amount) withdraw(amount) getBalance() (read-only)
*/

class BankAccount{
     #balance;

    constructor(balance){
        this.#balance=balance;
    }

    getBalance(){
        return this.#balance;
    }

    deposit(value){
        this.#balance+=value;
        console.log("Updated balance after deposit: "+this.#balance);
    }

    withdraw(value){
        if(this.#balance<value){
            console.log("You don't have enough money, actual money in bank: "+this.#balance);
            return;
        }else{
            this.#balance-=value;
            console.log("Balance updated after withdraw: "+this.#balance);
        }
    }

}

const bank1 = new BankAccount(1000);
bank1.deposit(400);
bank1.withdraw(200);
console.log(bank1.balance); //Veq sa per testim
bank1.deposit(500);
bank1.withdraw(2500);
console.log(bank1.getBalance());
bank1.deposit(5000);
bank1.withdraw(4637);
console.log(bank1.getBalance());

