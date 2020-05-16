import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    title = 'Calculator App';
    num1: number;
    num2: number;
    result: number;
    add() {
        this.result = this.num1 + this.num2;
    }
    substract() {
        this.result = this.num1 - this.num2;
    }
    multiply() {
        this.result = this.num1 * this.num2;
    }
    divide() {
        this.result = this.num1 % this.num2;
    }
}