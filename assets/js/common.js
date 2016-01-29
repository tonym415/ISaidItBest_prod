/**
 *  The first JS file to be loaded. Takes care of setting up all of the
 *  required paths
 */

// configure RequireJS
requirejs.config({
    baseURL: "assets/js",
    waitSeconds: 15,
    paths: {
        // global application object
        app: 'app',
        // app libraries
        appLib: 'lib/pagesLib/appLib',
        adminLib: 'lib/pagesLib/adminLib',
        gameLib: 'lib/pagesLib/gameLib',
        // The libraries to be used
        jquery: [
            '//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery',
            // if the CDN location fails, load from this location
            'lib/plugins/jquery-1.11.3'
        ],
        jqueryUI: [
            '//ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/jquery-ui',
            // '//code.jquery.com/ui/1.11.4/jquery-ui.min',
            // if the CDN location fails, load from this location
            'lib/plugins/jquery-ui'
        ],
        validate: [
            '//cdn.jsdelivr.net/jquery.validation/1.14.0/jquery.validate',
            // if the CDN location fails, load from this location
            'lib/plugins/jquery.validate'
        ],
        additional_methods: 'lib/plugins/additional-methods',
        // plugins
        livequery: 'lib/plugins/jquery.livequery',
        flipclock: 'lib/plugins/flipclock',
        cookie: 'lib/plugins/jquery-cookie',
        steps: 'lib/plugins/jquery.steps',
        blockUI: 'lib/plugins/jquery.blockUI',
        avatar: 'lib/plugins/avatar',
        tooltipster: 'lib/plugins/jquery.tooltipster',
        upload: 'lib/plugins/jquery.fileupload',
        bootstrap : [
            // '//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min',
            'lib/plugins/bootstrap'
        ],
        fileInput : 'lib/plugins/fileinput.min',
        jqGrid: [
            // '//cdnjs.cloudflare.com/ajax/libs/jqgrid/4.6.0/js/i18n/grid.locale-en',
            'lib/plugins/grid.locale-en'
            ],
        jqGridSrc: [//'//cdnjs.cloudflare.com/ajax/libs/jqgrid/4.6.0/js/jquery.jqGrid.src',
            'lib/plugins/jquery.jqgrid.src']
    },
    shim: {
        jquery: {
            exports: '$'
        },
        jqueryUI: {
            exports: '$',
            deps: ['jquery']
        },
        jqGridSrc: {
            exports: 'jqGridSrc',
            deps: ['jquery', 'jqueryUI']
        },
        jqGrid: {
            deps: ['jqueryUI', 'jqGridSrc']
        },
        tooltipster: {
            deps: ['jquery']
        },
        qtip: {
            deps: ['jquery']
        },
        upload: {
            deps: ['jquery', 'jqueryUI']
        },
        bootstrap: {
            deps: ['jquery']
        }
        // additional_methods: {
        //  deps:['validate']
        // }
    }
});
