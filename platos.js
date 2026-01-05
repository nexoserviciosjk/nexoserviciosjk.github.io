const sectionsDiv = document.getElementById("sections");
const contentDiv = document.getElementById("content");

/* ===== DATOS COMPLETOS CON DESCRIPCION ===== */
const data = {
  "Carnes": [
    { nombre: "Carne de Res Saltada en Salsa de Ostión o Tausí", precio: "S/48", img: "carne-ostion.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Carne de Res con Frijolito Chino", precio: "S/48", img: "carne-frijol.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Carne de Res con Ostión a la Plancha", precio: "S/53", img: "carne-ostion-plancha.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Carne de Res con Tausí a la Plancha", precio: "S/53", img: "carne-tausi.jpg", descripcion: "Carne, arroz, fideos" }
  ],
  "Del Mar": [
    { nombre: "Pescado San Joy Lao", precio: "S/62", img: "pescado-sjl.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Filete de Pescado al Vapor", precio: "S/65", img: "filete-vapor.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Pescado con Langostino en salsa de Ostión o Tausí", precio: "S/55", img: "pescado-langostino.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Pescado al ajo", precio: "S/55", img: "pescado-ajo.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Pescado con tamarindo", precio: "S/55", img: "pescado-tamarindo.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Pescado en Salsa de Ostión", precio: "S/55", img: "pescado-ostion.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Pescado con Tausí a la Plancha", precio: "S/59", img: "pescado-tausi.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Pescado en Salsa de Ostión a la Plancha", precio: "S/59", img: "pescado-ostion-plancha.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Langostinos Picantes", precio: "S/50", img: "langostinos-picante.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Langostinos al Ajo", precio: "S/50", img: "langostinos-ajo.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Langostinos Arrebolzados", precio: "S/50", img: "langostinos-arrebol.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Langostinos en Salsa de Ostión o Tausí", precio: "S/50", img: "langostinos-ostion.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Langostinos en Salsa de Tamarindo", precio: "S/50", img: "langostinos-tamarindo.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Langostinos en Nido de Paloma", precio: "S/53", img: "langostinos-nido.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Langostinos a la Plancha", precio: "S/57", img: "langostinos-plancha.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Rueda de Langostinos", precio: "S/135", img: "rueda-langostinos.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Chicharrón de Pescado", precio: "S/50", img: "chicharron-pescado.jpg", descripcion: "Carne, arroz, fideos" }
  ],
  "Arroz": [
    { nombre: "Chaufa Taypá Personal", precio: "S/37", img: "chaufa-taypa-personal.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Chaufa Taypá Fuente", precio: "S/72", img: "chaufa-taypa-fuente.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Chaufa Especial Personal", precio: "S/25", img: "chaufa-especial-personal.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Chaufa Especial Fuente", precio: "S/48", img: "chaufa-especial-fuente.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Chaufa de Pollo Personal", precio: "S/22", img: "chaufa-de-pollo-personal.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Chaufa de Pollo Fuente", precio: "S/42", img: "chaufa-de-pollo-fuente.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Chaufa de Chancho Personal", precio: "S/22", img: "chaufa-de-chancho-personal.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Chaufa de Chancho Fuente", precio: "S/42", img: "chaufa-de-chancho-fuente.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Chaufa de Pollo y Chancho Personal", precio: "S/22", img: "chaufa-de-pollo-y-chancho-personal.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Chaufa de Pollo y Chancho Fuente", precio: "S/42", img: "chaufa-de-pollo-y-chancho-fuente.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Chaufa de Res y Cilantro Personal", precio: "S/26", img: "chaufa-de-res-y-cilantro-personal.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Chaufa de Res y Cilantro Fuente", precio: "S/50", img: "chaufa-de-res-y-cilantro-fuente.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Chaufa de Pato Personal", precio: "S/27", img: "chaufa-de-pato-personal.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Chaufa de Pato Fuente", precio: "S/52", img: "chaufa-de-pato-fuente.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Chaufa de Cuy Personal", precio: "S/30", img: "chaufa-de-cuy-personal.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Chaufa de Cuy Fuente", precio: "S/60", img: "chaufa-de-cuy-fuente.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Chaufa de Langostinos Personal", precio: "S/30", img: "chaufa-de-langostinos-personal.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Chaufa de Langostinos Fuente", precio: "S/57", img: "chaufa-de-langostinos-fuente.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Arroz Blanco Porción", precio: "S/7", img: "", descripcion: "Carne, arroz, fideos" }
  ],
  "Tallarines": [
    { nombre: "Tallarín Taypá", precio: "S/50", img: "taypa.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Tallarín Sam Sí", precio: "S/43", img: "sam-si.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Tallarín Saltado de Pollo", precio: "S/37", img: "saltado-pollo.jpg", descripcion: "Carne, arroz, fideos" }
  ],
  "Tortillas": [
    { nombre: "Tortilla de Pollo", precio: "S/34", img: "pollo.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Tortilla de Chancho", precio: "S/34", img: "chancho.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Tortilla de Pato", precio: "S/38", img: "pato.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Tortilla de Langostinos", precio: "S/40", img: "langostinos.jpg", descripcion: "Carne, arroz, fideos" }
  ],
  "Vegetarianos": [
    { nombre: "Tallarín Saltado con Verduras", precio: "S/30", img: "tallarines.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Sahofan o Maifán o Fansí con Verduras", precio: "S/35", img: "sahofan.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Frijolito Saltado", precio: "S/26", img: "frijolito.jpg", descripcion: "Carne, arroz, fideos" }
  ],
  "Bebidas": [
    { nombre: "Chicha 1 L", precio: "S/18", img: "chicha.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Maracuyá 1 L", precio: "S/18", img: "maracuya.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Limonada 1 L", precio: "S/18", img: "limonada.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Inca Kola Personal", precio: "S/6", img: "inca.jpg", descripcion: "Carne, arroz, fideos" }
  ],
  "Dim Sum": [
    { nombre: "Rueda de Bocaditos x 3", precio: "S/45", img: "rueda-3.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Rueda de Bocaditos x 6", precio: "S/80", img: "rueda-6.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Siu Kao Picante x 6", precio: "S/19", img: "siu-kao.jpg", descripcion: "Carne, arroz, fideos" }
  ],
  "Sopas": [
    { nombre: "Wantán Personal", precio: "S/19", img: "wantan-personal.jpg", descripcion: "Carne, arroz, fideos" }
  ],
  "Pollo": [
    { nombre: "Kay Ten", precio: "S/43", img: "kay-ten.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Cru Kay", precio: "S/43", img: "cru-kay.jpg", descripcion: "Carne, arroz, fideos" }
  ],
  "Pato": [
    { nombre: "Pato con Frijolito Chino", precio: "S/45", img: "pato-frijol.jpg", descripcion: "Carne, arroz, fideos" }
  ],
  "Chanchito": [
    { nombre: "Chicharrón Oriental en Salsa Ostión o Tausí", precio: "S/45", img: "chicharron.jpg", descripcion: "Carne, arroz, fideos" }
  ],
  "Banquetes": [
    { nombre: "Banquete 2 Personas", precio: "S/110", img: "2p.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Banquete 4 Personas", precio: "S/180", img: "4p.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Banquete de la Abundancia (6p)", precio: "S/300", img: "6p.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Banquete de la Fortuna (8p)", precio: "S/390", img: "8p.jpg", descripcion: "Carne, arroz, fideos" },
    { nombre: "Banquete de la Serpiente (10p)", precio: "S/495", img: "10p.jpg", descripcion: "Carne, arroz, fideos" }
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
  sectionsDiv.classList.remove("hidden");
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
  sectionsDiv.classList.add("hidden");

  // Imagen opcional
  let imagenHTML = item.img ? `<img src="${item.img}" alt="${item.nombre}">` : '';

  contentDiv.innerHTML = `
    <div class="plato-detalle">
      <p>${item.descripcion}</p>
      ${imagenHTML}
      <br>
      <button class="btn-back" onclick="showList('${section}')">⬅ Regresar</button>
    </div>
  `;
}
