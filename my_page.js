const btn = document.querySelector("#but");
var sum = 0;

  function calc(){
  sum = 0;
  input = document.getElementsByTagName('input');
  for( var i = 0 ; i < input.length ; i++){
    if(input[i].checked){
      sum = sum + parseInt(input[i].value);
    }
  }
  const nn = document.querySelector('#result');
  nn.innerHTML = "<h2></h2>";
  const makeobj = nn.querySelector('h2');
  makeobj.innerText = sum;
  }
  
  btn.addEventListener("click" , calc);