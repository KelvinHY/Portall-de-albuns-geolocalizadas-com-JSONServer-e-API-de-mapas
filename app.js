
const url = "https://api-albuns.kelvingomesjp.repl.co/albums"
const centralLatLong = [-73.90346988169459,40.741945578982325]
let albuns = []
mapboxgl.accessToken = 'pk.eyJ1Ijoia2VsdmludnJ3IiwiYSI6ImNscG9kZnk3djBjcjgyam9pODlibWoyZXAifQ.WJIsDFB0amAbYAEy1KDpCA';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: centralLatLong,
    zoom: 10
})
fetch(url)
    .then(function (response) { return response.json() })
    .then(function (dados) {
        albuns = dados
        for (let i = 0; i < albuns.length; i++) {
            console.log(
                `Local: ${albuns[i].name}
                        Longitude: ${albuns[i].location_coordinates[0]}
                        Latitude: ${albuns[i].location_coordinates[1]}`)
        }
        albuns.forEach((album) => {
            var popup = new mapboxgl.Popup({offset:25})
            .setHTML(`<h3>${album.name}</h3>
                          ${album.location_name} <br>
                          <a href="index.html" class="link-abrir-album"><button class="botao-abrir-album">Abrir album</button></a>`)
            const marker = new mapboxgl.Marker({color: album.cor})
                .setLngLat(album.location_coordinates)
                .setPopup(popup)
                .addTo(map)
        })
        
    })