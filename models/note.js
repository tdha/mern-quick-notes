const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const userSchema = new Schema({
    text: {
        type: String, 
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true,
    toJSON: {
        transform: function(doc, ret) {
            delete ret.password;
            return ret;
        }
    }
  });

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next(); // 'this' is the user doc
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS); // update the password with the computed hash
    return next();
});
  
module.exports = mongoose.model('Note', userSchema);