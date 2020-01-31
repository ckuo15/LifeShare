class Api::PostsController < ApplicationController
    def create
        @post = Post.new(post_params)
        if @post.save 
            render json: @post
        else
             render json: @post.errors.full_messages, status: 401
        end 
    end

    def update
        # for update(edit) just include an edit page
    end 

    def show
        
    end

    def index
        @posts = Post.all
    end 

    def destroy
    end 


    private

    def selected_post
        Post.find_by(params[:id])
    end 

    def post_params
        params.require(:post).permit(:caption, :user_id)
    end 
end