var imageUrl = 'img/plan.gif',
    imageBounds = [[46.180529, 6.121130], [46.182590, 6.123502]];

var map = L.map('map', {
    attributionControl: false,
    zoomControl: false,
    zoom: 17.55,
    minZoom: 17.55,
    maxZoom: 17.55,
    dragging: false,
    maxBounds: imageBounds,
    maxBoundsViscosity: 1.0,
    touchZoom: false
});

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11'
}).addTo(map);

L.imageOverlay(imageUrl, imageBounds).addTo(map);



var bounds1 = [[0,0], [463,548]];
var plan_b10etage1 = L.map('plan_b10etage1', {
    crs: L.CRS.Simple,
    attributionControl: false,
    minZoom: 0,
    maxZoom: 0,
    // dragging: false,
    zoomControl:false,
    // maxBounds: bounds1,
    // maxBoundsViscosity: 1.0,
    touchZoom: false
});
var image = L.imageOverlay('img/b10etage1.png', bounds1).addTo(plan_b10etage1);
plan_b10etage1.fitBounds(bounds1);

var bounds2 = [[0,0], [462,548]];
var plan_b10etage2 = L.map('plan_b10etage2', {
    crs: L.CRS.Simple,
    attributionControl: false,
    minZoom: 0,
    maxZoom: 0,
    // dragging: false,
    zoomControl:false,
    // maxBounds: bounds2,
    // maxBoundsViscosity: 1.0,
    touchZoom: false
    
});
var image = L.imageOverlay('img/b10etage2.png', bounds2).addTo(plan_b10etage2);
plan_b10etage2.fitBounds(bounds2);

var bounds3 = [[0,0], [459,548]];
var plan_b10rdc = L.map('plan_b10rdc', {
    crs: L.CRS.Simple,
    attributionControl: false,
    minZoom: 0,
    maxZoom: 0,
    // dragging: false,
    zoomControl:false,
    // maxBounds: bounds3,
    // maxBoundsViscosity: 1.0,
    touchZoom: false
});
var image = L.imageOverlay('img/b10.png', bounds3).addTo(plan_b10rdc);
plan_b10rdc.fitBounds(bounds3);

var bounds4 = [[0,0], [459,548]];
var plan_b10sousol = L.map('plan_b10sousol', {
    crs: L.CRS.Simple,
    attributionControl: false,
    minZoom: 0,
    maxZoom: 0,
    // dragging: false,
    zoomControl:false,
    // maxBounds: bounds4,
    // maxBoundsViscosity: 1.0,
    touchZoom: false
});
var image = L.imageOverlay('img/b10.png', bounds4).addTo(plan_b10sousol);
plan_b10sousol.fitBounds(bounds4);

var bounds5 = [[0,0], [448,548]];
var plan_b17sousol = L.map('plan_b17sousol', {
    crs: L.CRS.Simple,
    attributionControl: false,
    minZoom: 0,
    maxZoom: 0,
    // dragging: false,
    zoomControl:false,
    // maxBounds: bounds5,
    // maxBoundsViscosity: 1.0,
    touchZoom: false
});
var image = L.imageOverlay('img/b17sousol.png', bounds5).addTo(plan_b17sousol);
plan_b17sousol.fitBounds(bounds5);

var bounds6 = [[0,0], [461,548]];
var plan_b17rdc = L.map('plan_b17rdc', {
    crs: L.CRS.Simple,
    attributionControl: false,
    minZoom: 0,
    maxZoom: 0,
    // dragging: false,
    zoomControl:false,
    // maxBounds: bounds6,
    // maxBoundsViscosity: 1.0,
    touchZoom: false
});
var image = L.imageOverlay('img/b17rezdechaus.png', bounds6).addTo(plan_b17rdc);
plan_b17rdc.fitBounds(bounds6);

var bounds7 = [[0,0], [459,548]];
var plan_b17etage1 = L.map('plan_b17etage1', {
    crs: L.CRS.Simple,
    attributionControl: false,
    minZoom: 0,
    maxZoom: 0,
    // dragging: false,
    zoomControl:false,
    // maxBounds: bounds7,
    // maxBoundsViscosity: 1.0,
    touchZoom: false
});
var image = L.imageOverlay('img/b17etage1.png', bounds7).addTo(plan_b17etage1);
plan_b17etage1.fitBounds(bounds7);

var bounds8 = [[0,0], [462,548]];
var plan_b17etage2 = L.map('plan_b17etage2', {
    crs: L.CRS.Simple,
    attributionControl: false,
    minZoom: 0,
    maxZoom: 0,
    // dragging: false,
    zoomControl:false,
    // maxBounds: bounds8,
    // maxBoundsViscosity: 1.0,
    touchZoom: false
});
var image = L.imageOverlay('img/b17etage2.png', bounds8).addTo(plan_b17etage2);
plan_b17etage2.fitBounds(bounds8);

