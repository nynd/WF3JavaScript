window.onload = function (){

    var fruitsLegumes = ["cerise","poire","banane", "raisins","poire","mirtille","papaye","goyage","mangue","poireau","celeri","tomate"]
    //console.log(fruitsLegumes);

    var panier = [];
    for( var item of fruitsLegumes){
        //fruitsLegumes.shift(item);
        //console.log("ajouté au panier:",panier[item]);
         fruitsLegumes.shift();
         //console.log(item)
         panier.push(item)
    }
    console.log(panier)
    console.log(fruitsLegumes)
    

}


