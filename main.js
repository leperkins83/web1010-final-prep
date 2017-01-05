var contactBtn = $("#contact-btn");
var paragraphs = $("#card-text p");
var form = $("#contact-form");
var formBtn = $("#form-btn");

contactBtn.click(function(event) {
  event.preventDefault();
  paragraphs.toggle();
});

form.submit(function(e) {
  e.preventDefault();
  $.ajax({
    url: "http://fvi-grad.com:4004/fakeform",
    method: "POST",
    data: form.serialize()
  })
  .done(function(data) {
    formBtn.html("Message Sent!");
  })
  .fail(function(data) {
    formBtn.html("Message Failed to Send!");
  });
})
