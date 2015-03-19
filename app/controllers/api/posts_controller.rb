class Api::PostsController < ApplicationController

  def index
    posts = Post.order(id: :desc).all
    render json: posts
  end

  def show
    post = Post.find(params[:id])
    render json: post
  end

  def create
    post = Post.create!(post_params)

    Pusher.trigger('posts', 'new_post', post.to_json)

    render json: post
  end

  private

  def post_params
    params.require(:post).permit(:author, :body)
  end

end