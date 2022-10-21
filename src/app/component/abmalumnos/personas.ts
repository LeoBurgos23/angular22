export interface Alumnos {
    id:number
    nombre:string,
    apellido:string,
    nota: number,
    estado:string
    

}
export let ListaAlumnos: Alumnos[] =[
    { id:1,
    nombre: 'Harry' , 
    apellido: 'Poter' ,
    nota:8 , 
    estado: 'activo'},

    {
        id:2,
        nombre: 'Hermione' ,
     apellido: 'Granger',
     nota: 10 , 
     estado: 'activo'},
     
     { id:3,
         nombre: 'Ron' , 
     apellido: 'Wesleay' ,
     nota:5 , 
     estado: 'activo'},
    
     { id:4,
         nombre: 'Draco' ,
     apellido: 'Malfoy' ,
     nota:7 , 
     estado: 'activo'},
    
     { id:5,
         nombre: 'Neville' , 
    apellido: 'Longbotton' ,
    nota:3 , 
    estado: 'libre'},
    
    { id:6,
        nombre: 'Cho' ,
     apellido: 'Chang' ,
     nota:9 , 
     estado: 'activo'},
    
     { id:7,
         nombre: 'Luna' , 
    apellido: 'Lovegood' ,
    nota:6 , 
    estado: 'activo'},
    
]