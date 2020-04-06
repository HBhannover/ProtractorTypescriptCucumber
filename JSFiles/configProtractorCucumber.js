"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
exports.config = {
    // The address of a running selenium server.
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'firefox'
    },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../features/*.feature'],
    cucumberOpts: {
        // require step definitions
        require: [
            './steps/*.js' // accepts a glob
        ]
    },
    // Options to be passed to Jasmine-node.
    //jasmineNodeOpts: {
    // showColors: true, // Use colors in the command line report.
    //},
    onPrepare() {
        protractor_1.browser.manage().window().maximize();
        protractor_1.browser.waitForAngularEnabled(false);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnUHJvdHJhY3RvckN1Y3VtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uZmlnUHJvdHJhY3RvckN1Y3VtYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQTJDO0FBRWhDLFFBQUEsTUFBTSxHQUFXO0lBQ3hCLDRDQUE0QztJQUMzQyxtREFBbUQ7SUFDbkQsYUFBYSxFQUFHLElBQUk7SUFFckIsdURBQXVEO0lBQ3ZELFlBQVksRUFBRTtRQUNaLFdBQVcsRUFBRSxTQUFTO0tBQ3ZCO0lBQ0QsU0FBUyxFQUFFLFFBQVE7SUFDckIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFDN0QsdUVBQXVFO0lBQ3ZFLDJDQUEyQztJQUMzQyxrQ0FBa0M7SUFDakMsS0FBSyxFQUFFLENBQUUsdUJBQXVCLENBQUU7SUFFbkMsWUFBWSxFQUFFO1FBQ1osMkJBQTJCO1FBQzNCLE9BQU8sRUFBRTtZQUNQLGNBQWMsQ0FBQyxpQkFBaUI7U0FDakM7S0FDRjtJQUVELHdDQUF3QztJQUN4QyxvQkFBb0I7SUFDbkIsOERBQThEO0lBQy9ELElBQUk7SUFFSixTQUFTO1FBQ0wsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNyQyxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FDSixDQUFDIn0=