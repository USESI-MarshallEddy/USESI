// window.location.href="http://alpha.usesi.com";

// Initialize app
var myApp = new Framework7();

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

/* Variable for the extended URLs */ 
var BaseUrl = 'http://alpha.usesi.com/';
var GetVars = '?mobileapp=1';
// var GetVars = '';
var Help = 'help-page/';
var QuickOrder = 'quickorder/';
var Search = 'hawksearch/keyword/index/?keyword=';
var CategoryShop = '';
var AccountLogin = 'customer/account/login/referer/aHR0cDovL2FscGhhLnVzZXNpLmNvbS9jdXN0b21lci9hY2NvdW50L2luZGV4Lw,,/';
var YourCatalog  = 'yourcatalog/';
var YourLists = 'wishlist/';
var YourOrders = 'sales/order/history/';
var AddressBook = 'customer/address/';
var Account = 'customer/account';
var Branch = '#';
var Cart = 'checkout/cart/';

// Account information:
// These variables are placeholders for when I can obtain the actual account information to set 
// the variables = to.
var accName = 'Marshall Eddy';
var accAddress = '1807 West Boise Ave';
var accCSZ = 'here is my CSZ';
var accountInfo = "Account \n" + accName + "\n" + accAddress + "\n" + accCSZ + "\n";

// Placeholder for Current Branch information
var accCurrentBranch = 'USESI-myBranch';
var CurrentBranch = "Branch \n" + accCurrentBranch + "\n \n \n \n";

var mainIFrame = $$('#mainIFrame');

// var mainIFrame = document.getElementById('mainIFrame');

mainIFrame.on('load', function() {
    mainIFrame[0].contentWindow.postMessage('mobileapp', '*');
});

// mainIFrame.on('load', function(){
//       getIFrameContent('mainIFrame');
// });

// Change the inner text of the Account tab under myAccount
document.getElementById("#accountHTML").innerText = accountInfo;

// Change the inner text of the Branch tab under myAccount
document.getElementById("#branchHTML").innerText = CurrentBranch;


/**
 * Script for when clicking on the Logo it brings you
 * back to the Home Page.
 */
$$('.link').on('click', function() {
    if($$(this).attr('href') == '#HomePageLogo') {
        $$.get(BaseUrl + GetVars, {}, function(data) {
            $$('.view-main').html(data);
        });
    }
})

// $$(document).on('deviceready', function() {
//     $$.get(BaseUrl + GetVars, {}, function(data) {
//      $$('.view-main').html(data);
//     });
// });

/**
 * This is used for the two side panels for 'Menu' and 'Account'
 * This is the logic for when something is clicked it said menus.
 */
$$('.item-link').on('click', function() {
    myApp.closePanel();
    // e.preventDefault();
    if($$(this).attr('href') == '#Help') {
        document.getElementById('mainIFrame').src = BaseUrl + Help + GetVars;
        // $$('mainIFrame').attr('src', BaseUrl + Help + GetVars);
    } else if($$(this).attr('href') == '#QuickOrder') {
         document.getElementById('mainIFrame').src = BaseUrl + QuickOrder + GetVars;
        //  $$('mainIFrame').attr('src', BaseUrl + QuickOrder + GetVars); 
    } else if($$(this).attr('href') == '#ScanABarCode') {
        // $$.get(BaseUrl + Help + GetVars, {}, function(data) {
        //     $$('.view-main').html(data);
        // });
    } else if($$(this).attr('href') == '#ShopByCategory') {
        document.getElementById('mainIFrame').src = BaseUrl + CategoryShop + GetVars;
        // $$('mainIFrame').attr('src', BaseUrl + CategoryShop + GetVars);
    } else if($$(this).attr('href') == '#yourAccount') {
        document.getElementById('mainIFrame').src = BaseUrl + AccountLogin + GetVars;
        // $$('mainIFrame').attr('src', BaseUrl + AccountLogin + GetVars);
    } else if($$(this).attr('href') == '#YourCatalog') {
        document.getElementById('mainIFrame').src = BaseUrl + YourCatalog + GetVars;
        // $$('mainIFrame').attr('src', BaseUrl + YourCatalog + GetVars);
    } else if($$(this).attr('href') == '#YourLists') {
        document.getElementById('mainIFrame').src = BaseUrl + YourLists + GetVars;
        // $$('mainIFrame').attr('src', BaseUrl + YourLists + GetVars);
    } else if($$(this).attr('href') == '#YourOrders') {
        document.getElementById('mainIFrame').src = BaseUrl + YourOrders + GetVars;
        // $$('mainIFrame').attr('src', BaseUrl + YourOrders + GetVars);
    } else if($$(this).attr('href') == '#AddressBook') {
        document.getElementById('mainIFrame').src = BaseUrl + AddressBook + GetVars;
        // $$('mainIFrame').attr('src', BaseUrl + AddressBook + GetVars);
    } else if($$(this).attr('href') == '#Account') {
        document.getElementById('mainIFrame').src = BaseUrl + Account + GetVars;
        // $$('mainIFrame').attr('src', BaseUrl + Account + GetVars);
    } else if($$(this).attr('href') == '#Branch') {
        document.getElementById('mainIFrame').src = BaseUrl + Branch + GetVars;
        // $$('mainIFrame').attr('src', BaseUrl + Branch + GetVars);
    } 
})

