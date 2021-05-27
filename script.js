var li_tabs = document.querySelectorAll(".tab_wrap ul li");
var all =  document.querySelectorAll(".all");
var unread =  document.querySelectorAll(".all.unread");
var sent =  document.querySelectorAll(".all.send");


li_tabs.forEach((tab)=>{
    tab.addEventListener("click",()=>{
    
    li_tabs.forEach((tab)=>{
        tab.classList.remove("active");
    })

    tab.classList.add("active");

    var litabvalue = tab.getAttribute("data-li");
    console.log(litabvalue);

    var tabval = tab.getAttribute("data-li");

    all.forEach((item)=>{
        item.style.display = "none";
    })

    if(tabval == "all"){	
        all.forEach((item)=>{
            item.style.display = "flex";
        })
    }
    else if(tabval == "unread"){
        unread.forEach((item)=>{
            item.style.display = "flex";
        })
    }
    else{
        sent.forEach((item)=>{
            item.style.display = "flex";
        })	
    }

    })
   
})
