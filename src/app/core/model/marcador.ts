import { stringify } from 'querystring';

export class Marcador{
    private minutos:Array<string>;
    private minutosNum: Array<number>;
    private goles: number;
    private maxMin: number=90;
    private maxGoles: number=6;
    
    constructor(){
        this.goles = this.marcarGoles();
        this.minutos = this.getMinutos(this.goles);
    }
    
    marcarGoles():number{
        let aleatorio:number=Math.trunc(Math.random()*(this.maxGoles+1));
        return aleatorio;
    }
    getMinutos(goles:number): Array<string>{
        let listaNumeros: Array<number> = this.getMinutosNumero(goles);
        function comparar ( a, b ){ return a - b; }
        listaNumeros.sort(comparar);
        let listaMinutos: Array<string> = new Array<string>();
        for (let i = 0; i < listaNumeros.length; i++) {
           let minAleatorio: string = String(listaNumeros[i]);
            listaMinutos.push(minAleatorio+"'");
        }
        return listaMinutos;
    }
    getMinutosNumero(goles:number): Array<number>{
        let listaNumeros: Array<number> = new Array<number>();
        for (let i = 0; i < goles; i++) {
            let aleatorio:number= Math.trunc(Math.random()*(this.maxMin+1));
            listaNumeros.push(aleatorio);
        }
        return listaNumeros;
    }
    /**
     * Getter $goles
     * @return {number}
     */
    public get $goles(): number {
        return this.goles;
    }
    
    
    /**
     * Getter $minutos
     * @return {Array<string>}
     */
    public get $minutos(): Array<string> {
        return this.minutos;
    }
}