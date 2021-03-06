class DoctorSearch {

  getDoctors(malady, first_name, last_name) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?first_name=${first_name}&last_name=${last_name}&query=${malady}&location=45.5122%2C-122.6587%2C100&user_location=45.5122%2C-122.6587&sort=last-name-asc&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}

export { DoctorSearch };
