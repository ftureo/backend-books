# Endpoint

## Books

### POST /create-book

#### Request

```json
{
    "bookTitle": String,
    "bookAuthor": String,
    "bookImage": img/jpeg, img/png
}
```

--- Users

#### Prefix: /api/auth

### POST /register

#### Request

```json
{
    "username": String,
    "dni": Number,
    "email": String,
    "password": String
}
```

### POST /login

#### Request

```json
{
    "email": String,
    "password": String
}
```


<!-- Annotations -->

# Middleware para CORS
// Lista blanca de dominios permitidos
const whitelist = ['http://localhost:3000', 'https://tudominio.com'];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('No permitido por CORS'));
    }
  },
};

app.use(cors(corsOptions));





Colección user
{
    email: String, // Opcional - Obligatorio
    contraseña: String,
    imageProfile: File || URL,
    birthday: Date || ISO String || timestamp
    name: String
    lastname: String
    googleId: String
    city:
    country: 
    location: 
        lat
        long

    
}



Requerimientos
Birthday
    Tiene que xxx
    Tiene que ser mayor de xxxx y la compra debe ser por alguien mayor a xxx

Email
    Debe contener un @
    Definir mayusculas y minusculas*
    Que contengan un dominio, ya sea .com, .com.ar, .net, .gov.ar, .info
    longitud
        minimo
        maximo

Contraseña:
    alfanumerico
    distingue entre mayúsculas y minúsculas
    longitud
        minimo: 6
        maximo: 
    caracteres especiales
        cantidad

Location
    Se lo pido por navegador? Si - No   
    Se lo seteo en algún default? Si - No
    Se lo seteo a partir de la ciudad que me carga? Si - No / Pros y Contras    

Opcionales
En la UI, la contraseña ¿muestra nivel de complejidad? // Alta - Media - Baja
Lista de confirmación de requerimientos de contraseña
Confirmación y verificación de email
Sumar avatares a la imagen de perfil de usuario
Colección ProfileReminder
// Es cuando la aplicación te manda el mail para recordarte que completes tu perfil



Librerías
Sweet Alert -> Las alertas de confirmación, denegado, etc
JOI Validator -> Validación
Cloudinary -> Gestión de Assets
React Calendar -> Gestión Picker de Fechas
// Nuestra propia solución para gestionar fechas
MercadoPago
Google Auth
https://tanstack.com/table/v7/  - Me resuelve las tablas


SUPER ADMIN
Puede: 
hacer todo

ADMIN: 
Puede: 
1.
2.
3.
NO puede: 
1.
2.
3.