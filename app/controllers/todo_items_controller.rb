class TodoItemsController < ApplicationController
    before_action :set_todo_list
    
    
    def create
        @todo_item = @todo_list.todo_items.create(todo_item_params)
        redirect_to todo_list_path(@todo_list)
    end
    
    def destroy
        @todo_item = @todo_list.todo_items.find(params[:id])
        if @todo_item.destroy
            flash[:success] = "Todo List item was deleted."
        else
            flash[:error] = "Todo list item could not be deleted."
        end
        redirect_to @todo_list
    end
    
    def complete
        
    
    private 
    
    def set_todo_list
        @todo_list = TodoList.find(params[:todo_list_id])
    end
    
    def set_todo_item
        @todo_item = @todo_list.todo_items.find(params[:id])
    
    def todo_item_params
        params[:todo_item].permit(:content)
    end
end
