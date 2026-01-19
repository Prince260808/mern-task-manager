import Todo from '../models/Todo.js';
import mongoose from 'mongoose';
import { asyncHandler } from '../middlewares/asyncHandler.js';

// Create Todo 
export const createTodo = asyncHandler(async(req, res) => {
        const {title, description} = req.body;
        // validation
        if(!title || !description){
            return res.status(500).json({success: false, message: "Title is required"});
        }

        const todo = await Todo.create({
            title,
            description
        });

        return res.status(200).json({success: true, message: "Todo created", todo});
});

// Get all Todo
export const getTodo = asyncHandler(async (req, res) => {
        // Query params
        const {search, sort, page=1, limit=10} = req.query;

        // Base query
        let query = {};

       // Search by title
       if(search){
        query.title = { $regex: search, $options: "i"}; // i for case sensitive
       }

       // Sorting
       let sortOption = {};
       if(sort === "asc") sortOption.createdAt = 1 //1 for ascending order
       else sortOption.createdAt = -1 //-1 for descending order

       // Pagination
       const skip = (page - 1) * limit;

       const todos = await Todo.find(query)
       .sort(sortOption)
       .skip(skip)
       .limit(parseInt(limit));

       const totalTodos = await Todo.countDocuments(query);

       return res.status(200).json({sucess: true, 
        message: "Todos fetched successfully",
        total: totalTodos,
        page: Number(page),
        limit: Number(limit),
        data: todos
       });
})

// Get Todo by id
export const getTodoById = asyncHandler(async (req,res) => {
        const {id} = req.params;

        // Validate ID based on mongoose
        if(!mongoose.Types.ObjectId.isValid(id)){
           return res.status(400).json({
            success: false,
            message: "Invalid Todo ID",
           });
        }

      const todo = await Todo.findById(id);
      if(!todo){
       return res.status(404).json({success: false, message: "Todo not found"});
      }

    // If todo found

    res.status(200).json({success: true, message: "Todo fetched Successfully",data: todo});
   
})

// Update Todo by ID
export const updateTodoById = asyncHandler(async (req, res) => {
        const {id} = req.params;
        const {title, description} = req.body;

        // validation
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
             success: false,
             message: "Invalid Todo ID",
            });
         }

         // Valid Input
         if( !title || title.trim() === "") {
            return res.status(400).json({
                success: false,
                message: "Title is required",
            });
         }

         // Update Todo
         const todo = await Todo.findByIdAndUpdate(id, {title, description}, {new: true, runValidators: true});
         if(!todo){
            res.status(404).json({
                success: false,
                message: "Todo not found",
            })
         }

         // If todo found and updated
         return res.status(200).json({success: true, 
            message: "Todo updated successfully",
            data: todo})
})

export const toggleTodo = asyncHandler(async (req, res) => {
      const { id } = req.params;
  
      // Validate MongoDB ID
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
          success: false,
          message: "Invalid Todo ID",
        });
      }
  
      const todo = await Todo.findById(id);
      if (!todo) {
        return res.status(404).json({
          success: false,
          message: "Todo not found",
        });
      }
  
      // Toggle status
      todo.isCompleted = !todo.isCompleted;
      await todo.save();
  
      return res.status(200).json({
        success: true,
        message: "Todo toggled successfully",
        data: todo,
      });
  });
  
  // Delete todo by id
  export const deleteTodo = asyncHandler(async (req, res) => {
        const {id} = req.params;
        // validate id based on mongoose
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
              success: false,
              message: "Invalid Todo ID",
            });
          }

          const todo = await Todo.findByIdAndDelete(id);

          if (!todo) {
            return res.status(404).json({
              success: false,
              message: "Todo not found",
            });
          }
      
          // If todo found and deleted
        return res.status(200).json({success: true, message:"Todo deleted successfully", data: todo}); 
  });