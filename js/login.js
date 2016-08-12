/**
 * Created by apiltiwari on 7/18/16.
 */
var blobObject = null;

$('#signsubmit').on("click", function (e) {
    e.preventDefault();
    if ($("#inputEmail").val() == "" || $("#inputPassword").val() == "") {
        document.getElementById("inputError").innerHTML = "username and password cannot be empty<br/>";
    }
    else{
        $('#signsubmit').onclick(window.location.href = 'modal.html');
        $('#user').html($("#inputEmail").val());
        $('#pass').html($("#inputPassword").val());
    }
    var txtData = "username: " + $("#inputEmail").val() + "  " +
        "password: " + ($("#inputPassword").val());
    alert(txtData);
    mycheckFunction(txtData);
});

function mycheckFunction(txtData) {
    alert("inside myfunction");
    alert(txtData);
    createDownloadLink("#export", txtData, "apil.txt");
}
function createDownloadLink(anchorSelector, str, fileName) {

    if (window.navigator.msSaveOrOpenBlob) {
        var fileData = [str];
        blobObject = new Blob(fileData);
        $(anchorSelector).click(function () {
            window.navigator.msSaveOrOpenBlob(blobObject, fileName);
        });
    } else {
        var url = "data:text/plain;charset=utf-8," + encodeURIComponent(str);
        $(anchorSelector).attr("href", url);
    }
}