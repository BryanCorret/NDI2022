onload = (event) => {const counters = document.querySelectorAll('.nbr');
const speed = 200;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('value');
      const data = +counter.innerText;

      const time = value / speed;
      
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        }
        else{
          const str_chiffre = value.toString();
          const taille = str_chiffre.length;
          let div = taille%3
          let cpt=0;
          let ee = " ";
          
          
          for(var i=0;i< str_chiffre.length;i++){
            if (div ==0){
              cpt+=3
              div=2
              ee = ee.concat(str_chiffre[i]);
            }

            else if(i==1){

              if(i == div){
                ee = ee.concat("."+str_chiffre[i]);
              }
              else{
                ee = ee.concat((str_chiffre[i]));
              }
            }
            else if(i == div){
              ee = ee.concat(str_chiffre[i]+".");
            }

            else if(cpt%3 == 0){
              ee = ee.concat((str_chiffre[i]));
            }

            else{
              ee = ee.concat(str_chiffre[i]);
            }
            
          }
          counter.innerText = ee;
        }

   }

   animate();

  

}); /*Call this funtion with the ID-name for that element to increase the number within*/};
