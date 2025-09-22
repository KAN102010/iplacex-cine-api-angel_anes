  API REST - Cine  

Proyecto desarrollado con Node.js + Express + MongoDB Atlas como parte de la evaluación final de IPLACEX.  
Este servicio permite gestionar una colección de películas favoritas de los estudiantes de IPLACEX, implementando operaciones CRUD completas.  



  Tecnologías utilizadas
- Node.js
- Express
- MongoDB Atlas (Mongoose)
- Render para despliegue  



 Instalación y ejecución en local

1. Clonar el repositorio
git clone https://github.com/KAN102010/iplacex-cine-api-angel_anes.git
cd iplacex-cine-api-angel_anes
2. Instalar dependencias
npm install
3. Configurar variables de entorno
En el archivo .env (o en Render → Environment Variables) agregar:



MONGODB_URI=mongodb+srv://nicolasanes_db_user:IPLACEX2025@cluster0.cjvot2b.mongodb.net/cine?retryWrites=true&w=majority&appName=cluster0
PORT=3000
 Nota: la contraseña se actualizó a IPLACEX2025

4. Iniciar servidor
npm start
Si todo está correcto, en consola se mostrará:


Servidor ejecutándose en el puerto 3000
MongoDB conectado
El servicio local quedará disponible en:
 http://localhost:3000

 Despliegue en Render
La API también está desplegada en:
 https://cine-api-angel-anes.onrender.com

 Endpoints disponibles
Health Check
GET /
Respuesta:


{ "ok": true, "service": "cine-api" }
Películas
GET /api/movies → Lista todas las películas.

POST /api/movies → Crea una nueva película.
Ejemplo body (JSON):


{
  "title": "One Piece Film: Red",
  "director": "Goro Taniguchi",
  "year": 2022,
  "genre": "Musical"
}
GET /api/movies/:id → Obtiene una película por ID.
Ejemplo:


GET /api/movies/68d09f20f3dd6e0727abdcfc
PUT /api/movies/:id → Actualiza una película por ID.
Ejemplo body (JSON):


{
  "title": "One Piece Film: Z",
  "director": "Tatsuya Nagamine",
  "year": 2012,
  "genre": "Acción"
}
DELETE /api/movies/:id → Elimina una película por ID.

 Evidencias de uso
Para cumplir con la evaluación se deben adjuntar los siguientes pantallazos:

Servidor en consola mostrando MongoDB conectado.

Pruebas en Postman:

Crear película (POST).

Listar películas (GET).

Actualizar película (PUT).

Eliminar película (DELETE).

Navegador mostrando respuesta JSON de /api/movies y /api/movies/:id.

 Autor
Ángel Anes Aguirre
Escuela de Informática y Telecomunicaciones – IPLACEX
Evaluación final de Programación Servicios Web
