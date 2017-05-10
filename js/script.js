//back-end logic
function Contact(first,last){
  this.firstname = first;
  this.lastname=last;
  this.addresses = [];
};
Contact.prototype.fullnames=function(){
  return this.firstname + "  " + this.lastname;
}
function Address(street,city,state){
  this.street=street;
  this.city=city;
  this.state=state;
};
//prototype function to add all address details of one person to display once
Contact.prototype.fulladdress =function(){
  return this.firstname + " " + this.lastname +"  " +this.street + " " +
  this.city+"  " +this.state;
}
//protype to add address
Address.prototype.fulladdresses=function(){
  return this.street + "  " +this.city + "  "+ this.state;
}
//removing fields
//user interface
$(document).ready(function(){
  $("form#address").submit(function(event){
    event.preventDefault();
    var inputtedFirstname=$("input#new-firstname").val();
    var inputtedLastname=$("input#new-lastname").val();
    //copy constructor for the new contact
    var newContact=new Contact(inputtedFirstname,inputtedLastname);
    $(".new-addresses").each(function(){
      var inputtedStreet=$(this).find("input#new-street").val();
      var inputtedCity=$(this).find("input#new-city").val();
      var inputtedState=$(this).find("input#new-state").val();
      var newAddress=new Address(inputtedStreet,inputtedCity,inputtedState);
      newContact.addresses.push(newAddress);
    });
    $("ul#Contacts").append("<li><span class='contacts'>" +
    newContact.fullnames() + "</span></li>");
    //show the last clicked name
    $(".contacts").last().click(function(){
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstname);
      $(".first-name").text(newContact.firstname);
      $(".last-name").text(newContact.lastname);
      $("ul#addresses").text(" ");
      newContact.addresses.forEach(function (address) {
        $("ul#addresses").append("<li>" + address.fulladdresses() + "</li>");
      })
    });
    $("form#address")[0].reset();
  });
});
