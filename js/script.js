//back-end logic
function Contact(first,last){
  this.firstname = first;
  this.lastname=last;
};
Contact.prototype.fullname =function(){
  return this.firstname + " " + this.lastname;
}
//user interface
$(document).ready(function(){
  $("form#address").submit(function(event){
    event.preventDefault();
    var inputtedFirstname=$("input#new-firstname").val();
    var inputtedLastname=$("input#new-lastname").val();
    //copy constructor for the new contact
    var newContact=new Contact(inputtedFirstname,inputtedLastname);
    $("ul#contacts").append("<li><span class='contacts'>" +
    newContact.fullname() + "</span></li>");
    //show the last clicked name
    $(".contact").last().click(function(){
      $("#show-content").show();
      $("#show-content h2").text(newContact.firstname);
      $(".first-name").text(newContact.firstname);
      $(".last-name").text(newContact.firstname);
    });
    $("input#new-firstname").val();
    $("input#new-lastname").val();
  });
});
