// Check off specific items by clicking
$("li").click(function() {
    $(this).toggleClass("completed");
});

//Toggle text input box
$(".fa-plus").click(function() {
    console.log("gottem");
});

// Add new todo item to the list
$("input").keypress(function(e) {
    if (e.which == 13) {
        if ($(this).val() != "") {
            $("ul").append("<li> <span><i class=\"fas fa-trash\"></i></span> "+$(this).val()+" </li>")
        }
        $(this).val("");
    }
});
