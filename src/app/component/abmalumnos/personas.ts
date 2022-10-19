export interface Alumnos {
    nombre:string,
    apellido:string,
    nota: number,
    estado:string
    

}
export let ListaAlumnos: Alumnos[] =[
    {nombre: 'Harry' , 
    apellido: 'Poter' ,
    nota:8 , 
    estado: 'activo'},

    {nombre: 'Hermione' ,
     apellido: 'Granger',
     nota: 10 , 
     estado: 'activo'},
     
     { nombre: 'Ron' , 
     apellido: 'Wesleay' ,
     nota:5 , 
     estado: 'activo'},
    
     { nombre: 'Draco' ,
     apellido: 'Malfoy' ,
     nota:7 , 
     estado: 'activo'},
    
     { nombre: 'Neville' , 
    apellido: 'Longbotton' ,
    nota:3 , 
    estado: 'libre'},
    
    { nombre: 'Cho' ,
     apellido: 'Chang' ,
     nota:9 , 
     estado: 'activo'},
    
     { nombre: 'Luna' , 
    apellido: 'Lovegood' ,
    nota:6 , 
    estado: 'activo'},
    
]