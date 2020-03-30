    // handling select box
    $("select[name='choose']").change(function() {
       $('#genderSpan').html($(this).val());
    });

    // handling radio buttons
    $("input:radio[name='species']").change(function() {
       if ($(this).prop('checked')) {
          $('#speciesSpan').html($(this).val());
       }
    });
var allChecked = [];

 $('input:checkbox').change(function() {
    var value = $(this).val();
    if ($(this).prop('checked')) {
        allChecked.push(value);
    }
    else {
        var index = allChecked.indexOf(value);
        if (index != -1)
           allChecked.splice(index, 1);
    }
    $('#featureSpan').html('');
    for (var i = 0; i < allChecked.length; i++) {
       $('#featureSpan').append(allChecked[i]);
       if (i < allChecked.length - 1)
          $('#featureSpan').append(', ');
       else
         $('#featureSpan').append(' ');
    }
  });