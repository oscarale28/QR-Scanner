
// Detección del dispositivo
// alert(navigator.userAgent)

// alert(getBrand())

// alert(getAppStoreUrl());

// alert(navigator.userAgent)

const info = platform.parse(navigator.userAgent)

alert(`

${info.name}
${info.version}
${info.layout}
${info.os}
${info.description}
${info.manufacturer}
`)

function detectDevice() {
    const userAgent = navigator.userAgent.toLowerCase();

    // Llamada a la API de UserAgentAPI
    fetch(`https://api.useragentapi.com/api/v4/json/${encodeURIComponent(userAgent)}`)
        .then(response => response.json())
        .then(data => {
            const device = data.data.device;

            if (device && device.manufacturer && device.manufacturer.toLowerCase() === "huawei") {
                // Redirigir a la tienda de aplicaciones de Huawei
                window.location.href = 'https://appstore.huawei.com/';
            } else {
                // Manejar otros dispositivos
                alert('Dispositivo no compatible.');
            }
        })
        .catch(error => {
            console.error('Error al obtener información del dispositivo:', error);
            // Manejar otros dispositivos
            alert('Dispositivo no compatible.');
        });
}

// detectDevice();

function getAppStoreUrl() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    console.log(userAgent)
    if (/huawei/i.test(userAgent)) {
        return "https://my-link.com";
    }
    if (/android/i.test(userAgent)) {
        return "https://play.google.com";
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "https://apps.apple.com";
    }
    return null;
}


// let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
// scanner.addListener('scan', function (content) {
//     console.log(content);
// });
// Instascan.Camera.getCameras().then(function (cameras) {
//     if (cameras.length > 0) {
//         scanner.start(cameras[0]);
//     } else {
//         console.error('No cameras found.');
//     }
// }).catch(function (e) {
//     console.error(e);
// });