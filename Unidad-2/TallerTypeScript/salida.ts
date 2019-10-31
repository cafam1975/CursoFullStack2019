class user {
     nombre: string;
     apelido: string;

     constructor (nombreUsuario: string, nombreApellido: string) {
        this.nombre = nombreUsuario;
        this.apelido = nombreApellido;
     }

    mostrarUsuario ()
    {
        document.write('El nombre del usuario es: ' + this.nombre + ' ' + this.apelido);
    }
}

class Edad extends user{
    cuantosAnnos: number;

    constructor(nombre, apelido, edad)
    {
        super(nombre, apelido)
        this.cuantosAnnos = edad;
    }

    mostrarEdadUsuario ()
    {
        document.write("<br>");        
        document.write('El nombre del usuario es: ' + this.nombre + ' ' + this.apelido + '.' 
                        + 'La Edad del usuario: ' + this.cuantosAnnos);
    }
}

var nomUser = new user("Carlos", "Arevalo");
var edadUser = new Edad("Carlos", "Arevalo", 44);
nomUser.mostrarUsuario();
edadUser.mostrarEdadUsuario();