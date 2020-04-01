"use strict";
class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    add(obj) {
        return new Complex(this.real + obj.real, this.imaginary + obj.imaginary);
    }
    sub(obj) {
        return new Complex(this.real - obj.real, this.imaginary - obj.imaginary);
    }
    mod() {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    }
    toString() {
        console.log("Czesc rzeczywista: " + this.real + ", Czesc urojona: " + this.imaginary);
    }
}
//stworzenie dwoch obiekotw typu Complex
let a = new Complex(10, 2);
let b = new Complex(8, 1);
console.log("Obiekt pierwszy:");
a.toString();
console.log("\nObiekt drugi:");
b.toString();
//dodanie dwoch obiektow
let c = a.add(b);
//wyswietlenie wyniku dodawania
console.log("\nWynik dodawania dwoch obiektow: ");
c.toString();
//odjecie od wyniku pierwszego obiektu
let d = c.sub(a);
//wyswietlenie wyniku dodawania
console.log("\nWynik odejmowania dwoch obiektow");
d.toString();
//modul
let e = a.mod();
//wyswietlenie modulu
console.log("\nModul wynosi: ");
e.toString();
