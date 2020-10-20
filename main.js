    let hotelesArray=[];
    let localizado=false;
    let nuevohotel;

    class Hotel{

        constructor(nombre, numHabitaciones, numPlantas, superficie){

            this._nombre=nombre;
            this._numHabitaciones=numHabitaciones;
            this._numPlantas=numPlantas;
            this._superficie =superficie;
        }

        //METODOS

        get nombre(){
            return this._nombre;
        }

        set numHabitaciones(numHabitaciones){
            this._numHabitaciones=numHabitaciones;
        }
        get numHabitaciones(){
            return this._numHabitaciones;
        }

        set numPlantas(numPlantas){
            this._numPlantas=numPlantas;
        }
        get numPlantas(){
            return this._numPlantas;
        }

        set superficie(superficie){
            this._superficie=superficie;
        }

        get superficie(){
            return this._superficie;
        }

        calcularManteniment(){
           let personal= Math.ceil(this._numHabitaciones/20);
           let costePersonal=personal*1500;
           return (+personal+" personas de mantenimiento con un coste de "+costePersonal+" €/mes");
        } 

        toString(){
            return this._nombre+"\n"+this._numHabitaciones+" habitaciones\n"+this._numPlantas+" plantas\n"+this._superficie+"m2";
        }
    }

    let nh= new Hotel("nh", 2000, 58, 10000);
    hotelesArray.push(nh);

    let majestic= new Hotel("majestic", 1000, 31, 9548);
    hotelesArray.push(majestic);

    function crearHotel(){

            let nombre              = (prompt("Nombre del hotel:")).toLowerCase();
            let numHabitaciones     = parseInt(prompt("Número de habitaciones:"));
            let numPlantas          = parseInt(prompt("Número de plantas:"));
            let superficie          = parseInt(prompt("Superficie total:"));
            
            //QUITAR ACENTOS
            nombre= acentos(nombre);

            for(hotel of hotelesArray){
                if (nombre==hotel.nombre) {
                    localizado=true;
                }     
            } 
            
            if(localizado==false){
                nuevohotel = new Hotel(nombre, numHabitaciones, numPlantas, superficie);
                alert((nuevohotel+"\n"+nuevohotel.calcularManteniment()));
                hotelesArray.push(nuevohotel);
                hotel.toString();
                
            }
            else{
                alert("Este hotel ya está en el sistema");
            }
    }
        
    function veureHotel(){

                let ver=prompt("¿Qué hotel mostramos?").toLowerCase();
                let localizado=false;

                //QUITAR ACENTOS
                ver=  acentos(ver);
                for(hotel of hotelesArray){
                    if (ver==hotel.nombre) {
                        localizado=true;
                        alert((hotel+"\n"+hotel.calcularManteniment()));
                    }  
                }   

               if (localizado==false) {
                    alert("Este hotel NO está en el sistema");
            }
    }

    function donarDeBaixaHotel(){

        let baja=prompt("¿Qué hotel damos de baja?").toLowerCase();
        let localizado=false;

        for(hotel of hotelesArray){
            if (baja==hotel.nombre) {
                localizado=true;
                hotelesArray.splice(hotelesArray.indexOf(hotel),1);
                for(hotel of hotelesArray){
                    for(atributo in hotel){
                    console.log(`${hotel[atributo]}`);
                    }
            }
        }
    }
        if(localizado==false){
            alert("Este hotel NO está en el sistema");    
        
        }
    }

    function modificarHotel(){

        let modificar=prompt("¿Qué hotel quieres modificar?").toLowerCase();

        //QUITAR ACENTOS
        modificar=  acentos(modificar);
        let localizado=false;
        for(hotel of hotelesArray){
            
            if (modificar==hotel.nombre) {
                localizado=true;

            }
        }
                if(localizado==true){
                let atributoModificar=parseInt(prompt("Escribe el número correspondiente:\n 1 numero habitaciones, 2 num plantas, 3 superficie"));
             
                switch (atributoModificar) {
                    case 1:
                        hotel.numHabitaciones=prompt("Modifica el número de habtaciones");
                        break;
                    
                    case 2:
                        hotel.numPlantas=prompt("Modifica el número de plantas");
                        break;

                    case 3:
                        hotel.superficie=prompt("Modifica la superficie");
                        break;

                    default:
                    alert("No se han hecho modificaciones"); 
                }
                alert((hotel+"\n"+hotel.calcularManteniment()));
            } 
            
            if(localizado==false){
                alert("Este hotel NO está en el sistema");
            }
        
    }

    function acentos(palabra){

        //QUITAR ACENTOS
        palabra=palabra.replace(('à','á'), "a");
        palabra=palabra.replace(('è','é'), "e");
        palabra=palabra.replace(('ù','ú'), "u");
        palabra=palabra.replace(('ò','ó'), "o");
        palabra=palabra.replace(('ì','í'), "i");

        return palabra;
    }