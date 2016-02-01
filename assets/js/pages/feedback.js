/**
* @fileOverview Handles js interaction for the feedback page
* @module feedback
* @author Tony Moses
* @version 0.1
*/
require(['jquery','app' , 'validate','jqueryUI'], function($, app){
    // calls submitFeedback on valid()
    var categoryValid = false;
    app.init('feedback');

    // load catagories for feedback
    (function(){
        $.ajax({
            data: {'function': "FBC", 'id': 'feedback_categories'},
            url: app.engine,
            type: 'POST',
            dataType: 'json',
            desc: 'utility (load metadata)',
            success: function(results){
                // load question selectmenu
                $('#category')
                    .empty()
                    .append(new Option("None", "0"));
                $.each(results, function(){
                    $('#category')
                        .append(new Option(this.value, this.id))
                        .val("0")
                        .selectmenu('refresh')
                });
            }
        });
    })();

    /**
     * Custom validation for category box...give user another chance to
     * choose before submission
     * @method confirmCategory
     * @param {boolean} valid used to override validation of category field
     */
    function confirmCategory(valid){
        if (categoryValid){
            valid = categoryValid;
        }
        if (!valid){
            var validator = $('form').validate();
            validator.showErrors({
                'category' : "Please select a category"
            });
            msgOpt = {
                buttons: {
                    Yes: function(){
                        categoryValid = true;
                        validator.resetForm();
                        $(this).dialog('close');
                        $('form').submit();
                        $(this).dialog('destroy');
                    },
                    No: function(){
                        $(this).dialog('destroy');
                    }
                }
            };

            title = "Message Category";
            message = "Are you sure you can't find a category to describe your message";
            settings = $.extend({}, app.mboxDefaults(title, message), msgOpt);
            $('<div id="confirmChoice" />').dialog(settings);

        }
    }

    /**
     * @namespace feedbackForm
     */
    $("#frmFeedback")
        /**
         * validate feedback form with jquery plugin {@link $.fn.validate})
         * @namespace validator
         * @memberof module:feedback~feedbackForm
         * @type {$.fn.validate}
         * @param {element} form implied param
         */
        .validate({
            /**
             * Preps data to be submitted as feedback
             * @method submitHandler
             * @memberof module:feedback~feedbackForm.validator
             */
            submitHandler: function(){
                formData = $(this.currentForm).serializeForm();
                formData.function = "FB";
                submitFeedback(formData);
            },
            /**
             * @type {object}
             * @name rules
             * @memberof module:feedback~feedbackForm.validator
             */
            rules: {
                category: {
                    required: {
                        depends: function(element){
                            // validate value
                            var invalidValue = "0",
                            currentValue = $(element).val(),
                            valid = invalidValue != currentValue;
                            // if not valid...are you sure?
                            if (!categoryValid){
                                confirmCategory(valid);
                            }else{
                                valid = categoryValid;
                            }
                            return valid;
                        }
                    }
                },
                name: "required",
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 2
                }
            },
            /**
             * @type {object}
             * @name messages
             * @memberof module:feedback~feedbackForm.validator
             */
            messages: {
                category: "Please select a category",
                name: "Please enter your name",
                message: "Please enter your message",
                email: {
                    required: "Please enter a valid email address",
                    email: "Your email address must be in the format of name@domain.com"
                }
            }
    });

    /**
     *  Submits an ajax call to send signup info to the database
     *  @method submitFeedback
     */
     function submitFeedback(data){
        $.ajax({
            contentType: "application/x-www-form-urlencoded",
            desc: "Submit User request for feedback",
            data: data,
            type: "POST",
            url: app.engine
        })
        .done(function(results){
            // internal error handling
            if ('error'  in results){
                var validator = $("#frmFeedback").validate();
                validator.showErrors({
                    "message": results.error
                });
            }else{
                app.dMessage(results.title, results.message);
            }
        });
     }

    // formatting
    $('input[type!=submit], textarea').width($('#category-button').width());
});
