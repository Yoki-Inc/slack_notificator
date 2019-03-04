//Slack Configulation
var Botkit = require('botkit'); //BookitをImport
var controller = Botkit.slackbot({
	debug: true //デバッグ有無の設定
});
var slack = controller.spawn({
		token: 'PUT-YOUR-SLACK-TOKEN-HERE' //取得したトークンを入れる
});

// Slack Notification
exports.handler = (event, context, callback) => {
	var channelName = event["event"]["channel"]["name"]
	var channelId = event["event"]["channel"]["id"]
	var createdUser = event["event"]["channel"]["creator"]
	slack.say({
		text: '<!everyone> <@' + createdUser + '>が新しいチャンネルを作りました! 確認してみましょう!\n→ #' + channelName,
		link_names: 1,
		channel: 'PUT-CHANNEL-ID-HERE' //通知したいチャンネルID(Display IDではない)
	});
};
