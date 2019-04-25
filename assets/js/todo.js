// Check off specific items by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//Toggle text input box
$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
});

// Add new todo item to the list
$("input[type='text']").keypress(function(e) {
    if (e.which == 13) {
        if ($(this).val() != "") {
            $("ul").append("<li> <span><i class=\"fas fa-trash\"></i></span> "+$(this).val()+" </li>")
        }
        $(this).val("");
    }
});

// Delete an item
$("ul").on("click", "span", function(e) {
    $(this).parent().fadeOut(400, function(){
        $(this).remove();
    });
    e.stopPropagation();
});
