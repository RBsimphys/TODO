const dataTable = document.querySelector(".job-aggregator-table");

function displayJobs(jobData){
    let divContainer = [];
    for(let k in jobData){
        if(jobData[k]){
            let div = document.createElement("div");
            div.textContent = jobData[k];
            div.classList.add("cell");
            divContainer.push(div); 
        }
    }
    divContainer.forEach((e) => {dataTable.appendChild(e)});
}




export default displayJobs