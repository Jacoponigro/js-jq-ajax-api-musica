// document.ready

$(document).ready(function(){
  // richiesta ajax

  $.ajax({
    'url': 'https://flynn.boolean.careers/exercises/api/array/music',
    'method': 'GET',
    'success': function(data) {
      inserisciAlbum(data.response);
    },
    'error': function(request, state, errors) {
      alert('Errore ' + errors);
    }
  });
  // fine richiesta ajax

  // funzione inserisciAlbum

function inserisciAlbum(album) {
for (var i = 0; i<album.length; i++) {
var cd = album[i];
var sorgente = $("#entry-template").html();
var template = Handlebars.compile(sorgente);
var domHtml = template(cd);
$('.cds-container').append(domHtml);
}
}
});
// fine document.ready
