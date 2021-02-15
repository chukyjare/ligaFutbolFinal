export class Equipo{
    
    private posicion: number;
    private puntos:number;
    private GF: number;
    private GC: number;
    
    constructor(private nombre:string){
        this.nombre=nombre;
        this.posicion=0;
        this.puntos=0;
        this.GF=0;
        this.GC=0;
    }
    /**
    * Getter $nombre
    * @return {string}
    */
    public get $nombre(): string {
       return this.nombre;
    }

    /**
     * Getter $posicion
     * @return {number}
     */
	public get $posicion(): number {
		return this.posicion;
	}

    /**
     * Getter $puntos
     * @return {number}
     */
	public get $puntos(): number {
		return this.puntos;
	}

    /**
     * Getter $GF
     * @return {number}
     */
	public get $GF(): number {
		return this.GF;
	}

    /**
     * Getter $GC
     * @return {number}
     */
	public get $GC(): number {
		return this.GC;
    }

    /**
     * Setter $posicion
     * @param {number} value
     */
	public set $posicion(value: number) {
		this.posicion = value;
	}

    /**
     * Setter $puntos
     * @param {number} value
     */
	public set $puntos(value: number) {
		this.puntos = value;
	}

    /**
     * Setter $GF
     * @param {number} value
     */
	public set $GF(value: number) {
		this.GF = value;
	}

    /**
     * Setter $GC
     * @param {number} value
     */
	public set $GC(value: number) {
		this.GC = value;
	}
}