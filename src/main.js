import { DoctorSearch } from './doctorSearch';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#search').submit(function(event) {
    event.preventDefault();

    let searchTerm = $('#malady').val();
    let first_name = $('#first_name').val();
    let last_name = $('#last_name').val();

    $('#malady').val('');
    $('#first_name').val('');
    $('#last_name').val('');
    $('#showResults').empty();

    const findDoctors = new DoctorSearch();
    const doctorPromise = findDoctors.getDoctors(searchTerm, first_name, last_name);

    doctorPromise.then(function(response) {
      const body = JSON.parse(response);

      let doctors = [];
      for(let i = 0; i < body.data.length; i++) {
        doctors.push(body.data[i]);
      }

      doctors.forEach(function(doctor) {
        console.log(doctor);

        let street2;
        if(!doctor.practices[0].visit_address.street2) {
          street2 = '';
        } else {
          street2 = doctor.practices[0].visit_address.street2;
        }

        let phone;
        for (let p = 0; p < doctor.practices[0].phones.length; p++) {
          if(doctor.practices[0].phones[p].type === "landline") {
            phone = doctor.practices[0].phones[p].number
          }
        }

        let website;
        if(!doctor.practices[0].website) {
          website = 'We do not have a website listed at this time.'
        } else {
          website = `<a href="${doctor.practices[0].website}" target="blank">${doctor.practices[0].website}</a>`
          ;
        }

        let newPatients;
        if(doctor.practices[0].accepts_new_patients === false) {
          newPatients = 'No'
        } else {
          newPatients = "Yes";
        }

        $('#showResults').append(`
          <div class="doctor">
            <h4 id="name">
              ${doctor.profile.first_name}
              ${doctor.profile.last_name}
            </h4>

            <p id="phone"><strong>Main phone:</strong> ${phone}</p>
            <p id="street">${doctor.practices[0].visit_address.street}</p>
            <p id="street2">${street2}</p>

            <p id="cityStateZip">
              ${doctor.practices[0].visit_address.city}, ${doctor.practices[0].visit_address.state} ${doctor.practices[0].visit_address.zip}
            </p>

            <p id="website"><strong>Website:</strong> ${website}</p>
            <p id="accepts_new_patients"><strong>Accepting new patients:</strong> ${newPatients}</p>
          </div>
        `);
      })

    }, function(error) {
      $('#showErrors').text(`There was an error processing your request: ${error.message}`);
    })

  });
});
