

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-Links");
const links = document.querySelectorAll(".nav-Links li");

hamburger.addEventListener("click", () => {
 navLinks.classList.toggle("open");
 links.forEach(link => {
 link.classList.toggle("fade");
});
});

let url = "https://www.fruityvice.com/api/fruit/banana";

fetch(url).then(
    function(response){
        return response.json();
    }
).then(
    function(json){
        let example = document.createElement("h3");
        
        
        example.innerHTML = json.name;
        
        
        
        example.style["font-family"] = "Garamond";
        description.innerHTML = json.desc[0];
        document.body.appendChild(example);
        
        console.log(json);
    }
)