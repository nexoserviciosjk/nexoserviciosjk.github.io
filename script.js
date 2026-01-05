const sectionsDiv = document.getElementById("sections");
const contentDiv = document.getElementById("content");

/* ===== DATOS COMPLETOS ===== */
const data = {
  "Carnes": [
    { nombre: "Carne de Res Saltada en Salsa de Ostión o Tausí", precio: "S/48", img: "img/carnes/carne-ostion.jpg" },
    { nombre: "Carne de Res con Frijolito Chino", precio: "S/48", img: "img/carnes/carne-frijol.jpg" },
    { nombre: "Carne de Res con Ostión a la Plancha", precio: "S/53", img: "img/carnes/carne-ostion-plancha.jpg" },
    { nombre: "Carne de Res con Tausí a la Plancha", precio: "S/53", img: "img/carnes/carne-tausi.jpg" }
  ],
  "Del Mar": [
    { nombre: "Pescado San Joy Lao", precio: "S/62", img: "img/delmar/pescado-sjl.jpg" },
    { nombre: "Filete de Pescado al Vapor", precio: "S/65", img: "img/delmar/filete-vapor.jpg" },
    { nombre: "Pescado con Langostino en salsa de Ostión o Tausí", precio: "S/55", img: "img/delmar/pescado-langostino.jpg" },
    { nombre: "Pescado al ajo", precio: "S/55", img: "img/delmar/pescado-ajo.jpg" },
    { nombre: "Pescado con tamarindo", precio: "S/55", img: "img/delmar/pescado-tamarindo.jpg" },
    { nombre: "Pescado en Salsa de Ostión", precio: "S/55", img: "img/delmar/pescado-ostion.jpg" },
    { nombre: "Pescado con Tausí a la Plancha", precio: "S/59", img: "img/delmar/pescado-tausi.jpg" },
    { nombre: "Pescado en Salsa de Ostión a la Plancha", precio: "S/59", img: "img/delmar/pescado-ostion-plancha.jpg" },
    { nombre: "Langostinos Picantes", precio: "S/50", img: "img/delmar/langostinos-picante.jpg" },
    { nombre: "Langostinos al Ajo", precio: "S/50", img: "img/delmar/langostinos-ajo.jpg" },
    { nombre: "Langostinos Arrebolzados", precio: "S/50", img: "img/delmar/langostinos-arrebol.jpg" },
    { nombre: "Langostinos en Salsa de Ostión o Tausí", precio: "S/50", img: "img/delmar/langostinos-ostion.jpg" },
    { nombre: "Langostinos en Salsa de Tamarindo", precio: "S/50", img: "img/delmar/langostinos-tamarindo.jpg" },
    { nombre: "Langostinos en Nido de Paloma", precio: "S/53", img: "img/delmar/langostinos-nido.jpg" },
    { nombre: "Langostinos a la Plancha", precio: "S/57", img: "img/delmar/langostinos-plancha.jpg" },
    { nombre: "Rueda de Langostinos", precio: "S/135", img: "img/delmar/rueda-langostinos.jpg" },
    { nombre: "Chicharrón de Pescado", precio: "S/50", img: "img/delmar/chicharron-pescado.jpg" }
  ],
  "Arroz": [
    { nombre: "Chaufa Taypá Personal", precio: "S/37", img: "img/arroz/chaufa-taypa-personal.jpg" },
    { nombre: "Chaufa Taypá Fuente", precio: "S/72", img: "img/arroz/chaufa-taypa-fuente.jpg" },
    { nombre: "Chaufa Especial Personal", precio: "S/25", img: "img/arroz/chaufa-especial-personal.jpg" },
    { nombre: "Chaufa Especial Fuente", precio: "S/48", img: "img/arroz/chaufa-especial-fuente.jpg" }
  ],
  "Tallarines": [
    { nombre: "Tallarín Taypá", precio: "S/50", img: "img/tallarines/taypa.jpg" },
    { nombre: "Tallarín Sam Sí", precio: "S/43", img: "img/tallarines/sam-si.jpg" },
    { nombre: "Tallarín Saltado de Pollo", precio: "S/37", img: "img/tallarines/saltado-pollo.jpg" }
  ],
  "Tortillas": [
    { nombre: "Tortilla de Pollo", precio: "S/34", img: "img/tortillas/pollo.jpg" },
    { nombre: "Tortilla de Chancho", precio: "S/34", img: "img/tortillas/chancho.jpg" },
    { nombre: "Tortilla de Pato", precio: "S/38", img: "img/tortillas/pato.jpg" },
    { nombre: "Tortilla de Langostinos", precio: "S/40", img: "img/tortillas/langostinos.jpg" }
  ],
  "Vegetarianos": [
    { nombre: "Tallarín Saltado con Verduras", precio: "S/30", img: "img/vegetarianos/tallarines.jpg" },
    { nombre: "Sahofan o Maifán o Fansí con Verduras", precio: "S/35", img: "img/vegetarianos/sahofan.jpg" },
    { nombre: "Frijolito Saltado", precio: "S/26", img: "img/vegetarianos/frijolito.jpg" }
  ],
  "Bebidas": [
    { nombre: "Chicha 1 L", precio: "S/18", img: "img/bebidas/chicha.jpg" },
    { nombre: "Maracuyá 1 L", precio: "S/18", img: "img/bebidas/maracuya.jpg" },
    { nombre: "Limonada 1 L", precio: "S/18", img: "img/bebidas/limonada.jpg" },
    { nombre: "Inca Kola Personal", precio: "S/6", img: "img/bebidas/inca.jpg" }
  ],
  "Dim Sum": [
    { nombre: "Rueda de Bocaditos x 3", precio: "S/45", img: "img/dimsum/rueda-3.jpg" },
    { nombre: "Rueda de Bocaditos x 6", precio: "S/80", img: "img/dimsum/rueda-6.jpg" },
    { nombre: "Siu Kao Picante x 6", precio: "S/19", img: "img/dimsum/siu-kao.jpg" }
  ],
  "Sopas": [
    { nombre: "Wantán Personal", precio: "S/19", img: "img/sopas/wantan-personal.jpg" }
  ],
  "Pollo": [
    { nombre: "Kay Ten", precio: "S/43", img: "img/pollo/kay-ten.jpg" },
    { nombre: "Cru Kay", precio: "S/43", img: "img/pollo/cru-kay.jpg" }
  ],
  "Pato": [
    { nombre: "Pato con Frijolito Chino", precio: "S/45", img: "img/pato/pato-frijol.jpg" }
  ],
  "Chanchito": [
    { nombre: "Chicharrón Oriental en Salsa Ostión o Tausí", precio: "S/45", img: "img/chanchito/chicharron.jpg" }
  ],
  "Banquetes": [
    { nombre: "Banquete 2 Personas", precio: "S/110", img: "img/banquetes/2p.jpg" },
    { nombre: "Banquete 4 Personas", precio: "S/180", img: "img/banquetes/4p.jpg" },
    { nombre: "Banquete de la Abundancia (6p)", precio: "S/300", img: "img/banquetes/6p.jpg" },
    { nombre: "Banquete de la Fortuna (8p)", precio: "S/390", img: "img/banquetes/8p.jpg" },
    { nombre: "Banquete de la Serpiente (10p)", precio: "S/495", img: "img/banquetes/10p.jpg" }
  ]
};

/* ===== CREAR BOTONES DE SECCIÓN ===== */
for (let section in data) {
  const btn = document.createElement("button");
  btn.textContent = section;
  btn.onclick = () => showList(section);
  sectionsDiv.appendChild(btn);
}

/* ===== FUNCIONES ===== */
function showList(section) {
  contentDiv.innerHTML = "";
  data[section].forEach(item => {
    const div = document.createElement("div");
    div.className = "plato-btn";
    div.innerHTML = `<span>${item.nombre}</span><span class="plato-precio">${item.precio}</span>`;
    div.onclick = () => showDetail(item, section);
    contentDiv.appendChild(div);
  });
}

function showDetail(item, section) {
  contentDiv.innerHTML = `
    <div class="plato-detalle">
      <h2>${item.nombre}</h2>
      <p>${item.precio}</p>
      <img src="${item.img}">
      <br>
      <button class="btn-back" onclick="showList('${section}')">⬅ Regresar</button>
    </div>
  `;
}
