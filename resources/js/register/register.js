/*******************************************
* © 2017 Hairbrain inc.
* ---------------------
* Created: February 11th 2017
* Last Modified: March 21st 2017
* Author: Charlie Hay
*
* REGISTER PAGE JS FUNCTIONALITY.
/******************************************/

var Register = (function() {

//----------------------------------------------------------------

						 // CACHE

//---------------------------------------------------------------/

/*******************************************
 * Global Variables
*******************************************/
var registerForm   = $('.registerpage .registerform');
var firstname      = $('.registerpage .registerform .firstname');
var lastname       = $('.registerpage .registerform .lastname');
var email          = $('.registerpage .registerform .email');
var password       = $('.registerpage .registerform .password');
var phone          = $('.registerpage .registerform .phone');
var salon          = $('.registerpage .registerform .salon');
var avatar         = $('.registerpage .registerform .photoinput');
var keyword        = $('.registerpage .registerform .keyword');
var continueBtn    = $('.registerpage .registerform .next');
var backBtn        = $('.registerpage .registerform .back');
var registerBtn    = $('.registerpage .registerform .submit');
var sliderBox      = $('.registerpage .registerform .sliderbox');
var successModal   = $('.registerpage .successmodal');
var successLogin   = $('.registerpage .login');

//----------------------------------------------------------------

						 // TEMPLATES

//---------------------------------------------------------------/


//----------------------------------------------------------------

						 // LISTENERS

//---------------------------------------------------------------/

/*******************************************
 * On Click Register Button
*******************************************/
registerBtn.click( function() {
    registerFormAJAX();
});

/*******************************************
 * On Click Go To Login Page
*******************************************/
successLogin.click(function() {
    location.href = location.origin + '/login/';
})

continueBtn.click(function() {
    var distance = -(sliderBox.width()/2 - 20);
    sliderBox.animate({
        'left': distance
    }, 500, function() {
        $(window).scrollTop(0);
    });
});

backBtn.click(function() {
    sliderBox.animate({
        'left': 20
    }, 500, function() {
        $(window).scrollTop(0);
    });
});

//----------------------------------------------------------------

						 // VIEWS

//---------------------------------------------------------------/



//----------------------------------------------------------------

						 // LOGIC

//---------------------------------------------------------------/
/*******************************************
 * Initialize Google Places
*******************************************/
function initialize() {
    var input = document.getElementById('salon');
    var autocomplete = new google.maps.places.Autocomplete(input);
}

//----------------------------------------------------------------

						 // AJAX CALLS

//---------------------------------------------------------------/

/*******************************************
 * Login Form -> POST
*******************************************/
function registerFormAJAX() {

    var form = new FormData();
    form.append("avatar", PhotoUpload.getResizedImage());       
    form.append("firstname", firstname.val());
    form.append("lastname", lastname.val());
    form.append("phone", phone.val());
    form.append("password", password.val());        
    form.append("email", email.val());
    form.append("salon", salon.val());
    form.append("keyword", keyword.val());

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": apiurl + "user/register",
        "method": "POST",
        "headers": {
            "cache-control": "no-cache",
        },
        "processData": false,
        "contentType": false,
        "mimeType": "multipart/form-data",
        "data": form,
        "statusCode": {
            200: function(req, res) {
                successModal.modal('show');
            },
            400: function(req, res) {
                ErrorModal.populateMessage(req.responseText);
            },
            401: function(req, res) {
                ErrorModal.populateMessage(req.responseText);
            },
            500: function(req, res) {
                ErrorModal.populateMessage('Hairbrain isn\'t working right now. Please try again later.');
            }
        }
    }

    // AJAX SETTINGS
    $.ajax(settings)

}

//----------------------------------------------------------------

						 // MAIN

//---------------------------------------------------------------/

/*******************************************
 * Main Function
*******************************************/
    var Main = (function() {
        google.maps.event.addDomListener(window, 'load', initialize);
    })();

    return {

    }

})(); // END OF REGISTER.JS
