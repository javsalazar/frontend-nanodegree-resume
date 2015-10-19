 'use strict';
    // cache jQuery objects
var $main = $("#main"),
    $header = $("#header"),
    $welcome = $("#welcome"),
    $skillsWrapper = $("#skills-wrapper"),
    $toolsWrapper = $("#tools-wrapper"),
    $contacts = $("#topContacts, #footerContacts"),
    bio = {
        name : 'Javier Salazar',
        role : 'Front-End Developer',
        contacts: {
            mobile : '760.123.0000',
            email : 'jav@jav.com',
            twitter : 'https://twitter.com/xjav',
            github : 'https://github.com/javsalazar',
            linkedin : 'https://www.linkedin.com/in/xjavs',
            googleplus : 'https://plus.google.com/u/0/108384118185078160562/about/p/pub',
            location : 'Oceanside, CA',
        },
        welcomeMessage : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, aliquam quas, eum ratione mollitia consequuntur explicabo quia maxime enim repellendus, ad itaque ab voluptatem obcaecati dolorum repudiandae similique. Eius, temporibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam fugit, est deserunt corporis ea assumenda obcaecati reprehenderit pariatur a quisquam repudiandae, id quod fugiat ab natus adipisci! Veritatis, neque, aperiam.',
        skills : [
            {
                name : 'Javascript',
                proficient: '95'
            },
            {
                name: 'HTML5',
                proficient: '90'
            },
            {
                name: 'CSS3',
                proficient: '85'
            },
            {
                name: 'Optimization',
                proficient: '80'
            }
        ],
        tools: [
            {
                name: 'GIT',
                proficient: '80'
            },
            {
                name: 'Chrome Developer Tools',
                proficient: '85'
            },
            {
                name: 'Grunt',
                proficient: '75'
            },
            {
                name: 'Zurb Foundation',
                proficient: '95'
            },
            {
                name: 'Webmaster Tools',
                proficient: '85'
            },
            {
                name: 'Sublime Text',
                proficient: '90'
            }
        ],
        biopic: 'images/me.jpg',
        display : function () {
            var formattedName = HTMLheaderName.replace("%data%", bio.name),
                formattedRole = HTMLheaderRole.replace("%data%", bio.role),
                formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile),
                formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin),
                formattedEmail = HTMLemail.replace("%data%", bio.contacts.email),
                formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter),
                formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github),
                formattedGoogleplus = HTMLgoogleplus.replace("%data%", bio.contacts.googleplus),
                formattedPicture = HTMLbioPic.replace("%data%", bio.biopic),
                formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

            // HEADER
            $header.prepend(formattedPicture + formattedName + formattedRole + formattedMobile );

            // WELCOME
            $welcome.append(formattedWelcome);

            // CONTACTS
            $contacts.append(formattedEmail + formattedTwitter + formattedGithub + formattedLinkedin + formattedGoogleplus);

            // SKILLS
            if (bio.skills.length > 0) {
                $skillsWrapper.append(HTMLskillsStart);

                // couldn not cache #myskills before since element didn't exist prior to line above
                var $myskills = $("#myskills");

                for (var index in bio.skills){
                    // replacing to variable %data% and %data2%
                    var formattedSkills = HTMLskills.replace("%data%", bio.skills[index].name).replace("%data2%", bio.skills[index].proficient);
                    $myskills.append(formattedSkills);
                }
            }

            // TOOLS
            if (bio.tools.length > 0) {
                $toolsWrapper.append(HTMLtoolsStart);

                // couldn not cache #mytools before since element didn't exist prior to line above
                var $mytools = $("#mytools");

                for (var index in bio.tools){
                    // replacing to variable %data% and %data2%
                    var formattedTools = HTMLtools.replace("%data%", bio.tools[index].name).replace("%data2%", bio.tools[index].proficient);
                    $mytools.append(formattedTools);
                }
            }
        },
        showTools: function () {
            $('.meter').each(function(i, el){
                var $el = $(el);
                if ($el.visible(true)) {
                    var width = $el.data("percent") + "%",
                        duration = parseInt( (i+1) * 500 );

                    $el.css({"transition-duration" : duration + "ms","width" : width}).addClass('animated');
                }
            });
        },
        showSkills: function () {
            $('.svg-container').each(function(i, el){
                var $el = $(el);
                if ($el.visible(true)) {
                    var pct = $el.data("percent"),
                        $circle = $el.find('.bar'),
                        r = $circle.attr('r'),  //get radius of circle
                        c = Math.PI*(r*2),  // calculate circumference
                        toMove = ((100-pct)/100) * c ;  //percentage of circ to move

                    $circle.css({"stroke-dashoffset" : toMove });
                    $el.siblings().addClass( "fadeInUp animated");
                }
            });
        }
    },
    education = {
        schools: [
            {
                name: 'UCSB',
                location: 'Santa Barbara, CA',
                degree: 'Bachelors of Science',
                majors: 'Electrical Engineering',
                dates: '1995',
                url: 'http://www.ucsb.edu/'
            }
        ],
        onlineCourses: [
            {
                title: 'Intro to HTML and CSS',
                school: 'Udacity',
                dates: '2015',
                url: 'https://www.udacity.com/course/intro-to-html-and-css--ud304'
            },
            {
                title: 'Javascript Basics',
                school: 'Udacity',
                dates: '2015',
                url: 'https://www.udacity.com/course/javascript-basics--ud804'
            },
            {
                title: 'How to Use Git and Github',
                school: 'Udacity',
                dates: '2015',
                url: 'https://www.udacity.com/course/how-to-use-git-and-github--ud775'
            },
            {
                title: 'Responsive Web Design Fundamentals',
                school: 'Udacity',
                dates: '2015',
                url: 'https://www.udacity.com/course/responsive-web-design-fundamentals--ud893'
            },
            {
                title: 'Responsive Images',
                school: 'Udacity',
                dates: '2015',
                url: 'https://www.udacity.com/course/responsive-images--ud882'
            }
        ],
        display: function () {
            var $education = $("#education"); //has to be ouside if statements because used for both types

            $education.append(HTMLschoolStart);

            // Display Schools
            if (education.schools.length > 0){
                for( var index in education.schools) {
                    var formattedName = HTMLschoolName.replace("%data%",education.schools[index].name),
                        formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[index].degree),
                        formattedDates = HTMLschoolDates.replace("%data%",education.schools[index].dates),
                        formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[index].location),
                        formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[index].majors);

                    $education.append(HTMLschool);
                    $(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
                }
            }

            // Display Online Classes
            if (education.onlineCourses.length > 0){
                $education.append(HTMLonlineStart);
                for(index in education.onlineCourses){
                    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[index].title).replace("%url%",education.onlineCourses[index].url),
                        formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[index].school),
                        formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[index].dates);

                    $education.append(HTMLonline);
                    $(".online-entry:last").append(formattedTitle + formattedSchool + formattedDates);
                }
            }
        }
    },
    work = {
        jobs: [
            {
                employer: 'San Diego Union Tribune',
                title: 'Front-End Developer',
                location: 'San Diego, CA',
                dates: '2012-2015',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam voluptate aliquid, illum officiis tenetur, debitis assumenda voluptatem atque amet, totam, laudantium sunt delectus natus reprehenderit dolores ratione voluptatibus nostrum inventore?'
            },
            {
                employer: 'North County Times',
                title: 'Lead Web Developer',
                location: 'Escondido, CA',
                dates: '2005-2012',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quia commodi cumque accusantium, sequi sint asperiores consequuntur quam atque! Nemo sed laboriosam aliquid quod itaque omnis impedit, laudantium tempore repellat.'
            }
        ],
        display: function () {

            $('#workExperience').append(HTMLworkStart);
            for ( var index in work.jobs){
                var formattedWorkEmp = HTMLworkEmployer.replace("%data%", work.jobs[index].employer),
                    formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[index].title),
                    formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[index].dates),
                    formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[index].location),
                    formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[index].description);

                $('#workExperience').append(HTMLwork);
                $(".work-entry:last")
                    .append(formattedWorkEmp + formattedWorkTitle)
                    .append(formattedWorkDates)
                    .append(formattedWorkDescription);
            }
        }
    },
    projects = {
        projects: [
            {
                title: 'Project 1',
                dates: 'September 2014',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ex, quae temporibus unde sed tempora assumenda, ducimus deserunt harum adipisci qui, possimus animi, sunt odio excepturi incidunt! Numquam, aliquid, esse?',
                images: ["http://lorempixel.com/200/200/sports/","http://lorempixel.com/200/200/people/","http://lorempixel.com/200/200/business/","http://lorempixel.com/200/200/nature/","http://lorempixel.com/200/200/animals/"]
            },
            {
                title: 'Awesome Project',
                dates: 'July 2015',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor velit voluptas nihil a blanditiis dolore, hic debitis fugit delectus voluptates odit, libero sit amet harum deserunt, culpa nulla? Eligendi, repellendus.',
                images: ["http://lorempixel.com/200/200/technics/","http://lorempixel.com/200/200/abstract/","http://lorempixel.com/200/200/cats/","http://lorempixel.com/200/200/city/"]
            }
        ],
        display: function () {

            $("#projects").append(HTMLprojectStart);
            for ( var index in projects.projects){
                var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[index].title),
                    formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[index].dates),
                    formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[index].description);

                $("#projects").append(HTMLproject);
                $(".project-entry:last").append(formattedprojectTitle + formattedprojectDates + formattedprojectDescription);

                if (projects.projects[index].images.length > 0) {
                    $(".project-entry:last").append(HTMLprojectImageStart);
                    for (var i in  projects.projects[index].images) {
                        var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[index].images[i]);
                        $(".project-images:last").append(formattedprojectImage);
                    }
                }
            }
        }
    },
    mapInfo = {
        locations: {
            'ChIJBXdbYF5l3IARh5-POT_LngE': {
                city: 'Oceanside',
                title: 'Residence',
                description: 'Living here, can\'t complain too much...',
                img: 'images/oceanside.jpg',
            },
            'ChIJ1YMtb8cU6YARSHa612Q60cg': {
                city: 'Santa Barbara',
                title: 'UCSB',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde libero.',
                img: 'images/ucsb.jpg'
            },
            'ChIJSx6SrQ9T2YARed8V_f0hOg0': {
                city: 'San Diego',
                title: 'SD Union Tribune',
                description: 'Largest newspaper in the area serving all of San Diego County.',
                img: 'images/utsd.jpg'
            },
            'ChIJe0PCgV7z24AR38WWdw_I0QE': {
                city: 'Escondido',
                title: 'North County Times',
                description: 'No longer there, was swallowed by larger newspaper.',
                img: 'images/nct.jpg'
            }
        }
    };

//Display Bio
bio.display();

// Display Work
if (work.jobs.length > 0) {
    work.display();
}

// Display education/online training
if (education.schools.length > 0 || education.onlineCourses/length > 0){
    education.display();
}

// Display Projects
if (projects.projects.length > 0) {
    projects.display();
}

// Add google map
$("#mapDiv").append(googleMap);
