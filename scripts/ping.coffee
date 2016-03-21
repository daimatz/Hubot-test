module.exports = (robot) ->
  robot.hear /.*/, (msg) ->
    msg.send msg.name + " says: " + msg.message
