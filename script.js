

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-Links");
const links = document.querySelectorAll(".nav-Links li");

hamburger.addEventListener("click", () => {
 navLinks.classList.toggle("open");
 links.forEach(link => {
 link.classList.toggle("fade");
});
});

let url = "https://www.fruityvice.com/api/fruit/strawberry";

fetch(url).then(
    function(response){
        console.log(response);
        return response.json();
    }
).then(
    function(json){
        
        let food = document.createElement("h1");
        let family = document.createElement("h3");
        let nutritions = document.createElement("h3");
        let carbs = document.createElement("h3")
        let sugar = document.createElement("h3")
        let protein = document.createElement("h3")
        let fat = document.createElement("h3")
        
        
        
        
        
        
        food.innerHTML = json.name;
        family.innerHTML = "Food Family: " + json.family;
        nutritions.innerHTML = "Calories: " + json.nutritions.calories + "g";
        carbs.innerHTML = "Carbohydrates: " + json.nutritions.carbohydrates + "g";
        sugar.innerHTML = "Sugar: " + json.nutritions.sugar + "g";
        protein.innerHTML = "Protein: " + json.nutritions.protein + "g";
        fat.innerHTML = "Fat: " + json.nutritions.fat + "g";



        
        
        
        
        
        food.style["font-family"] = "Garamond";
        family.style["font-family"] = "Garamond";
        nutritions.style["font-family"] = "Garamond";
        carbs.style["font-family"] = "Garamond";
        sugar.style["font-family"] = "Garamond";
        protein.style["font-family"] = "Garamond";
        fat.style["font-family"] = "Garamond";
        
        
       
        
        
        
        document.body.appendChild(food);
        document.body.appendChild(family);
        document.body.appendChild(nutritions);
        document.body.appendChild(carbs);
        document.body.appendChild(sugar);
        document.body.appendChild(protein);
        document.body.appendChild(fat);
        
       
        
        
        
        
        console.log(json);
    }
) 