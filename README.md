# Sistema de Registros
En este proyecto busqué desarrollar una solución para una empresa ficticia que necesitaba poder agendar actividades a través de su página web y recuperarlas para analizarlas en Excel.  
Esto dado que hay muchas empresas que no tienen los recursos para pagar por el desarrollo de sistemas de gestión más robustos ni el conocimiento para administrarlos.  
## Rutas de servidor
El servidor cuenta con dos rutas, una para el registro de actividades y otra que recupera la información de la DB, le da formato CSV y la envía al cliente para su descarga automática.  
## Vistas del cliente
EL cliente es también muy sencillo, con un inicio, un formulario de reserva y una vista adiconal, no agregada en la navegación "noraml" del sitio, en la que un usuario con perfil de administrador podría solicitar el resumen.
### Stack y Arquitectura
El proyecto está desarrollado con Flask en el servidor, React.js en el cliente y MongoDB como base de datos. 
### Limitaciones del proyecto
El proyecto no cuenta con un sistema de log in, ni ningún filtro de control de de datos o expresiones regulares, ya que fue desarrollado en un sólo día, como parte de un desafío personal.