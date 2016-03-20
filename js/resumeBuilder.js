function appendMap() {
    // init map, when new map container is actually inserted in DOM
    jQuery.when(jQuery("#mapDiv").append(googleMap)).done(function() {
        initializeMap();
    });
}

// check containers if they have content, if yes, change display property
function displayElements() {
    if (document.getElementsByClassName('flex-item').length > 0) {
        document.getElementById('topContacts').style.display = 'flex';
    }
    if (document.getElementsByTagName('h1').length > 0) {
        document.getElementById('header').style.display = 'block';
    }
    if (document.getElementsByClassName('work-entry').length > 0) {
        document.getElementById('workExperience').style.display = 'block';
    }
    if (document.getElementsByClassName('project-entry').length > 0) {
        document.getElementById('projects').style.display = 'block';
    }
    if (document.getElementsByClassName('education-entry').length > 0) {
        document.getElementById('education').style.display = 'block';
    }
    if (document.getElementsByClassName('flex-item').length > 0) {
        document.getElementById('lets-connect').style.display = 'block';
    }
    if (document.getElementById('map') !== null) {
        document.getElementById('mapDiv').style.display = 'block';
    }
}