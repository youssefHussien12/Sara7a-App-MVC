import mongoose from 'mongoose';

const connectDB = async () => {
    const mongoURI = 'mongodb+srv://Sara7a-App:AnoyFPSkMrIcBdME@cluster0.ydjbez3.mongodb.net/sara7a-app';
    await mongoose.connect(mongoURI).then(() => {
        console.log('MongoDB Connected Successfully!');

    }).catch((error) => {
        console.error('MongoDB Connection Error:', error.message);
    })
};

export default connectDB;



