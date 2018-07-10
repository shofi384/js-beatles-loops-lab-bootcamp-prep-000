function theBeatlesPlay(musicians, instructions) {
  var empty = new Array();
  for(var i=0; i<musicians.length; i++) {
    empty.push(musicians[i] + instructions[i]);
  }
  return empty;
}
