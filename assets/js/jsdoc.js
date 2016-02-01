/**
* jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.
* @private
* @name $
* @namespace jQuery
* @see http://learn.jquery.com/
*/

/**
* @exports jQuery as $
*/

/**
* @private
* @namespace $.fn
* @desc Namespace for all jQuery plugins
* @see http://learn.jquery.com/
*/

/**
* @interface $.fn.ui
* @desc Namespace for all jQuery UI components
* @see http://api.jqueryui.com/demos/
*/

/**
* @exports $.fn.ui as $.ui
*/

/**
 * This jQuery plugin makes simple clientside
 * form validation easy, whilst still offering plenty of customization options
 * @interface validate
 * @memberOf $.fn
 * @see http://jqueryvalidation.org/documentation
 */

/* VALIDATOR MEMBERS */
/**
 * Callback for handling the actual submit when the form is valid.
 * Gets the form as the only argument. Replaces the default submit.
 * The right place to submit a form via Ajax after it is validated.
 * @function submitHandler
 * @memberof $.fn.validate
 * @param {element} form
 * @example <caption>Example usage of submitHandler </caption>
 * $(".selector").validate({
 *    submitHandler: function(form) {
 *        // do other things for a valid form
 *        form.submit();
 *     }
 * });
 */
/**
 * @name rules
 * @type {object}
 * @memberof $.fn.validate
 * @see http://jqueryvalidation.org/validate
 * @example <caption>Example usage of rules</caption>
 * // Specifies a name element as required and an email element as required
 * (using the shortcut for a single rule) and a valid email address depending
 * on a checkbox being checked for contact via email and requires a parameter within the <code>depends</code> callback
 * $(".selector").validate({
 *   rules: {
 *       // at least 15€ when bonus material is included
        pay_what_you_want: {
            required: true
            min: {
            // min needs a parameter passed to it
                param: 15,
                depends: function(element) {
                    return $("#bonus-material").is(":checked");
                }
            }
        }
    }
    });
 */
/**
 * @name messages
 * @type {object}
 * @memberof $.fn.validate
 * @see http://jqueryvalidation.org/validate
 * @example <caption>Example usage of rules</caption>
  $(".selector").validate({
     rules: {
            name: {
                 required: true,
                 minlength: 2
             }
         },
         messages: {
            name: {
                required: "We need your email address to contact you",
                minlength: jQuery.validator.format("At least {0} characters required!")
            }
        }
    });
 */

/* END VALIDATE MEMBERS */


/**
 * A powerful, flexible jQuery plugin enabling you to easily create semantic, modern tooltips enhanced with the power of CSS.
 * @interface tooltipster
 * @memberOf $.fn
 * @see http://iamceege.github.io/tooltipster/
 */

/**
 * jQuery Steps is a smart UI component
 * which allows you to easily create wizard-like interfaces
 * @interface steps
 * @memberOf $.fn
 * @see http://www.jquery-steps.com/
 * @see http://www.jquery-steps.com/Examples
 * @see https://github.com/rstaib/jquery-steps/wiki/Settings
*/

/* STEPS MEMBERS */
/**
 * Fires before the step changes and can be used to prevent step changing
 * by returning <code>false</code>. Very useful for form validation.
 * @method onStepChanging
 * @type {event}
 * @memberof $.fn.steps
 * @param {event} event
 * @param {number} currentIndex Index of current step
 * @param {number} newIndex Index of new step
 */
/**
 * Fires after step changed
 * @method onStepChanged
 * @type {event}
 * @memberof $.fn.steps
 * @param {event} event
 * @param {number} currentIndex Index of current step
 * @param {number} priorIndex Index of prior step
 */
/**
 * Fires before finishing and can be used to prevent completion by returning
 * <code>false</code>. Very useful for form validation.
 * @method onFinishing
 * @memberof  $.fn.steps
 * @type {event}
 * @param {event} event
 * @param {number} currentIndex Index of current step
*/
/**
 * Fires before finishing and can be used to prevent completion by returning <code>false</code>. Very useful for form validation.
 * @type {event}
 * @memberof $.fn.steps
 * @method onFinished
 * @param {event} event
 * @param {number} currentIndex Index of current step
 */

/* END STEPS MEMBERS */



/**
 * jQuery Upload plugin
 * @interface  fileinput
 * @memberOf $.fn
 * @see http://plugins.krajee.com/file-input/
 */
/**
     * This event is triggered only for ajax uploads and after upload is completed
     * for each thumbnail file. This event is triggered ONLY for ajax uploads and in the
     * following scenarios:
     * - When the upload icon in each preview thumbnail is clicked and file is uploaded successfully, OR
     * - When you have uploadAsync set to true and you have triggered batch upload. In this case,
     * the fileuploaded event is triggered after every individual selected file is uploaded successfully.
     * @public
     * @method upload
     * @type {event}
     * @memberof $.fn.fileinput
     * @param {event} event
     * @param {object} data This is a data object that sends the following information
     * - <code>form</code> - the FormData object which is passed via XHR2 (or empty if unavailable)
     * - <code>files</code> - the file stack array (or empty if unavailable)
     * - <code>extra</code> - the <code>uploadExtraData</code> settings for the plugin (or empty if unavailable)
     * - <code>response</code> - the ( sent via ajax response (or empty if unavailable)
     * - <code>reader</code> - the FileReader instance (or empty if unavailable)
     * - <code>jqXHR</code> - the <code>jQuery XMLHttpRequest</code> object used for the transaction (or empty if unavailable)
     * @param {string} previwId the identifier of each file's parent thumnail div element in the preview windo
     * @param {number} index the zero-based index of teh file in the stack
     * @listens $.fn.fileinput#fileuploaderror
     * @listens $.fn.fileinput#fileuploaded
     * @see http://plugins.krajee.com/file-input#event-fileuploaderror
     * @see http://plugins.krajee.com/file-input#event-fileuploaded
    */


/**
 * jqGrid is an Ajax-enabled JavaScript control that provides solutions
 * for representing and manipulating tabular data on the web. Since the
 * grid is a client-side solution loading data dynamically through Ajax
 * callbacks, it can be integrated with any server-side technology,
 * including PHP, ASP, Java Servlets, JSP, ColdFusion, and Perl.
 * @interface  jqGrid
 * @memberOf $.fn
 * @see http://www.trirand.com/jqgrid/jqgrid.html
 * @see http://www.trirand.com/jqgridwiki/doku.php?id=wiki:jqgriddocs
 */

/**
 * FlipClock is a jquery plugin for timers
 * @interface  FlipClock
 * @memberOf $.fn
 * @see http://flipclockjs.com/
 */

/**
 * Live Query utilizes the power of jQuery selectors
 * by firing callbacks for matched elements auto-magically,
 * even after the page has been loaded and the DOM updated.
 * @interface  livequery
 * @memberOf $.fn
 * @see https://github.com/brandonaaron/livequery
 */

