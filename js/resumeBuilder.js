//$("#main").append("Tester!");
//var awesomeThoughs = "My name is Tester and I am AWESOME!";
//var funThoughts = awesomeThoughs.replace("AWESOME", "FUN");
//$('#main').append(funThoughts);
//console.log(awesomeThoughs);
var bio = {
    "name": "John Doe",
    "role": "Developer",
    "contact": {
        "mobile": "650-555-5555",
        "email": "john@example.com",
        "github": "johndoe",
        "twitter": "@johndoe",
        "location": "San Francisco"
    },
    "welcomMessage": "lorem ipsum dolor sit amet etc etc etc.",
    "skills": [
        "awesomeness",
        "delivering things",
        "cryogenic sleep",
        "saving the universe"
    ],
    "bioPic": "images/fry.jpg"
}

var education = {
    "schools": [
        {
            "name": "Eckerd College",
            "city": "Saint Peterburg, FL",
            "degree": "BA",
            "majors": [
                "CS"
            ],
            "dates": 2003,
            "url": "http://example.com"
        }
    ],
    "onlineCourses": [
        {
            "title": "Javascript Crash Course",
            "school": "Udacity",
            "dates": "2014",
            "url": "http://www.udacity.com/course/ud804"
        }
    ]
}

var work = {
	    "jobs": [
        {
            "employer": "Pizza Hut",
            "title": "Delivery Boy",
            "dates": "1998 - 1999",
            "location": "Miami FL",
            "description": "Delivery Pizza."
        }
    ]
}

var projects = {
    "projects": [
        {
            "title": "Projects 1",
            "dates": "2014",
            "description": "Project 1",
            "images": [
                "http://pisscaweb.google.com"
            ]
        }
    ]
}

function displayWork() {
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedWorkEmployer = HTMLworkEmployer.replace(flag, work.jobs[job]["employer"]);
		$("#workExperience").append(formattedWorkEmployer);
		var formattedWorkTitle = HTMLworkTitle.replace(flag, work.jobs[job]["title"]);
		$(".work-entry:last").append(formattedWorkTitle);
		var formattedWorkDates = HTMLworkDates.replace(flag, work.jobs[job]["dates"]);
		//$(".work-entry:last").append(formattedWorkDates);
		//var formattedWorkLocation = HTMLworkLocation.replace(flag, work.jobs[job]["location"]);
		$(".work-entry:last").append(formattedWorkLocation);
		var formattedWorkDescription = HTMLworkEmployer.replace(flag, work.jobs[job]["description"]);
		$(".work-entry:last").append(formattedWorkDescription)
	}
}

var flag = "%data%";

var formattedName = HTMLheaderName.replace(flag, bio.name);
var formattedRole = HTMLheaderRole.replace(flag, bio.role);
//$("#header").append(formattedName);
//$("#header").append(formattedRole);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (var i = 0; i < bio.skills.length; i++) {
		var formattedSkill = HTMLskills.replace(flag, bio.skills[i]);
		$("#header").append(formattedSkill);
	}
}

displayWork();