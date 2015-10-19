// cache jQuery objects
var $header = $("#header"),
    $welcome = $("#welcome"),
    $skillsWrapper = $("#skills-wrapper"),
    $toolsWrapper = $("#tools-wrapper"),
    $contacts = $("#topContacts, #footerContacts"),
    $workExperience = $('#workExperience'),
    $projects = $("#projects"),
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
            location : 'Oceanside, CA'
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
            'use strict';
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
            if (bio.skills.length) {
                $skillsWrapper.append(HTMLskillsStart);

                // couldn not cache #myskills before since element didn't exist prior to line above
                var $myskills = $("#myskills"),
                    currentSkill,
                    formattedSkills;

                var len = bio.skills.length;
                for(var i=0; i < len ; i +=1) {
                    // replacing to variable %data% and %data2%
                    currentSkill = bio.skills[i];
                    formattedSkills = HTMLskills.replace("%data%", currentSkill.name).replace("%data2%", currentSkill.proficient);
                    $myskills.append(formattedSkills);
                }
            }

            // TOOLS
            if (bio.tools.length) {
                $toolsWrapper.append(HTMLtoolsStart);

                // couldn not cache #mytools before since element didn't exist prior to line above
                var $mytools = $("#mytools");

                var lenJ = bio.tools.length;
                for (var j=0; j < lenJ ; j++) {
                    // replacing to variable %data% and %data2%
                    var currentTool = bio.tools[j],
                        formattedTools = HTMLtools.replace("%data%", currentTool.name).replace("%data2%", currentTool.proficient);
                    $mytools.append(formattedTools);
                }
            }
        },
        showTools: function () {
            'use strict';
            $('.meter').each(function(i, el){
                var $el = $(el);
                if ($el.visible(true)) {
                    var width = $el.data("percent") + "%",
                        duration = parseInt( (i+1) * 500, 10 );

                    $el.css({"transition-duration" : duration + "ms","width" : width}).addClass('animated');
                }
            });
        },
        showSkills: function () {
            'use strict';
            $('.svg-container').each(function(){
                var $this = $(this);
                if ($this.visible(true)) {
                    var pct = $this.data("percent"),
                        $circle = $this.find('.bar'),
                        r = $circle.attr('r'),  //get radius of circle
                        c = Math.PI*(r*2),  // calculate circumference
                        toMove = ((100-pct)/100) * c ;  //percentage of circ to move

                    $circle.css({"stroke-dashoffset" : toMove });
                    $this.siblings().addClass( "fadeInUp animated");
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
            'use strict';
            var $education = $("#education"); //has to be ouside if statements because used for both types

            $education.append(HTMLschoolStart);

            // Display Schools
            if (education.schools.length){
                // for( var school in education.schools) {
                var len = education.schools.length;
                for (var i=0; i < len ; i++) {
                    var currentSchool = education.schools[i],
                        formattedName = HTMLschoolName.replace("%data%", currentSchool.name),
                        formattedDegree = HTMLschoolDegree.replace("%data%", currentSchool.degree),
                        formattedDates = HTMLschoolDates.replace("%data%", currentSchool.dates),
                        formattedLocation = HTMLschoolLocation.replace("%data%", currentSchool.location),
                        formattedMajor = HTMLschoolMajor.replace("%data%", currentSchool.majors);

                    $education.append(HTMLschool);
                    $(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
                }
            }

            // Display Online Classes
            if (education.onlineCourses.length){
                $education.append(HTMLonlineStart);
                // for( var course in education.onlineCourses){
                var lenJ = education.onlineCourses.length;
                for (var j=0; j < lenJ ; j++) {
                    var currentCourse = education.onlineCourses[j],
                        formattedTitle = HTMLonlineTitle.replace("%data%", currentCourse.title).replace("%url%",currentCourse.url),
                        formattedSchool = HTMLonlineSchool.replace("%data%", currentCourse.school),
                        formattedDatesOnline = HTMLonlineDates.replace("%data%", currentCourse.dates);

                    $education.append(HTMLonline);
                    $(".online-entry:last").append(formattedTitle + formattedSchool + formattedDatesOnline);
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
            'use strict';
            $workExperience.append(HTMLworkStart);

            var len = work.jobs.length;
            for (var i=0; i < len ; i++) {
                var currentJob = work.jobs[i],
                formattedWorkEmp = HTMLworkEmployer.replace("%data%", currentJob.employer),
                    formattedWorkTitle = HTMLworkTitle.replace("%data%", currentJob.title),
                    formattedWorkDates = HTMLworkDates.replace("%data%", currentJob.dates),
                    formattedWorkLocation = HTMLworkLocation.replace("%data%", currentJob.location),
                    formattedWorkDescription = HTMLworkDescription.replace("%data%", currentJob.description);

                $workExperience.append(HTMLwork);
                $(".work-entry:last")
                    .append(formattedWorkLocation + formattedWorkEmp + formattedWorkTitle + formattedWorkDates + formattedWorkDescription);
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
            'use strict';
            $projects.append(HTMLprojectStart);

            var len = projects.projects.length;
            for (var i=0; i < len ; i++) {
                var currentProject = projects.projects[i],
                    formattedprojectTitle = HTMLprojectTitle.replace("%data%", currentProject.title),
                    formattedprojectDates = HTMLprojectDates.replace("%data%", currentProject.dates),
                    formattedprojectDescription = HTMLprojectDescription.replace("%data%", currentProject.description);

                $projects.append(HTMLproject);
                $(".project-entry:last").append(formattedprojectTitle + formattedprojectDates + formattedprojectDescription);

                if (currentProject.images.length) {
                    $(".project-entry:last").append(HTMLprojectImageStart);

                    var lenJ = currentProject.images.length;
                    for (var j=0; j < lenJ ; j++) {
                        var formattedprojectImage = HTMLprojectImage.replace("%data%", currentProject.images[j]);
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
if (work.jobs.length) {
    work.display();
}

// Display education/online training
if (education.schools.length || education.onlineCourses.length){
    education.display();
}

// Display Projects
if (projects.projects.length) {
    projects.display();
}

// Add google map
$("#mapDiv").append(googleMap);
