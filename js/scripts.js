hide = $("#icon-hide")
show = $("#icon-show")
hide.hide()
password = $("#inputPassword4")
show.click(function (){
    password.attr("type", "text")
    hide.slideDown(500)
    show.fadeOut(500)
})
hide.click(function (){
    password.attr("type", "password")
    hide.fadeOut(500)
    show.slideDown(500)
})
madel = $("#form-madel")
$("#btn").click(function (){
    setTimeout(function (){
    madel.slideUp()
},3000)

    if ($("#inputEmail4").val() === ""){
        $("#caption").html("ایمیل خالی است")
        $("#img").attr("src", "img/envelope_with_arrow.png")
            madel.slideDown()
    }
    else if ($("#inputPassword4").val() === ""){
        $("#caption").html("پسورد خالی است")
        $("#img").attr("src", "img/lock.png")
            madel.slideDown()
    }
    else {
        madel.slideUp()
    }
})
$("#close").click(function (){
    madel.slideUp()
})
