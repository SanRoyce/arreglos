const propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      cuartos: 2,
      metros: 160
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      cuartos: 2,
      metros: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      cuartos: 1,
      metros: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      cuartos: 1,
      metros: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      cuartos: 3,
      metros: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      cuartos: 5,
      metros: 500
    }
  ];

  const span = document.querySelector ('#Propiedades span');
  const resultadoTotal = propiedadesJSON.length;
  span.innerHTML = resultadoTotal; 

  let template = (prop) =>{
    return  `
    <div class="propiedad">
      <div class="img" style="background-image: url('${prop.src}')"></div>
        <section>
          <h5>${prop.name}</h5>
          <div class="d-flex justify-content-between">
            <p>Cuartos: ${prop.cuartos}</p>
            <p>Metros: ${prop.metros}</p>
          </div>
          <p class="my-3">${prop.description}</p>
          <button class="btn btn-info ">Ver más</button>
        </section> 
    </div>`;

  };



  let mostrar = document.querySelector(".propiedades")
  let html = "";
  function iniciar (){
  for (prop of propiedadesJSON) {
  html+= template(prop);
}

mostrar.innerHTML = html;
}
//buscar elementos 

function buscar(){
  let cantidad = document.querySelector("#cantidad").value;
  let min = document.querySelector("#minimo").value;
  let max = document.querySelector("#maximo").value;
  let total = [];
  html = '';
  for(prop of propiedadesJSON){
    if((Number(cantidad) <=prop.cuartos) && Number(min)<= prop.metros <= Number(max)){
      html+= template(prop);
    total.push(prop);
    }else if((min == 0 || max == 0 || cantidad == 0)){
      alert("faltan campos por llenar");
      return;
    }
  }
  mostrar.innerHTML = html;
  /* console.log(total);
  console.log(total.length); */
  span.innerHTML = total.length;
}
window.onload = function(){
  iniciar ()
};