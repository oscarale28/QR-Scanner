
let detector = new MobileDetect(window.navigator.userAgent);

alert(`

Mobile = ${detector.mobile()}
Phone = ${detector.phone()}
Tablet = ${detector.tablet()}
`)

// Detección del dispositivo
// alert(navigator.userAgent)

// alert(getBrand())

document.getElementById('texto').innerHTML = "hola"

function getBrand() {
    const userAgent = navigator.userAgent;
    const brands = [
        { name: 'Apple', identifier: 'iPhone|iPad|iPod' },
        { name: 'Samsung', identifier: 'SAMSUNG|SM-' },
        { name: 'Google', identifier: 'Pixel' },
        // Add more brands and their respective identifiers as needed
    ];

    for (const brand of brands) {
        const regex = new RegExp(brand.identifier, 'i');
        if (regex.test(userAgent)) {
            return brand.name;
        }
    }

    return 'Unknown';


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