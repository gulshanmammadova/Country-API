
let btn = document.querySelector('#btn');
function Search() {
    let value = document.querySelector('#form input').value;
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(country => {
        let count=0;
       let html = '';
       country.forEach(cntry => {
        let exist_country = cntry.name.common.toLowerCase().includes(value.toLowerCase());
        if(exist_country ) {
            count++;
            let name= cntry.name.common;
            let official = cntry.name.official.length > 40 ?  cntry.name.official.slice(0,40) + "..." :  cntry.name.official
        html += `
        <div class="col-lg-4 box">
            <div  class="card">
                <img src=${cntry.flags.png} class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title display-2 text-center">${name}</h5>
                <p class="card-text text-center">${official}</p>
                <p class="card-text text-center text-black   ">${cntry.capital} </p>
                </div>
            </div>
        </div> 
        `
        }
       })
       if(count === 0) {
        document.querySelector('.page_404').classList.remove('d-none')
       }
       else{
        document.querySelector('.page_404').classList.add('d-none')
       }

       document.getElementById('list').innerHTML = html
    })
    .catch(error => console.log(error))
}
