var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var texto = "Hola Mundo";
var numero = 888;
var unBoolean = true;
var cualquierCosa = false;
var unArray = ["uno", 2, true];
var arregloDeTextos = ["juan", "pepe"];
var pi = "3.1416";
var pi2 = 3.1416;
var arregloDeNumeros = [888, 777, 555, 333];
var arrayEstructurado = [true, 'texto', 'texto', 888];
var arrayEstructuradoDeArrays = [[true, 'texto', 'texto', 888], [true, 'texto2', 'texto2', 777]];
var dataVacio = undefined;
var dataVacio2 = null;
var dataVacio3 = undefined;
function sumaNumero(numero1, numero2) {
    return numero1 + numero2;
    console.log(sumaNumero(5, 5));
}
var restarNumero = function (numero3, numero4) {
    return parseInt(numero3) - numero4;
    console.log(restarNumero("8", 5));
};
// let numero_fin:number | null = prompt("Hasta que necesita")
// let numero_tabla = prompt("De que tabla?")
// if(typeof(numero_fin) == null){
//     numero_fin = 5
// }
// for (let x = 0; x <= numero_fin; x++){
//     const element = Array[x]
// }
function funcionVoid() {
    localStorage.setItem("pepe", "fulano");
    return;
}
var info = {
    nombre: "alpilitro",
    precio: 8500,
    cantidadInventario: 25,
    productoLimitado: true
};
function venderAlpina(producto) {
    //proceso
}
var Usuario = /** @class */ (function () {
    function Usuario(nombre, correo, edad) {
        this.nombre = nombre;
        this.correo = correo;
        this.edad = edad;
    }
    Usuario.prototype.saludar = function () {
        return "Buenas noches ".concat(this.nombre, ", bienvenido a clase");
    };
    Usuario.prototype.hizo_tarea = function (confirmacion) {
        var respuesta = (confirmacion) ? "".concat(this.nombre, " buen trabajo") : "".concat(this.nombre, " hace falta la tarea");
        return respuesta;
    };
    return Usuario;
}());
var ejemplo = new Usuario("miguel", "correo@correo.com", 25);
ejemplo.nombre; //no apareceria el correo ni la edad, ya que son variables protected y private, respectivamente.
console.log(ejemplo.saludar()); //el resultado deberia ser: "Buenas noches miguel, bienvenido a clase"
console.log(ejemplo.hizo_tarea(false)); //el resultado deberia ser: "miguel hace falta la tarea"
var Pedidos = /** @class */ (function (_super) {
    __extends(Pedidos, _super);
    function Pedidos(nombre, correo, edad, producto) {
        var _this = _super.call(this, nombre, correo, edad) || this;
        _this.producto = producto;
        return _this;
    }
    Pedidos.prototype.verificarEstado = function () {
    };
    return Pedidos;
}(Usuario));
var classPedidos = new Pedidos("miguel", "correo@correo.com", 25, "alpilitro");
classPedidos.hizo_tarea(false);
