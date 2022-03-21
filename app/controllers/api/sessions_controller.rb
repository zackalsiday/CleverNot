class Api::SessionsController < ApplicationController
    # skip_before_action :verify_authenticity_token
protect_from_forgery with: :null_session


  def create
        @user = User.find_by_credentials(
        
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      
      login(@user)
      #  debugger
      render "api/users/show"
 
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy
   
      @user = current_user
  #  debugger
    if @user
       
      logout
      render "{}"
    else
      render json: ["it's not working"], status: 404
    end
  end
  
end
