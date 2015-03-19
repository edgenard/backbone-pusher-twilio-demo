class Api::InboundController < ApplicationController
  protect_from_forgery with: :null_session

  def twilio
    author = params[:From]
    body = params[:Body]

    post = Post.create!(author: author, body: body)

    push_post(post)
    send_text(author, "Thanks for your cat sighting! Have a nice day!")

    head :ok
  end

end