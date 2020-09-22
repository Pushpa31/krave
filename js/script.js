window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("restimg").style.width = "16em";
    document.getElementById("restimg").style.marginLeft = "356px";
    document.getElementById("resturantid").style.minHeight = "10em";
    document.getElementById("resturantid").style.width = "100vw";
    document.getElementById("resturantid").style.marginLeft = "-190px";
    document.getElementById("resturantid").style.backgroundColor = "#e6e6e6";
    document.getElementById("rest-detail").style.paddingTop = "0em";
    document.getElementById("rest-fav").style.paddingTop = "0em";
    document.getElementById("rest-address").style.fontSize = "1em";
    document.getElementById("ul-down").style.fontSize = "0.8em";
    document.querySelector(".rest-searchbox").style.border = "1px solid white";
    document.querySelector(".rest-searchbox").style.borderRadius = "25px";

    document.getElementById("rest-searchbar").style.marginTop = "1.5em";

    document.querySelector(".rest-mainbody").style.paddingTop = "20px";

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
    document.getElementById("resturantid").style.minHeight = "33em";
    document.getElementById("resturantid").style.backgroundColor = "white";
    document.getElementById("f-title").style.fontSize = "2em";
    document.getElementById("ul-down").style.fontSize = "1.3em";
    document.getElementById("rest-address").style.fontSize = "1.3em";
    document.getElementById("rest-detail").style.paddingTop = "20px";
    document.getElementById("rest-number").style.display = "flex";
    document.querySelector(".rest-mainbody").style.paddingTop = "0px";

    // document.getElementById("resturantid").style.backgroundColor = "white";
  }
}
