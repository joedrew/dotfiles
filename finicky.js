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
      // make teams links open in teams
      match: [/teams\.microsoft\.com\/l\/meetup-join/],
      browser: "com.microsoft.teams2",
    },
    {
      // make miro links open in miro
      match: [/miro\.com\/app/],
      browser: "com.electron.realtimeboard",
    },
    {
      match: [
        finicky.matchDomains(/console\.jumpcloud\.com/),
        finicky.matchDomains(/(.*\.)?indexexchange\.(.*)/),
        finicky.matchDomains(/app\.food\.ee/),
        finicky.matchDomains(/(.*\.)?google\.com/),
        finicky.matchDomains(/(.*\.)?microsoft\.com/),
        finicky.matchDomains(/(.*\.)?sharepoint\.com/),
        finicky.matchDomains(/(.*\.)?office\.com/),
        finicky.matchDomains(/(.*\.)?adp\.com/),
        finicky.matchDomains(/(.*\.)?github\.com/),
        finicky.matchDomains(/(.*\.)?lucid\.app/),
        finicky.matchDomains(/(.*\.)?office\.net/),
        finicky.matchDomains(/(.*\.)?slack\.com/),
        finicky.matchDomains(/(.*\.)?slack\.com/),
        finicky.matchDomains(/(.*\.)?troopr\.io/),
        finicky.matchDomains(/(.*\.)?casalemedia\.com/),
        finicky.matchDomains(/(.*\.)?trello\.com/),
        finicky.matchDomains(/(.*\.)?mural\.co/),
        finicky.matchDomains(/(.*\.)?jellyfish\.co/),
        finicky.matchDomains(/(.*\.)?prebid\.org/),
        finicky.matchDomains(/(.*\.)?dayforcehcm\.com/),
        finicky.matchDomains(/(.*\.)?mariadb\.com/),
        finicky.matchDomains(/(.*\.)?dayforcehcm\.page\.link/),
      ],
      browser: "Firefox",
    },
  ],
};
