var leNombre = prompt("Entrez un nombre compris entre 1 et 70");  
console.log(leNombre); 

var GridTable = document.getElementById("lesCarres");

var inside = "";

function MkeGrid()  {
    for (var i = 0; i < leNombre; i++)      {
        var insideCol = "";
        for (var j = 0; j < leNombre; j++)      {
            insideCol = insideCol + "<td></td>";
                                                }
        inside = inside + "<tr>" + insideCol + "</tr>";
                                            }
    GridTable.innerHTML = inside;
                    }

MkeGrid();

var allTd = document.getElementsByTagName("td");
var allTdLen = allTd.length;

for (var i = allTd.length - 1; i >= 0; i--) {
    allTd[i].style.width = (70 / leNombre) + "px";
    allTd[i].style.height = (70 / leNombre) + "px";
    allTd[i].style.border= "groove 0.1px";
}
