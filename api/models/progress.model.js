import mongoose from "mongoose";

const liveTestSchema = new mongoose.Schema(
  {
    examType: {
      type: String,
      required: true, 
      trim: true,
    },
    courseTitle: {
      type: String,
      required: true,
      trim: true,
    },
    liveStatus: {
      type: String,
      default: null, 
      trim: true,
    },
    details: {
      type: [String], 
      required: true,
      validate: [arrayLimit, "{PATH} exceeds the limit of 4"], 
    },
    syllabusLink: {
      type: String,
      required: true,
      trim: true,
    },
    syllabusDecs: {
      type: String,
      trim: true,
    },
    
  },
  {
    timestamps: true, 
  }
);


function arrayLimit(val) {
  return val.length <= 4;
}


const LiveTest = mongoose.model("LiveTest", liveTestSchema);

export default LiveTest;
