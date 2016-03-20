/* global $, jQuery, HTMLworkStart, HTMLworkEmployer, HTMLworkTitle, HTMLworkDates, HTMLworkLocation, HTMLworkDescription */

var work = {
    jobs: [{
        employer: "Big Blue Pte. Ltd.",
        title: "R&D Engineer",
        location: "Singapore",
        dates: "December 2012 - present",
        description: "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI."
    }, {
        employer: "Important Corp.",
        title: "R&D Engineer",
        location: "France",
        dates: "May 2010 - November 2012",
        description: "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions."
    }],
    display: function () {
        var d = "%data%";
        
        jQuery("#workExperience").append(this.jobs.map(function (el) {
            return jQuery(HTMLworkStart).append(HTMLworkEmployer.replace(d, el.employer)
                + HTMLworkTitle.replace(d, el.title)
                + HTMLworkDates.replace(d, el.dates)
                + HTMLworkLocation.replace(d, el.location)
                + HTMLworkDescription.replace(d, el.description));
        }));
    }
};