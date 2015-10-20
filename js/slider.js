var updateSliderValue = function(event, ui) {
  // Adds span with current slider value to the inner html of the handle
  $(ui.handle).html("<span class='slider-value'>"+ui.value+"</span>");
  // Update the slider's hidden field with the updated slider value
  $('#'+this.getAttribute('data-field')).val(ui.value);
}

$(function(){
  // Initialize sliders using their data attributes
  $('.v-slider').each(function() {
      var e = $(this);
      var start = e.data('start');
      e.slider({
          max: e.data('max'),
          min: e.data('min'),
          step: e.data('step'),
          value: start,
          slide: updateSliderValue,
          create: function(event, ui) {
            // Set the handle span value to start (data-start)
            e.find('.ui-slider-handle').html("<span class='slider-value'>"+start+"</span>");
          }
      });
  });
});  