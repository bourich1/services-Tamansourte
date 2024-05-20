const topPrudact = [
    {
        id : 1,
        img: "img/prudact/featured1.png",
        titel : "nike AR 19",
        prix : 200,
        new : "new"
    },

    {
        id : 2,
        img: "img/prudact/featured1.png",
        titel : "nike AR 13",
        prix : 250,
        new : "new"
    },
    {
        id : 2,
        img: "img/prudact/featured1.png",
        titel : "nike AR 13",
        prix : 250,
        new : "new"
    },

    {
        id : 3,
        img: "img/prudact/featured1.png",
        titel : "nike AR 17",
        prix : 300,
        new : ""
    },

    {
        id : 4,
        img: "img/prudact/featured2.png",
        titel : "nike AR 119",
        prix : 230,
        new : ""
    }

];
var topCourse = [
    {
        id : 1,
        img: "img/courses/preview.png",
        titel : "course Html css ",
        prixOld : 2000,
        prixNew : 200,
        desc : "this course to learn basic html css and seo html and advanced css"
    },
    {
        id : 1,
        img: "img/courses/preview.png",
        titel : "course js css ",
        prixOld : 3000,
        prixNew : 400,
        desc : "this course to learn basic html css and seo html and advanced css"
    },
    {
        id : 1,
        img: "img/courses/preview.png",
        titel : "course Html js ",
        prixOld : 8000,
        prixNew : 200,
        desc : "this course to learn basic html css and seo html and advanced css"
    },
    {
        id : 1,
        img: "img/courses/preview.png",
        titel : "course Html css ",
        prixOld : 2000,
        prixNew : 200,
        desc : "this course to learn basic html css and seo html and advanced css"
    },

];

// top prudact in this week
const newProudact = document.querySelector(".new-proudact");
// top courses in this week
const newCourses = document.querySelector(".courses");
// add prudact and courses in page on refrech page
window.addEventListener("DOMContentLoaded" , ()=>{
    displayPrudact(topPrudact);
    displayCourse(topCourse);
})
// scroll to top functionality start
const scrollBtn = document.querySelector(".top");
window.onscroll = ()=>{
    if(window.scrollY > 400){
        scrollBtn.style.display="block";
    }else{
        scrollBtn.style.display="none";
    }
}
scrollBtn.onclick = ()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
}
// scroll to top functionality end



// add prudact to page
function displayPrudact(topPrudact){
    var displayPRU = topPrudact.map((ele)=>{
        return `<div class="card">
        <div class="head">
            <div>${ele.new}</div>
            <img src=${ele.img} width="70%" alt="">
        </div>
        <div class="content-card">
            <h3>${ele.titel}</h3>
            <h4>${ele.prix} DH</h4>
            <a class="btn buy" href="">شراء الان</a>
        </div>
    </div>`
    })
    
    newProudact.innerHTML = displayPRU.join("");
}
// add course to page 
function displayCourse(topCourse){
    var displayCOU = topCourse.map((ele)=>{
        return `<div class="course-card">
        <div class="header">
            <img src=${ele.img} alt="">
        </div>
        <div class="content">
            <h2>${ele.titel}</h2>
            <p>${ele.desc}</p>
            <div class="price">
                <strong>PRICE : </strong> 
                <div class="prices-value">
                    <span class="price-active">${ele.prixNew} DH</span>
                    <span class="price-desactiv">${ele.prixOld} DH</span>
                </div>
            </div>
            <a class="btn buy" href="">شراء </a>
        </div>
    </div>`
    })
    
    newCourses.innerHTML = displayCOU.join("");
}
// run bars nav
document.querySelector(".nav-run").addEventListener("click" , ()=>{
    document.querySelector(".nav").style.display="block";
    document.querySelector(".nav-run").style.display="none";
    document.querySelector(".nav-close").style.display="block";
});
document.querySelector(".nav-close").addEventListener("click" , ()=>{
    document.querySelector(".nav").style.display="none";
    document.querySelector(".nav-run").style.display="block";
    document.querySelector(".nav-close").style.display="none";
})
// event btn for show form sin up email
document.querySelector(".show-sin-up").addEventListener("click" , ()=>{
    document.querySelector(".form-sinup").style.opacity="1";
    document.querySelector(".form-sinup").style.transform="none";
    document.querySelector(".form-sinup").style.visibility="visible";
})