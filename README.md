# Backbone & Pusher & Twilio Demo

Sending live cat sightings via text to a real time app.

1. [Pusher](http://pusher.com/) / [Gem](https://github.com/pusher/pusher-gem)
2. [Twilio](https://www.twilio.com/) / [Gem](https://github.com/twilio/twilio-ruby) / [Inbound SMS Docs](https://www.twilio.com/docs/api/twiml/sms/twilio_request#synchronous)
3. [Figaro](https://github.com/laserlemon/figaro#give-me-an-example)


Files to check out:
- [pusher.rb](./config/initializers/pusher.rb)
- [twilio.rb](./config/initializers/twilio.rb)
- [application.html.erb](./app/views/layouts/application.html.erb)
- [backbone_pusher_twilio_demo.js](./app/assets/javascripts/backbone_pusher_twilio_demo.js)
- [application_controller.rb](./app/controllers/application_controller.rb)
- [posts_controller.rb](./app/controllers/api/posts_controller.rb)
- [inbound_controller.rb](./app/controllers/api/inbound_controller.rb)

Don't forget to setup Figaro.

```yaml
    PUSHER_APP_ID: XXX
    PUSHER_KEY: XXX
    PUSHER_SECRET: XXX

    TWILIO_NUMBER: XXX
    TWILIO_SID: XXX
    TWILIO_TOKEN: XXX
```

You can do it!