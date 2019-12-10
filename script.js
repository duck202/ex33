
$(document).ready(function(){
    $("#main").load("maina.txt");
  });

  $(document).ready(function(){
    $("#link_a").click(function() {
    $("#main").load("maina.txt");
    });  


    $("#link_b").click(function() {
    $("#main").load("about.txt");
    });  

    $("#link_c").click(function() {
    $("#main").load("contact.txt");
    }); 
});  
    






// $(document).ready(function() {
//     $("#link_a").click(function() {
//         $("#main").load("maina.txt");
//     });  
