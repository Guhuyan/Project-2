$("#send").on("click", function () {
    var socket = io();
    console.log($("#liveChatMessage").val())
    event.preventDefault();
    sendMessage({ message: $("#liveChatMessage").val() });
    $("#messageForm").trigger("reset");
})
// (function() {
//     var  socket  =  io();
//     $("#messageForm").submit(function(e) {
//         e.preventDefault(); // prevents page reloading
//         socket.emit("chat message", $("#liveChatMessage").val());
//         $("#liveChatMessage").val("");
//     return  true;
// });
// })();
getMessages()
function addMessages(message) {
    $("#messages").prepend(`<p> ${message.message} </p>`)
}
function getMessages() {
    $.get(window.location.href + 'messages', (data) => {
        data.forEach(addMessages);
    })
}
function sendMessage(message) {
    $.post(window.location.href + 'messages', message)
    location.reload();
    if (location.reload()) {
        $("#myForm").show();
    }
}