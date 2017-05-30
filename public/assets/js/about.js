$(document).ready(function() {

	console.log("JS file is being read");

$('#vaModal').click(function(e) {
	console.log("Inside VA function");
    $('#vaModalContent').modal();
    return false;
	});

$('#waModal').click(function(e) {
	console.log("Inside WA function");
    $('#waModalContent').modal();
    return false;
	});

$('#caModal').click(function(e) {
	console.log("Inside CA function");
    $('#caModalContent').modal();
    return false;
	});

$('#ncModal').click(function(e) {
	console.log("Inside NC function");
    $('#ncModalContent').modal();
    return false;
	});

$('#ukModal').click(function(e) {
	console.log("Inside UK function");
    $('#ukModalContent').modal();
    return false;
	});




});