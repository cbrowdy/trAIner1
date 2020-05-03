$(document).ready(function() {

    let patient = document.getElementById("patient-button");
    let doctor = document.getElementById("doctor-button");
    let investor = document.getElementById("investor-button");

    document.getElementById("doctor-form").style.display="none";
    document.getElementById("investor-form").style.display="none";
    
    patient.addEventListener("click", function() {
        let message = document.getElementById("interest-message");
        message.innerHTML = "Interested in signing up for our beta?";
        document.getElementById("patient-form").style.display="flex";
        document.getElementById("doctor-form").style.display="none";
        document.getElementById("investor-form").style.display="none";
    });

    doctor.addEventListener("click", function() {
        let message = document.getElementById("interest-message");
        message.innerHTML = "Interested in joining our platform as a primary care doctor?";
        document.getElementById("patient-form").style.display="none";
        document.getElementById("investor-form").style.display="none";
        document.getElementById("doctor-form").style.display="flex";
    });

    investor.addEventListener("click", function() {
        let message = document.getElementById("interest-message");
        message.innerHTML = "Interested in learning more about our future milestones?";
        document.getElementById("investor-form").style.display="flex";
        document.getElementById("patient-form").style.display="none";
        document.getElementById("doctor-form").style.display="none";
    });

});