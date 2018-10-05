var config = {
    apiKey: "AIzaSyDP2nPmiUWaVl2Nn3zwWHUhwYsUNRm-WtI",
    authDomain: "bumbleb-182122.firebaseapp.com",
    databaseURL: "https://bumbleb-182122-19ead.firebaseio.com",
    projectId: "bumbleb-182122",
    storageBucket: "bumbleb-182122.appspot.com",
    messagingSenderId: "1074760668629"
};
firebase.initializeApp(config);

var messagesRef = firebase.database().ref('messages');


document.getElementById('myForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var fname = getInputVal('fname');
    var lname = getInputVal('lname');
    var email = getInputVal('email');
    var company = getInputVal('company');
    var address1 = getInputVal('address1');
    var address2 = getInputVal('address2');
    var city = getInputVal('city');
    var state = getInputVal('state');
    var zip = getInputVal('zip');
    var timeframe = getInputVal('timeframe');

    saveMessage(fname, lname, email, company, address1, address2, city, state, zip, timeframe);

    document.querySelector('.alert').style.display = 'block';

    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    }, 3000);
}

function getInputVal(id) {
    return document.getElementById(id).value;
}

function saveMessage(fname, lname, email, company, address1, address2, city, state, zip, timeframe) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        fname: fname,
        lname: lname,
        email: email,
        company: company,
        address1: address1,
        address2: address2,
        city: city,
        state: state,
        zip: zip,
        timeframe: timeframe
    });
}

