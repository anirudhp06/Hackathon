function hello(){
    alert("Clicked from file");
}
function showDropdown(){
    var dropdown=document.getElementById("myDropdown");
    dropdown.style.display="block";
}
function getDetails(){
    var details=document.getElementById()
}
function loadPage(){
    var value=document.getElementById("option").value;
    var bt=document.getElementById("Go");
    if(value==="default"){
        alert("Please select all the option and then proceed.");
    }
    else{
        alert("Fetching based on your choices.");
        loadSelection(value);
    }
}

function loadSelection(value){
    if(value==="school"){
        var show=document.getElementById("schoolInfo");
        show.classList.remove("hidden");
    }
}