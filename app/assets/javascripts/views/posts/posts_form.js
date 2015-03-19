BackbonePusherTwilioDemo.Views.PostsForm = Backbone.View.extend({

  template: JST['posts/form'],

  tagName: "form",

  events: {
    "submit": "submit"
  },

  render: function(){
    template = this.template();
    this.$el.html(template);
    return this;
  },

  submit: function(event){
    event.preventDefault();

    var author = this.$("#input-author").val();
    var body = this.$("#input-body").val();

    var model = this.collection.create({
      author: author,
      body: body
    }, { wait: true });

    event.currentTarget.reset();
  }

});
