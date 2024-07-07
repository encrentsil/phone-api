 import {model, Schema } from "mongoose";
 import {toJSON} from '@reis/mongoose-to-json';
 import bcrypt from 'bcrypt';

 const userSchema = new Schema({
     username: {type: String, required: true, unique: true},
     password: {type: String, required: true},
 });

 userSchema.plugin(toJSON);
 export const UserModel = model('user', userSchema)

//Using Mongoose static method
userSchema.statics.signup = async function (username,password){

    //finding whether username exists
    const exists = await this.findOne({username})

    if (exists) {
        throw new Error ('User already in use')
    }
    
    //Generating Salt for password hashing
    const salt = await bcrypt.genSalt(10); //random string of characters  a random salt, which is used to enhance the security of the password hashing process.
    
    //Hashing password using salt
    const hash = await bcrypt.hash(password, salt);//contains password (textyou want to hash ) + salt the generated salt obtained from genSalt()

    //Creating new user
    const user = await this.create({ username, password: hash})

    return user;
}

