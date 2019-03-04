# Slack Notificator
Send notification to Slack when a new channel has been created.

## How to use
###STEP1. Preparation
Create lambda project & API Gateway, then also create a new app on Slack.

###STEP2. Verification

You need to add this source below on index.js due to verify API for Slack.
```
exports.handler = (event, context, callback) => {
    callback(null, event["challenge"]);
};
```

Slack will response like below to verify a new API end-point.
```
{
  "token": "Jhj5dZrVaK7ZwHHjRyZWjbDl",
  "challenge": "3eZbrw1aBm2rZgRNFdxV2595E9CY3gmdALWMmHkvFXO7tYXAYM8P",
  "type": "url_verification"
}
```

Access to **Features > Event Subscriptions**, and type API end-point on the field. If "Verified" is shown, the setting is almost done.


###STEP3. Setting up index.js

Get Bot User OAuth Access Token from **Features > OAuth & Permissions**, and then insert ID you have given on index.js.

Finally, make a ZIP file which contains node_modules and index.js and upload it to AWS.

###STEP4. Test action

Now, you can test this lambda action by the following JSON:
```
{
    "token": "1CGzmoeTNdjIU93YAAAAAAAA",
    "team_id": "TAAAAAAAA",
    "api_app_id": "AAAAAAAAA",
    "event": {
        "type": "channel_created",
        "channel": {
            "id": "CDP7HAAAA",
            "is_channel": true,
            "name": "z_test181028-15",
            "name_normalized": "z_test181028-15",
            "created": 1540640302,
            "creator": "UAJ3EAAAA",
            "is_shared": false,
            "is_org_shared": false
        },
        "event_ts": "1540640000.160000"
    },
    "type": "event_callback",
    "event_id": "EvDQSVAAAA",
    "event_time": 1540640000,
    "authed_users": [
        "UDR780000"
    ]
}
```
*Important: The Response from Slack is different with official documentation at now. Do not forget response format is constantly changing.*


Gotcha!

Thank you for resources below:
https://api.slack.com/events/channel_created<br>
https://blog.engineer.adways.net/entry/2017/08/18/120000<br>
https://qiita.com/snoguchi/items/ca70d0dacbf6f70dfb2c<br>
http://coxcox.hatenablog.com/entry/2017/08/16/163719