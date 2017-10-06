let boutonRecherche=document.getElementById('boutton_recherche_js')

boutonRecherche.onclick= function(){
  var x = document.forms["search_entry"].elements["boite_recherche"];
  var y= x.value;

  var arrayOfStrings = y.split(" ");
  
  var z=""
  for (var i in arrayOfStrings)
    z=z+"+"+arrayOfStrings[i];
    z=z.substring(1);

  window.location.href = 'https://www.google.fr/#q='+z;
}

let div1=document.getElementById('principal');
let div2=document.getElementById('avertisement');
let div3=document.getElementById('boutton');
var popuper = function(){
window.open('popup.html','test', 'height=350, width=620, top=300, left=500, toolbar=no, menubar=no, location=no, resizable=no, scrollbars=no, status=no, directories=no');
}
div3.onclick= function() {
  div1.style.display="block";
  div2.style.display="none";
  setTimeout('popuper()',3000);
}


