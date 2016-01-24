/**
* @fileOverview
*Library For: App
*Contents:
*-    navigation pages hash
*-    skill levels hash
*-    Rules text
*-    JQuery addons
*-    JS prototypes
*
* When the module is loaded it will be referred to as "lib"
* @author Tony Moses
* @version 0.1
* @namespace app/appLib
* @returns {Object} Returns library of config vars and functions
*/

define(['jquery','tooltipster'], function($) {
    /**
     * @typedef {object} navPages
     * @prop {string} key Page Id
     * @prop {string} value Filespec
     * @memberof app/appLib
     * @desc This object contains page aliases and can be used to refer to site pages and helps preserve DRY method
     * @example
     * // returns "index.html
     * lib.navPages.home;
     * @returns {string} Returns file name for alias
     */

    /**
     * @typedef {array} skillLevels
     * @desc This is an array of objects containing skill title/desc. This object will be used to
     * refer to site pages and helps preserve DRY method.
     * For usage example see: {@link module:app~getLevelName}<a href='app.js#sunlight-1-line-407'>(app.js line 104)</a>
     * @memberof app/appLib
     * @returns {string} Returns file name for alias
     */
   /** @type {navPages} */
    var navPages = {
        'home' : 'index.html',
        'game' : 'game.html',
        'feedback': 'feedback.html',
        'profile': 'profile.html',
        'about': 'about.html',
        'admin': 'admin.html'
    };


   /** @type {skillLevels} */
    var skillLevels = [{
            "title" : "Blowhard",
            "description" : "Look who hasn't even won eleven games....."
        },{
            "title" : "Bigmouth",
            "description" : "Get some games under you belt and we'll talk"
        },{
            "title" : "Conversationalist",
            "description" : "Looks like someone is making money"
        },{
            "title" : "Commentator",
            "description" : "Gaining momentum"
        },{
            "title" : "Scholar",
            "description" : "Look who can argue!"
        },{
            "title" : "Lecturer",
            "description" : "Debater Spectacular"
        },{
            "title" : "Advocate",
            "description" : "You know your stuff"
        },{
            "title" : "Orator",
            "description" : "Basically, Winston Churchill."
        },{
            "title" : "Elocutionist",
            "description" : "Straight winning"
        },{
            "title" : "Rhetorician",
            "description" : "Apex"
        }
    ];

    // rules div
    /**
     * @var tplRules
     * @memberof app/appLib
     * @desc template for site rules
     * @todo Move template string to site template html
     */
    var tplRules = "<div class='agreement_text' style='display:none;'> \
                    <div class='rules'> \
                        <h2>Rules and Regulations</h2> \
                        <ol> \
                            <li> \
                                While <b><i>Isaiditbest</b></i> allows great leniency regarding freedom of speech while debating, Isaiditbest reserves the right to suspend or revoke membership to any member for anything that <b><i>Isaiditbest</b></i> determines is hate speech. Similarly, any intimidating language towards other members is also strictly prohibited. By using this website, all users acknowledge that Wesaiditbest retains the right to make these decisions regarding who may debate on our website. \
                            </li> \
                            <li> \
                                Group coordination, where there is a prearranged agreement between multiple members to vote for each other, is strictly prohibited.<br /> \
                                <p> \
                                    By using this website, all users acknowledge that any attempt to perform these actions will result in a ban and potential forfeit of remaining credit, which may be used only for the purposes of reimbursing potentially harmed contestants. Any use of this website comes with the knowledge that Isaiditbest retains the right to determine whether group coordination occurred and take these listed actions. Any customers facing potential suspension or credit forfeit will be given a minimum of 72 hours to appeal our decision. By using this website, all users give their consent to <b><i>Isaiditbest</b></i> to determine if group coordination occurred and undertake the actions mentioned in this document. \
                                </p><br /> \
                                <p> \
                                    <b><i>Isaiditbest</i></b> retains the right to make any and all decisions regarding who may use this website and all game decisions, including retroactive game decisions in the case that group coordination is believed to have occurred. By signing up and participating in games, I agree to these terms. \
                                </p> \
                            </li> \
                        </ol> \
                        <br> \
                        <p> \
                            <a class='agreement_close' href='#'>Close this dialog</a> \
                        </p> \
                    </div>";


    /**
     * @memberof app/appLib
     * @var txtFooter
     * @desc Visible footer text
     */
    var txtFooter = "Use of this website constitutes acceptance of the ISaidItBest \
        <a class=\"agreement\" href=\"#\">Rules Agreement</a>";

    /**
     * @global
     * @method tooltipster.setDefaults
     * @desc Set default values for tooltipster plugin
     */
    $.fn.tooltipster('setDefaults',{
        trigger: 'custom',
        onlyOne: false,
        positionTracker: true,
        position: 'right',
        updateAnimation: false,
        animation: 'swing',
        positionTrackerCallback: function(){
            this.hide();
        }
    });

    /**
     * @global
     * @method between
     * @desc  Extends javascript Number to have a between function
     * The function takes number and returns if that number is between the two
     * parameters
     * @param {number} min Minumum comparator
     * @param {number} max Maximum comparator
     * @example
     * //retuns true
     * 42.between(40, 50);
     * @return {Boolean} Boolean
     */
     Number.prototype.between = function(min, max){
         return this.valueOf() >= min && this.valueOf() <= max;
     };

     /**
       * @global
     * @method pluralize
     * @desc  Extends javascript String
     * The function takes string and returns pluralized version based on count
     * @param {number} count Thec count of items to base pluralization on
     * @param {string} [plural=s] Plural string
     * @example
     * //retuns cats
     * cat.pluralize(10);
     * @return {String} Pluralized string
     */
    String.prototype.pluralize = function(count, plural){
        if (plural == null){
            plural = this + 's';
        }
        return (count == 1 ? this : plural);
    };

    /**
     * @global
     * @method capitalize
     * @desc  Extends javascript String
     * The function takes string and returns capitalized string
     * @example
     * //retuns Error
     * var status = "error";
     * status.capitalize();
     * @return {String} capitalized string
     */
    String.prototype.capitlize = function(){
        return this.toLowerCase().replace( /\b\w/g, function(m){
            return m.toUpperCase();
        });
    };

    /**
     * @global
     * @method prefix
     * @desc  Extends javascript String
     * The function finds a prefix of a string based on a separator string
     * @param {string} [separator=_] String to mark prefix
     * @example
     * //retuns sub
     * var id = "sub_Category"
     * status.prefix();
     * @return {String} prefix of string
     */
    String.prototype.prefix = function (separator) {
        separator = (separator === undefined) ? '_' : separator;
        return this.substring(0, this.indexOf(separator) + 1);
    };

    /**
     * @global
     * @method prefix
     * @desc  Extends JQuery fn
     * Converts form data to js object
     * @example
     * //retuns form in js object
     * @return {object} formdata
     */
    $.fn.serializeForm = function() {
        var o = {"id": this.prop('id')};

        var a = this.serializeArray();
        $.each(a, function() {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };

    /**
     * @global
     * @method toMMSS
     * @desc  Extends Javascript String
     * Converts seconds as string/int to HH:MM:SS
     * @example
     * //retuns
     * @return {string} string
     */
    String.prototype.toMMSS = function () {
        var sec_num = parseInt(this, 10); // don't forget the second param
        var hours   = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);

        // if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        // var time    = hours+':'+minutes+':'+seconds;
        var time    = minutes+':'+seconds;
        return time;
    };

    return {
        navPages: navPages,
        skillLevels: skillLevels,
        /**
        * @method getFooterText
        * @memberof app/appLib
        * @desc
        * - {string} txtFooter See {@link module:app/appLib~txtFooter}
        * - {string} tplRules See {@link module:app/appLib~tplRules}
        *
        */
        getFooterText: function(){ return txtFooter + tplRules;}
    }
});
