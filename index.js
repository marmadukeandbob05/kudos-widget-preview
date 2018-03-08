$(function(){
   $("#r1").click(function () {
      $('#go').trigger('click');
   });
   $("#r2").click(function () {
     $('#go').trigger('click');
   });
   $("#go").click(function () {



     if ($('input[name=w-type]:checked').val() == "ex") {
        var DOI = $("#DOI");
        var good_url = ("//api.growkudos.com/widgets/article/".concat(DOI.val()).concat("?omit_icons=true"));
     }

     if ($('input[name=w-type]:checked').val() == "re") {
         var DOI = $("#DOI");
         var good_url = ("//api.growkudos.com/widgets/resources/".concat(DOI.val()).concat("?omit_icons=true"));
     }

     $("#preview").css("display", "inline");




     var division = document.getElementById("preview");
     while (division.firstChild) {
        division.removeChild(division.firstChild);
     }

     var newItem = document.createElement('script');
     newItem.setAttribute("type","text/javascript");
     newItem.setAttribute("src", good_url);


     division.insertBefore(newItem, division.childNodes[0]);
      
      var division = document.getElementById("preview");
     while (division.firstChild) {
        division.removeChild(division.firstChild);
     }

     var newItem = document.createElement('script');
     newItem.setAttribute("type","text/javascript");
     newItem.setAttribute("src", good_url);
     newItem.addClass("kw-med");

     division.insertBefore(newItem, division.childNodes[1]);
      
      var division = document.getElementById("preview");
     while (division.firstChild) {
        division.removeChild(division.firstChild);
     }

     var newItem = document.createElement('script');
     newItem.setAttribute("type","text/javascript");
     newItem.setAttribute("src", good_url);
     newItem.addClass("kw-full");

     division.insertBefore(newItem, division.childNodes[2]);


   });
   
   
});
