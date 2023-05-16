import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent {

    private menuLateral;

    constructor() {
        this.menuLateral = document.querySelector(".cabecalho__menu-hamburguer");
        console.log(this.menuLateral)
    }

    abreMenuLateral() {
        alert(this.menuLateral);
    }
}
