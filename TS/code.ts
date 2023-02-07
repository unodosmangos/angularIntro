let texto:string = "Hola Mundo"
let numero:number = 888
let unBoolean:boolean = true

var cualquierCosa:any = false

let unArray:any[] = ["uno",2,true]
let arregloDeTextos:string[] = ["juan", "pepe"]
const pi:string = "3.1416"
const pi2:number = 3.1416

let arregloDeNumeros:number[] = [888, 777, 555, 333]

let arrayEstructurado:[boolean, string, string, number] = [true, 'texto', 'texto', 888 ]
let arrayEstructuradoDeArrays:[boolean, string, string, number][] = [[true, 'texto', 'texto', 888 ],[true, 'texto2', 'texto2', 777 ]]

let dataVacio:void = undefined
let dataVacio2:null = null
let dataVacio3:undefined = undefined

function sumaNumero (numero1:number, numero2:number):number {
    return numero1 + numero2
    console.log(sumaNumero(5,5))
}

let restarNumero = function (numero3:string, numero4:number): number{
    return parseInt(numero3) - numero4
    console.log(restarNumero("8",5))
}

// let numero_fin:number | null = prompt("Hasta que necesita")
// let numero_tabla = prompt("De que tabla?")

// if(typeof(numero_fin) == null){
//     numero_fin = 5
// }

// for (let x = 0; x <= numero_fin; x++){
//     const element = Array[x]
// }

function funcionVoid():void {
    localStorage.setItem("pepe", "fulano")
    return
}

interface iDataAlpina{
    nombre:string,
    precio:number,
    cantidadInventario:number,
    productoLimitado:boolean
}

let info:iDataAlpina = {
    nombre:"alpilitro",
    precio:8500,
    cantidadInventario:25,
    productoLimitado:true
}

function venderAlpina(producto:iDataAlpina):any {
    //proceso
}

class Usuario{
    public nombre:string
    protected correo:string
    private edad:number

    constructor (nombre:string, correo:string, edad:number){
        this.nombre = nombre
        this.correo = correo
        this.edad = edad
    }

    saludar(){
        return `Buenas noches ${this.nombre}, bienvenido a clase`
    }

    hizo_tarea(confirmacion:boolean){
        let respuesta = (confirmacion) ? `${this.nombre} buen trabajo` : `${this.nombre} hace falta la tarea`
        return respuesta
    }

}

let ejemplo = new Usuario("miguel","correo@correo.com",25)
ejemplo.nombre //no apareceria el correo ni la edad, ya que son variables protected y private, respectivamente.
console.log(ejemplo.saludar()) //el resultado deberia ser: "Buenas noches miguel, bienvenido a clase"
console.log(ejemplo.hizo_tarea(false)) //el resultado deberia ser: "miguel hace falta la tarea"


class Pedidos extends Usuario {
    public producto:string
    public entregado:boolean

    constructor (nombre:string, correo:string, edad:number, producto:string){
        super(nombre, correo, edad)
        this.producto = producto
    }

    verificarEstado(){

    }
}

let classPedidos = new Pedidos("miguel", "correo@correo.com", 25, "alpilitro")
classPedidos.hizo_tarea(false)

