import { Clasificacion } from './clasificacion';
import { Equipo } from './equipo';
import { Fecha } from './fecha';
import { Partido } from './partido';

export class Jornada{
    
    private listaPartidos: Array<Partido>;
    private listaEquiposA: Array<Equipo>;
    private listaEquiposB: Array<Equipo>;
    private numero:number;

    private clasiJornada: Clasificacion;

    constructor(private listaEquipos:Array<Equipo>, numero: number, private fecha: Fecha){
        this.listaEquipos=listaEquipos;
        this.listaPartidos= new Array<Partido>();
        this.numero=numero;
        this.fecha=fecha;
        this.listaEquiposA= listaEquipos.slice(0,this.listaEquipos.length/2);
        this.listaEquiposB= listaEquipos.slice(this.listaEquipos.length/2,this.listaEquipos.length);
        this.crearJornada();
        this.clasiJornada= new Clasificacion(listaEquipos,this.listaPartidos);
    }
    
    crearJornada(){
        for (let i = 0; i < this.listaEquipos.length/2; i++) {
            let partido: Partido = new Partido(this.listaEquiposA[i].$nombre, this.listaEquiposB[i].$nombre, this.fecha);
            partido.comprobrarResultado();
            this.listaPartidos.push(partido);
        }
    }
    
    /**
     * Getter $clasiJornada
     * @return {Clasificacion}
     */
    public get $clasiJornada(): Clasificacion {
        return this.clasiJornada;
    }
    /**
     * Getter $listaPartidos
     * @return {Array<Partido>}
     */
    public get $listaPartidos(): Array<Partido> {
        return this.listaPartidos;
    }
    /**
     * Getter $numero
     * @return {number}
     */
    public get $numero(): number {
        return this.numero;
    }
    
    /**
     * Setter $numero
     * @param {number} value
     */
    public set $numero(value: number) {
        this.numero = value;
    }
    
}