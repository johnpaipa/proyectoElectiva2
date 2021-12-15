# API Taller Colaborativo de NodeJS

Esta api se encarga de manejar la informacion de la base de datos de mongodb de los diferentes productos,detalles y facturas del Diagrama de clases propuesto para este proyecto


# Instalacion Y Ejecucion
```
npm install
npm run dev

```
> Port:8080

contenido archivo .env
```
PORT = 8080
DB_CNN = mongodb+srv://api-restful-product-user:Kyyn5rE6vNE38Tpo@cluster0.dktze.mongodb.net/api-restful-product

```


### Descripción de Carpetas
- `controllers` maneja toda la lógica detrás de los parámetros de solicitud de validación, consulta, envío de respuestas con los códigos correctos. 
- `database` conexion a la base de datos
- `middleware`permite conectar dos aplicaciones y hacer que los datos pasen de una a otra.
- `models` contienen los modelos de las colecciones de la base de datos
- `routes` es donde se enrutan los mapas y se pasan al controlador


> Ruta Documentacion http://localhost:8080/api-doc/

# api/product

Este endpoint maneja toda la informacion relacionada con la informacion de los productos

```diff
# GET /
Obtiene la informacion de la base de datos de los productos
no Parametros
retorna todos los productos
Ejemplo:
Elementos: 1
[
  {
    "idProduct": 5,
    "value": 20000,
    "stock": 5,
    "stockMin": 5,
    "dateExpired": "2022/12/12",
    "typeProduct": "VIVERES"
    "id":"61b33f154b7392640d2a4219"
  }
]

```

```diff
# GET /id
Obtiene la informacion de la base de datos de un solo producto
Parametros:
   Id: requerido,String
   retorna un solo producto 
Ejemplo:
#GET/61b33f154b7392640d2a4219
[
  {
    "idProduct": 5,
    "value": 20000,
    "stock": 5,
    "stockMin": 5,
    "dateExpired": "2022/12/12",
    "typeProduct": "VIVERES"
    "id":"61b33f154b7392640d2a4219"
  }
]

```

```diff
- DELETE /id
Elimina informacion de la  base de datos de un solo producto
Parametros:
   Id: requerido,String
Ejemplo:
-DELETE/61b33f154b7392640d2a4219
[
  {
    "idProduct": 5,
    "value": 20000,
    "stock": 5,
    "stockMin": 5,
    "dateExpired": "2022/12/12",
    "typeProduct": "VIVERES"
    "id":"61b33f154b7392640d2a4219"
  }
]
>Producto Eliminado

```

```diff
+ POST /
Crea un nuevo producto en la base de datos
No Parametros
Request Body: Requerido
 {
  "idProduct": 5,
  "value": 20000,
  "stock": 5,
  "description": "product description"
  "stockMin": 5,
  "dateExpired": "2022/12/12",
  "typeProduct": "VIVERES"
}
>Producto Creado

```

```diff
! PUT /id
Modifica un Producto en la base de datos
Parametros:
   Id: requerido,String
! PUT/61b33f154b7392640d2a4219
Request Body:
   requerido:
[
  {
    "idProduct": 5,
    "value": 21000,
    "stock": 5,
    "stockMin": 5,
    "dateExpired": "2022/12/12",
    "typeProduct": "VIVERES"
    "id":"61b33f154b7392640d2a4219"
  }
]
>Producto Modificado

```

# api/bill

Este endpoint maneja toda la informacion relacionada con la informacion de las Facturas

```diff
# GET /
Obtiene la informacion de la base de datos de las Facturas
no Parametros
retorna todas las facturas
Ejemplo:
Elementos: 1
[
  {
    "id":"61a99e0ce65782df0948b582"
    "number": 6,
    "dateBill": "2021-12-02T05:00:00.000Z",
    "typePay": false,
    "details": [6]
  }
]

```

```diff
# GET /id
Obtiene la informacion de la base de datos de una Factura
Parametros:
   Id: requerido,String
   retorna una sola factura 
Ejemplo:
#GET/61a99e0ce65782df0948b582
[
  {
    "id":"61a99e0ce65782df0948b582"
    "number": 6,
    "dateBill": "2021-12-02T05:00:00.000Z",
    "typePay": false,
    "details": [6]
  }
]

```

```diff
- DELETE /id
Elimina informacion de la  base de datos de una sola factura
Parametros:
   Id: requerido,String
Ejemplo:
-DELETE/61a99e0ce65782df0948b582
[
  {
    "id":"61a99e0ce65782df0948b582"
    "number": 6,
    "dateBill": "2021-12-02T05:00:00.000Z",
    "typePay": false,
    "details": [6]
  }
]
>Factura Eliminado

```

```diff
+ POST /
Crea una nueva factura en la base de datos
No Parametros
Request Body: Requerido
 {
  "number": 6,
  "dateBill": "2021-12-02T05:00:00.000Z",
  "typePay": false,
  "details": [6]
}

>factura Creado

```

```diff
! PUT /id
Modifica una factura  en la base de datos
Parametros:
   Id: requerido,String
! PUT/61a99e0ce65782df0948b582
Request Body:
   requerido:
[
  {
    "id":"61a99e0ce65782df0948b582"
    "number": 8,
    "dateBill": "2021-12-02T05:00:00.000Z",
    "typePay": false,
    "details": [6]
  }
]
>factura Modificado

```

# api/detail

Este endpoint maneja toda la informacion relacionada con la informacion de los detalles

```diff
# GET /
Obtiene la informacion de la base de datos de los detalles
no Parametros
retorna todos los detalles
Ejemplo:
Elementos: 1
[
  {
    "id": 6,
    "cant": 2,
    "product": [61b33f154b7392640d2a4219]
  }
]

```

```diff
# GET /id
Obtiene la informacion de la base de datos de un solo Detalle
Parametros:
   Id: requerido,String
   retorna un solo Detalle 
Ejemplo:
#GET/6
[
  {
    "id": 6,
    "cant": 2,
    "product": [61b33f154b7392640d2a4219]
  }
]

```

```diff
- DELETE /id
Elimina informacion de la  base de datos un solo detalle
Parametros:
   Id: requerido,String
Ejemplo:
-DELETE/6
[
  {
    "id": 6,
    "cant": 2,
    "product": [61b33f154b7392640d2a4219]
  }
]
>Detalle Eliminado

```

```diff
+ POST /
Crea un nuevo detalle en la base de datos
No Parametros
Request Body: Requerido
{
  "id": 6,
  "cant": 2,
  "product": [61b33f154b7392640d2a4219]
}
>detalle Creado

```

```diff
! PUT /id
Modifica un detalle en la base de datos
Parametros:
   Id: requerido,String
! PUT/6
Request Body:
   requerido:
[
  {
    "id": 6,
    "cant": 5,
    "product": [61b33f154b7392640d2a4219]
  }
]
>Detalle Modificado

```

