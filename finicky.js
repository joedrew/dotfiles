// Use https://finicky-kickstart.now.sh to generate basic configuration
// Learn more about configuration options: https://github.com/johnste/finicky/wiki/Configuration

module.exports = {
  defaultBrowser: "Safari",
  options: {
    logRequests: false,
  },
  handlers: [
    {
      // make zoom links open in zoom
      match: [/zoom.us\/j\//],
      browser: "us.zoom.xos",
    },
    {
      // make miro links open in miro
      match: [/miro\.com\/app/],
      browser: "com.electron.realtimeboard",
    },
    {
      match: [
        finicky.matchDomains(/(.*\.)?google.com/),
        finicky.matchDomains(/(.*\.)?notion.so/),
        finicky.matchDomains(/(.*\.)?github(status)?.com/),
        finicky.matchDomains(/(.*\.)?june.so/),
        finicky.matchDomains(/(.*\.)?figma.com/),
        finicky.matchDomains(/(.*\.)?slack.com/),
        finicky.matchDomains(/(.*\.)?bamboohr.com/),
        finicky.matchDomains(/(.*\.)?sentry.io/),
        finicky.matchDomains(/(.*\.)?forms\.gle/),
        finicky.matchDomains(/(.*\.)?hibob\.com/),
        finicky.matchDomains(/(.*\.)?aws\.amazon\.com/),
        finicky.matchDomains(/localhost/),
        finicky.matchDomains(/(.*\.)?circleci\.com/),
        finicky.matchDomains(/(.*\.)?datadoghq\.com/),
        finicky.matchDomains(/(.*\.)?fullstory\.com/),
        finicky.matchDomains(/(.*\.)?fsty\.io/),
        finicky.matchDomains(/(.*\.)?looker\.com/),
        finicky.matchDomains(/(.*\.)?npmjs\.com/),
        finicky.matchDomains(/(.*\.)?amplitude\.com/),
        finicky.matchDomains(/(.*\.)?lucid\.app/),
        finicky.matchDomains(/(.*\.)?getresq\.com/),
        finicky.matchDomains(/(.*\.)?appcenter\.ms/),
        finicky.matchDomains(/(.*\.)?lucidspark\.com/),
        finicky.matchDomains(/(.*\.)?lucid\.app/),
        finicky.matchDomains(/(.*\.)?ashbyhq\.com/),
        finicky.matchDomains(/(.*\.)?donut\.ai/),
        finicky.matchDomains(/(.*\.)?miro\.com/),
        finicky.matchDomains(/(.*\.)?re-sq\.com/),
        finicky.matchDomains(/127\.0\.0\.1/),
        finicky.matchDomains(/(.*\.)?getpostman\.com/),
        finicky.matchDomains(/(.*\.)?twilio\.com/),
        finicky.matchDomains(/(.*\.)?twiliocdn\.com/),
        finicky.matchDomains(/(.*\.)?1password\.com/),
        finicky.matchDomains(/(.*\.)?segment\.com/),
        finicky.matchDomains(/(.*\.)?intercom\.com/),
        finicky.matchDomains(/(.*\.)?calendly\.com/),
        finicky.matchDomains(/(.*\.)?amazonaws\.com/),
        finicky.matchDomains(/(.*\.)?monday\.com/),
        finicky.matchDomains(/(.*\.)?mapbox\.com/),
        finicky.matchDomains(/(.*\.)?kustomer(app)?\.com/),
        finicky.matchDomains(/(.*\.)?uwaterloo\.ca/),
        finicky.matchDomains(/(.*\.)?sendgrid\.com/),
        finicky.matchDomains(/(.*\.)?linkedin\.com/),
        finicky.matchDomains(/(.*\.)?uwaterloo\.ca/),
        finicky.matchDomains(/(.*\.)?teams\.microsoft\.com/),
        finicky.matchDomains(/(.*\.)?onetimesecret\.com/),
        finicky.matchDomains(/(.*\.)?noteforms\.com/),
        finicky.matchDomains(/(.*\.)?fivetran\.com/),
        finicky.matchDomains(/(.*\.)?sendgrid\.net/),
        finicky.matchDomains(/(.*\.)?hex\.tech/),
        finicky.matchDomains(/(.*\.)?getclockwise\.com/),
        finicky.matchDomains(/(.*\.)?vanhack\.com/),
        finicky.matchDomains(/(.*\.)?zapier\.com/),
        finicky.matchDomains(/(.*\.)?stripe\.com/),
        finicky.matchDomains(/(.*\.)?gradle\.com/),
        finicky.matchDomains(/(.*\.)?rippling\.com/),
        finicky.matchDomains(/(.*\.)?okta\.com/),
      ],
      browser: "Firefox",
    },
  ],
};