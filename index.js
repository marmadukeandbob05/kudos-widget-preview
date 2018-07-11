$(function(){
   $("#r1").click(function () {
      $('#go').trigger('click');
   });
   $("#r2").click(function () {
     $('#go').trigger('click');
   });

   $("#width").change(function () {
     $("#kwp").attr("href", $( "select#width option:checked" ).val().concat(".css"));
     $('#go').trigger('click');
   });

   $("#go").click(function () {
     params = ""

     if ($( "select#width option:checked" ).val() == "300px") {
       params = "?omit_icons=true";
     } else {
       params = "";
     }



     if ($('input[name=w-type]:checked').val() == "ex") {
        var DOI = $("#DOI");
        var good_url = ("https://api.growkudos.com/widgets/article/".concat(DOI.val()).concat(params));
     }

     if ($('input[name=w-type]:checked').val() == "re") {
         var DOI = $("#DOI");
         var good_url = ("https://api.growkudos.com/widgets/resources/".concat(DOI.val()).concat(params));
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
