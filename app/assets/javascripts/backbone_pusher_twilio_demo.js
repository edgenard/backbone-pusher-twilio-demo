window.BackbonePusherTwilioDemo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($rootEl) {

    var posts = new this.Collections.Posts();
    posts.fetch();

    var formView = new this.Views.PostsForm({ collection: posts });
    var indexView = new this.Views.PostsIndex({ collection: posts });

    $rootEl.append(formView.render().$el);
    $rootEl.append(indexView.render().$el);

    var channel = window.pusher.subscribe('posts');

    channel.bind('new_post', function(data) {
      var post = new BackbonePusherTwilioDemo.Models.Post(data);
      posts.add(post);
    });

  }
};
