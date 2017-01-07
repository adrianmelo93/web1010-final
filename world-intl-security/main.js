var logo = $('#logo');
var missionBtn = $('#mission-btn');
var missionContent = $('#mission-content');
var servicesBtn = $('#services-btn');
var servicesContent = $('#services-content');
var form = $('#form');
var send =$('#send');

logo.click(function(){
    console.log('clicked on logo');
});
missionBtn.click(function(e){
    e.preventDefault();
    missionContent.toggle();
});
servicesBtn.click(function(e){
    e.preventDefault();
    servicesContent.toggle();
});
form.submit(function(e){
    e.preventDefault();
    $.ajax ({
        url:"http://fvi-grad.com:4004/fakeform",
         method:"post",
         data:form.serialize()
    }).done(function(){
        send.html('Message Sent!')
    }).fail(function(error){
        console.log(error);
    })
})
