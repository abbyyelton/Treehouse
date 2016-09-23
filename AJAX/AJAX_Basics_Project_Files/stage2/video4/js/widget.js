//Using javascript

// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//   if (xhr.readyState === 4) {
//     var employees = JSON.parse( xhr.responseText );
//     var statusHTML = '<ul class="bulleted">';
//     for (var i = 0; i < employees.length; i += 1 ) {
//       if (employees[i].inoffice === true ) {
//         statusHTML += '<li class="in">';
//       } else {
//         statusHTML += '<li class="out">';
//       };
//       statusHTML += employees[i].name;
//       statusHTML += '</li>';
//     };
//     statusHTML += '</ul>';
//     document.getElementById('employeeList').innerHTML = statusHTML;
//   };
// };
//
// xhr.open('GET', 'data/employees.json');
// xhr.send();

//Using jQuery
$(document).ready(function () {
  $.getJSON('../data/employees.json', function (data) {
    var statusHTML = '<ul class="bulleted">';
    $.each(data,function (index, employee) {
      if (employee.inoffice === true) {
        statusHTML +='<li class="in">';
      } else {
        statusHTML +='<li class="out">';
      }
      statusHTML += employee.name + '</li>';
    });
    statusHTML += '</ul>';
    $('#employeeList').html(statusHTML)
  }); // end getJSON

  $.getJSON('../data/rooms.json', function (data) {
    var statusHTML = '<ul class="rooms">';
    $.each(data,function (index, room) {
      if (room.available === true) {
        statusHTML +='<li class="empty">';
      } else {
        statusHTML +='<li class="full">';
      }
      statusHTML += room.room + '</li>';
    });
    statusHTML += '</ul>';
    $('#roomList').html(statusHTML)
  }); // end getJSON
}); // end ready
