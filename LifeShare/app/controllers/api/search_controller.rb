class Api::SearchController < ApplicationController
  def index
    if params[:search].length > 0
      @users = User.where('username LIKE ?', "%" + params[:search] + "%").all
    else 
      @users = nil
    end
    render :index
  end
end