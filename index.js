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
        var good_url = ("//api.growkudos.com/widgets/article/".concat(DOI.val()));
     }

     if ($('input[name=w-type]:checked').val() == "re") {
         var DOI = $("#DOI");
         var good_url = ("//api.growkudos.com/widgets/resources/".concat(DOI.val()));
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


   });
   
   
});
