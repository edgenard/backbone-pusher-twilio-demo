BackbonePusherTwilioDemo.Collections.Posts = Backbone.Collection.extend({
  url: "/api/posts",

  model: BackbonePusherTwilioDemo.Models.Post,

  comparator: function(model){
    return -(model.get("id") || Infinity);
  }
});
