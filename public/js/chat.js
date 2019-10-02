$("#send").on("click", function () {
    console.log($("#liveChatMessage").val())
    event.preventDefault();
    sendMessage({ message: $("#liveChatMessage").val() });
    $("#messageForm").trigger("reset");
})
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