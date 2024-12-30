class MessagesController < ApplicationController
  # GET /messages/:id

  def random_message
    message = Message.order("RANDOM()").first
    render json: message
  end
  def index
    # If you want to get one random message:
    @message = Message.order("RANDOM()").first
    render json: @message
  end

  def show
    @message = Message.find(params[:id])

    render json: @message
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'Message not found' }, status: :not_found
  end

  def update
    @message = Message.find(params[:id])

    if @message.update(message_params)
      render json: @message, status: :ok
    else
      render json: { errors: @message.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def message_params
    params.require(:message).permit(:content)
  end
end
