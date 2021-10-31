window.addEventListener('load', ()=> {

    //GLOBALE GEGEVENS
    //BESMETTINGEN
    let nieuweBesmettingenGlobaal = document.querySelector("#nieuweBesmettingenGlobaal");
    let totaleBesmettingenGlobaal = document.querySelector("#totaleBesmettingenGlobaal");

    //HERSTELD
    let nieuwHersteldGlobaal = document.querySelector("#nieuwHersteldGlobaal")
    let totaalHersteldGlobaal = document.querySelector("#totaalHersteldGlobaal");

    //DODEN
    let nieuweDodenGlobaal = document.querySelector("#nieuweDodenGlobaal");
    let totaleDodenGlobaal = document.querySelector("#totaleDodenGlobaal");

    const api = ("https://disease.sh/v3/covid-19/all?yesterday=true&twoDaysAgo=true&allowNull=true")

        fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            //GLOBALE GEGEVENS

            //BESMETTINGEN
            const {todayCases} = data;
            const {cases} = data;

            //HERSTELD
            const {todayRecovered} = data;
            const {recovered} = data;

            //DODEN
            const {todayDeaths} = data;
            const {deaths} = data;

            //BESMETTINGEN
            nieuweBesmettingenGlobaal.textContent = "Nieuwe besmettingen: " + todayCases;
            totaleBesmettingenGlobaal.textContent = "Totale besmettingen: " + cases;

            //HERSTELD
            nieuwHersteldGlobaal.textContent = "Nieuw hersteld: " + todayRecovered;
            totaalHersteldGlobaal.textContent = "Totaal hersteld: " + recovered;

            //DODEN
            nieuweDodenGlobaal.textContent = "Nieuwe doden: " + todayDeaths;
            totaleDodenGlobaal.textContent = "Totale doden: " + deaths;            
          })
        })