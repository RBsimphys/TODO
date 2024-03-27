import "./styles/main.css"
import job from "./jobCreator.js"
import dom from './DOMstuff.js'

const inputs = Array.from(document.querySelectorAll(`[data-name="input"]`));
const addJobForm = document.getElementById('job-form');
const jobAggregator = document.getElementById('job-aggregator');
const errorElement = document.getElementById('error');

const jobDataBase = [];

// event listeners 
document.addEventListener('DOMContentLoaded', () => {
    addJobForm.addEventListener('submit', collectData)
});



let collectData = (event) => {
    event.preventDefault();
    let data = inputs.reduce((acc, curr, index) => {
        return { ...acc, [curr.id]: curr.value };
    }, {})
    
    jobDataBase.push(data);
    console.table(jobDataBase, jobAggregator);
    renderData(jobDataBase, jobAggregator);

    addJobForm.reset();
}

function renderData(dataBase, container) {
    for(let i = 0; i < dataBase.length; i++){
        
    }  
}
