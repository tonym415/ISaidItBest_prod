I Said It Best's Javascript Documentation
====================================================

This documentation is provided to give a better understanding of the structure 
of our system. It has been divided in to several helpful sections:

 * Components:
  * all forms
  * all validators for forms
  * libraries for pages (names end in "Lib")
  * event anchors (eg. document, element, etc)  

    Event anchors refer to events on the document, element  
    Element, in particular, is generic and can refer to any HTML element..
    ```Javascript
    //Example:
    $(document).on('click',...);
    $("#element").on('click',...);
     ```
 * Modules
  Refer to all the page .js files or combination thereof
 * Classes
 * Events
  All site events
 * Interfaces 
  jQuery plugins
 * Global
  Extensions of native Javascript (TODO: create ISIB namespace to handle this)

