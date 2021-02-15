import { Partido } from './partido';

export class Minutos{
    private minGolesCasa: Array<string>;
    private minGolesFuera: Array<string>;

    constructor(private event: Partido){
        this.minGolesCasa= event.$marcadorLocal.getMinutos(event.$marcadorLocal.$goles);
        this.minGolesFuera= event.$marcadorVisitante.getMinutos(event.$marcadorVisitante.$goles);
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
}