angular.module('Lsg', []).controller('filtradoController', filtrado )


function filtrado ($scope , $http ){

	v = this 

	v.titulo = "Registrar Persona"
	v.titulo2 = "Controles para el Filtrado"

	v.footer = "Armando José Rojas Querales - 2018"


	v.ocupacion = [

		{texto : 'Programador'},
		{texto : 'Maestro'},
		{texto : 'Mantenido'}
	];


	v.personas = [
		
		{
			cedula : '26059573',
			nombre : 'Armando',
			apellido: 'Rojas',
			ocupacion_id : 0
		},
		{
			cedula : '12964334',
			nombre : 'Norkis',
			apellido: 'Querales',
			ocupacion_id : 1
		}

	];


	v.asignarNuevaOcupacion = function(){

		v.ocupacion.push({ texto : v.agregarOcupacion   });
		v.agregarOcupacion = ''
	}	


	v.asignarNuevaPersona = function(){

		v.personas.push({ 

			nombre : v.nombre,
			apellido : v.apellido,
			cedula : v.cedula,
			ocupacion_id : v.ocupacion_id 
		 })

		v.nombre = ''
		v.apellido = ''
		v.cedula = ''
		
	}


	  // validacion 

	 inputs = [ 'v.cedula' , 'v.nombre' , 'v.apellido']

	 v.control = false;
	 v.cedula = '';
	 v.nombre = '';
	 v.apellido = '';

	 document.getElementsByTagName('select')[0].value= '0'
	 document.getElementsByTagName('select')[1].value= '0'



    $scope.$watchGroup( inputs , (nuevo,anterior)=>{

    	v.error= []; 
    	v.control = true
   

    	for (var i = 0; i < 3; i++) {

    		validaCampo(i);
    	}

    	
    	
    		


          function validaCampo(indice){
          	 if (nuevo[indice].length < 3) {

            	v.error[indice] = 'Debe ser mayor a 3 caracteres...'
            	v.control = false 

        	}
            else
            	v.error[indice]  = 'Campo listo'
             
          }

    	

          
    })






}
