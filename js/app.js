

// Detectar si podemos usar Service Workers
if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js')
        .then( reg => {
        //    setTimeout(() => {
                
        //        reg.sync.register('Posteo-mapaches');
        //        console.log('Se enviaron foros de mapaches al server');
        //    }, 3000);

        Notification.requestPermission().then( result => {
            console.log(result);
        });
        
        });

        
}

//if () {
    
//}



//  fetch('https://reqres.in/api/users')
//    .then(resp => resp.text())
//    .then(console.log);
