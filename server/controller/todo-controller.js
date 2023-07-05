import todoCollection from "../model/todo.js";


export const addTodo= async(req,res)=>{
    try{
        const newTodo=await todoCollection.create({
            data:req.body.data,
            createdAt:Date.now()
        })
    
        await newTodo.save();
       return res.status(200).json(newTodo);
    }catch(error){
        return res.status(500).json(error.message);
    }
};

export const getAllTodos=async(req,res)=>{
    try{
        // await todoCollection.find(['username':'akash']); if conditional
       const todos=await todoCollection.find({}).sort({'createdAt':-1});
       return res.status(200).json(todos);
    }catch(error){
        return res.status(500).json(error.message);
    }
}

export const toggleTodo=async(req,res)=>{
    try{
        const id=req.params.id;
        // await todoCollection.find(['username':'akash']); if conditional
       const todoRef=await todoCollection.findById(id);
       const todo=await todoCollection.findOneAndUpdate(
        {_id:id},
        {done:!todoRef.done}
       );

       await todo.save();
       return res.status(200).json(todo);
    }catch(error){
        return res.status(500).json(error.message);
    }
}

export const updateTodo=async(req,res)=>{
    try{
        const id=req.params.id;
        const data=req.body.data;
        
        //if waha pe display na ho ya dikkat ho to ye variable hata do aur todo.save hata do end me ye variable me find kara ke send kr
        const todo=await todoCollection.findOneAndUpdate(
            {_id:id},
            {data:data}
        );
        await todo.save();
        return res.status(200).json(todo);
    }catch(error){
        return res.status(500).json(error.message);
    }
}

export const deleteTodo=async(req,res)=>{
    try{
        const id=req.params.id;
        
        //if waha pe display na ho ya dikkat ho to ye variable hata do aur todo.save hata do end me ye variable me find kara ke send kr do
        const todo=await todoCollection.findOneAndDelete(
            {_id:id}
        );

        return res.status(200).json(todo);
    }catch(error){
        return res.status(500).json(error.message);
    }
}