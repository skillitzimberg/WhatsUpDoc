class DoctorSearch {

  getDoctors(malady) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${malady}&user_location=45.5122%2C-122.6587%2C100&skip=0&limit=10&user_key=0a6052a8fe07881c0f08c326c929f63d`;

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
