const container = document.querySelector(".main-container");

class job {
    constructor(data) {
        this.title = data.title;
        this.company = data.company;
        this.link = data.link;
        this.status = data.status;
        this.date = data.date;
        this.category = data.category;
    }

    get Data() {
        return {
            title: this.title,
            company: this.company,
            link: this.link,
            status: this.status,
            sumbmissionDate: this.date,
            category: this.category,
        }
    }
    set Status(newStatus){
        this.status = newStatus;
    }
}


export default job