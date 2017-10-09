(function() {
    var myform = $("form#contact");
    myform.submit(function(event) {
        event.preventDefault();

        var params = myform.serializeArray().reduce(function(obj, item) {
            obj[item.name] = item.value;
            return obj;
        }, {});
        console.log(params)
            // Change to your service ID, or keep using the default service
        var service_id = "gmail";
        var template_id = "email_portfolio";
        myform.find("button").text("Enviando...").addClass('disabled');
        emailjs.send(service_id, template_id, params)
            .then(function() {
                alert("Enviado, já que eu respondo!");
            }, function(err) {
                alert("Erro ao Enviar\r\n Erro:\n " + JSON.stringify(err));
            });
        myform.find("button").text("Enviar").removeClass('disabled');
        myform.trigger('reset');
        return false;
    });
}())