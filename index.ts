#! /usr/bin/env node 
import inquirer from "inquirer";
let weightInKg = 50 ;
let heightInMeter = 1.5 ;
let bmi = weightInKg /(weightInKg * heightInMeter);
console.log(`Your BMI is ${bmi}`);