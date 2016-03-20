/* global $, jQuery, HTMLprojectStart, HTMLprojectTitle, HTMLprojectDates, HTMLprojectDescription, HTMLprojectImage */

var projects = {
    projects: [{
        title: "BlingDrop",
        dates: "2013 - present",
        description: "Rate interactive system distortion spectrum wave the hyperlinked services recursive. Timer duplex prompt feedback mass embedded plasma potentiometer.",
        images: ["http://placehold.it/200x150", "http://placehold.it/200x150"]
    }, {
        title: "cssometree",
        dates: "2012 - 2014",
        description: "Services patch network extension terminal solution direct scan metafile limiter n-tier. Dithering network technician port recognition computer concept.",
        images: ["http://placehold.it/200x150", "http://placehold.it/200x150"]
    }],
    display: function () {
        var d = "%data%";
        
        // add projects
        jQuery("#projects").append(this.projects.map(function (el) {
            return jQuery(HTMLprojectStart).append(HTMLprojectTitle.replace(d, el.title)
                + HTMLprojectDates.replace(d, el.dates)
                + HTMLprojectDescription.replace(d, el.description)
                + el.images.map(function (img) {
                    return HTMLprojectImage.replace(d, img);
                }).join(""));
        }));
    }
};