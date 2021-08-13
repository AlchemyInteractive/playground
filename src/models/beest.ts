import mongoose from "mongoose";

const BeestSchema = new mongoose.Schema(
    {
        name: { type: String },
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
            getters: true,
            transform: (doc, ret) => {
                ret.id = ret._id;
                delete ret.__v;
                return ret;
            },
        },
    }
);

export default mongoose.model("Beest", BeestSchema);
