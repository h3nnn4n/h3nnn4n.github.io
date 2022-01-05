const list_folders_url = "https://yaa8n3vai7.execute-api.us-east-1.amazonaws.com/dev/list_folders";
const gallery_url = "https://yaa8n3vai7.execute-api.us-east-1.amazonaws.com/dev/gallery/";

var HttpClient = function() {
  this.get = function(aUrl, aCallback) {
    var anHttpRequest = new XMLHttpRequest();
    anHttpRequest.onreadystatechange = function() {
      if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
        aCallback(anHttpRequest.responseText);
    }

    anHttpRequest.open( "GET", aUrl, true );
    anHttpRequest.send( null );
  }
}

var gallery_body = document.getElementById("main-gallery");

var client = new HttpClient();

function fetch_galleries() {
  console.log("Fetching list of galleries");
  client.get(list_folders_url, function(response) {
    const parsed_response = JSON.parse(response);
    console.log("Got: ", parsed_response.folders);

    Array.prototype.forEach.call(parsed_response.folders, function(value) {
      fetch_gallery(value);
    })
  });
}

function fetch_gallery(gallery_name) {
  console.log("fetching " + gallery_name);
  client.get(gallery_url + gallery_name, function(response) {
    var new_gallery = document.createElement('div');
    new_gallery.innerHTML = response;
    gallery_body.appendChild(new_gallery);
    buildGallery(new_gallery);
  });
}

fetch_galleries();
