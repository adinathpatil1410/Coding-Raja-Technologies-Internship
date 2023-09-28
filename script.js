function addnewWEField() {
 //   console.log("Adding New Field")

 let newNode=document.createElement('textarea');
 newNode.classList.add('form-control');
 newNode.classList.add('weField');
 newNode.classList.add("mt-2");
 newNode.setAttribute("rows",3);
 newNode.setAttribute("placeholder", "Enter here...");

 let weob = document.getElementById("we");
 let weAddButtonob= document.getElementById("weAddButton");

 weob.insertBefore(newNode, weAddButtonob);

}

function addnewEQField(){

    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder", "Enter here...");
   
    let eqob = document.getElementById("eq");
    let eqAddButtonob= document.getElementById("eqAddButton");
   
   eqob.insertBefore(newNode, eqAddButtonob);


}

function generateCV()
{

	//console.log("Generating CV");

    let nameField=document.getElementById('nameField').value;

    let nameT1=document.getElementById('nameT1');

    nameT1.innerHTML=nameField;

    document.getElementById("nameT2").innerHTML = nameField;

    document.getElementById("contactT").innerHTML = document.getElementById("ContactField").value;

    document.getElementById("addressT").innerHTML = document.getElementById("AddressField").value;

    document.getElementById("fbT").innerHTML = document.getElementById("FbField").value;

    document.getElementById("instaT").innerHTML = document.getElementById("InstaField").value;

    document.getElementById("LinkedT").innerHTML = document.getElementById("LiField").value;

    document.getElementById("ObjectiveT").innerHTML = document.getElementById("ObjectiveField").value;

   
    let wes = document.getElementsByClassName("weField");
    
    let str ="";

    for (let e of wes)
    {
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById("weT").innerHTML = str;

	

    let eqs = document.getElementsByClassName("eqField");

    let str1="";

    for (let e of eqs)
    {
        str1 += `<li> ${e.value} </li>`;
    }
    
    document.getElementById("eqT").innerHTML = str1;



    document.getElementById("CV-Form").style.display = "none";
    document.getElementById("CV-template").style.display = "block";

}

function printCV()
{
    window.print();
}    

