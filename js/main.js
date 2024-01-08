(function ($) {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.getElementById("Header").style.padding = "5px 100px";
      document.getElementById("Header").style.backgroundColor = "#0071f8";
      document.getElementsByClassName("logo").style.maxWidth = "110px";
    } else {
      document.getElementById("Header").style.padding = "40px 10px";
      document.getElementById("Header").style.backgroundColor = "transparent";
    }
  };





})(window.jQuery);