var bounds9 = [[0,0], [503,548]];
var plan_mtetage1 = L.map('plan_mtetage1', {
    crs: L.CRS.Simple,
    attributionControl: false,
    minZoom: 0,
    maxZoom: 0,
    // dragging: false,
    zoomControl:false,
    // maxBounds: bounds9,
    // maxBoundsViscosity: 1.0,
    touchZoom: false
});
var image = L.imageOverlay('img/mtetage1.png', bounds9).addTo(plan_mtetage1);
plan_mtetage1.fitBounds(bounds9);

var bounds10 = [[0,0], [516,548]];
var plan_mtetage2 = L.map('plan_mtetage2', {
    crs: L.CRS.Simple,
    attributionControl: false,
    minZoom: 0,
    maxZoom: 0,
    // dragging: false,
    zoomControl:false,
    // maxBounds: bounds10,
    // maxBoundsViscosity: 1.0,
    touchZoom: false
});
var image = L.imageOverlay('img/mtetage2.png', bounds10).addTo(plan_mtetage2);
plan_mtetage2.fitBounds(bounds10);

var bounds11 = [[0,0], [503,548]];
var plan_mtrdc = L.map('plan_mtrdc', {
    crs: L.CRS.Simple,
    attributionControl: false,
    minZoom: 0,
    maxZoom: 0,
    // dragging: false,
    zoomControl:false,
    // maxBounds: bounds11,
    // maxBoundsViscosity: 1.0,
    touchZoom: false
});
var image = L.imageOverlay('img/mt.png', bounds11).addTo(plan_mtrdc);
plan_mtrdc.fitBounds(bounds11);

var bounds12 = [[0,0], [503,548]];
var plan_mtsousol = L.map('plan_mtsousol', {
    crs: L.CRS.Simple,
    attributionControl: false,
    minZoom: 0,
    maxZoom: 0,
    // dragging: false,
    zoomControl:false,
    // maxBounds: bounds12,
    // maxBoundsViscosity: 1.0,
    touchZoom: false
});
var image = L.imageOverlay('img/mt.png', bounds12).addTo(plan_mtsousol);
plan_mtsousol.fitBounds(bounds12);


var bounds13 = [[0,0], [462,548]];
var plan_b17etage3 = L.map('plan_b17etage3', {
    crs: L.CRS.Simple,
    attributionControl: false,
    minZoom: 0,
    maxZoom: 0,
    // dragging: false,
    zoomControl:false,
    // maxBounds: bounds13,
    // maxBoundsViscosity: 1.0,
    touchZoom: false
});
var image = L.imageOverlay('img/b17etage3.png', bounds13).addTo(plan_b17etage3);
plan_b17etage3.fitBounds(bounds13);





var sds = L.circle([250,150], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
}).addTo(plan_b17sousol);
sds.bindPopup("Cette salle de sport se situe au sous sol du B17. Il y a des marquages au sol qui indiquent différents terrains pour la pratique du multiple sports. Cette salle peut aussi servir de salle de présentation grâce à une scène");
var myIcon = L.icon({
    iconUrl: 'img/localisation.png',
    iconSize: [30, 40],
});  

var mt11 = L.circle([270,450], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
}).addTo(plan_mtetage1);
mt11.bindPopup("Ici se trouve le bureau de Jean-Francois Lopez, le responsable primaire francais.");
var myIcon = L.icon({
    iconUrl: 'img/localisation.png',
    iconSize: [30, 40],
});  

var b17_206 = L.circle([390,480], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
}).addTo(plan_b17etage2);
b17_206.bindPopup("Ici se trouve le bureau de Monsieur Jacomme, le responsable du secondaire francais.");
var myIcon = L.icon({
    iconUrl: 'img/localisation.png',
    iconSize: [30, 40],
});  

var b17_106 = L.circle([390,480], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
}).addTo(plan_b17etage1);
b17_206.bindPopup("Ici se trouve le bureau de Madame Raffy, la responsable du secondaire anglais.");
var myIcon = L.icon({
    iconUrl: 'img/localisation.png',
    iconSize: [30, 40],
});  

var b17_207 = L.circle([360,480], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
}).addTo(plan_b17etage2);
b17_207.bindPopup("Ici se trouve le bureau de Madame Shéa, la conséillère d'orientation.");
var myIcon = L.icon({
    iconUrl: 'img/localisation.png',
    iconSize: [30, 40],
});  

var steam_robots = L.circle([150,500], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
}).addTo(plan_mtsousol);
steam_robots.bindPopup("Ici se trouve l'espace des robots légo et le mur végétal. Ici se trouve aussi le lombricompost.");
var myIcon = L.icon({
    iconUrl: 'img/localisation.png',
    iconSize: [30, 40],
});  

var steam_couture = L.circle([400,500], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
}).addTo(plan_mtsousol);
steam_couture.bindPopup("Ici se trouve l'espace de couture électronique et d'aquaponie. Ici se trouve aussi le lombricompost.");
var myIcon = L.icon({
    iconUrl: 'img/localisation.png',
    iconSize: [30, 40],
});  

