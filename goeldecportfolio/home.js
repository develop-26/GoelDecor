let Proj= document.getElementById("projects");
// Proj.nodeType="button";
// let Enq=document.getElementById("enquire");


function scrollFunction(){
    document.getElementById("prevproj").scrollIntoView({behavior: "smooth",block:"center"});
};



function ShowMenu(){
    // document.getElementById("head").style.display="block";
    for(let i of document.getElementsByTagName("h5")){
        if(i.style.display=="none"){
           i.style.display="block";
        }
        else{
           i.style.display="none";

        }

    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".one").forEach(plant => {
        plant.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.3)"; // Slightly enlarge
            this.style.backgroundColor = "#1a3029";
            this.style.zIndex="10";
            this.getElementsByTagName('h4')[0].innerHTML="Available Sizes - "+"<br><br>"+"30in/9in/9in," +"<br>"+"30in/12in/12in";

        });

        plant.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)"; // Reset
            this.style.backgroundColor = "#1a30299e";
            this.style.zIndex="1";
            this.getElementsByTagName('h4')[0].innerHTML="Rectangular"+"<br>"+ "Horizontal" +"<br>"+ "Fiber" +"<br>"+"(White)"

        });
    });
   
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".two").forEach(plant => {
        plant.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.3)"; // Slightly enlarge
            this.style.backgroundColor = "#1a3029";
            this.style.zIndex="10"
            this.getElementsByTagName('h4')[0].innerHTML="Available Sizes -"+"<br><br>"+"Height - 11in" +"<br>"+"Dia - 10in"+"<br><br>"+"Height - 14in"+"<br>"+"Dia - 13in";
        });

        plant.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)"; // Reset
            this.style.backgroundColor = "#1a30299e";
            this.style.zIndex="1";
            this.getElementsByTagName('h4')[0].innerHTML="Round"+"<br>"+ "Vertical" +"<br>"+ "Short Wavy"+ "<br>"+"Fiber" +"<br>"+"(White)"


        });
    });
    
});


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".three").forEach(plant => {
        plant.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.3)"; // Slightly enlarge
            this.style.backgroundColor = "#1a3029";
            this.style.zIndex="10";
            this.getElementsByTagName('h4')[0].innerHTML="Available Sizes -"+"<br><br>"+"Dia/Height - 13in"+"<br>"+"Dia/Height - 14in" +"<br> <br>"+"Other color"+"<br>"+ "options available";
        });

        plant.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)"; // Reset
            this.style.backgroundColor = "#1a30299e";
            this.style.zIndex="1";
            this.getElementsByTagName('h4')[0].innerHTML="Apple"+"<br>"+"Round"+"<br>"+"Fiber"+"<br>"+"(Red)";
        });
    });
    
});
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".four").forEach(plant => {
        plant.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.3)"; // Slightly enlarge
            this.style.backgroundColor = "#1a3029";
            this.style.zIndex="10"
            this.getElementsByTagName('h4')[0].innerHTML="Available Sizes - "+"<br>"+"H|W|L"+"<br>"+"10in|10in|10in"+"<br>"+"12in|12in|12in"+"<br>"+"15in|15in|15in"+"<br>"+"18in|18in|18in"+"<br>"+"24in|24in|24in";
        });

        plant.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)"; // Reset
            this.style.backgroundColor = "#1a30299e";
            this.style.zIndex="1";
            this.getElementsByTagName('h4')[0].innerHTML="Square"+"<br>"+"Fiber"+"<br>"+"Off-White";

        });
    });
    
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".five").forEach(plant => {
        plant.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.3)"; // Slightly enlarge
            this.style.backgroundColor = "#1a3029";
            this.style.zIndex="10"
            this.getElementsByTagName('h4')[0].innerHTML="Available Sizes - "+"<br><br>"+"Customizable";


        });

        plant.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)"; // Reset
            this.style.backgroundColor = "#1a30299e";
            this.style.zIndex="1";
            this.getElementsByTagName('h4')[0].innerHTML="Circular"+"<br>"+"Vertical"+"<br>"+"White"+"<br>"+"Fiber";

        });
    });
    
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".six").forEach(plant => {
        plant.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.3)"; // Slightly enlarge
            this.style.backgroundColor = "#1a3029";
            this.style.zIndex="10"
            this.getElementsByTagName('h4')[0].innerHTML="Available Sizes - "+"<br><br>"+"Dia - 13in"+"<br>"+"Height - 24in";
        });

        plant.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)"; // Reset
            this.style.backgroundColor = "#1a30299e";
            this.style.zIndex="1";
            this.getElementsByTagName('h4')[0].innerHTML="Pentagonal"+"<br>"+"Vertical"+"<br>"+"Fiber"+"<br>"+"Matte"+"<br>"+"(White)";        });
    });
    
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".seven").forEach(plant => {
        plant.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.3)"; // Slightly enlarge
            this.style.backgroundColor = "#1a3029";
            this.style.zIndex="10"
            this.getElementsByTagName('h4')[0].innerHTML="Available Sizes - "+"<br><br>"+"15in|15in|24in"+"<br>"+"13in|14in";
        });

        plant.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)"; // Reset
            this.style.backgroundColor = "#1a30299e";
            this.style.zIndex="1";
            this.getElementsByTagName('h4')[0].innerHTML="Wide Wavy"+"<br>"+"Circular"+"<br>"+"Shiny"+"<br>"+"(White)";
        });
    });
    
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".eight").forEach(plant => {
        plant.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.3)"; // Slightly enlarge
            this.style.backgroundColor = "#1a3029";
            this.style.zIndex="10"
            this.getElementsByTagName('h4')[0].innerHTML="Available Sizes - "+"<br><br>"+"12in|12in|18in"+"<br>"+"14in|14in|24in"+"<br>"+"14in|14in|32in"+"<br>"+"15in|15in|42in";

        });

        plant.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)"; // Reset
            this.style.backgroundColor = "#1a30299e";
            this.style.zIndex="1";
            this.getElementsByTagName('h4')[0].innerHTML="Square-Trapezium"+"<br>"+"Straight-Vertical"+"<br>"+"(Black)";
        });
    });
    
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".nine").forEach(plant => {
        plant.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.3)"; // Slightly enlarge
            this.style.backgroundColor = "#1a3029";
            this.style.zIndex="10"
            this.getElementsByTagName('h4')[0].innerHTML="Available Sizes - "+"<br><br>"+"12in|12in|18in"+"<br>"+"14in|14in|24in"+"<br>"+"14in|14in|32in"+"<br>"+"15in|15in|42in";
        });

        plant.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)"; // Reset
            this.style.backgroundColor = "#1a30299e";
            this.style.zIndex="1";
            this.getElementsByTagName('h4')[0].innerHTML="Square-Trapezium"+"<br>"+"Round-Vertical"+"<br>"+"(White)";

        });
    });
    
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".ten").forEach(plant => {
        plant.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.3)"; // Slightly enlarge
            this.style.backgroundColor = "#1a3029";
            this.style.zIndex="10"
            this.getElementsByTagName[0].innerHTML="Available Sizes - "+"<br><br>"+"height-11in"+"<br>"+"Dia-10in"+"<br><br>"+"height-11in"+"<br>"+"Dia-14in";
        });

        plant.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)"; // Reset
            this.style.backgroundColor = "#1a30299e";
            this.style.zIndex="1";
            this.getElementsByTagName[0].innerHTML="Round-Cylinder"+"<br>"+"Straight"+"<br>"+"(White)";
        });
    });
    
});

// responsive menu

document.addEventListener("DOMContentLoaded", function (){
    document.querySelectorAll(".c1").forEach(obj=>{
        obj.addEventListener("click", function (){
            window.location.href="About.html";

        });
    });

});

document.addEventListener("DOMContentLoaded", function (){
    document.querySelectorAll(".c2").forEach(obj=>{
        obj.addEventListener("click", function (){
            window.location.href="Contact.html";

        });
    });

});

document.addEventListener("DOMContentLoaded", function (){
    document.querySelectorAll(".c3").forEach(obj=>{
        obj.addEventListener("click", function (){
            window.location.href="September 2022 copy.pdf";

        });
        
    });

});

document.addEventListener("DOMContentLoaded", function (){
    document.querySelectorAll(".c4").forEach(obj=>{
        obj.addEventListener("click", function (){
            window.location.href="https://forms.gle/7Xgik3ea9fZK33Du8";

        });

    });
});

document.addEventListener("DOMContentLoaded", function (){
    document.querySelectorAll(".c5").forEach(obj=>{
        obj.addEventListener("click", function (){
            document.getElementById("prevproj").scrollIntoView({behavior: "smooth",block:"center"});

        });

    });
});

