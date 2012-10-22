$(document).ready(function () {
    window.setInterval("getStats()", 10000);
    getStats();
});

function getStats() {
    $.ajax({
        url: "http://richardbenson.co.uk/yams/ping-server.php",
        data: "host=" + $('#server-host').val() + "&port=" + $('#server-port').val(),
        dataType: "JSONP",
        success: function (data) {
            if (data) {
				$("#status-alert strong").html("Online");
				$("#status-alert span").html(" with "+data.players+" of "+data.max_players+" players in the world.");
				$("#status-alert").removeClass("alert-info").addClass("alert-success");
				
            } else {
				
				$("#status-alert strong").html("Offline");
				$("#status-alert").removeClass("alert-info").addClass("alert-danger");
            }
        }
    });
}