var steam_musique= L.circle([150,150], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
}).addTo(plan_mtsousol);
steam_musique.bindPopup("Ici se trouve l'espace musique.");
var myIcon = L.icon({
    iconUrl: 'img/localisation.png',
    iconSize: [30, 40],
}); 

var steam_machine= L.circle([330,150], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
}).addTo(plan_mtsousol);
steam_machine.bindPopup("Ici se trouve la salle des machines outils.");
var myIcon = L.icon({
    iconUrl: 'img/localisation.png',
    iconSize: [30, 40],
});


var salleds = L.circle([180,200], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
}).addTo(plan_b17etage3);
salleds.bindPopup("Ici se passent les DS des secondaires.");
var myIcon = L.icon({
    iconUrl: 'img/localisation.png',
    iconSize: [30, 40],
}); 

var polyv = L.circle([390,200], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
}).addTo(plan_b10sousol);
polyv.bindPopup("C’est là où se déroulent les examens pour les élèves, c’est aussi une salle où peuvent avoir des répétions. Cette salle sert de chapelle.");
var myIcon = L.icon({
    iconUrl: 'img/localisation.png',
    iconSize: [30, 40],
}); 

var salledp = L.circle([120,350], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
}).addTo(plan_b17etage2);
salledp.bindPopup("C’est l’espace des professeur du lycée, interdit aux élèves.");
var myIcon = L.icon({
    iconUrl: 'img/localisation.png',
    iconSize: [30, 40],
}); 

var recept = L.circle([220,100], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
}).addTo(plan_mtrdc);
recept.bindPopup("Ici, toutes les informations dont vous pourriez avoir besoin vous serrons données, les réceptionnistes sont disponibles toute la journée pendant les cours. ");
var myIcon = L.icon({
    iconUrl: 'img/localisation.png',
    iconSize: [30, 40],
}); 

var auditorium = L.circle([230,470], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
}).addTo(plan_b17rdc);
auditorium.bindPopup(" Ici se trouve l'auditorium du B17. Dans cet espace se passent l'atelier théatre et des expositions entre autres.");
var myIcon = L.icon({
    iconUrl: 'assets/img/localisation.png',
    iconSize: [30, 40],
}); 

var viesc = L.circle([420,360], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
}).addTo(plan_b10etage2);
viesc.bindPopup("La vie scolaire est là où vous pouvez aller si vous avez un retard, un départ en milieu de journée ou n’importe quel sorte de problème pour lequel la réception peut vous aider.");
var myIcon = L.icon({
    iconUrl: 'img/localisation.png',
    iconSize: [30, 40],
}); 

var labor = L.circle([420,430], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 10
}).addTo(plan_b10rdc);
labor.bindPopup("Ce laboratoire est destinée aux sciences de la vie et de la terre. Il peut s’y dérouler des expériences. Il est composé de paillasses pour les élèves, un tableau interactif pour les profs, et plusieurs éléments indispensables à la réalisation d’un travail pratique.");
var myIcon = L.icon({
    iconUrl: 'img/localisation.png',
    iconSize: [30, 40],
}); 

function onLocationFound(e) {
    var radius = e.accuracy / 2;
    L.marker((e.latlng), {icon: myIcon}).addTo(map);
    //.bindPopup("You are within " + radius + " meters from this point").openPopup();
    // L.circle(e.latlng, radius).addTo(map);
    
}
function onLocationError(e) {
    alert(e.message);
}
map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);
map.locate({ setView: true, maxZoom: 21 });

var theMarker = {};

var gymnase = [46.182020, 6.122567, "tab5", "plan5"];
var auditorium = [46.181800, 6.122119, "tab4", "plan4"];
var sd = [46.181918, 6.122595, "tab3", "plan3"];
var poly = [46.181297, 6.122451, "tab2", "plan2"];

var sdp = [46.182166, 6.122394, "tab0", "plan0"];
var reception = [46.181689, 6.122689, "tab7", "plan7"];
var vs = [46.181297, 6.122451, "tab0", "plan0"];
var labo = [46.1813108, 6.1226701, "tab1", "plan1"];
var locations = [gymnase, auditorium, sd, poly, sdp, reception, vs, labo];

function showMarker(id) {

    if (theMarker != undefined) {
        map.removeLayer(theMarker);
    };

    theMarker = L.marker([locations[id][0], locations[id][1]]).addTo(map);

    var tabs = document.getElementById("tabs");
    var x = tabs.getElementsByClassName("is-active");
    while (x.length)
        x[0].className = x[0].className.replace(/\bis-active\b/g, "");
    var current_tab = document.getElementById(locations[id][2]);
    current_tab.classList.add("is-active");
    var current_plan = document.getElementById(locations[id][3]);
    current_plan.classList.add("is-active");
}

