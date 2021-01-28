
    // Les fonctions
    // Convertir en code ceci: Faire une fonction qui vous permettra de créer n'importe quel éléments HTML
    // qui retournera cet élément html

     //Afficher votre résultat dans la console

    function createItemHtml(ElementHtML)
{

    var Item =  document.createElement(ElementHtML);

   return Item;

}

  // Reprendre l'étape du dessus et au lieu de l'afficher dans la console
  // il faut cette fois-ci l'afficher dans le DOM

   var CreateDiv=createItemHtml('div');

   console.log(CreateDiv);

   
   //var test = document.querySelector('body');

     //test.appendChild(createDiv);

   // Convertir en code ceci: Faire une fonction qui va créer un élément div et qui va créer un enfant tel qu'un paragraphe
   // et ce paragraphe doit contenir votre prénom
   
   function parentEnfant(parent , enfant) {

    var creatediv = document.createElement(parent);
    creatediv.setAttribute('class', 'square');
    creatediv.setAttribute('id', 'centrerDiv');
    var createP=document.createElement(enfant);
    createP.setAttribute('class', 'paragraph1');
    creatediv.appendChild(createP);
    createP.innerText = "Houda Sophia Fatima Nina !";
   return creatediv;
  
 }
  
    console.log(parentEnfant('div','p'));


      
      //test.appendChild(createDiv);
     
      //console.log(creatediv);
  
      console.log(parentEnfant());


  // Cette élément div doit avoir une class square
  // et le paragraphe doit avoir une class paragraph1



