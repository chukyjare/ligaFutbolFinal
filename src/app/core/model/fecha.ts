

export class Fecha{

    
    constructor(private diaAnual:string, private diaMes: string, private diaSemana: string, private semana: string){
        this.diaAnual=diaAnual;
        this.diaMes=diaMes;
        this.diaSemana=diaSemana;
        this.semana=semana;
    }
    
    /**
     * Getter $diaAnual
     * @return {string}
     */
    public get $diaAnual(): string {
        return this.diaAnual;
    }
    
    /**
     * Getter $diaMes
     * @return {string}
     */
    public get $diaMes(): string {
        return this.diaMes;
    }
    
    /**
     * Getter $diaSemana
     * @return {string}
     */
    public get $diaSemana(): string {
        return this.diaSemana;
    }
    
    /**
     * Getter $semana
     * @return {string}
     */
    public get $semana(): string {
        return this.semana;
    }
    
    /**
     * Setter $diaAnual
     * @param {string} value
     */
    public set $diaAnual(value: string) {
        this.diaAnual = value;
    }
    
    /**
     * Setter $diaMes
     * @param {string} value
     */
    public set $diaMes(value: string) {
        this.diaMes = value;
    }
    
    /**
     * Setter $diaSemana
     * @param {string} value
     */
    public set $diaSemana(value: string) {
        this.diaSemana = value;
    }
    
    /**
     * Setter $semana
     * @param {string} value
     */
    public set $semana(value: string) {
        this.semana = value;
    }
}