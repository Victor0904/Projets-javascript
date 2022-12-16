

function calculer(){
  const montant = document.getElementById("montant").value;
  const taux = document.getElementById("taux").value;
  const mois = document.getElementById("mois").value;
  let interet = (montant * (taux * 0.01)) /mois;
  let paiement = ((montant / mois) + interet).toFixed(2); 


  document.getElementById("paiement").innerHTML = `${paiement}`;
}

