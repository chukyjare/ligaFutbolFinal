import { Fecha } from './fecha';
import { Partido } from './partido';

export class Cronologia{
    private casa: string;
    private visitante: string;
    private golesCasa: number;
    private golesFuera: number;
    private minGolesCasa: Array<string>;
    private minGolesFuera: Array<string>;
    private fecha: Fecha;
    
    constructor(private event: Partido){
        this.casa=event.$casa;
        this.visitante=event.$visitante;
        this.golesCasa= event.$marcadorLocal.$goles;
        this.golesFuera= event.$marcadorVisitante.$goles;
        this.minGolesCasa= event.$marcadorLocal.getMinutos(this.golesCasa);
        this.minGolesFuera= event.$marcadorVisitante.getMinutos(this.golesFuera);
        this.fecha=event.$fecha;
    }
    /**
     * Getter $fecha
     * @return {Fecha}
     */
    public get $fecha(): Fecha {
        return this.fecha;
    }
    /**
     * Getter $minGolesFuera
     * @return {Array<string>}
     */
    public get $minGolesFuera(): Array<string> {
        return this.minGolesFuera;
    }
    /**
     * Getter $minGolesCasa
     * @return {Array<string>}
     */
    public get $minGolesCasa(): Array<string> {
        return this.minGolesCasa;
    }
    /**
     * Getter $golesFuera
     * @return {number}
     */
    public get $golesFuera(): number {
        return this.golesFuera;
    }
    /**
     * Getter $golesCasa
     * @return {number}
     */
    public get $golesCasa(): number {
        return this.golesCasa;
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
}