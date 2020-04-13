class Api::SearchController < ApplicationController
  def index
    @users = User.where('username LIKE ?', "%" + params[:search] + "%").all
    render :index
  end
end