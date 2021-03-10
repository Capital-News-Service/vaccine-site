$(document).ready(function(){

  var data;
  $.ajax({
    cache: false,
    type: "GET",
    url: "https://shielded-escarpment-68584.herokuapp.com/https://maryland-vax-info-bot.s3.us-east-1.amazonaws.com/public/web_display_output.csv",
    dataType: "text",
    success: function(response)
    {
      data = $.csv.toArrays(response);
      generateHtmlTable(data);
    }
  });

  function generateHtmlTable(data) {
      var html = '<table  class="table table-condensed table-hover table-striped">';

    if(typeof(data[0]) === 'undefined') {
      return null;
    } else {
      $.each(data, function( index, row ) {
        //bind header
        if(index == 0) {
          html += '<thead>';
          html += '<tr>';
          $.each(row, function( index, colData ) {
              html += '<th>';
              html += colData;
              html += '</th>';
          });
          html += '</tr>';
          html += '</thead>';
          html += '<tbody>';
        } else {
          html += '<tr>';
          $.each(row, function( index, colData ) {
              html += '<td>';
              html += colData;
              html += '</td>';
          });
          html += '</tr>';
        }
      });
      html += '</tbody>';
      html += '</table>';

      $('#csv-display').append(html);
    }
  }
});
