/*******************************************
* © 2017 Hairbrain inc.
* ---------------------
* Created: February 11th 2017
* Last Modified: March 21st 2017
* Author: Charlie Hay
*
* CLIENT PROFILES JS FUNCTIONALITY.
/******************************************/

var ClientProfile = (function() {

//----------------------------------------------------------------

						 // CACHE

//---------------------------------------------------------------/

/*******************************************
 * Global Variables
*******************************************/
var clientProfile = $('.clientprofile'),
    avatar        = $('.avatar'),
    firstname     = $('.clientprofile .firstname'),
    lastname      = $('.clientprofile .lastname'),
    phone         = $('.clientprofile .phone'),
    photofront    = $('.clientprofile .photofront'),
    photoleft     = $('.clientprofile .photoleft'),
    photoback     = $('.clientprofile .photoback'),
    photoright    = $('.clientprofile .photoright'),
    notes         = $('.clientprofile .notes');
    deleteModal   = $('.deleteModal');

//----------------------------------------------------------------

						 // TEMPLATES

//---------------------------------------------------------------/

//----------------------------------------------------------------

						 // LISTENERS

//---------------------------------------------------------------/
$('.deleteclient').click(function() {
    showDeleteConfirmation();
});

$('.confirmDelete').click(function() {
    deleteClient();
});

//----------------------------------------------------------------

						 // VIEWS

//---------------------------------------------------------------/
function populateProfile(client) {
    clientProfile.attr('id', client._id);
    avatar.attr('src', apiurl+'photo/'+client.userid+'/'+client._id+'/avatar.jpg');
    firstname.text(client.firstname);
    lastname.text(client.lastname);
    phone.html('<a href="tel:' + client.phone + '">' + client.phone + '</a>');
    photofront.attr('src', apiurl+'photo/'+client.userid+'/'+client._id+'/photofront.jpg');
    photoleft.attr('src', apiurl+'photo/'+client.userid+'/'+client._id+'/photoleft.jpg');
    photoback.attr('src', apiurl+'photo/'+client.userid+'/'+client._id+'/photoback.jpg');
    photoright.attr('src', apiurl+'photo/'+client.userid+'/'+client._id+'/photoright.jpg');
    notes.val(client.notes);
}

function showDeleteConfirmation() {
    deleteModal.modal('show');
}

//----------------------------------------------------------------

						 // LOGIC

//---------------------------------------------------------------/
function deleteClient() {
    var clientid = clientProfile.attr('id');

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": apiurl + "client/delete/" + userid + '/' + clientid,
        "method": "DELETE",
        "headers": {
            "cache-control": "no-cache",
            "Authorization": "Bearer " + jwt
        },
        "processData": false,
        "contentType": false,
    }

    $.ajax(settings)
    .done(function (req, res) {
        if(res === "success") { 
            ClientList.clientListAJAX();
            Nav.slideClientProfile();
        }
    });
}

//----------------------------------------------------------------

						 // AJAX CALLS

//---------------------------------------------------------------/



//----------------------------------------------------------------

						 // MAIN

//---------------------------------------------------------------/

/*******************************************
 * Main Function
*******************************************/


return {
    populateProfile: populateProfile
}

})(); // END OF LOGIN.JS
