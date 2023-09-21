$(document).ready(function() {
  $.getJSON('data.json', function(data) {
    var sommeScores = 0;
    for (var i = 0; i < data.length; i++) {
      sommeScores += data[i].score;
    }

    var moyenne = sommeScores / data.length;
    moyenne = Math.round(moyenne);

    $('#number').text(moyenne);

    $.each(data, function(index, element) {
      var categorieDiv = $('<div>').addClass('categorie').attr('id', element.category);
      var iconeImg = $('<img>').attr('src', element.icon).addClass('icone');
      var nomCategorie = $('<span>').text(element.category).addClass('nom-categorie');

      var scoreCategorie = $('<span>').text(element.score).addClass('score-categorie');
      var slashCategorie = $('<span>').text(' / 100').addClass('slash-categorie');

      var scoreContainer = $('<div>').addClass('score-container');
      scoreContainer.append(scoreCategorie, slashCategorie);
	  

      categorieDiv.append(iconeImg, nomCategorie, scoreContainer);
      $('#res').append(categorieDiv);
    });
  });
});