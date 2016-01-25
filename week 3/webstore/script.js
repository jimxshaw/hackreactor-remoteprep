// Web Store sample objects
var book1 = {
  Picture_url: '<img src=http://www.fantasymundo.com/galeria/imagenes/Literatura01/31648.jpg>',
  Title: "<b>Dune</b>",
  Author: "Frank Herbert",
  ReleaseDate: 1960,
  Category: "Books",
  Selling_points: 'This Hugo and Nebula Award winner tells the sweeping tale of a desert planet called Arrakis, the focus of an intricate power struggle in a byzantine interstellar empire. Arrakis is the sole source of Melange, the "spice of spices." Melange is necessary for interstellar travel and grants psychic powers and longevity, so whoever controls it wields great influence.',
  Price: '$6.97'
};

var book2 = {
  Picture_url: '<img src=http://d.gr-assets.com/books/1372847500l/5907.jpg>',
  Title: "<b>The Hobbit</b>",
  Author: "JRR Tolkein",
  ReleaseDate: 1953,
  Category: "Books",
  Selling_points: 'Created by the author of the "Lord of the Rings" trilogy, this books goes through the adventure of Bilbo Baggins.',
  Price: '$9.28'
};

var book3 = {
  Picture_url: '<img src=http://a5.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,q_80,w_300/MTI5MzY0OTk4NTM0MjQwNzM0.jpg>',
  Title: "<b>The Great Gatsby</b>",
  Author: "F. Scott Fitzgerald",
  ReleaseDate: 1923,
  Category: "Books",
  Selling_points: 'In 1922, F. Scott Fitzgerald announced his decision to write "something new--something extraordinary and beautiful and simple + intricately patterned." That extraordinary, beautiful, intricately patterned, and above all, simple novel became The Great Gatsby, arguably Fitzgerald\'s finest work and certainly the book for which he is best known.',
  Price: '$9.34'
};

var album1 = {
  Picture_url: '<img src=http://d817ypd61vbww.cloudfront.net/sites/default/files/styles/media_responsive_widest/public/tile/image/AbbeyRoad.jpg?itok=BgfH98zh>',
  Title: "<b>Abbey Road</b>",
  Artist: "The Beatles",
  ReleaseDate: 1969,
  Category: "Albums",
  Selling_points: "Abbey Road is the 11th studio album by the Beatles.  This was the final album completed before the band's dissolution, and is considered one of the best.",
  Price: '$13.50'
};

var album2 = {
  Picture_url: '<img src=http://image.cleveland.com/home/cleve-media/width620/img/ent_impact_home/photo/19024136-mmmain.jpg>',
  Title: "<b>25</b>",
  Artist: "Adele",
  ReleaseDate: 2015,
  Category: "Albums",
  Selling_points: "25 is the third studio Album by English singer and songwriter Adele.",
  Price: '$10.00'
};

$(document).ready(function() {
  var showButton = $('#showButton');
  var hideButton = $('#hideButton');
  var productsList = $('#productsList');

  showButton.hide();

  showButton.click(function() {
    productsList.show("slow");
    hideButton.show();
    showButton.hide();
  });

  hideButton.click(function() {
    productsList.hide("slow");
    showButton.show();
    hideButton.hide();
  });
});


for (var key in book1) {
  if (key === 'Title') {
    $('#book1').append('<p class="booktitle">' + book1[key] + '</p>');
  } else if (key === 'Category') {
  } else {
      $('#book1').append('<p>' + book1[key] + '</p>');
  }
}

for (var key in book2) {
  if (key === 'Title') {
    $('#book2').append('<p class="booktitle">' + book2[key] + '</p>');
  } else if (key === 'Category') {
  } else { 
      $('#book2').append('<p>' + book2[key] + '</p>');
  }
}

for (var key in book3) {
  if (key === 'Title') {
    $('#book3').append('<p class="booktitle">' + book3[key] + '</p>');
  } else if (key === 'Category') {
  } else { 
      $('#book3').append('<p>' + book3[key] + '</p>');
  }
}

for (var key in album1) {
  if (key === 'Title') {
    $('#album1').append('<p class="albumtitle">' + album1[key] + '</p>');
  } else if (key === 'Category') {
  } else { 
      $('#album1').append('<p>' + album1[key] + '</p>');
  }
}

for (var key in album2) {
  if (key === 'Title') {
    $('#album2').append('<p class="albumtitle">' + album2[key] + '</p>');
  } else if (key === 'Category') {
  } else { 
      $('#album2').append('<p>' + album2[key] + '</p>');
  }
}




