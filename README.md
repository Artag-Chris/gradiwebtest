como funciona?
este software es el modelado de un producto de un E-Commerce se puede seleccionar de las opciones que se despliegan en la pantalla para seleccionar el producto mas deseado
trate de hacerlo lo mas fiel posible a las diapositivas que enviaron en la prueba técnica aunque no del todo. 

fue una experiencia bonita realizar esta prueba muchas gracias y los invito ha mirar otros proyectos de este mi github, siento que pudo ser mucho mejor visualmente pero lastimosamente este fin de semana fue un poco turbio por cuestiones personales,

realice un pequeño despliegue a producción usando netlify el cual pueden visitar aquí https://gradiwebtest.netlify.app/ por si quieren verlo directamente 

Como instalar es software:

Se requiere un pc con Node.js para la instalación de los paquetes npm, Node se puede descargar aquí https://nodejs.org/en/

En el link https://github.com/Artag-Chris/gradiwebtest ir a la opción que dice Code darle click y elegir la opción download Zip o clonarlo directamente.

una vez descargado y descomprimirlo es recomendable abrir la carpeta con un editor de código en mi caso Vscode el cual se descarga aqui https://code.visualstudio.com/

Después de abrir la carpeta  usar la terminal en la ubicación gradiwebtest-main/gradiwebtest-main y escribir los comando npm install esperamos que descargue las dependencias
y por ultimo usar el comando npm start y esto abrirá el software de prueba técnica en el browser.


Tecnologías usadas:

Proyecto Hecho con React.js el cual es una librería de Javascript que usa como paradigma de programación orientada a eventos, por esto lo hace muy atrayente para proyectos de Ecommerce por lo fácil que es general buenas experiencias de usuario, su documentación oficial es https://reactjs.org/ los desarrolladores de Meta están detrás de esta librería lo cual hace a React una tecnología muy bien apoyada.

También se uso Bootstrap 5.0 que ayuda con el diseño responsivo y sus plantillas ayudan mucho a la hora de hacer maquetación. su documentación oficial es https://getbootstrap.com/ este es un Framework de Css que es de los mas usados en el mercado.

Se utilizo Axios que ayuda con las promesas basadas en XMLHttp este software se usa tanto con Node.js como con JavaScript y ayuda muchísimo por que convierte automáticamente la data de los archivos tipo Json personalmente lo he usado siempre en el front-end y por lo regular con Express en el back-end el cual es un Framework de Node.js, su documentación oficial es https://axios-http.com/docs/intro

Por ultimo se uso React-router-dom que ayuda con las rutas, en este caso solo se utilizan dos rutas pero en proyectos mas grandes este software ayuda muchísimo a que la aplicación escale mas fácil,  su documentación oficial es https://v5.reactrouter.com/web/guides/quick-start


requisitos:

Solicitar información a un API pública la cual es https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js 

Realizar la maquetación de una ficha del producto, la cual contiene información básica como:
Nombre
Precio real
Precio más alto (%)
Descripción
Galería de imágenes
Variantes de producto (S / M / L) y su respectivo precio

Realizar un carrusel animado con las imágenes del producto

Adaptar resultado a las diferentes versiones/tamaños de pantalla (Diseño Responsivo)

Agregar un formulario que nos permita seleccionar una variante del producto. en este caso cree una ruta con todas las variantes del producto y su información la pase a un modal

Añadir funcionalidad a la acción de <añadir al carrito> mediante un botón. Esta acción/evento debe desplegar un mensaje con título y variante seleccionada. en este caso cree un modal con la foto y la información del producto 
