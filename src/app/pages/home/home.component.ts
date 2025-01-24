import { Component, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements DoCheck {

  num: number = 1;

  ngDoCheck(): void {
    console.log("Uma mudança foi realizada!");
  }

  adiciona1(){
    this.num++;
  }
}
