module.exports = function($scope, $http) {
  $scope.seats = 'seats';

  $("#selectClass").on('change', function() {
  if ($(this).val() == "250") {
     $(".slrCls").attr("disabled", "disabled");
  } else {
     $(".slrCls").removeAttr("disabled");
  }
});



  $("#selectClass").on('change', function() {
    if ($(this).val() == "200") {
   $(".gldCls").attr("disabled", "disabled");
 } else {
   $(".gldCls").removeAttr("disabled");
 }

  });





  // $('.calculate').change(function(){
  //     var group = parseInt($('#selectClass').val());
  //     var price = parseInt($('#selectSeats').val());
  //     var total = group * price;
  //     $('#total').val( total);
  // });




    var selectSeats = document.getElementById('selectSeats');
    $('input[type=checkbox]').on('change', function (e) {
    if ($('input[type=checkbox]:checked').length > selectSeats.value ) {
        $(this).prop('checked', false);
        alert("WANT MORE..? INCREASE NO. OF SEATS");
    }
});




        $('select[id="selectClass"]').change(function(){
            var text = $(this).find("option:selected").text();
            if(text != ""){
              text = "Buy"+text;
            }

            $('#seatCls').val(text);

          });



          function updateTextArea() {
     var allVals = [];
     $('#gold :checked').each(function() {
       allVals.push($(this).val());
     });
     $('#noOFSeats').val(allVals);
  }
 $(function() {
   $('#gold input').click(updateTextArea);
   updateTextArea();
 });

//  function updateTextArea() {
// var allVals = [];
// $('.rowB :checked').each(function() {
// allVals.push($(this).val());
// });
// $('#noOFSeats').val(allVals);
// }
// $(function() {
// $('.rowB input').click(updateTextArea);
// updateTextArea();
// });


          // $('select[class="selectClass"]').change(function(){
          //    var value=$(this).find("option:selected").val();
          //   alert(value)
          // });
          //
          // $('select[class="selectSeats"]').change(function(){
          //     var seat=$(this).find("option:selected").val();
          //
          // });


          // var total= value*seat;
          // $('#total').val(total);

          $('.calculate').change(function(){
    var group = parseInt($('.selectpicker.selectClass').val());
    var price = parseInt($('.selectpicker.selectSeats').val());
    var total = group * price;
    if(isNaN(total)){
  $('#totalAmount').val('');
} else{
  $('#totalAmount').val('Rs' + total+ "/-");
}

});

};
