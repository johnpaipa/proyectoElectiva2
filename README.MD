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



# api/product

Este endpoint maneja toda la informacion relacionada con la informacion de los productos

```diff
+ GET /
Obtiene la informacion de la base de datos de los productos
```

