// on va faire ici un mode sous forme de class 
import { ENDPOINT } from "./constant.js"
export default class Etudiant {
    
    constructor(name,date,note){
        this.name=name
        this.date=date
        this.note=note
    }//static est important pour ne pas avoir cette erreur
    //  Uncaught TypeError: Etudiant.alletudiant is not a function 
    //sinon sans static il faut instancier Etudiant pour
    //  utiliser la comme mehtode d'objet mais avec sattique ca sera
    //  une methode de class on puet faire directement 
    //import Etudiant from "./etudiant.js";
     //Etudiant.alletudiant()
      getage=()=>{
        let age= new Date().getFullYear()-new Date(this.date).getFullYear();
        console.log(age)
       
    }
     


     //c'est une  mehtode de geters de tous les etuidiants
    //  dans la classe etudiant  et il faut faire static before function
    //  pour qu'il marche sino nouallons avoir 
    // cette erreur script.js:2 Uncaught TypeError: Etudiant.alletudiant
    //  is not a function 
    static alletudiant=async function() {// j'oublie beacoup la declaration donc je recois typeerror
        const response = await fetch(ENDPOINT)
        const alletudiant= await response.json()// il a fait la conversion a un  tableau des objets 
       
        return alletudiant
    }

    addetudiant=async function () {
           const data_etudiant_a_envoyer_a_endpoint=await fetch(ENDPOINT,{
            method:"POST",
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({// convertire objet en json 
                name:this.name,
                date:this.date,
                note:this.note })} )
                
            
            }

    static removeetudiant = async function(id){
        const requette={
            method:"DELETE",
            headers:{'Content-type':'application/json'}
        }
      const response= await fetch(ENDPOINT+'/'+id,requette)
        //console.log(ENDPOINT+'/'+id)
        
    }

    
            


            
}