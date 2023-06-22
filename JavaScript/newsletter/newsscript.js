const newsletter=document.querySelector(".newsletter");
const newsletter__thanks=document.querySelector(".newsletter__thanks");

function ValidateEmail(input) {
    var valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+([.])+[com]*$/;
    const detail=document.querySelector("form");
    detail.addEventListener("submit",(event)=>{
      event.preventDefault();
      
  })
  
    if (input.value.match(valid)) {
        
                newsletter.classList.add("hide")
      newsletter__thanks.classList.remove("hide")
        
    } else {
      //alert("Invalid email address!");
      var mailId=document.getElementById("email");
      mailId.style.color="red";
      mailId.style.backgroundColor="pink";
      mailId.style.borderColor="red";
      var wrong=document.getElementById("wrongStatement");
      wrong.style.display="inline";
    
      
    }
    //document.getElementById("email").value="";
  }
  let back=document.getElementById("backToPage")
  back.addEventListener("click" ,(e)=>{
    newsletter.classList.remove("hide")
    newsletter__thanks.classList.add("hide")
  })