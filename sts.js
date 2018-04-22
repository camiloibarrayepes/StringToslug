var slug = function(str) {
var $slug = '';
var trimmed = $.trim(str);

$slug = trimmed.
  replace(/[^a-z0-9-]/gi, '-').
  replace(/-+/g, '-').
  replace(/^-|-$/g, '');
  return $slug.toLowerCase();
}

$('#slug-input').keyup(function() {
  var takedata = $('#slug-input').val()
  $('#slug-output').val(slug(takedata));
});