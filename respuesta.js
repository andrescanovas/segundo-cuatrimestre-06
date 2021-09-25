let $fetch = document.querySelector("#morosos");

let informacion = document.createDocumentFragment();


    
    fetch('https://jsonplaceholder.typicode.com/usersd')
    
        .then ((datosdeltextoplano)=>{

            console.log(datosdeltextoplano)
            // La consulta que se le hizo a la api nos devuelve como "datos de texto plano" a este si=? la conexion fue ok la transforma en json sino=: la rechaza 
            return datosdeltextoplano.ok?datosdeltextoplano.json():Promise.reject(datosdeltextoplano);


        })



        .then (datosEnJson => {
                // console.log(datosEnJson)
                // El foreach es el mismo for, La única diferencia es que no tienes control sobre la variable i o (Ciclos) sino que recorre la totalidad del array.
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

        .finally(()=>
                console.log("se imprime siempre")
        
        
        )

