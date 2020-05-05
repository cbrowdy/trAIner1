$(document).ready(function() {

    let patient = document.getElementById("patient-button");
    let doctor = document.getElementById("doctor-button");
    let investor = document.getElementById("investor-button");

    document.getElementById("doctor-form").style.display="none";
    document.getElementById("investor-form").style.display="none";

    patient.addEventListener("click", function() {
        let message = document.getElementById("interest-message");
        let doctor = document.getElementById("doctor-button");

        patient.style.backgroundColor="#315d9d";
        patient.style.outline="none";
        patient.style.color="#f6f6f6";
        patient.style.borderColor="#f6f6f6";

        doctor.style.backgroundColor="#f6f6f6";
        doctor.style.color="#1F2B37";
        doctor.style.borderColor="#1F2B37";

        investor.style.backgroundColor="#f6f6f6";
        investor.style.color="#191f53";
        investor.style.borderColor="#191f53";

        message.innerHTML = "Interested in signing up for our beta? Fill out the form here.";
        document.getElementById("patient-form").style.display="flex";
        document.getElementById("doctor-form").style.display="none";
        document.getElementById("investor-form").style.display="none";
    });

    doctor.addEventListener("click", function() {
        let message = document.getElementById("interest-message");
        let investor = document.getElementById("investor-button");
        let patient = document.getElementById("patient-button");

        doctor.style.backgroundColor="#315d9d";
        doctor.style.outline="none";
        doctor.style.color="#f6f6f6";
        doctor.style.borderColor="#f6f6f6";

        patient.style.backgroundColor="#f6f6f6";
        patient.style.color="#315d9d";
        patient.style.borderColor="#315d9d";

        investor.style.backgroundColor="#f6f6f6";
        investor.style.color="#315d9d";
        investor.style.borderColor="#315d9d";

        message.innerHTML = "Interested in joining our platform as a primary care doctor? Sign up here.";
        document.getElementById("patient-form").style.display="none";
        document.getElementById("investor-form").style.display="none";
        document.getElementById("doctor-form").style.display="flex";
    });

    investor.addEventListener("click", function() {
        let message = document.getElementById("interest-message");
        let doctor = document.getElementById("doctor-button");
        let patient = document.getElementById("patient-button");

        investor.style.backgroundColor="#315d9d";
        investor.style.outline="none";
        investor.style.color="#f6f6f6";
        investor.style.borderColor="#f6f6f6";

        doctor.style.backgroundColor="#f6f6f6";
        doctor.style.color="#315d9d";
        doctor.style.borderColor="#315d9d";

        patient.style.backgroundColor="#f6f6f6";
        patient.style.color="#315d9d";
        patient.style.borderColor="#315d9d";
        
        message.innerHTML = "Interested in learning more about our future milestones? Schedule a meeting with us.";
        document.getElementById("investor-form").style.display="flex";
        document.getElementById("patient-form").style.display="none";
        document.getElementById("doctor-form").style.display="none";
    });

});