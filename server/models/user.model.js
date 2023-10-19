const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    fullName: {
        type: String,
        required: [true, "Name is required"],

        minLength: [5, 'Name must be atleasst 5 character'],
        maxLength: [50, 'Name must be less than 50 character'],
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please fill in a valid email address',
        ]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [8, 'Password must be atleasst 5 character'],
        select: false
    },
    role:{
     type:String,
     enum:['USER','ADMIN'],
     default:'USER'
    },
    avatar:{
        public_id:{
            type:String
        },
        secure_url:{
            type: String
        }
    },
    forgotPasswordToken: String,
    forgotPasswordExpiary:Date
},{
    timestamps:true
});

const User =model('User', userSchema);


module.exports = User ;