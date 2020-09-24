$(document).ready(function() {

    $("#s1").hide();
    $("#s2").hide();
    $("#s3").hide();
    $("#s4").hide();
    $("#s5").hide();
    $("#s6").hide();
    $("#s7").hide();
    $("#s8").hide();
    $("#table").hide();

    $("#firstName").blur(function(){
        var firstName = $('#firstName').val();
        if (firstName.length < 1) {
            $(".error1").remove();
            $('#firstName').after('<span class="error1">This field is required</span>');
        }
        else{
            $(".error1").remove();
        }
    });

    $("#lastName").blur(function(){
        var lastName = $('#lastName').val();
        if (lastName.length < 1) {
            $(".error2").remove();
            $('#lastName').after('<span class="error2">This field is required</span>');
        }
        else{
            $(".error2").remove();
        }
    });

    $("#emailId").blur(function(){
        var emailId = $('#emailId').val();
        if (emailId.length < 1) {
            $(".error3").remove();
            $('#emailId').after('<span class="error3">This field is required</span>');
        }
        else{
            $(".error3").remove();
            var regEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            var validEmail = regEx.test(emailId);
            if (!validEmail) {
                $(".error3").remove();
                $('#emailId').after('<span class="error3">Enter a valid email</span>');
            }
            else{
                $(".error3").remove();
            }
            
        }
    });

    $("#phoneNumber").blur(function(){
        var phoneNumber = $('#phoneNumber').val();
        if (phoneNumber.length < 1) {
            $(".error4").remove();
            $('#phoneNumber').after('<span class="error4">This field is required</span>');
        }
        else{
            $(".error4").remove();
            var regEx = /(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;
            var validPhone = regEx.test(phoneNumber);
            if (!validPhone) {
                $(".error4").remove();
                $('#phoneNumber').after('<span class="error4">Enter a valid phone number</span>');
            }
            else{
                $(".error4").remove();
            }
            
        }
    });

    $("#zipcode").blur(function(){
        var zipcode = $('#zipcode').val();
        if (zipcode.length < 1) {
            $(".error5").remove();
            $('#zipcode').after('<span class="error5">This field is required</span>');
        }
        else{
            $(".error5").remove();
            var regEx = /^\d{6}$/;;
            var validZip = regEx.test(zipcode);
            if (!validZip) {
                $(".error5").remove();
                $('#zipcode').after('<span class="error5">Enter a valid Zip Code</span>');
            }
            else{
                $(".error5").remove();
            }
            
        }
    });

    $("#comments").blur(function(){
        var comments = $('#comments').val();
        if (comments.length < 1) {
            $(".error6").remove();
            $('#comments').after('<span class="error6">This field is required</span>');
        }
        else{
            $(".error6").remove();
        }
    });


    $("#favoriteCuisine").change(function(){
        var favoriteCuisine = $(this).children("option:selected").val();
        
        if (favoriteCuisine == "american") {
            
            $("#s1").show();
            $("#s2").hide();
            $("#s3").hide();
            $("#s4").hide();
            $("#s5").hide();
            $("#hamburger").click(function(){
                $(".error7").remove();
                $("#s5").toggle(this.checked);
            });

            $("#userInput").blur(function(){
                var input = $('#userInput').val();
                if (input.length < 1) {
                    $(".error7").remove();
                    $('#userInput').after('<span class="error7">This field is required</span>');
                }
                else{
                    $(".error7").remove();
                }
            });
            
        }

        else if (favoriteCuisine == "mexican") {
            $("#s1").hide();
            $("#s2").show();
            $("#s3").hide();
            $("#s4").hide();
            $("#s5").hide();
            $("#chilaquiles").click(function(){
                $(".error7").remove();
                $("#s5").toggle(this.checked);
            });

            $("#userInput").blur(function(){
                var input = $('#userInput').val();
                if (input.length < 1) {
                    $(".error7").remove();
                    $('#userInput').after('<span class="error7">This field is required</span>');
                }
                else{
                    $(".error7").remove();
                }
            });
        }
        else if (favoriteCuisine == "chinese") {
            $("#s1").hide();
            $("#s2").hide();
            $("#s3").show();
            $("#s4").hide();
            $("#s5").hide();
            $("#dumpling").click(function(){
                $(".error7").remove();
                $("#s5").toggle(this.checked);
            });

            $("#userInput").blur(function(){
                var input = $('#userInput').val();
                if (input.length < 1) {
                    $(".error7").remove();
                    $('#userInput').after('<span class="error7">This field is required</span>');
                }
                else{
                    $(".error7").remove();
                }
            });
        }
        else if (favoriteCuisine == "indian") {
            $("#s1").hide();
            $("#s2").hide();
            $("#s3").hide();
            $("#s4").show();
            $("#s5").hide();
            $("#butterChicken").click(function(){
                $("#s5").toggle(this.checked);
            });

            $("#userInput").blur(function(){
                var input = $('#userInput').val();
                if (input.length < 1) {
                    $(".error7").remove();
                    $('#userInput').after('<span class="error7">This field is required</span>');
                }
                else{
                    $(".error7").remove();
                }
            });
        }
        else{
            $("#s1").hide();
            $("#s2").hide();
            $("#s3").hide();
            $("#s4").hide();  
        }
    });

    
    
    









    $('#myForm').submit(function(event) {
        
        event.preventDefault();
        $("#table").show();
        var radioValue = $("input[name='title']:checked").val();

        var favorite = [];
        $.each($("input[name='source']:checked"), function(){
            favorite.push($(this).val());
        });

        var $inputs = $('#myForm :input');
        var values = {};
        $inputs.each(function() {
        values[this.name] = $(this).val();
        });
        $('#displayArea').append("<tr><td>" + radioValue + "</td><td>" + values.firstName + "</td><td>" + values.lastName + "</td><td>" + values.emailId + "</td><td>" + values.phoneNumber + "</td><td>" + values.zipcode + "</td><td>" + favorite.join(", ") + "</td><td>" + values.text + "</td><td>" + values.favoriteCuisine + "</td></tr>");
        $("input[type=text], textarea").val("");

        $("#myForm")[0].reset();

       
      });

    

  });