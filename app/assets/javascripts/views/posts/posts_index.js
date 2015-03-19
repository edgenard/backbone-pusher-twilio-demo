BackbonePusherTwilioDemo.Views.PostsIndex = Backbone.View.extend({

  template: JST['posts/index'],

  tagName: "section",

  initialize: function(){
    this.listenTo(this.collection, "add", this.render);
  },

  render: function(){
    template = this.template({posts: this.collection});
    this.$el.html(template);
    return this;
  }

});
