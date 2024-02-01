
// CON PLATFORM JS
// const info = platform.parse(navigator.userAgent)
// alert(`

// ${info.name}
// ${info.version}
// ${info.layout}
// ${info.os}
// ${info.description}
// ${info.manufacturer}
// `)

// CON USERAGENTAPI
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

// CON USERAGENT
function getAppStoreUrl() {
    var userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('huawei')) {
        window.location.href = "https://appgallery.huawei.com/app/C110080371";
        return
    } else if (userAgent.includes('android')) {
        window.location.href = "https://play.google.com/store/apps/details?id=com.comedica.votaciones";
    } else if (userAgent.includes('iphone') || userAgent.includes('ipad')) {
        window.location.href = "https://apps.apple.com/sv/app/asamblea-comedica/id6473288215?l=en-GB";
    } else {
        alert("Dispositivo no compatible.")
    }
}
getAppStoreUrl();
// alert(getAppStoreUrl());
