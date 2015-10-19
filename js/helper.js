/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<p class="subtitle">%data%</p>';

var HTMLmobile = '<p class="subtitle">%data%</p>';
var HTMLemail = '<a href="mailto:%data%" class="item envelope"><i class="fa fa-envelope"></i></a>';
var HTMLtwitter = '<a href="%data%" class="item twitter"><i class="fa fa-twitter-square"></i></a>';
var HTMLgithub = '<a href="%data%" class="item github"><i class="fa fa-github-square"></i></a>';
var HTMLgoogleplus = '<a href="%data%" class="item google-plus"><i class="fa fa-google-plus-square"></i></a>';
var HTMLlinkedin = '<a href="%data%" class="item linkedin"><i class="fa fa-linkedin-square"></i></a>';

var HTMLbioPic = '<img class="th mug" src="%data%">';
var HTMLwelcomeMsg = '<h3>Summary</h3><p class="welcome-message">%data%</p>';

// var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskillsStart = '<div id="skills-h3" class="medium-6 columns"><h3>Skills</h3><ul id="myskills" class="small-block-grid-2"></ul></div>';

var HTMLskills = '<li class="text-center"> <p class="skill-title">%data%</p> <div class="svg-container" data-percent="%data2%"> <svg width="150" height="150" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg"> <circle r="60" cx="75px" cy="75px" fill="transparent" stroke-dasharray="376.8" stroke-dashoffset="0"></circle> <circle class="bar" r="60" cx="75px" cy="75px" fill="transparent" stroke-dasharray="376.8" stroke-dashoffset="0" stroke-linecap="round"></circle> </svg> </div> </li>';

var HTMLtoolsStart = '<div id="mytools" class="medium-6 columns"><h3>Tools/Software</h3></div>';
var HTMLtools = '<div class="progress"><span class="meter" data-percent="%data2%"><p class="percent">%data%</p></span></div>';



var HTMLworkStart = '<h3>Work Experience</h3>';
var HTMLwork = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p>%data%</p>';

var HTMLprojectStart = '<h3 class="mt-40">Projects</h3>';
var HTMLproject = '<div class="medium-6 columns project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p>%data%</p>';
var HTMLprojectImageStart = '<div class="project-images"></div>';
var HTMLprojectImage = '<div><img src="%data%"></div>';

var HTMLschoolStart = '<h3>Education</h3>';
var HTMLschool = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="pull-right">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineStart = '<h3 class="mt-40">Online Classes</h3>';
var HTMLonline = '<div class="online-entry mb-20"></div>';
var HTMLonlineTitle = '<a href="%url%">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="pull-right">%data%</div>';

var googleMap = '<div id="map"></div>';


/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/

$(document).ready(function() {
    $('.scroll-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    // scroller plugin for project images
    $('.project-images').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        mobileFirst: true,
        arrows: false,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 1500
    });

});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  var x = loc.pageX,
      y = loc.pageY;
logClicks(x,y);

});

/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

    var locations;

    var mapOptions = {
        disableDefaultUI: true
    };

    /*
    For the map to be displayed, the googleMap var must be
    appended to #mapDiv in resumeBuilder.js.
    */
    map = new google.maps.Map(document.querySelector('#map'), mapOptions);

    function createContentString(title, description, city, imgSrc) {

       var output="";
       output += "<div class=\"clearfix info-window\">";
       output += "  <h2>" + title + "<\/h2>";
       output += "  <img src=\"" + imgSrc + "\" \/>";
       output += "  <h5>" + city + "<\/h5>";
       output += "  <p>" + description + "<\/p>";
       output += "<\/div>";
       return output;
    }

    /*
    locationFinder() returns an array of every location string from the JSONs
    written for bio, education, and work.
    */
    function locationFinder() {

        // initializes an empty array
        var locations = [];

        // adds the single location property from bio to the locations array
        locations.push(bio.contacts.location);

        // iterates through school locations and appends each location to
        // the locations array
        for (var school in education.schools) {
          locations.push(education.schools[school].location);
        }

        // iterates through work locations and appends each location to
        // the locations array
        for (var job in work.jobs) {
          locations.push(work.jobs[job].location);
        }

        return locations;
    }

    /*
    createMapMarker(placeData) reads Google Places search results to create map pins.
    placeData is the object returned from search results containing information
    about a single location.
    */
    function createMapMarker(placeData) {

        // The next lines save location data from the search result object to local variables
        var lat = placeData.geometry.location.lat();  // latitude from the place service
        var lon = placeData.geometry.location.lng();  // longitude from the place service
        var name = placeData.formatted_address;   // name of the place from the place service
        var bounds = window.mapBounds;            // current boundaries of the map window
        var id = placeData.place_id;  //get place_id for location
        // marker is an object with additional data about the pin for a single location
        var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            title: name,
            animation: google.maps.Animation.DROP
        });

        var pinTitle = mapInfo.locations[id].title,
            pinDescription = mapInfo.locations[id].description,
            pinCity = mapInfo.locations[id].city,
            pinImgSrc = mapInfo.locations[id].img;

        var pinContent = createContentString(pinTitle, pinDescription, pinCity, pinImgSrc);
        // infoWindows are the little helper windows that open when you click
        // or hover over a pin on a map. They usually contain more information
        // about a location.


        var infowindow = new google.maps.InfoWindow({
            content: pinContent
        });

        // hmmmm, I wonder what this is about...
        google.maps.event.addListener(marker, 'click', function() {
            // your code goes here!

            if (infowindow) {
                infowindow.close();
            }

            infowindow.open(map, marker);
        });

        // this is where the pin actually gets added to the map.
        // bounds.extend() takes in a map location object
        bounds.extend(new google.maps.LatLng(lat, lon));
        // fit the map to the new marker
        map.fitBounds(bounds);
        // center the map
        map.setCenter(bounds.getCenter());
    }

    /*
    callback(results, status) makes sure the search returned results for a location.
    If so, it creates a new map marker for that location.
    */
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
        createMapMarker(results[0]);
        }
    }

    /*
    pinPoster(locations) takes in the array of locations created by locationFinder()
    and fires off Google place searches for each location
    */
    function pinPoster(locations) {

        // creates a Google place search service object. PlacesService does the work of
        // actually searching for location data.
        var service = new google.maps.places.PlacesService(map);

        // Iterates through the array of locations, creates a search object for each location
        for (var place in locations) {

          // the search request object
          var request = {
            query: locations[place]
          };

          // Actually searches the Google Maps API for location data and runs the callback
          // function with the search results after each search.
          service.textSearch(request, callback);
        }
    }

    // Sets the boundaries of the map based on pin locations
    window.mapBounds = new google.maps.LatLngBounds();

    // locations is an array of location strings returned from locationFinder()
    locations = locationFinder();

    // pinPoster(locations) creates pins on the map for each location in
    // the locations array
    pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Line below commented because we are loading only after map container is in view, not on page load.
// window.addEventListener('load', initializeMap);
function showMap () {
    $el = $("#mapDiv");
    if($el.visible(true)){
        initializeMap();
    }
}

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
 // Make sure the map bounds get updated on page resize AND make sure map exists before updating
    if (map){
        map.fitBounds(mapBounds);
    }
});

$(window).load( function () {
    bio.showTools();
    bio.showSkills();
    showMap();

    $(window).scroll(function(event) {
        bio.showTools();
        bio.showSkills();
        // if map already showing don't load again
        if ($('#map').children().length === 0){
            showMap();
        }

        // scroll to top
        if ($(this).scrollTop() > 300) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }
    });
});
