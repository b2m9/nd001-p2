/* global $, jQuery, HTMLschoolStart, HTMLschoolName, HTMLschoolDegree, HTMLschoolDates, HTMLschoolLocation, HTMLschoolMajor, HTMLonlineClasses, HTMLonlineTitle, HTMLonlineSchool, HTMLonlineDates, HTMLonlineDates, HTMLonlineURL */

var education = {
    schools: [{
        name: "National Taipei University of Technology",
        location: "Taiwan",
        degree: "MSc",
        majors: ["Computer Science"],
        dates: "2007 - 2010",
        url: "http://www.ntut.edu.tw"
    }, {
        name: "University of Applied Sciences Stuttgart",
        location: "Germany",
        degree: "MSc",
        majors: ["Civil Engineering"],
        dates: "2004 - 2007",
        url: "https://www.hft-stuttgart.de"
    }],
    onlineCourses: [{
        title: "Frontend Web Development",
        school: "Udacity",
        date: "May 2016",
        url: "https://www.udacity.com"
    }, {
        title: "Data Science",
        school: "Coursera",
        date: "December 2015",
        url: "https://www.coursera.org"
    }],
    display: function () {
        var d = "%data%";
        
        // add universities and online education
        jQuery("#education").append(this.schools.map(function (el) {
            return jQuery(HTMLschoolStart).append(HTMLschoolName.replace(d, el.name)
                + HTMLschoolDegree.replace(d, el.degree)
                + HTMLschoolDates.replace(d, el.dates)
                + HTMLschoolLocation.replace(d, el.location)
                + HTMLschoolMajor.replace(d, el.majors.join(", ")));
        })).append(HTMLonlineClasses).append(this.onlineCourses.map(function (el) {
            return jQuery(HTMLschoolStart).append(HTMLonlineTitle.replace(d, el.title)
                + HTMLonlineSchool.replace(d, el.school)
                + HTMLonlineDates.replace(d, el.date)
                + HTMLonlineURL.replace(d, el.url));
        }));
    }
};