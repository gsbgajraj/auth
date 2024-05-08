import mongoose from "mongoose";
import userSchema from './User';

const newuser = mongoose.model("newuser",userSchema);

const user1 = new newuser({
    name: "raj2",
    email: "raj2@gmail.com",
    password:18881888
});

book1
.save()
.then((res)=> {
    console.log(res);
})
.catch((err)=>{
    console.log(err.errors.price.message)
});

export default Infinity;