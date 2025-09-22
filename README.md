 API REST - Cine  

Proyecto desarrollado con **Node.js + Express + MongoDB Atlas** como parte de la evaluación de IPLACEX.  
Este servicio permite gestionar una colección de películas favoritas de empleados de IPLACEX, con operaciones CRUD completas.



 Instalación y ejecución

 1. Clonar o descargar el proyecto
Ubicar la carpeta en tu computador.

 2. Instalar dependencias
En la terminal (PowerShell) dentro de la carpeta del proyecto:
```powershell
cmd /c "npm install"


 3. Configurar variables de entorno
En **PowerShell** (ejecutar línea por línea):
powershell
$env:MONGODB_URI='mongodb+srv://nicolasanes_db_user:te7fcFxlGKnDnIQw@cluster0.cjvot2b.mongodb.net/cine?retryWrites=true&w=majority&appName=cluster0'
$env:PORT='3000'


 4. Iniciar servidor
powershell
cmd /c "npm start"


Si todo está correcto, verás:

Server running on port 3000
MongoDB connected


El servicio quedará disponible en:

http://localhost:3000




 Endpoints disponibles

 Health Check
- **GET** `/`  
  Respuesta:
  ```json
  { "ok": true, "service": "cine-api" }
  ```

### Películas

- **GET** `/api/movies` → Lista todas las películas.
- **POST** `/api/movies` → Crea una nueva película.  
  Ejemplo de body (JSON):
  ```json
  {
    "title": "One Piece Film: Red",
    "director": "Goro Taniguchi",
    "year": 2022,
    "genre": "Musical"
  }
  ```

- **GET** `/api/movies/:id` → Obtiene una película por ID.
- **PUT** `/api/movies/:id` → Actualiza una película por ID.  
  Ejemplo de body (JSON):
  ```json
  {
    "title": "One Piece Film: Z",
    "director": "Tatsuya Nagamine",
    "year": 2012,
    "genre": "Acción"
  }
  ```

- **DELETE** `/api/movies/:id` → Elimina una película por ID.

---

# Evidencias de uso
Para la entrega se deben adjuntar pantallazos mostrando:
1. Servidor corriendo en terminal con **MongoDB conectado**.  
2. Pruebas en **Postman**:  
   - Crear película (POST).  
   - Listar películas (GET).  
   - Actualizar (PUT).  
   - Eliminar (DELETE).  
3. Visualización en navegador de la lista de películas en formato JSON.  



 Autor
Ángel Anes Aguirre
Escuela de Informática y Telecomunicaciones – IPLACEX  
Evaluación de examen
