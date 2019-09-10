const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

const CompanySchema = new Schema ({
    _id: Schema.Types.ObjectId,
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    address: {
        type: String,
        trim: true,
        required: true
    },
    service_of_activity: {
        type: String,
        trim: true,
        required: true
    },
    number_of_employees: {
        type: Number,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    type: {
        type: String,
        trim: true,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const CompanyModel = model("Company", CompanySchema);

module.exports = CompanyModel;
