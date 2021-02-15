import { Resultado } from './resultado';
import { Equipo } from './equipo';
import { Partido } from './partido';


export class Clasificacion{

    private listaClasificacion: Array<Equipo>;

    private listaClasiJornada: Array<Equipo>;
    
    constructor(private listaEquipos: Array<Equipo>, private listaPartidos: Array<Partido>){
        this.listaEquipos=listaEquipos;
        this.listaPartidos=listaPartidos;
        this.insertarPartidos(this.listaPartidos);
        this.crearListaClasificacion();
        this.listaClasificacion=this.ajustarPosiciones(this.listaClasificacion);
        this.listaClasiJornada=this.guardarClasificacion(this.listaClasificacion);
    }
    
    crearListaClasificacion() {
        this.listaClasificacion= new Array<Equipo>();
        this.listaEquipos.forEach(element => {
            this.listaClasificacion.push(element);
        });
    }
    guardarClasificacion(listaClasificacion: Array<Equipo>):Array<Equipo> {
        let listaGuardada:Array<Equipo> = new Array<Equipo>();
        for (let i = 0; i < listaClasificacion.length; i++) {
            for (let j = 0; j < listaClasificacion.length; j++) {
                if (listaClasificacion[j].$posicion==(i+1)) {
                    let temporal:Equipo= new Equipo(listaClasificacion[j].$nombre);
                    temporal=listaClasificacion[j];
                    listaGuardada.push(temporal);
                }
            }  
        }
        return listaGuardada;
    }
    
    ajustarPosiciones(listaEquipos: Equipo[]): Array<Equipo> {
        let lisActualizada:Array<Equipo> = this.ordenar();
        this.ponerPosiciones(lisActualizada);
        return lisActualizada;
    }
    
    ponerPosiciones(lisActualizada: Equipo[]) {
        let posicion:number=1;
        lisActualizada.forEach(element => {
            element.$posicion=posicion;
            posicion++;
        });
        
    }
    
    ordenar(): Array<Equipo> {
        let listaOrdenada:Array<Equipo> = new Array<Equipo>();
        listaOrdenada=this.listaClasificacion.sort(function(a,b){
            if (b.$puntos==a.$puntos) {
                return b.$GF - a.$GF;
            }
            if (b.$puntos==a.$puntos && b.$GF == a.$GF) {
                return a.$GC - b.$GC;
            }
            return b.$puntos-a.$puntos;
        });
        
        return listaOrdenada;
    }
    
    insertarPartidos(listaPartidos: Array<Partido>){
        for (let i = 0; i < listaPartidos.length; i++) {
            this.insertarResultados(listaPartidos[i]);
        }
    }
    
    insertarResultados(partido: Partido) {
        this.listaEquipos.forEach(element => {
            let nombreEquipo: string=element.$nombre;
            if (partido.$casa==nombreEquipo) {
                this.anotarGoles(element,partido);
                this.sumarPuntos(element,partido);
            }
            if (partido.$visitante==nombreEquipo) {
                this.anotarGoles(element,partido);
                this.sumarPuntos(element,partido);
            }
        });
    }
    
    sumarPuntos(equipo: Equipo, partido: Partido) {
        const ptoVictoria:number=3;
        const ptoEmpate:number=1;
        
        if(partido.$resultado==Resultado.empate){
            equipo.$puntos+=ptoEmpate;
        }
        if (equipo.$nombre==partido.$casa) {
            if (partido.$resultado==Resultado.localGanador) {
                equipo.$puntos+=ptoVictoria;
            }
            if(partido.$resultado==Resultado.visitanteGanador){
                equipo.$puntos+=0;
            }
        }else{
            if (partido.$resultado==Resultado.localGanador) {
                equipo.$puntos+=0;
            }
            if(partido.$resultado==Resultado.visitanteGanador){
                equipo.$puntos+=ptoVictoria;
            }
        }
    }
    anotarGoles(equipo: Equipo, partido: Partido) {
        if (equipo.$nombre==partido.$casa) {
            equipo.$GF+=partido.$marcadorLocal.$goles;
            equipo.$GC+=partido.$marcadorVisitante.$goles;
        }else{
            equipo.$GF+=partido.$marcadorVisitante.$goles;
            equipo.$GC+=partido.$marcadorLocal.$goles;
        }
    }
    
    /**
     * Getter $listaClasiJornada
     * @return {Array<Equipo>}
     */
    public get $listaClasiJornada(): Array<Equipo> {
        return this.listaClasiJornada;
    }
    /**
     * Getter $listaClasificacion
     * @return {Array<Equipo>}
     */
    public get $listaClasificacion(): Array<Equipo> {
        return this.listaClasificacion;
    }
    
    /**
     * Getter $listaEquipos
     * @return {Array<Equipo>}
     */
    public get $listaEquipos(): Array<Equipo> {
        return this.listaEquipos;
    }

    /**
     * Setter $listaEquipos
     * @param {Array<Equipo>} value
     */
    public set $listaEquipos(value: Array<Equipo>) {
        this.listaEquipos = value;
    }
}