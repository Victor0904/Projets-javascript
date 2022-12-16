
let premier = parseInt(Math.random() * 20);
let deuxieme = parseInt(Math.random() * 20);


let total = premier + deuxieme;

let result = document.getElementById('resultat').value;

let score = document.getElementById('score').value;

let first = document.getElementById('chiffre-ch1');
first.innerHTML = `<p>${premier}</p>`;

let second = document.getElementById('chiffre-ch2');
second.innerHTML = `<p>${deuxieme}</p>`



function resultat(){
  
  if (result === total){
    document.getElementById('yes').style.display = 'block';
    document.getElementById('all').style.display = 'none';
    score +=1
  } else {
    document.getElementById('no').style.display = 'block';
    document.getElementById('all').style.display = 'none';
    window.location.reload();
  }
}