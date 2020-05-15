


let formCorona = document.querySelector(".form-flow").addEventListener("submit", (event) => {
    event.preventDefault();
    let formvalue = document.querySelector(".form-control").value;
    let formControlValue = formvalue.toUpperCase();
    console.log(formControlValue);

    let url = "https://api.covid19api.com/total/dayone/country/" + formControlValue;

    covidData(url, formControlValue)

} );


async function covidData(url, formControlValue){

    let response = await fetch(url)
    let data = await response.json()
    console.log(data);

    let lenght = data.length;

    let index = Number(lenght - 1);

    let allin = document.querySelector(".Allin")    
    let ConfirmedAll = document.querySelector(".Confirmed");
    let death = document.querySelector(".death");
    let recovered = document.querySelector(".recovered");

    // ConfirmedAll.append("Total confirmed Cases" +  data[index].Confirmed);
    // death.append(`<h1> Total Death Cases $(data[index].Deaths)`)
    // recovered.append(`<h1> Total Recovered Cases $(data[index].Recovered)`)

    if (response.status === 200 ) {
        allin.innerHTML = (`
    
        <div class="container data">
        <h1> Cases In  ${formControlValue} <h1>
        <h1> Total Confirmed Cases : ${data[index].Confirmed} </h1>
        <h2> Total Deaths Cases : ${data[index].Deaths} </h2>
        <h2> Total Recovered Cases : ${data[index].Recovered} </h2>
        
        </div>
        `);
    
    } else {
        allin.innerHTML = (
            `
            <div class="container data">
           <h1>  ${formControlValue} is Not a country <h1>
           <h2> Please Try Again </h2>
            
            `
        )

    }
   

}

// sconst url = https://api.covid19api.com/total/dayone/country/india;