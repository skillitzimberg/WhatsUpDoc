import { DoctorSearch } from './doctorSearch';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

let newSearch = new DoctorSearch();

$(document).ready(function() {
  $('#displayMessage').append(message);
});
