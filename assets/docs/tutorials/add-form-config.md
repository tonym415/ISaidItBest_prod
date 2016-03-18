To add another config to the [formManager object]{@link adminLib.formManager} the correct format is:

 * form name
  * abbreviation of the form name
  * description (used in the ajax call to facilitate logging)
  * validator (configuration options for form validation) Referenc: $.fn.validate
  * rules (form specific validation rules)
  * messages (form specific validation messages)

Example
```javascript
    "formname" :{
            abbr: "FN",
            desc: "Example Form",
            validator: {
                rules: { ex_input: 'required' },
                messages: { ex_input: "Please enter your new example text"}
            }
        }
```
