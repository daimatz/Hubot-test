import hubot = require("hubot");

export = (robot: hubot.Robot): void => {
  robot.respond(/is it (xmas|christmas)\s?\?/i, (msg: hubot.Response) => {
    var today = new Date();
    msg.reply(today.getDate() === 25 && (today.getMonth() + 1) === 12 ? "YES" : "NO");
  });
}
