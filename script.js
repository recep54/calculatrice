// alert("la meuilleur calculatrice frère")

var num1;
var num2;
var array1 = [] ;
var array2 = [] ;
var op = 0;
var resultat = 0;


function a(){
  alert("hey");
}

function calcul(){
  num1 = array1.join("");
  num2 = array2.join("");
  var nums1 = parseFloat(num1);
  var nums2 = parseFloat(num2);
  if (op === 1){
    resultat = nums1 + nums2;
  } else if (op === 2){
    resultat = nums1 - nums2;
  } else if (op === 3){
    resultat = nums1 * nums2;
  } else if (op === 4){
    resultat = nums1 / nums2;
  } 
  document.getElementById("result").innerHTML = resultat;
  continuee()
};



document.getElementById("demo").innerHTML = array1.join("");

document.getElementById("result").innerHTML = resultat;



function posh(num){

  if (op === 0){
    array1.push(num);
    document.getElementById("demo").innerHTML = array1.join("");
  } else if (op !== 0){
    array2.push(num);
    document.getElementById("demo").innerHTML = array2.join("");
  }

};


function zero(){
  op = 0;
  array1 = [];
  array2 = [];
  document.getElementById("demo").innerHTML = 0;
  document.getElementById("result").innerHTML = 0;
};


function continuee(){
  op = 0;
  array1 = [];
  array2 = [];
  array1.push(resultat);
  document.getElementById("demo").innerHTML = 0;
}