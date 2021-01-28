window.onload = function (){

    // **Traduire en code ceci : faire une liste qui s'appelera panier,
    // elle référencera à la fois le nom du légume ainsi que sont prix à l'unité**

    var panier = [
        {
            Legume: 'carotte',
            prixUnite: 2,
            quantite : 3
        },
        {
            Legume: 'tomate',
            prixUnite: 1.40,
            quantite : 2
        },
        {
            Legume: 'petit pois',
            prixUnite: 3.2,
            quantite : 5
        },
        {
            Legume: 'patate',
            prixUnite: 1.90,
            quantite : 6
        }
       ];

    //**Traduire en ceci: crée une liste qui s'appelera prixTotalsFruitsLegumes cette liste devra contenir le total pour chaque fruit&légume. 
    // Ce prix total sera variable par rapport à la quantité. (à noté que cette liste au début est vide).**
   
    var prixTotalsFruitsLegumes = [];

     for(var Legume of panier){
        var Total = Legume.prixUnite * Legume.quantite ;
        prixTotalsFruitsLegumes.push(Total);
     };
     console.log("key :" ,prixTotalsFruitsLegumes , "value :", prixTotalsFruitsLegumes);

     //Traduire en code ceci : crée un résultat permettant de faire le total de prixTotalsFruitsLegumes.

     var prixTotal = 0;
    for(var i= 0; i<prixTotalsFruitsLegumes.length ; i++){
        prixTotal = prixTotal + prixTotalsFruitsLegumes[i] ;
        //return prixTotal;
    };
    console.log(prixTotal);

    }


    var prixTotalsFruitsLegumes = [];

     for(var Legume of panier){
        var Total = Legume.prixUnite * Legume.quantite ;
        prixTotalsFruitsLegumes.push(Total);
     };
     console.log("key :" ,prixTotalsFruitsLegumes , "value :", prixTotalsFruitsLegumes);

     //Traduire en code ceci : crée un résultat permettant de faire le total de prixTotalsFruitsLegumes.

     var prixTotal = 0;
     for(var i= prixTotalsFruitsLegumes.length-1; i>=0 ; i--){
         prixTotal = prixTotal + prixTotalsFruitsLegumes[i] ; 
         prixTotalsFruitsLegumes.shift();   
     };
    console.log(prixTotal);
    console.log(prixTotalsFruitsLegumes);


