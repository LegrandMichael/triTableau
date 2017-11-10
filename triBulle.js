var tab = [6,89,2,65,8,90,7,5,-1,899,678,097];
var startTime = new Date().getTime();
var elapsedTime = 0;

function triTableau (tableau) {
  trier = false;
  temp = 0;
 while (!trier) {
   trier = true;
   for (var i = 0; i < tableau.length; i++) {
    if (tableau[i] > tableau[i+1]) {
      trier = false;
      temp = tableau[i+1];
      tableau[i+1] = tableau[i];
      tableau[i] = temp;
    } 
  }
 }
  return tableau;
}

console.log(tab);
console.log(triTableau(tab),"Tri à bulle");

elapsedTime = new Date().getTime() - startTime;

console.log(elapsedTime);