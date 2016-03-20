/* global $, jQuery, HTMLheaderRole, HTMLheaderName, HTMLmobile, HTMLemail, HTMLtwitter, HTMLgithub, HTMLlocation, HTMLbioPic, HTMLwelcomeMsg, HTMLskillsStart, HTMLskills */

var bio = {
    name: "John Doe",
    role: "Professional Adult",
    contacts: {
        mobile: "+65 1234 5678",
        email: "hi@jdoe.com",
        github: "jdoe",
        twitter: "@jdoe",
        location: "Singapore"
    },
    welcomeMessage: "Good day stranger.",
    skills: ["being professional", "being an adult"],
    biopic: "http://placehold.it/200x150",
    display: function () {
        var d = "%data%"; // handle for placeholder string
        
        // add name and role
        jQuery("#header")
            .prepend(HTMLheaderName.replace(d, this.name)
                + HTMLheaderRole.replace(d, this.role))
            .append(HTMLbioPic.replace(d, this.biopic)
                + HTMLwelcomeMsg.replace(d, this.welcomeMessage)
                + HTMLskillsStart);
                
        // add skills and fix a CSS bug
        jQuery("#skills")
            .css("display", "block")
            .append(this.skills.map(function (el) {
                return HTMLskills.replace(d, el);
            } ));

        // add contact details
        jQuery("#topContacts")
            .append(HTMLmobile.replace(d, this.contacts.mobile)
                + HTMLemail.replace(d, this.contacts.email)
                + HTMLtwitter.replace(d, this.contacts.twitter)
                + HTMLgithub.replace(d, this.contacts.github)
                + HTMLlocation.replace(d, this.contacts.location));
    }
};