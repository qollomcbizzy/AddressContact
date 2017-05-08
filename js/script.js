//back-end logic
function Contact(first,last){
  this.firstname = first;
  this.lastname=last;
};
//user interface
$(document).ready(function(){
  $("form#address").submit(function(event){
    event.preventDefault();
    var inputtedFirstname=$("input#new-firstname").val();
    var inputtedLastname=$("input#new-lastname").val();
    //copy constructor for the new contact
    var newContact=new Contact(inputtedFirstname,inputtedLastname.);
    $("ul#contacts").append("<li><span class='contacts'>" +
    newContact.firstname + "</span></li>");
    $("input#new-firstname").val();
    $("input#new-lastname").val();
  });
});
