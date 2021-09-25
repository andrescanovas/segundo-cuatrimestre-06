let $fetch = document.querySelector("#morosos");

let informacion = document.createDocumentFragment();


    
axios.get("https://jsonplaceholder.typicode.com/users")
  

    .then ((respuesta)=>{
        console.log(respuesta);
        let datosEnJson = respuesta.data;


            datosEnJson.forEach(element => {
            const $li=document.createElement("li");
            $li.innerHTML=`${element.name}----${element.email}----${element.phone}`                
            informacion.appendChild($li);

            // console.log(informacion)

        });

        $fetch.appendChild(informacion);


    })


    .catch(noencontronada=>{
        console.log("manipulando el error",noencontronada);
        //personalizo el error 
        let mensaje = noencontronada.statusText || "ALGO MALIO SAL";
        $fetch.innerHTML=`ERROR ${noencontronada.status} :${mensaje} agregado ${noencontronada.type}`;

    })

    .finally();
            console.log("se imprime siempre");