/* Search Modal */
$$('.prompt-title-ok-button').on('click', function () {
    var input = "";
    if($$(this).attr('href') == '#Search'){
        myApp.modal({
            title: 'Search: ',
            text: 'Type in what you want to search, or try using voice recognition by tapping the microphone to start recording.',
            afterText: '<input type="text" id="#searchText" class="modal-text-input" placeholder="Speak" value="default">',
            close: false,
            buttons: [
            {
                text: 'Cancel',
                onClick: function() { }
            },
            {
                text: 'Search',
                onClick: function(value) {
                    value = document.getElementById("#searchText").value
                    // $$('mainIFrame').attr('src', BaseUrl + Search + value + "/" + GetVars);
                    document.getElementById('mainIFrame').src = BaseUrl + Search + value;
                    // myApp.alert('Searching for: ' + value, ['Product Search']);
                }
            },
            {
                text: '<i class="fa fa-microphone"></i>',
                id: '#mic',
                close: false,
                onClick: function() {
                    startDictation();
                    text = '<i class="fa fa-microphone-slash"></i>'
                },
            }, ]

        });
    }
});
 
/* Modal for accessing camera to take a picture, or photo library */
$$('.open-3-modal-photo').on('click', function() {
    myApp.closePanel();
    if($$(this).attr('href') == '#SubmitAPhoto'){
        myApp.modal({
            title:  'Submit a Photo',
            text:   'Submit a photo to Customer Service',
            buttons: [
            {
                text: 'Cancel',
                onClick: function() { }
            },
            {
                    text: 'Camera', id: '#Camera',
                    onClick: function() {
                       var options = accessCamera('camera');
                        navigator.camera.getPicture(cameraSuccess, cameraError, options);
                    }
                },
                {
                    text: 'Photos', id: '#PhotoGal',
                    onClick: function() {
                       var options = accessCamera('photoLibrary');
                        navigator.camera.getPicture(cameraSuccess, cameraError, options);
                    }
                },
            ]
        })
    }
});

$$('')

/**
 * For clicking on Tool Bar icons icon.
 * Also has logic for icon color change after click.
 */
$$('.tab-link').on('click', function(e) {
    if($$(this).attr('href') == '#cart') {
        iconColorChange('i#mobile-badge.fa.fa-shopping-cart');
        // $$.get(BaseUrl + Cart + GetVars, {}, function(data) {
        //     $$('.view-main').html(data);
        // });
        document.getElementById('mainIFrame').src = BaseUrl + Cart + GetVars;
    $$('i').removeClass('color-icon-after');
    $$('i').addClass('color-icon-before');
    } else if($$(this).attr('href') == '#Menu') {
        iconColorChange('i#Menu.fa.fa-bars');
    } else if($$(this).attr('href') == '#yourAccount') {
        iconColorChange('i#Account.fa.fa-building');
    }
})

/**
 * Helper function for chaning the color of an icon once it is clicked ('touched')
 */
function iconColorChange(atString) {
    $$(atString).removeClass('color-icon-before');
    $$(atString).addClass('color-icon-after');
};
// ^^^^^ //
$$('.panel').on('close', function () {
    $$('i').removeClass('color-icon-after');
    $$('i').addClass('color-icon-before');
});



/*************************/
/*                       */
/*    Camera/Photos!!!   */
/*                       */
/*************************/

/* This is for when the camera successfully obtains an image. It will display
   a modal with the image for confirmation and to write a message for submission. */
function cameraSuccess(imgData) {
    myApp.modal({
    title: 'Submit a photo',
    // text: 'Check and make sure this is the correct image you want to submit. Then type a message you want to go along with this image (250 Characters):',
    afterText:  //'<form action="">' +
                    "<center>" + '<img height="150" style="display:block;verticle-align:middle;"'
                    + 'id="img_ph" src="" alt="FAILURE" />' + "</center>" +
                    '<input type="text" name="message" placeholder="Description" class="myText" maxlength="250"><br>',
                    // '<input type="submit" value "Send">' +
                //'</form>',
    buttons: [
        {
            text: 'Cancel',
            onClick: function() { }
        },
        {
            text: 'Submit', id: '#submitImg',
            onClick: function() {

            }
        }
    ],
    
})
// Changes the img 'img_ph' src tag to the image selected so that it is displayed 
// in the modal for submission.
 var image = document.getElementById('img_ph');
  img_ph.style.display = 'block';
  image.src = "data:image/jpeg;base64," + imgData;
}


// Error Message 
function cameraError(error) {
    alert('Failed because: ' + error);
}


/* Essentially a getter for the options variable of the camera. */
/* These options are the exact same except for the PictureSourceType*/
/* being either PHOTOLIBRARY or CAMERA. */
function accessCamera(imgSource) {
    if (imgSource == 'photoLibrary') {
        var options = {
            // quality: 20, 
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,     // 'PHOTOLIBRARY'
            encodingType: Camera.EncodingType.JPEG,
            mediaType: Camera.MediaType.PICTURE,
            // allowEdit: true,
            correctOrientation: true    // Corrects Android issue
        };
    } else if (imgSource == 'camera') {
        var options = {
            // quality: 20, 
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,     // 'CAMERA'
            encodingType: Camera.EncodingType.JPEG,
            mediaType: Camera.MediaType.PICTURE,
            // allowEdit: true,
            correctOrientation: true    // Corrects Android issue
        };
    }
    return options;
}



/*************************/
/*                       */
/* Speech Recognition!!! */
/*                       */
/*************************/

/**
 * function to use Google Chrome's webkitSpeechRecognition
 * This only works when using in Chrome's browser as of right now!
 * 
 * To do: Add speech recognition functionality for mobile phones
 */
function startDictation() {
    if (window.hasOwnProperty('webkitSpeechRecognition')) {
        var recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = "en-US";
        recognition.start();
        recognition.onresult = function(e) {
            document.getElementById('#searchText').value = e.results[0][0].transcript;
            recognition.stop();
            document.getElementById('#mic').value += document.getElementById("#searchText").value + " ";
        };
        recognition.onerror = function(e) {
            recognition.stop();
        }
    }
}