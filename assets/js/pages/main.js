/**
    Handles js interaction for the index page used in conjunction with
    {@link module:login Login Module} and {@link module:signup Signup Module}
    @module main
 */
require(['jquery','app'], function($, app){
    var showLogin = app.init('home');
    $('#fbCall').on('click', app.loginFB);
    // show signup if showlogin
    if (showLogin) app.showLoginDialog(1);
});
