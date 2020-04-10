class Api::PostsController < ApplicationController
    def create
        @post = Post.new(post_params)
        @post[:user_id] = current_user.id
        if @post.save!
            render :show #show.json.builder
        else
             render json: @post.errors.full_messages, status: 401
        end 
    end

    def update
        @post = current_user.posts.find(params[:id])
        if @post.update(post_params)
            render :show
        else 
            render json: @post.errors.full_messages, status: 401
        end 
    end 

    def show
        Post.find_by(params[:id])
    end

    def index
        user = User.find(params[:user_id])
        @posts = user.posts.includes(:user, comments: [:user]) #includes load data in first query so you dont query every single time. got rid of N+1 query.
        render :index
    end 

    def feed 
        @posts = Post.all.includes(:user, comments:[:user])
        render :index
    end

    def destroy
        @post = current_user.posts.find(params[:id])
        @post.destroy
        render :show
    end 


    private

    def post_params
        params.require(:post).permit(:caption, :user_id, :photo)
    end 
end
