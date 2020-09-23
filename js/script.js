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
    document.getElementById("resturantid").style.backgroundColor =
      "rgb(200,230,221)";
    document.getElementById("rest-detail").style.paddingTop = "0em";
    document.getElementById("rest-fav").style.paddingTop = "0em";
    document.getElementById("rest-address").style.fontSize = "1em";
    document.getElementById("rest-button").style.width = "6em";
    document.getElementById("rest-button").style.height = "2em";
    document.getElementById("rest-button").style.backgroundColor = "#5ebd16";
    document.getElementById("ul-down").style.fontSize = "0.8em";
    document.querySelector(".rest-searchbox").style.border = "1px solid gray";
    document.querySelector(".rest-searchbox").style.borderRadius = "25px";
    document.querySelector(".rest-searchbox").style.outline = "none";
    document.getElementById("rest-searchbar").style.marginTop = "1.5em";
    document.querySelector(".rest-mainbody").style.paddingTop = "20px";
    document.querySelector(".cart-container").style.height = "32%";
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
    document.querySelector(".rest-searchbox").style.borderRadius = "0px";
    document.getElementById("restimg").style.marginLeft = "unset";
    document.getElementById("restimg").style.width = "32em";
    document.getElementById("resturantid").style.width = "100%";
    document.getElementById("resturantid").style.marginLeft = "0";
    document.getElementById("rest-fav").style.paddingTop = "15px";
    document.getElementById("resturantid").style.height = "33em";
    document.getElementById("resturantid").style.backgroundColor = "white";
    document.getElementById("f-title").style.fontSize = "2em";
    document.getElementById("ul-down").style.fontSize = "1.3em";
    document.getElementById("rest-address").style.fontSize = "1.3em";
    document.getElementById("rest-detail").style.paddingTop = "20px";
    document.getElementById("rest-detail").style.paddingLeft = "46px";

    document.getElementById("rest-number").style.display = "flex";
    document.querySelector(".rest-mainbody").style.paddingTop = "0px";
    document.querySelector(".rest-searchbox").style.outline = "none";
    document.getElementById("rest-button").style.width = "8em";
    document.getElementById("rest-button").style.height = "2.7em";
    document.querySelector(".rest-stars").style.fontSize = "1.1rem";

    // document.getElementById("resturantid").style.backgroundColor = "white";
  }
}
