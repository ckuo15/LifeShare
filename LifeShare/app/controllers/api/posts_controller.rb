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
        # for update(edit) just include an edit page
    end 

    def show
        Post.find_by(params[:id])
    end

    def index
        @posts = Post.all
    end 

    def destroy
    end 


    private

    def post_params
        params.require(:post).permit(:caption, :user_id, :photo)
    end 
end
