


const map = L.map('map').setView([46.726229017579755, 2.428144757082328], 6);
const slugs=[];

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 25,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

afficherInstallations(InstallationsData, map,slugs);


