import mongoose from 'mongoose';

const connectDB = async () => {
    const mongoURI = 'mongodb://mongo:iRVkwvWIzmJLwNNuzqcgbRVTZNTGAGXC@shinkansen.proxy.rlwy.net:19027';
    await mongoose.connect(mongoURI).then(() => {
        console.log('MongoDB Connected Successfully!');

    }).catch((error) => {
        console.error('MongoDB Connection Error:', error.message);
    })
};

export default connectDB;



