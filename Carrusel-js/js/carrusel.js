//local reviews data 

const reviews = [
    {
        id: 1,
        name: "Aurora Askness",
        job: "Singer",
        img: "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_960_720.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minima id ad, doloremque, iusto repellat ut qui doloribus placeat minus dolorem consectetur cumque, assumenda veritatis facilis maxime. Et, unde at?",

    },
    {
        id: 2,
        name: "Isac",
        job: "Ing",
        img: "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_960_720.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minima id ad, doloremque, iusto repellat ut qui doloribus placeat minus dolorem consectetur cumque, assumenda veritatis facilis maxime. Et, unde at?",
    },
    {
        id: 3,
        name: "Mime",
        job: "ma",
        img: "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_960_720.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minima id ad, doloremque, iusto repellat ut qui doloribus placeat minus dolorem consectetur cumque, assumenda veritatis facilis maxime. Et, unde at?",
    },
    {
        id: 4,
        name: "Kat",
        job: "pap",
        img: "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_960_720.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus minima id ad, doloremque, iusto repellat ut qui doloribus placeat minus dolorem consectetur cumque, assumenda veritatis facilis maxime. Et, unde at?",
    },
];

//select items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn =  document.querySelector(".prev-btn");
const nextBtn =  document.querySelector(".next-btn");
const randomBtn =  document.querySelector(".random-btn");


//set starting item
let currentItem = 0 ;

//load inital item

window.addEventListener('DOMContentLoaded', function (){
    showPerson();
});

// show person based on item 

function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//show next person 

nextBtn.addEventListener('click', function (){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
})

//showw prev item
prevBtn.addEventListener('click', function (){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length -1;
    }
    showPerson(currentItem);
})

//show random person

randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
});