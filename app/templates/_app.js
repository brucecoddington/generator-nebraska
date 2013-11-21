function createSaying(saying) {
  var container = document.querySelectorAll('.container') [0];
  var div = document.createElement('div');
  div.className += 'saying';
  var text = document.createTextNode(saying);
  div.appendChild(text);
  container.appendChild(div);
}