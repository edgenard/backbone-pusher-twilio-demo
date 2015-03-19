class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  private

  def push_post(post)
    Pusher.trigger('posts', 'new_post', post.to_json)
  end

  def send_text(number, body)
    client = Twilio::REST::Client.new
    client.messages.create(
      from: ENV["TWILIO_NUMBER"],
      to: number,
      body: body
    )
  end

end
