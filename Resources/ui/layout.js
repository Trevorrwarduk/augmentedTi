/* layout
 * ======
 *
 * This file contains all the common layout information. My version of CSS
 *
 * Stand-alone file can be required in all modules
 *
 */

/*
 * Define the default font to be used
 */
var df    =    'HelveticaNeue';
var dfb    =    'HelveticaNeue-Bold';

var css    = {
    // The Screens background colors.
    sbkc : {
        // Main application background
        ab :    'transparent',
        // Home Screen background
        hs :    '#FFFFFF',
        // The title bar
        tb :    '#000000'
    },
    // titlebar specific
    tb : {
        // Height
        hi :    '50dp',
        // Text Align
        ta :    'center',
        // Font
        fnf :    dfb,
        // Font color
        fnc :    '#FFFFFF',
        // Font Size
        fns :    '25dp',
        // Font Weight
        fnw :    'bold',
    },
    // home screen specific
    hs : {
        // Text box background color
        tbbc :    'transparent',
        // Text box top
        tbtp :    '49dp',
        // Text box height
        tbhi :    '195dp',
        // Text box Text Align
        tbta :    'center',
        // Text box Font
        tbfnf :    dfb,
        // Text box Font color
        tbfnc :    '#000000',
        // Text box Font Size
        tbfns :    '15dp',
        // Text box Font Weight
        tbfnw :    'bold',
        // Text box left right padding
        tbpad :    '20dp',
        // sensor view Top
        svtp :    '260dp',
        // sensor view height
        svhi :    '200dp',
        // test label heights
        svtlh :    '22dp',
        // test label width
        svtlwi :    '80%',
        // test color box heights
        svtcbt :    '18dp',
        // test color box from top
        svtcbtp :    '2dp',
        // test color box % width
        svtcbwi :    '20%'
    },
    // The error message
    error : {
        // Font Color
        fc :    '#993333',
        // Font Size
        fs :    '18dp',
        // Font Family
        ff :    dfb,
        // Font Weight
        fw :    'bold',
        // Text Align
        ta :    'center'
    },
    // screen buttons
    butt : {
        // Width
        wi :    '90dp',
        // Height
        hi :    '30dp',
        // Font Color
        fc :    '#ffffff',
        // Font Size
        fs :    '15dp',
        // Font Family
        ff :    dfb,
        // Font Weight
        fw :    'bold',
        // Text Align
        ta :    'center',
        // Background Color
        bkc :    '#000000',
        // Border Radius
        br :    6,
        // Border Width
        bw :    2,
        // Border Color
        bc :    '#c3c3c3',
        // Touch Background Color
        tbkc :    '#ffffff',
        // Touch Font Color
        tfc :    '#000000',
        // Touch Border Color
        tbc :    "#000000"

    },
    // The activity indicator
    activity : {
        // Background Mask Color
        bmc :    '#ffffff',
        // Background opacity
        bmo :    0.30,
        // Font Color
        fc :    '#ffffff',
        // Font Size
        fs :    '15dp',
        // Font Family
        ff :    dfb,
        // Font Weight
        fw :    'bold',
        // Text Align
        ta :    'center',
        // Background Color
        bkc :    '#000000',
        // Border Radius
        br :    6,
        // Border Width
        bw :    2,
        // Border Color
        bc :    "#c3c3c3",
        // The dot layout
        dot : {
            // Background Color
            bkc :    '#000000',
            // Focus Background Color
            fbkc :    '#ffffff',
            // Border Radius
            br :    10,
            // Border Width
            bw :    2,
            // Border Color
            bc :    "#c3c3c3"
        }
    },
    // The augmented Reality Display
    ar : {
        // The radar blip
        blip : {
            // Blip Height
            height :    '4dp',
            // Blip Width
            width :    '4dp',
            // Blip Color
            color :    '#D4D4D4'
        },
        // The details view
        detail : {
            // Background Color
            bkc :    '#000000',
            // Background Opacity
            bko :    0.75,
            // Icon Size
            ics :    100,
            // Font Color
            fc :    '#ffffff',
        }
    }
};

/*
 * Export the required functions for access
 */
exports.css    =    css;
