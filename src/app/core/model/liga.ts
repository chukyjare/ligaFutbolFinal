import { CalendarioService } from './services/calendario.service';
import { Equipo } from './equipo';
import { Fecha } from './fecha';
import { Jornada } from './jornada';

export class Liga {

    private nombre: String;
    private listaEquipos: Array<Equipo>=new Array<Equipo>();;
    private listaEquiposA: Array<Equipo>;
    private listaEquiposB: Array<Equipo>;
    private equipos=["Amurrio", "Arrati", "Tudelano", "PlazaFC", "Atletico", "Gordos", "Oropesa", "LobosUD", "Ansuelo", "Emeritos"];
    private cantidadEquipos:number=this.equipos.length;
    private listaJornadas: Array<Jornada>;
    private maxJornadas:number=20;
    private fechas: Array<Fecha>;
    
    constructor(){
        this.nombre= "Liga 2020/21 BBVA";
        this.listaJornadas=new Array<Jornada>();
        this.crearEquipos();
        this.listaEquiposA= this.listaEquipos.slice(0,this.listaEquipos.length/2);
        this.listaEquiposB= this.listaEquipos.slice(this.listaEquipos.length/2,this.listaEquipos.length);
        this.fechas= new CalendarioService().$arrayFechas;
        
    }
    guardarJornada(jornada:Jornada){
        this.$listaJornadas.push(jornada);
        this.reordenarEquipos();
    }
    
    reordenarEquipos(){
        let equipoA:Equipo = this.listaEquiposA[0];
        let equipoB:Equipo = this.listaEquiposB[this.listaEquiposB.length - 1];
        this.listaEquiposA.shift();
        this.listaEquiposA.push(equipoB);
        this.listaEquiposB.pop();
        this.listaEquiposB.unshift(equipoA);
        this.listaEquipos=this.listaEquiposA.concat(this.listaEquiposB);
    }
    
    crearEquipos(){
        for (let index = 0; index < this.equipos.length; index++) {
            let equipo: Equipo = new Equipo(this.equipos[index]);
            this.listaEquipos.push(equipo);
        }
    }
    
    /**
     * Getter $fechas
     * @return {Array<Fecha>}
     */
    public get $fechas(): Array<Fecha> {
        return this.fechas;
    }
    /**
     * Getter $listaJornadas
     * @return {Array<Jornada>}
     */
    public get $listaJornadas(): Array<Jornada> {
        return this.listaJornadas;
    }
    
    /**
     * Getter $maxJornadas
     * @return {number}
     */
    public get $maxJornadas(): number {
        return this.maxJornadas;
    }
    /**
     * Getter $nombre
     * @return {String}
     */
    public get $nombre(): String {
        return this.nombre;
    }
    /**
     * Setter $nombre
     * @param {String} value
     */
    public set $nombre(value: String) {
        this.nombre = value;
    }
    /**
     * Getter $cantidadEquipos
     * @return {number}
     */
    public get $cantidadEquipos(): number {
        return this.cantidadEquipos;
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