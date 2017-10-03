var GOOGLE_MAPS_APP_KEY = 'AIzaSyD75uqZnh7vYqjPlhcAyClqTbavMgB6pVc'

document.getElementById("add-new__link").onclick = function(){
  document.getElementById("add-new__modal-wrapper").style.display = "block"
}

document.getElementById("add-new__modal-close").onclick = function(){
  document.getElementById("add-new__modal-wrapper").style.display = "none"
}

document.getElementById("send-map-request").onclick = function() {
  var address = document.getElementById("address").value
}



function parseDestination(destination){
   return encodeURI(destination.trim())
}
