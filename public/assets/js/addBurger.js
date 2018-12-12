$(function(){
    $(".devour-btn").on("click", function(event){
        event.preventDefault();
        var id= $(this).data("id");
        var currentStatus = $(this).data("status");

        if(currentStatus === 0){
            currentStatus = true;
        }

        var newStatus = {
            devoured: true
        };

        $.ajax("/burgers/"+id, {
            type: "PUT",
            data: newStatus
        }).then(
            function(){
                console.log("Status updated");
                location.reload();
            }
        )
    });

    $(".create-form").on("submit", function(event){
        event.preventDefault();
        var newBurger = {
            burger_name: $("#name").val()
        }

        $.ajax("/burgers", {
            type="POST",
            data: newBurger
        }).then(
            function(){
                console.log("New burger created");
                location.reload();
            }
        );
    });
})