onload = (event) => {const counters = document.querySelectorAll('.nbr');
const speed = 200;


new Chart(document.getElementById("bar-chart-grouped"), {
  type: 'bar',
  data: {
    labels: ["2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012"],
    datasets: [
      {
        label: "Femme",
        backgroundColor: "#8e5ea2",
        data: [225,239,251,247,247,230,211,192,177,135,134,112,117]
      }, {
        label: "Homme",
        backgroundColor: "#3e95cd",
        data: [826,875,821,789,752,676,657,591,511,414,359,307,326]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'nombre décés par catégorie'
    }
  }
});


counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('value');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();

}); /*Call this funtion with the ID-name for that element to increase the number within*/

};



function afficheStat(liste_annee, liste_data){

  let op = document.getElementsByClassName("jqvmap-label")[0].innerText;

  ct = new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: liste_annee,
      datasets: [{ 
          data: liste_data,
          label: op,
          borderColor: "#3e95cd",
          fill: false
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: op + ' \n Nombre de personnes entre 0-14 ans infectées',
      }
    }
  });

  
  
};


$.ajax({
  url:"https://bryancorret.github.io/NDI2022/detailsData.json",
  type: "GET",
  dataType: "json",
  success: function(tasks) {
    monde = tasks
            }
    });

  function recherchePays(id){
      idmj = id.toUpperCase();
      console.log(monde[idmj]);
      donnee_pays = monde[idmj];
      liste_annee = Object.keys(donnee_pays);
      console.log(liste_annee);
      liste_data = Object.values(donnee_pays);
      console.log(liste_data);

      afficheStat(liste_annee, liste_data);
}

}


); /*Call this funtion with the ID-name for that element to increase the number within*/};
