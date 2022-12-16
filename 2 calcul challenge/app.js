


let premier = parseInt(Math.random() * 20);
let deuxieme = parseInt(Math.random() * 20);


let total = premier + deuxieme;

 let score =0;

let first = document.getElementById('chiffre-ch1');
first.innerHTML = `<p>${premier}</p>`;

let second = document.getElementById('chiffre-ch2');
second.innerHTML = `<p>${deuxieme}</p>`
  

let button = document.getElementById('btn')


button.addEventListener('click', function () {

  let resultat = document.getElementById('resultat').value;
  resultat = Number(resultat);
  

  if (resultat === total) {
    document.getElementById('yes').style.display ='block';
    document.getElementById('all').style.display = 'none';
    window.location.reload();

  } else {
    document.getElementById('no').style.display = 'block';
    document.getElementById('all').style.display = 'none';
    window.location.reload();
  }


});


