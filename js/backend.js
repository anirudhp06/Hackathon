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
        loadSelection(value);
    }
}

function loadSelection(value){
    var loc=document.getElementById("places").value;
    var th=document.getElementById("therapyInfo");
    var sk=document.getElementById("schoolInfo");
    var act=document.getElementById("activityInfo");
    var sup=document.getElementById("supportInfo");

    if(value=="school" && loc=="bangalore"){
        console.log(loc+" selected");
        fetch('skulBLR.html')
        .then(response=>response.text())
        .then(html=>{
            document.getElementById('schoolInfo').innerHTML=html;
        })
        .catch(error=>{
            console.log('Error:',error);
        });
        sk.classList.remove("hidden");
        /* hide all other fields */
        th.classList.add("hidden");
        act.classList.add("hidden");
        sup.classList.add("hidden");
        
    }
    else if(value=="therapy" && loc=="bangalore"){
        console.log(loc+" selected");
        fetch('therapyBLR.html')
        .then(response=>response.text())
        .then(html=>{
            document.getElementById('therapyInfo').innerHTML=html;
        })
        .catch(error=>{
            console.log('Error:',error);
        });
        
        th.classList.remove("hidden");
        /* hide all other fields */
        sk.classList.add("hidden");
        act.classList.add("hidden");
        sup.classList.add("hidden");
    }
    else if(value=="support" && loc=="hubli"){
        console.log(loc+" selected");
        fetch('supportHBX.html')
        .then(response=>response.text())
        .then(html=>{
            document.getElementById('supportInfo').innerHTML=html;
        })
        .catch(error=>{
            console.log('Error:',error);
        });
        sup.classList.remove("hidden");

        th.classList.add("hidden");
        sk.classList.add("hidden");
        act.classList.add("hidden");
    }
    else{
        alert(value+" information still not loaded.");
    }
}