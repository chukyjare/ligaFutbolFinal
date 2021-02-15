import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clasificacion',
  templateUrl: './clasificacion.page.html',
  styleUrls: ['./clasificacion.page.scss'],
})
export class ClasificacionPage implements OnInit {
  clasificacion= [
    { posicion:1, equipo: "amurrio", puntos: 12, GF: 21, GC: 5 },
    { posicion:2,equipo: "arrati", puntos: 11, GF: 18, GC: 9 },
    { posicion:3,equipo: "cosoyo", puntos: 10, GF: 11, GC: 12 },
    { posicion:4,equipo: "san sadurni de guissoll", puntos: 6, GF: 1, GC: 15 }
  ];
  constructor() { }
  condicion=false;
  esVerde(posicion){
    return posicion%2==0
  }
  esNaranja(posicion){
    return posicion%2!=0
  }
  dameColor(posicion){
    console.log("estoy dentro");
    if(posicion%2==0) return true
    return false;
  }
  ngOnInit() {
  }

}
