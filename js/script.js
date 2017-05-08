//back-end logic
function Contact(first,last,street,city,state){
  this.firstname = first;
  this.lastname=last;
  this.street=street;
  this.city=city;
  this.state=state;
};
//prototype function to add all address details of one person to display once 
Contact.prototype.fulladdress =function(){
  return this.firstname + " " + this.lastname +"  " +this.street + " " +
  this.city+"  " +this.state;
}
//user interface
$(document).ready(function(){
  $("form#address").submit(function(event){
    event.preventDefault();
    var inputtedFirstname=$("input#new-firstname").val();
    var inputtedLastname=$("input#new-lastname").val();
    var inputtedStreet=$("input#new-street").val();
    var inputtedCity=$("input#new-city").val();
    var inputtedState=$("input#new-state").val();
    //copy constructor for the new contact
    var newContact=new Contact(inputtedFirstname,inputtedLastname,inputtedStreet,inputtedCity,inputtedState);
    $("ul#Contacts").append("<li><span class='contacts'>" +
    newContact.fulladdress() + "</span></li>");
    //show the last clicked name
    $(".contact").last().click(function(){
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstname);
      $(".first-name").text(newContact.firstname);
      $(".last-name").text(newContact.firstname);
    });
    $("input#new-firstname").val();
    $("input#new-lastname").val();
  });
});
