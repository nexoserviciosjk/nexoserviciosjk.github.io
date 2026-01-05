const sectionsDiv = document.getElementById("sections");
const contentDiv = document.getElementById("content");

const data = {
  "Dim Sum": [
    { nombre: "Rueda de Bocaditos x 3", precio: "S/ 45", img: "img/dimsum/rueda-3.jpg" },
    { nombre: "Rueda de Bocaditos x 6", precio: "S/ 80", img: "img/dimsum/rueda-6.jpg" },
    { nombre: "Siu Kao en Salsa Picante x 6", precio: "S/ 19", img: "img/dimsum/siu-kao-picante.jpg" },
    { nombre: "Siu Mai x 6", precio: "S/ 17", img: "img/dimsum/siu-mai.jpg" },
    { nombre: "Ja Kao x 6", precio: "S/ 17", img: "img/dimsum/ja-kao.jpg" },
    { nombre: "Enrolladito Primavera x 6", precio: "S/ 17", img: "img/dimsum/primavera.jpg" },
    { nombre: "Siu Kao Frito x 6", precio: "S/ 17", img: "img/dimsum/siu-kao-frito.jpg" },
    { nombre: "Siu Kao San Joy Lao x 6", precio: "S/ 17", img: "img/dimsum/siu-kao-vapor.jpg" },
    { nombre: "Wantán x 6", precio: "S/ 10", img: "img/dimsum/wantan-6.jpg" },
    { nombre: "Wantán x 12", precio: "S/ 18", img: "img/dimsum/wantan-12.jpg" },
    { nombre: "Chicharrón de Pollo", precio: "S/ 33", img: "img/dimsum/chicharron-pollo.jpg" },
    { nombre: "Nabo Encurtido", precio: "S/ 14", img: "img/dimsum/nabo.jpg" }
  ],
  "Sopas": [
    { nombre: "Wantán Personal", precio: "S/ 19", img: "img/sopas/wantan-personal.jpg" },
    { nombre: "Wantán Sopera Grande", precio: "S/ 55", img: "img/sopas/wantan-sopera.jpg" },
    { nombre: "Wantán Especial Personal", precio: "S/ 22", img: "img/sopas/wantan-especial-personal.jpg" },
    { nombre: "Wantán Especial Sopera Grande", precio: "S/ 60", img: "img/sopas/wantan-especial-sopera.jpg" },
    { nombre: "Siu Kao San Joy Lao Personal", precio: "S/ 23", img: "img/sopas/siu-kao-personal.jpg" },
    { nombre: "Siu Kao San Joy Lao Sopera", precio: "S/ 65", img: "img/sopas/siu-kao-sopera.jpg" }
  ],
  "Pollo": [
    { nombre: "Kay Ten", precio: "S/ 43", img: "img/pollo/kay-ten.jpg" },
    { nombre: "Cru Kay", precio: "S/ 43", img: "img/pollo/cru-kay.jpg" },
    { nombre: "Chi Jau Kay", precio: "S/ 43", img: "img/pollo/chi-jau-kay.jpg" },
    { nombre: "Ti Pa Kay", precio: "S/ 43", img: "img/pollo/ti-pa-kay.jpg" },
    { nombre: "5 Sabores", precio: "S/ 43", img: "img/pollo/5-sabores.jpg" },
    { nombre: "Pollo Enrollado con Espárragos", precio: "S/ 43", img: "img/pollo/pollo-esparragos.jpg" },
    { nombre: "Pollo Trozado con Piña y Duraznos", precio: "S/ 49", img: "img/pollo/pollo-pina-durazno.jpg" },
    { nombre: "Pollo Chei Pei Kay", precio: "S/ 49", img: "img/pollo/chei-pei.jpg" },
    { nombre: "Pollo Kin Tou", precio: "S/ 43", img: "img/pollo/pollo-kintou.jpg" }
  ],
  "Pato": [
    { nombre: "Pato en Salsa Kin Tou con Piña y Duraznos", precio: "S/ 45", img: "img/pato/pato-kintou.jpg" }
  ],
  "Tallarines": [
    { nombre: "Tallarín Taypá", precio: "S/ 50", img: "img/tallarines/tallarin-taypa.jpg" },
    { nombre: "Tallarín Saltado (Pollo o Chancho)", precio: "S/ 37", img: "img/tallarines/tallarin-saltado.jpg" }
  ],
  "Arroz": [
    { nombre: "Chaufa Plato (Pollo o Chancho)", precio: "S/ --", img: "img/arroz/chaufa-plato.jpg" },
    { nombre: "Arroz Chaufa Familiar", precio: "S/ --", img: "img/arroz/chaufa-familiar.jpg" },
    { nombre: "Arroz Chaufa Especial Familiar", precio: "S/ --", img: "img/arroz/chaufa-especial.jpg" }
  ],
  "Banquetes": [
    { nombre: "Banquete 2 Personas", precio: "S/ 110", img: "img/banquetes/2p.jpg" },
    { nombre: "Banquete 4 Personas", precio: "S/ 180", img: "img/banquetes/4p.jpg" },
    { nombre: "Banquete de la Abundancia (6p)", precio: "S/ 300", img: "img/banquetes/6p.jpg" },
    { nombre: "Banquete de la Fortuna (8p)", precio: "S/ 390", img: "img/banquetes/8p.jpg" },
    { nombre: "Banquete de la Serpiente (10p)", precio: "S/ 495", img: "img/banquetes/10p.jpg" }
  ]
};

/* CREAR BOTONES DE SECCIÓN */
for (let section in data) {
  const btn = document.createElement("button");
  btn.textContent = section;
  btn.onclick = () => showList(section);
  sectionsDiv.appendChild(btn);
}

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
