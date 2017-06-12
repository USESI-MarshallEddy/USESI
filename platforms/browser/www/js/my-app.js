// window.location.href="http://alpha.usesi.com";

// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

/* Variable for the extended URLs */ 
var BaseUrl = 'http://alpha.usesi.com/';
// var BaseUrl = '';
var GetVars = '?mobileapp=1';
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
var Branch = '';
var Cart = 'checkout/cart/';

var mainFrame = $$('#mainFrame');

mainFrame.on('load', function() {
    mainFrame[0].contentWindow.postMessage('mobileapp', '*');
});

mainFrame.on('load', function(){
      getIFrameContent('#mainFrame');
});



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
    
    if($$(this).attr('href') == '#Help') {
        $$('#mainFrame').attr('src', BaseUrl + Help + GetVars);
    } else if($$(this).attr('href') == '#QuickOrder') {
         $$('#mainFrame').attr('src', BaseUrl + QuickOrder + GetVars); 
    } else if($$(this).attr('href') == '#ScanABarCode') {
        // $$.get(BaseUrl + Help + GetVars, {}, function(data) {
        //     $$('.view-main').html(data);
        // });
    } else if($$(this).attr('href') == '#ShopByCategory') {
        $$('#mainFrame').attr('src', BaseUrl + CategoryShop + GetVars);
    } else if($$(this).attr('href') == '#yourAccount') {
        $$('#mainFrame').attr('src', BaseUrl + AccountLogin + GetVars);
    } else if($$(this).attr('href') == '#YourCatalog') {
        $$('#mainFrame').attr('src', BaseUrl + YourCatalog + GetVars);
    } else if($$(this).attr('href') == '#YourLists') {
        $$('#mainFrame').attr('src', BaseUrl + YourLists + GetVars);
    } else if($$(this).attr('href') == '#YourOrders') {
        $$('#mainFrame').attr('src', BaseUrl + YourOrders + GetVars);
    } else if($$(this).attr('href') == '#AddressBook') {
        $$('#mainFrame').attr('src', BaseUrl + AddressBook + GetVars);
    } else if($$(this).attr('href') == '#Account') {
        $$('#mainFrame').attr('src', BaseUrl + Account + GetVars);
    } else if($$(this).attr('href') == '#Branch') {
        $$('#mainFrame').attr('src', BaseUrl + Branch + GetVars);
    } 
})

/* Search Modal */
$$('.prompt-title-ok-button').on('click', function () {
    // myApp.closePanel();
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
                    $$('#mainFrame').attr('src', BaseUrl + Search + value + "/" + GetVars);
                    myApp.alert('Searching for: ' + value, ['Product Search']);
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
        $$.get(BaseUrl + Cart + GetVars, {}, function(data) {
            $$('.view-main').html(data);
        });
    $$('i').removeClass('color-icon-after');
    $$('i').addClass('color-icon-before');
    } else if($$(this).attr('href') == '#Menu') {
        iconColorChange('i#Menu.fa.fa-bars');
    } else if($$(this).attr('href') == '#yourAccount') {
        iconColorChange('i#Account.fa.fa-building');
    }
})

/**
 * Helper function for cleaner looking code
 */
function iconColorChange(atString) {
    $$(atString).removeClass('color-icon-before');
    $$(atString).addClass('color-icon-after');
};

$$('.panel').on('close', function () {
    $$('i').removeClass('color-icon-after');
    $$('i').addClass('color-icon-before');
});



/*************************/
/*                       */
/* Camera/Photos!!!      */
/*                       */
/*************************/

function displayImg(imgData) {
    document.getElementById('img_ph').src = imgData;
}

// accessCamera();
function cameraSuccess(imgData) {
  
 

    myApp.modal({
    title: 'Submit a photo',
    text: 'Check and make sure this is the correct image you want to submit. Then type a message you want to go along with this image (250 Characters):',
    afterText:  //'<form action="">' +
                    '<img style="display:none;width:60px;height:60px;" id="img_ph" src="" alt="FAILURE" /> <br><br>' +
                    '<input type="text" name="message" placeholder="Description" class="myText" maxlength="250"> <br><br>',
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
 var image = document.getElementById('img_ph');

  img_ph.style.display = 'block';

  image.src = "data:image/jpeg;base64," + imgData;
}

function cameraError(error) {
    alert('Failed because: ' + error);
}

// function 

function accessCamera(imgSource) {
    if (imgSource == 'photoLibrary') {
        var options = {
            quality: 20, 
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,     // 'PHOTOLIBRARY'
            encodingType: Camera.EncodingType.JPEG,
            mediaType: Camera.MediaType.PICTURE,
            allowEdit: true,
            correctOrientation: true    // Corrects Android issue
        };
    } else if (imgSource == 'camera') {
        var options = {
            quality: 20, 
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,     // 'CAMERA'
            encodingType: Camera.EncodingType.JPEG,
            mediaType: Camera.MediaType.PICTURE,
            allowEdit: true,
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
            // document.getElementById('#mic').value += document.getElementById("#searchText").value + " ";
        };
        recognition.onerror = function(e) {
            recognition.stop();
        }
    }
}