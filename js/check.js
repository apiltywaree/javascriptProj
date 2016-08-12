sll = new SinglyList();
$('#submit').on("click", function () {
    var sampleData = $('#myform').serialize();
    console.log(sampleData);
// var FirstName=$('#FirstName').val();
// var LastName=$('#LastName').val();
// var dob=$('#dob').val();
// var Email=$('#Email').val();
// var Phone=$('#Phone').val();
// var Address=$('#Address').val();
// var Country=$('#Country').val();
//alert(sampleData);
//var personDetail=JSON.stringify(sampleData);

    var personDetail = {
        FirstName: $('#FirstName').val(),
        LastName: $('#LastName').val(),
        dob: $('#dob').val(),
        Email: $('#Email').val(),
        Phone: $('#Phone').val(),
        Address: $('#Address').val(),
        Country: $('#Country').val()
    };
    console.log(personDetail);

    sll.add(personDetail);
    if (sll._length > 5) {
        $("#dialog").dialog();
        document.getElementById("dialog").innerHTML = "<p>The memory is full!!!</p>";
        $('#myModal').modal('hide');
        //sll._length=0;
        // sll.head=null;
    }
    console.log(sll);
});
$(document).ready(function () {
    $("#dob").datepicker();
});

function validateEmail(Email) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(Email)) {
        return true;
    }
    else {
        return false;
    }
}
function phonenumber(inputtxt) {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (inputtxt.match(phoneno)) {
        return true;
    }
    else {
        return false;
    }
}
function myFunction() {
    document.getElementById("fnameError").innerHTML = "";
    document.getElementById("lnameError").innerHTML = "";
    document.getElementById("dobError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("addressError").innerHTML = "";
    document.getElementById("countryError").innerHTML = "";

}
function thankYou() {
    $('submit').onclick(window.location.href = 'thankyou.html');

}
function validate() {
    var FirstName = $('#FirstName').val();
    var LastName = $('#LastName').val();
    var dob = $('#dob').val();
    var Email = $('#Email').val();
    var Phone = $('#Phone').val();
    var Address = $('#Address').val();
    var Country = $('#Country').val();
    if (FirstName == "" || LastName == "" || $.trim(Email).length == 0 || !(validateEmail(Email)) || !(phonenumber(Phone)) || Address == "" || dob == "" || Country == "none") {
        if (FirstName == "") {
            document.getElementById("fnameError").innerHTML = "Your First name is empty";
            //$("#submit").fadeOut();
        }
        if (LastName == "") {
            document.getElementById("lnameError").innerHTML = "Your Last name is empty";
            //sll._length=sll._length-1;
            //sll.next=this.head;
        }
        if ($.trim(Email).length == 0) {
            document.getElementById("emailError").innerHTML = "Please enter valid email address";
        }
        if (!(validateEmail(Email))) {
            document.getElementById("emailError").innerHTML = "Email is invalid";
        }
        if (!(phonenumber(Phone))) {
            document.getElementById("phoneError").innerHTML = "Please enter valid phone number";
        }
        if (Address == "") {
            document.getElementById("addressError").innerHTML = "Your address is empty";
        }
        if (dob == "") {
            document.getElementById("dobError").innerHTML = "Your date of birth is empty";
        }
        if (Country == "none") {
            document.getElementById("countryError").innerHTML = "Select one country";
        }
    }
    else {
        thankYou();
    }
}
