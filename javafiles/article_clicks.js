var rootstyle = document.documentElement.style;
var darkclick = document.getElementById("enable");
var c = 5;
var white = getComputedStyle(document.documentElement).getPropertyValue(
  "--white"
);
function darkbtn() {
  if (c == 5) {
    c = 7;
    darkclick.innerText = "Light mode";
    rootstyle.setProperty("--searchinputclr", "#3d4248");
    rootstyle.setProperty("--ddd", "#454744");
    rootstyle.setProperty("--fontclrdark", "rgb(220, 220, 220)");
    rootstyle.setProperty("--mainclr", "#26282c");
    rootstyle.setProperty("--contentshowclr", "white");
    rootstyle.setProperty("--white", "#26282c");
    rootstyle.setProperty("--mainclrforaccordion", "--mainclr");
    rootstyle.setProperty("--clsnml", "rgb(200,200,200)");
  } else if (c == 7) {
    c = 5;
    darkclick.innerText = "Dark mode";
    rootstyle.setProperty("--searchinputclr", "#dadce0");
    rootstyle.setProperty("--ddd", "#ddd");
    rootstyle.setProperty("--fontclrdark", "#26282c");
    rootstyle.setProperty("--mainclr", "#fff");
    rootstyle.setProperty("--contentshowclr", "#3f3e3e");
    rootstyle.setProperty("--white", "#fff");
    rootstyle.setProperty("--mainclrforaccordion", "#6a7bcf33");
    rootstyle.setProperty("--clsnml", "rgb(32, 32, 32)");
  }
}
document.addEventListener("DOMContentLoaded", function (event) {
  var acc = document.getElementsByClassName("accordion");
  var panel = document.getElementsByClassName("panel");
  for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
      var setClasses = !this.classList.contains("active");
      setClass(acc, "active", "remove");
      setClass(panel, "show", "remove");
      if (setClasses) {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
      }
    };
  }

  function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
      els[i].classList[fnName](className);
    }
  }
});
