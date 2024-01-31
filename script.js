
// Detección del dispositivo
// alert(navigator.userAgent)

// alert(getBrand())

// alert(getAppStoreUrl());

alert(navigator.userAgent)

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