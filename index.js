(function () {
    var url ="https://maps.googleapis.com/maps/api/js?key=AIzaSyAhKUshtkKl_zIjBOEchNaZNkXMDyBllx4&callback=initMap";
    fetch(url)
    .then(function(resoponce){
      return resoponce.json();
    })
    .then(function(gifs) {
      var gifDrop = document.querySelector(".gif");
      var link = gifs.data[1].images.downsized_medium.url;
      console.log(link)
      gifDrop.src = link;
    })
    .catch(function(error) {
      console.log(error);
    })
  })();
  