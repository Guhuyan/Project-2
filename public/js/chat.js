var socket = io();

socket.on("message", (data) => {
    console.log("Message")
    console.log(data)
    addMessages(data);
    // socket.emit('welcome', { hello: 'world' });
});
$("#send").on("click", function () {
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
function addMessages(data) {
    $("#messages").prepend(`<p> ${data.message} </p>`)
}
function getMessages() {
    $.get(window.location.href + 'messages', (data) => {
        data.forEach(addMessages);
    })
}
function sendMessage(message) {
    $.post(window.location.href + 'messages', message)
    // location.reload();
}