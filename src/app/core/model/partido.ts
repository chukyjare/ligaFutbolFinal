import { Fecha } from './fecha';
import { Marcador } from './marcador';
import { Resultado } from './resultado';

export class Partido{

    private marcadorLocal: Marcador;
    private marcadorVisitante: Marcador;
    private resultado: Resultado;
    
    constructor(private casa: string, private visitante: string, private fecha: Fecha){
        this.casa= casa;
        this.visitante= visitante;
        this.fecha=fecha;
        this.marcadorLocal= new Marcador();
        this.marcadorVisitante= new Marcador();
        this.comprobrarResultado();
        
    }
    comprobrarResultado() {
        if (this.marcadorLocal.$goles>this.marcadorVisitante.$goles) {
            this.resultado=Resultado.localGanador;
        }
        if (this.marcadorLocal.$goles==this.marcadorVisitante.$goles) {
            this.resultado=Resultado.empate;
        }
        if (this.marcadorLocal.$goles<this.marcadorVisitante.$goles) {
            this.resultado=Resultado.visitanteGanador;
        }
    }
    /**
     * Getter $fecha
     * @return {Fecha}
     */
    public get $fecha(): Fecha {
        return this.fecha;
    }
    /**
     * Getter $resultado
     * @return {Resultado}
     */
    public get $resultado(): Resultado {
        return this.resultado;
    }
    /**
     * Getter $marcadorLocal
     * @return {Marcador}
     */
    public get $marcadorLocal(): Marcador {
        return this.marcadorLocal;
    }
    /**
     * Getter $marcadorVisitante
     * @return {Marcador}
     */
    public get $marcadorVisitante(): Marcador {
        return this.marcadorVisitante;
    }
    /**
     * Getter $visitante
     * @return {string}
     */
    public get $visitante(): string {
        return this.visitante;
    }

 
    /**
     * Getter $casa
     * @return {string}
     */
    public get $casa(): string {
        return this.casa;
    }

    /**
     * Setter $casa
     * @param {string} value
     */
    public set $casa(value: string) {
        this.casa = value;
    }

}