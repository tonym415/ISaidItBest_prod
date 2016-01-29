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
 * This jQuery plugin makes simple clientside
 * form validation easy, whilst still offering plenty of customization options
 * @namespace validate
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
 * @namespace tooltipster
 * @memberOf $.fn
 * @see http://iamceege.github.io/tooltipster/
 */

/**
 * jQuery Steps is a smart UI component
 * which allows you to easily create wizard-like interfaces
 * @namespace steps
 * @memberOf $.fn
 * @see http://www.jquery-steps.com/
 * @see http://www.jquery-steps.com/Examples
 * @see https://github.com/rstaib/jquery-steps/wiki/Settings
*/

/* STEPS MEMBERS */
/**
 * Fires before the step changes and can be used to prevent step changing by returning <code>false</code>. Very useful for form validation.
 * @event $.fn.steps#onStepChanging
 * @name steps.changing
 * @param {event} event
 * @param {number} currentIndex Index of current step
 * @param {number} newIndex Index of new step
 */
/**
 * Fires after step changed
 * @event $.fn.steps#onStepChanged
 * @name steps.changed
 * @param {event} event
 * @param {number} currentIndex Index of current step
 * @param {number} priorIndex Index of prior step
 */
/**
 * Fires before finishing and can be used to prevent completion by returning <code>false</code>. Very useful for form validation.
 * @event $.fn.steps#onFinishing
 * @name steps.finishing
 * @param {event} event
 * @param {number} currentIndex Index of current step
*/
/**
 * Fires before finishing and can be used to prevent completion by returning <code>false</code>. Very useful for form validation.
 * @event $.fn.steps#onFinished
 * @name steps.finished
 * @param {event} event
 * @param {number} currentIndex Index of current step
 */

/* END STEPS MEMBERS */



/**
 * jQuery Upload plugin
 * @namespace  fileinput
 * @memberOf $.fn
 * @see http://plugins.krajee.com/file-input/
 */
/**
 * jsGrid is a lightweight client-side data grid control based on jQuery. It supports basic grid operations like inserting, filtering, editing, deleting, paging and sorting. jsGrid is flexible and allows to customize appearance and components.
 * @namespace  jqGrid
 * @memberOf $.fn
 * @see http://js-grid.com/docs/
 */

/**
 * Namespace to attach events to document
 * @namespace document
 * @memberof module:appModule
 */
