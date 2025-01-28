import mongoose from "mongoose";

const meterSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    meterId: {
        type: Number,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    consumption: {
        type: Number,
        required: true,
    },
});

const MeterData = mongoose.model("MeterData", meterSchema);

export default MeterData;
