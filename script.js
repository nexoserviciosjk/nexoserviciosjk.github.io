const sectionsDiv = document.getElementById("sections");
const contentDiv = document.getElementById("content");

const data = {
  Banquetes: [
    {
      nombre: "Banquete 2 Personas",
      precio: "S/110",
      img: "img/banquetes/2p.jpg"
    },
    {
      nombre: "Banquete 4 Personas",
      precio: "S/180",
      img: "img/banquetes/4p.jpg"
    },
    {
      nombre: "Banquete de la Abundancia (6p)",
      precio: "S/300",
      img: "img/banquetes/6p.jpg"
    },
    {
      nombre: "Banquete de la Fortuna (8p)",
      precio: "S/390",
      img: "img/banquetes/8p.jpg"
    },
    {
      nombre: "Banquete de la Serpiente (10p)",
      precio: "S/495",
      img: "img/banquetes/10p.jpg"
    }
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
