window.addEventListener('load', ()=> {
  
    //NEDERLAND GEGEVENS
    //BESMETTINGEN
    let nieuweBesmettingenNederland = document.querySelector("#nieuweBesmettingenNederland");
    let totaleBesmettingenNederland = document.querySelector("#totaleBesmettingenNederland");

    //HERSTELD
    let nieuwHersteldNederland = document.querySelector("#nieuwHersteldNederland")
    //let totaalHersteldNederland = document.querySelector("#totaalHersteldNerland");

    //DODEN
    let nieuweDodenNederland = document.querySelector("#nieuweDodenNederland");
    let totaleDodenNederland = document.querySelector("#totaleDodenNederland");

    const api = ("https://disease.sh/v3/covid-19/countries/Netherlands?yesterday=true&twoDaysAgo=true&strict=true&allowNull=true")
   
        fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            //NEDERLAND GEGEVENS

            //BESMETTINGEN
            const {todayCases} = data;
            const {cases} = data;

            //HERSTELD
            const {todayRecovered} = data;
            //const {recovered} = data;

            //DODEN
            const {todayDeaths} = data;
            const {deaths} = data;
            
            //BESMETTINGEN
            nieuweBesmettingenNederland.textContent = "Nieuwe besmettingen: " + todayCases;
            totaleBesmettingenNederland.textContent = "Totale besmettingen: " + cases;

            //HERSTELD
            nieuwHersteldNederland.textContent = "Nieuw hersteld: Niet beschikbaar";
            //nieuwHersteldNederland.textContent = "Nieuw hersteld: " + todayRecovered;
            //totaalHersteldNederland.textContent = "Totaal hersteld: " + recovered;

            //DODEN
            nieuweDodenNederland.textContent = "Nieuwe doden: " + todayDeaths;
            totaleDodenNederland.textContent = "Totale doden: " + deaths; 
          })
        })
    