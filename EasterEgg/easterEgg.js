var easter = {
  //input buffer
  buffer: '',
  //easter egg modules
  egg: {
    //descriptive name of the easteregg
    eggImageRedirect: {
      //sequence that needs to be typed in order to trigger it
      sequence: 'gimmeanegg',
      //the action that follows. Can be anything that you want :D
      action: function() {
        window.location.assign("http://eventfulstays.com/blog/wp-content/upLoads/2011/03/Painted-Easter-Eggs.gif");
      }
    },
    alert: {
      sequence: 'yolo',
      action: function() {
        alert('YOLO');
      }
    },

    hide: {
      sequence: 'removebodycontent',
      action: function() {
        $('body').empty();
      }
    }
  }
}
//triggers on keyup. but could also be written with vanilla js. i used jquery just because i'm lazy :P
$(window).on('keyup', function(e) {
  //keycode translated to an actual character
  var releasedKey = String.fromCharCode(e.which);
  //write chat into buffer
  easter.buffer += releasedKey.toLowerCase();

  //loop over all modules
  for (var gizmo in easter.egg) {
    //current module
    var currentGizmo = easter.egg[gizmo];
    //if the buffer corresponds to the module's trigger sequence, call the modules predefined action
    if (easter.buffer.indexOf(currentGizmo.sequence.toLowerCase()) >= 0) {
      currentGizmo.action();
      easter.buffer = "";
    }
  }
});