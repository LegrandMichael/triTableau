var tab = [6,89,2,65,8,90,7,5,-1,899,678,097];
var temp1 = [];
var startTime = new Date().getTime();
var elapsedTime = 0;

function extractMinimum(tab) {
  var minActuel = tab[0];
  var indiceMinActuel = 0;
  for(i = 1; i < tab.length; i++) {
      if( tab[i] < minActuel){
        minActuel = tab[i];
        indiceMinActuel=i;
      }
  }
  return indiceMinActuel;
}

function decoupeMoiMonTableau (tab, tabTemp) {
      var index = extractMinimum(tab);
      tabTemp.push(tab[index]);
      tab.splice(index, 1);
}

function triTab (tab) {
  var temp2 = [];
  while (tab.length !== 0) {
    decoupeMoiMonTableau(tab,temp2);
  }
  return temp2;
}

console.log(triTab(tab),"Tri par sélection");

elapsedTime = new Date().getTime() - startTime;

console.log(elapsedTime);