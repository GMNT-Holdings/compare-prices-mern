const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/price-comparison', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB; 