// Custom animations with wow and jquery
(function ($) {
    // Init Wow
    wow = new WOW( {
        animateClass: 'animated',
        offset:       100
    });
    wow.init();
    
    // Navigation scrolls
    $('.navbar-nav li a').bind('click', function(event) {
        $('.navbar-nav li').removeClass('active');
        $(this).closest('li').addClass('active');
        var $anchor = $(this);
        var nav = $($anchor.attr('href'));
        if (nav.length) {
        $('html, body').stop().animate({				
            scrollTop: $($anchor.attr('href')).offset().top				
        }, 1500, 'easeInOutExpo');
        
        event.preventDefault();
        }
    });
    
    
    //jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($(".navbar-default").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
        
    });
    
})(jQuery);

// Custom Map with flag markers
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: {lat: 34.2411639, lng: -118.6015589}
    });

    var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    var beachMarker = new google.maps.Marker({
      position: {lat: 34.2411639, lng: -118.6015589},
      map: map,
      icon: image
    });
}

// CAD File Upload Handler
// 
//
// Add Click Listener to CAD File Upload Button 
//document.getElementById("CADbtn").addEventListener("click", function() { 
//    document.getElementById("file").click();
//});

var storageRef = firebase.storage().ref();
var database = firebase.database();

function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    var file = evt.target.files[0];

    var metadata = {
        'contentType': file.type
    };

    var user = firebase.auth().currentUser;
    var name, email, uid; // collect name, email, and user ID;

    if (user != null) {
        name = user.displayName;
        email = user.email;
        //emailVerified = user.emailVerified;
        //uid = user.uid;  
        // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
    }

    // Write user info to database
    function writeUserData() {
        firebase.database().ref('users/' + name).set({
        email: email
        });
    }

    // If user uploads valid CAD file, upload to path CAD/name/file.name
    if (isCAD(file.name)) {
    storageRef.child('CAD/' + name + '/' + file.name).put(file, metadata).then(function(snapshot) {
        console.log('Uploaded', snapshot.totalBytes, 'bytes.');
        console.log(snapshot.metadata);
        alert("Upload successful!")
    }).catch(function(error) {
        // [START onfailure]
        alert("Upload failed  (╯°□°）╯︵ ┻━┻")
        // [END onfailure]
    });
    // [END oncomplete]
    }
    else {
        alert("Upload failed  (╯°□°）╯︵ ┻━┻")
    }
}

window.onload = function() {
    document.getElementById('uploadfile').addEventListener('change', handleFileSelect, false);
    document.getElementById('uploadfile').disabled = false;

    auth.onAuthStateChanged(function(user) {
        if (user) {
        console.log('Anonymous user signed-in.', user);
        document.getElementById('uploadfile').disabled = false;
        } else {
        console.log('There was no anonymous session. Creating a new anonymous user.');
        // Sign the user in anonymously since accessing Storage requires the user to be authorized.
        auth.signInAnonymously();
        }
    });
}

// Get CAD File Extension
// 
// Get Extension
function getExtension(filename) {
    var parts = filename.split('.');
    return parts[parts.length - 1];
}

// Check that extension is Valid CAD file type
function isCAD(filename) {
    var ext = getExtension(filename);
    switch (ext.toLowerCase()) {
        case 'step':
        case 'stp':
        case 'ste':
        case 'iges':
        case 'ige':
        case 'igs':
        case 'stl':
        case 'catpart':
        case 'dxf':
        case 'dwg':
        case 'f3d':
        case 'prt':
        case 'obj':
        case 'sldprt':
        case 'skp':
        //etc
            return true;
    }
    return false;
}



