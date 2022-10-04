
// Ciclo de vida del SW

self.addEventListener('install', event =>{
    //Descargar Assets
    //Creamos un cache
    console.log('Sw: Instalando SW');

    const instalacion = new Promise((resolve, reject)=>{
        setTimeout(()=> {

            console.log('Sw: Instalaciones terminadas');

            self.skipWaiting();

            resolve();
        }, 2000);
    });

    event.waitUntil( instalacion );

});

//Cuando el SW toma el control de la app
self.addEventListener('activate', event => {

    //Borrar cache viejo

    console.log('Sw2: Activo y listo para controlar la app');
});



