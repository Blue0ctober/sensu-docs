$(document).ready(function() {
  var notes = $("em:contains('NOTE:')");
  notes.addClass("note");
  $.each(notes, function(index, note) {
    var noteText = note.innerHTML;
    note.innerHTML = noteText.replace("NOTE:", "<strong>NOTE:</strong>");
  });

  $(":header:contains('Ubuntu/Debian')").addClass("ubuntu").prepend("<i class='fl-ubuntu'></i>");
  $(":header:contains('RHEL/CentOS')").addClass("centos").prepend("<i class='fl-centos'></i>");

  var dts = $("#documentation > dl > dt");
  $.each(dts, function(index, dt) {
    $("<hr/>").insertBefore(dt);
  });

  $(".hamburger-button").click(function() {
    $(this).toggleClass("collapsed");
    $(".toc-collapse").slideToggle();
  });
});
