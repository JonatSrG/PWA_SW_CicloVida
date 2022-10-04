
// Ciclo de vida del SW

self.addEventListener('install', event =>{
    //Descargar Assets
    //Creamos un cache
    console.log('Sw: Instalando SW');

    //slef.skipWaiting();

});

//Cuando el SW toma el control de la app
self.addEventListener('activate', event => {

    //Borrar cache viejo

    console.log('Sw2: Activo y listo para controlar la app');
});

