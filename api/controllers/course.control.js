import Progress from "../models/progress.model.js"


export const progressPost=async (req,res,next)=>{
    try {
        const newProgress = new Progress(req.body);
        const progress = await newProgress.save();
        res.status(201).json({
            success: true,
            data: progress,
        });
    } catch (err) {
        next(err); // Pass error to error-handling middleware
    }
}


export const progressGet=async (req,res,next)=>{
    try {
        const progress = await Progress.find();
        if (!progress || progress.length === 0) {
            const error = new Error("No progress records found");
            error.statusCode = 404;
            throw error; // Throw an error to be caught by middleware
        }
        res.status(200).json({
            success: true,
            data: progress,
        });
    } catch (err) {
        next(err); // Pass error to error-handling middleware
    }
}