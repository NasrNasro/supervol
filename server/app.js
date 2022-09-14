const express=require('express');
const app=express();
const connectDB=require('./config/connection')
const authRouter=require('./routes/auth')
const profileRouter=require('./routes/profile')
// connection with database
connectDB();
// middlewares
app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/profile', profileRouter)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is running on port ${port}`));