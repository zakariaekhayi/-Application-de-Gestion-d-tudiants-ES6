import Etudiant from "./etudiant.js";// ce .js est important sinon je vais avoir cette erreur : net::ERR_ABORTED 404 (Not Found) Javascript dans le console 

const table_body=document.querySelector('.table-body')



//rendrer les etudiant dans le html
const display_render_Etudiants=function(alletudiant){
    // vider le tableau 
    table_body.innerHTML="";
    console.log(Object.keys(alletudiant).length)
   // Etudiant.alletudiant().then(response => console.log(response)) 
   
   if(Object.keys(alletudiant).length>0){
 alletudiant.map(etudiant => {
        //calculer l'age 
        let age=new Date().getFullYear()-new Date(etudiant.date).getFullYear();
        table_body.innerHTML=table_body.innerHTML+`<tr>
                <td>${etudiant.id}</td>
                <td>${etudiant.name}</td>
                <td>${age}</td>
                <td>  <span class="badge rounded-pill ${(etudiant.note>=10)? 'bg-success':'bg-danger'}"   >${etudiant.note}/20</span></td>
                <td><button class="btn btn-danger" class="supprimer" onclick="supprimer_etudiant(${etudiant.id})">supprimer</button></td>
                
        <tr>
        `
    })
   }


          }


   





//get et trier et rendrer  etudiant 
const trier_id_desc=document.querySelector('#id_desc')
const trier_id_asc=document.querySelector('#id_asc')
const trier_note_asc=document.querySelector('#note_asc')
const trier_note_desc=document.querySelector('#note_desc')
const trier_name_desc=document.querySelector('#name_desc')
const trier_name_asc=document.querySelector('#name_asc')
const trier_date_desc=document.querySelector('#date_desc')
const trier_date_asc=document.querySelector('#date_asc')
const Get_trier_render_etudiant=()=>{


    Etudiant.alletudiant().then(alletudiant=>{
       //display pour la premiere fois telle qui elle est 
       display_render_Etudiants(alletudiant)
        trier_id_asc.addEventListener('click',()=>{
            alletudiant.sort((a,b)=>a.id-b.id)
            display_render_Etudiants(alletudiant)
        })
         trier_id_desc.addEventListener('click',()=>{
            alletudiant.sort((a,b)=>b.id-a.id)
            display_render_Etudiants(alletudiant)
        })
         trier_note_asc.addEventListener('click',()=>{
            alletudiant.sort((a,b)=>a.note-b.note)
            display_render_Etudiants(alletudiant)
        })
         trier_note_desc.addEventListener('click',()=>{
            alletudiant.sort((a,b)=>b.note-a.note)
            display_render_Etudiants(alletudiant)
        })
        trier_name_desc.addEventListener('click',()=>{
            alletudiant.sort((a,b)=>b.name.localeCompare(a.name))
            display_render_Etudiants(alletudiant)
        })
        trier_name_asc.addEventListener('click',()=>{
            alletudiant.sort((a,b)=>a.name.localeCompare(b.name))
            display_render_Etudiants(alletudiant)
        })
        trier_date_asc.addEventListener('click',()=>{
            alletudiant.sort((a,b)=>new Date(a.date)-new Date(b.date))
            display_render_Etudiants(alletudiant)
        })
        trier_date_desc.addEventListener('click',()=>{
            alletudiant.sort((a,b)=>new Date(b.date)-new Date(a.date))
            display_render_Etudiants(alletudiant)
        })

        
    })
}

//appelle a la fonction trier 
Get_trier_render_etudiant()


//Actualiser le tableau  body
const refresh =document.querySelector('#refresh')
refresh.addEventListener('click',()=>{
    table_body.innerHTML="";
    Get_trier_render_etudiant()})




//Ajouter etudiant 
const Ajouter_etudiant=document.querySelector("#ajouter_etudiant")
Ajouter_etudiant.addEventListener('click',(e)=>{
e.preventDefault();//pour ne pas envoyer le formularie  ou tu peu t faire <form onsubimit="false"> j'ai oublie les ()
const name=document.querySelector('#name')
const date=document.querySelector('#date')//desturcting et je peux selecter plus qu'un seule valeur de html dans cette cas les valeur des input 
const note=document.querySelector('#note')
console.log(name.value,date.value,note.value)
const etudiant=new Etudiant(name.value,date.value,note.value)
etudiant.addetudiant()




}

)
//supprimer etudiant 
window.supprimer_etudiant=function(id){
    Etudiant.removeetudiant(id)
    console.log(id)//aficher pour test 
}

//sort ou filtre des etudiants 







// puisque j'ai un tableau des objets , donc pour le presenter je vais utiliser la fonction Map 

