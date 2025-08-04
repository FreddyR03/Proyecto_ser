const deberes = [
    "Mantener el buen orden y aseo en la institución",
    "Cumplir las normas y actuar de buena fe",
    "Exponer claramente su estado de salud y la causa de su visita",
    "Seguir las recomendaciones médicas",
    "No solicitar servicios con información engañosa",
    "Expresar la información que se solicita para prestar un buen servicio",
    "Informar de todo acto que afecte a la clínica",
    "Cumplir las citas y requerimientos del personal de salud",
    "Respetar al personal de salud y a los usuarios",
    "Brindar un trato amable y digno"
  ];
  const derechos = [
    "Conocer todos los trámites administrativos",
    "Ser informado de todo lo relacionado con su atención",
    "Recibir atención que salvaguarde su dignidad personal y respete sus valores",
    "Respetar su privacidad, confidencialidad de la información y contar con una historia clínica íntegra, veraz y legible",
    "Recibir un trato amable, cortés y humano por parte de todo el personal",
    "Conocer toda la información sobre la enfermedad, procedimientos y tratamientos",
    "Ser atendido por personal capacitado",
    "Recibir prescripción de medicamentos y explicación de vías de administración",
    "Aceptar o rechazar procedimientos dejando constancia escrita",
    "Recibir atención requerida de acuerdo a sus necesidades"
  ];
  
  let todas = [];
  deberes.forEach(t => todas.push({texto:t,tipo:"deberes"}));
  derechos.forEach(t => todas.push({texto:t,tipo:"derechos"}));
  todas = todas.sort(()=>Math.random()-0.5);
  
  const contTarjetas = document.getElementById('tarjetas');
  todas.forEach((item,i)=>{
    const div = document.createElement('div');
    div.className = 'tarjeta';
    div.textContent = item.texto;
    div.draggable = true;
    div.id = "tarjeta"+i;
    div.dataset.tipo = item.tipo;
    div.ondragstart = drag;
    contTarjetas.appendChild(div);
  });
  
  // Variables
  let aciertos = 0;
  let puntos = 0;
  let nivel = 1;
  
  // Frases para motivar a los niños
  const frases = [
    "Recuerda: ¡Los deberes son cosas que debemos cumplir!",
    "Los derechos son cosas que puedes exigir y disfrutar.",
    "¡Vamos! Cada tarjeta correcta suma puntos.",
    "¡No te rindas! Clasifica todo y serás un Guardián."
  ];
  
  document.getElementById("superheroe").addEventListener("click", ()=>{
    const frase = frases[Math.floor(Math.random()*frases.length)];
    document.getElementById("dialogo").innerText = frase;
  });
  
  function allowDrop(ev){ev.preventDefault();}
  function drag(ev){ev.dataTransfer.setData("id", ev.target.id);}
  function drop(ev){
    ev.preventDefault();
    const id = ev.dataTransfer.getData("id");
    const tarjeta = document.getElementById(id);
    const tipo = tarjeta.dataset.tipo;
    const destino = ev.currentTarget.id;
  
    if(tipo === destino){
      tarjeta.classList.add("correcto");
      tarjeta.draggable = false;
      ev.currentTarget.appendChild(tarjeta);
      aciertos++;
      puntos += 10;
      if(puntos % 50 === 0){
        nivel++;
      }
      actualizarInfo();
      if(aciertos === todas.length){
        document.getElementById("mensaje").innerText = "¡Felicidades! Clasificaste todo. Eres un Guardián.";
        lanzarConfeti();
      }
    } else {
      tarjeta.classList.add("incorrecto");
      setTimeout(()=>tarjeta.classList.remove("incorrecto"), 1000);
      alert("Ups, esa no va ahí. Intenta otra vez.");
      puntos = Math.max(0, puntos - 5);
      actualizarInfo();
    }
  }
  
  function actualizarInfo(){
    document.getElementById("puntos").innerText = puntos;
    document.getElementById("nivel").innerText = nivel;
  }
  
  function lanzarConfeti(){
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 }
    });
  }