class Api::NotesController < ApplicationController
  def index
    @notes = current_user.notes 
    render :index 
  end

  def show
    @note = Note.find(params[:id])
    if @note 
      render :show 
    else 
      render json: ['This note does note exist'], status: 404
    end
  end

  def create
    @note = Note.new(note_params)
    if @note.save 
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def update
    @note = Note.find(params[:id]) 

    if @note.update_attributes(note_params)
      render :show 
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def destory
    @note = Note.find(params[:id]) 
    if @note && @note.destroy 
      render :show // what are we showing if its being deleted  
    else 
      render json: ["This note does not exist"], status: 404
    end
  end

  def note_params
    params.require(:note).permit(:id, :title, :content, :author_id)
  end
end
