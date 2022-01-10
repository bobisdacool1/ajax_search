$("#username").suggestions({
    token: "2c8b1bde01fd082a5d3558c5d1488565fa872320",
    type: "NAME",
});
$("#address").suggestions({
    token: "2c8b1bde01fd082a5d3558c5d1488565fa872320",
    type: "ADDRESS",
});

$('form').on('submit', function (event) {
    event.preventDefault();

    $.ajax({
        method: "POST",
        url: "save.php",
        data: {
            name: $('input[name="name"]').val(),
            address: $('input[name="address"]').val()
        }
    }).done(function (msg) {

    });
});