import { Clasificacion } from './../core/model/clasificacion';
import { Cronologia } from './../core/model/cronologia';
import { Jornada } from './../core/model/jornada';
import { Liga } from './../core/model/liga';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { Partido } from '../core/model/partido';


@Component({
  selector: 'app-jornada',
  templateUrl: './jornada.page.html',
  styleUrls: ['./jornada.page.scss'],
})
export class JornadaPage implements OnInit {
  liga: Liga = new Liga();
  
  numJornada=1;
  jornada= new Jornada(this.liga.$listaEquipos, this.numJornada, this.liga.$fechas[this.numJornada]);
  clasificacion = this.jornada.$clasiJornada.$listaClasiJornada;
  // jornada= this.liga.$listaJornadas[this.numJornada];
  // clasificacion = this.jornada.$clasiJornada.$listaClasificacion;
  
  cronologia: Cronologia;
  // fecha = Date.now();
  
  resultado=this.jornada.$listaPartidos;
  
  constructor(private aler: AlertController, private route: Router) {}
  async pasaDato(event:Partido) {
    this.cronologia=new Cronologia(event);
    let extrasNavegacion: NavigationExtras = {
      state: {
        cronologia: this.cronologia,
      },
    };
    this.route.navigate(["cronologia"], extrasNavegacion);

  }
  visible = true;
  habilitado=true;
  segmentChanged(hola) {
    this.visible = !this.visible;
  }
  cambiarAnterior(numJornada){
    if (numJornada>1) {
      this.numJornada=numJornada;
      this.jornada= this.liga.$listaJornadas[this.numJornada];
      this.clasificacion = this.jornada.$clasiJornada.$listaClasiJornada;
      this.resultado=this.jornada.$listaPartidos;
    }
  }
  cambiarSiguiente(numJornada){
    if (numJornada<=this.liga.$maxJornadas) {
      this.numJornada=numJornada;
      this.jornada= this.liga.$listaJornadas[this.numJornada];
      this.clasificacion = this.jornada.$clasiJornada.$listaClasiJornada;
      this.resultado=this.jornada.$listaPartidos;
    }
  }
  jugarJornada(numJornada){
    if (this.liga.$listaJornadas.length<this.liga.$maxJornadas-1) {
      this.numJornada=numJornada;
      this.liga.guardarJornada(this.jornada);
      this.jornada=new Jornada(this.liga.$listaEquipos, this.numJornada, this.liga.$fechas[this.numJornada]);
      this.clasificacion = this.jornada.$clasiJornada.$listaClasiJornada;
      this.resultado=this.jornada.$listaPartidos;
    }else{
      this.habilitado=false;
    }

  }
  ngOnInit() {
    
  }
}
