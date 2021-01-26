window.onload = function (){
 //Traduire en code ceci : faire une liste 12 fruits et légumes qui s'appelera fruitsLegumes

    var fruitsLegumes = ["cerise","poire","banane", "raisins","poire","mirtille","papaye","goyage","mangue","poireau","celeri","tomate"]
    //console.log(fruitsLegumes);

    /*Traduire en code ceci: faire une liste qui référence tous ce que vous avez mis dans un panier, ce panier doit 
être vide au départ.*/

for(var item of fruitsLegumes ){
    console.log("item tableau: ", item);
    var fruitSuprime = fruitsLegumes.shift();
    panier.push(fruitSuprime);

};
console.log("panier: ", panier);
console.log(fruitsLegumes);

for(var i=fruitsLegumes.length ; i>0 ; i--){
    var fruitSuprime = fruitsLegumes.shift();
    panier.push(fruitSuprime);
 }
 console.log("panier: ", panier);
 console.log(fruitsLegumes);
}

