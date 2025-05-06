function produktHinzufuegen() {
    var bild = document.getElementById('bild').value;
    var name = document.getElementById('name').value;
    var beschreibung = document.getElementById('beschreibung').value;
    var preis = document.getElementById('preis').value;

    var produkteGrid = document.querySelector('.produkte-grid');

    var artikel = document.createElement('article');
    artikel.className = 'produkt';
    artikel.innerHTML =
      '<img src="' + bild + '" alt="' + name + '">' +
      '<h4>' + name + '</h4>' +
      '<p>' + beschreibung + '</p>' +
      '<p class="preis">CHF ' + preis + '</p>';

    produkteGrid.appendChild(artikel);

    document.getElementById('produktForm').reset();
  }