let tabHeader = document.getElementsByClassName("tab-header")[0];
let tabBody = document.getElementsByClassName("tab-body")[0];

let tabsPane = tabHeader.getElementsByTagName("li"); //list haru array ma thuparna//

for (let i = 0; i < tabsPane.length; i++) {
  tabsPane[i].addEventListener("click", function () {
    tabHeader.getElementsByClassName("active")[0].classList.remove("active");
    tabsPane[i].classList.add("active");
    tabBody.getElementsByClassName("active")[0].classList.remove("active");
    tabBody.getElementsByTagName("section")[i].classList.add("active");
  });
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("restimg").style.width = "14em";
    document.getElementById("restimg").style.marginLeft = "356px";
    document.getElementById("resturantid").style.height = "13.5em";
    document.getElementById("resturantid").style.width = "100vw";
    document.getElementById("resturantid").style.marginLeft = "-190px";
    document.getElementById("resturantid").style.backgroundColor = "#e8e8e8";
    document.getElementById("rest-detail").style.paddingTop = "0em";
    document.getElementById("rest-fav").style.paddingTop = "0em";
    document.getElementById("rest-address").style.fontSize = "1em";
    document.getElementById("rest-button").style.width = "90px";
    document.getElementById("rest-button").style.height = "35px";
    document.getElementById("rest-button").style.fontSize = "0.9rem";
    document.getElementById("rest-button").style.backgroundColor = "#5ebd16";
    document.getElementById("ul-down").style.fontSize = "0.8em";
    document.getElementById("time-id").style.color = "white";
    document.querySelector(".rest-searchbox").style.border = "1px solid gray";
    document.querySelector(".rest-searchbox").style.borderRadius = "25px";
    document.querySelector(".rest-searchbox").style.outline = "none";
    document.getElementById("rest-searchbar").style.marginTop = "1.5em";
    document.querySelector(".rest-mainbody").style.paddingTop = "20px";
    document.querySelector(".cart-container").style.height = "36%";
    document.querySelector(".cart-container").style.top = "35%";
    document.querySelector(".rest-stars").style.fontSize = "0.8rem";
    document.querySelector(".rest-stars").style.color = "yellow";
    document.getElementById("rest-detail").style.paddingLeft = "0px";

    // document.getElementById("resturantid").style.backgroundColor = "black";
    document.getElementById("f-title").style.fontSize = "1.3em";
    document.getElementById("rest-number").style.display = "none";
  } else {
    document.getElementById("rest-searchbar").style.marginTop = "5%";
    document.querySelector(".rest-searchbox").style.border = "1px solid black";
    document.querySelector(".rest-searchbox").style.borderRadius = "25px";
    document.getElementById("restimg").style.marginLeft = "unset";
    document.getElementById("restimg").style.width = "32em";
    document.getElementById("resturantid").style.width = "100%";
    document.getElementById("resturantid").style.marginLeft = "0";
    document.getElementById("rest-fav").style.paddingTop = "15px";
    document.getElementById("resturantid").style.height = "30em";
    document.getElementById("resturantid").style.backgroundColor = "white";
    document.getElementById("f-title").style.color = "unset";
    document.getElementById("f-title").style.fontSize = "2em";
    document.getElementById("ul-down").style.fontSize = "1rem";
    document.getElementById("rest-address").style.fontSize = "1.3em";
    document.getElementById("rest-detail").style.paddingTop = "20px";
    document.getElementById("rest-detail").style.paddingLeft = "46px";

    document.getElementById("rest-number").style.display = "flex";
    document.querySelector(".rest-mainbody").style.paddingTop = "0px";
    document.querySelector(".rest-searchbox").style.outline = "none";
    document.getElementById("rest-button").style.width = "8em";
    document.getElementById("rest-button").style.height = "2.7em";
    document.getElementById("rest-button").style.fontSize = "unset";

    document.querySelector(".rest-stars").style.fontSize = "1.1rem";

    // document.getElementById("resturantid").style.backgroundColor = "white";
  }
}
