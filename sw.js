
// Ciclo de vida del SW

self.addEventListener('install', event => {
    //Descargar Assets
    //Creamos un cache
    console.log('Sw: Instalando SW');

    const instalacion = new Promise((resolve, reject) => {
        setTimeout(() => {

            console.log('Sw: Instalaciones terminadas');

            self.skipWaiting();

            resolve();
        }, 1);
    });

    event.waitUntil(instalacion);

});

//Cuando el SW toma el control de la app
self.addEventListener('activate', event => {

    //Borrar cache viejo

    console.log('Sw2: Activo y listo para controlar la app');
});

//fetch manejo de petiviones hhtttpp
self.addEventListener('fetch', event => {
    //aplicar estrategias del cache
//    console.log('sw: ', event.request.url);

//    if (event.request.url.includes('https://reqre.in/')) {

//        const resp = new Response(`{
//            ok: false, mensaje: 'jajjaja'
//        }`);
//        event.respondWith(resp);
//    }
});

//Sync: recuperar conexion a internet
self.addEventListener('sync', event => {

    console.log('Tenemos conexion!');
    console.log(event);
    console.log(event.tag);
});

//Push: manejar las push notofications
self.addEventListener('push', event => {
    console.log('Notificacion recibida');
});

