var rooms = ['one', 'two', 'three'];

var newR oms = rooms.map(function(rm){
  if( rm === 'three' ) {
    return 'four';
  }else {
    return 'three';
  }
});

console.log(newRooms);
