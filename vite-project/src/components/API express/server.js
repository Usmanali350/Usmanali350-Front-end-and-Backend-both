const express = require('express');
const { dbConnection } = require('./mongodb');
const { ObjectId } = require('mongodb');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
// Initial Test Route
app.get('/', async (req, res) => {
  try {
    const db = await dbConnection(); // Ensure this gets executed
    return res.status(200).json({ message: 'Welcome to the API!' });
  } catch (error) {
    console.error('Error in root route:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});


// Students Route
app.get('/api/Students', async (req, res) => {
  try {
    const db = await dbConnection();
    const StudentsCollection = db.collection('Students');
    const StudentsData = await StudentsCollection.find({}).toArray();
    return res.status(200).json({
      message: 'All data fetched successfully',
      data: StudentsData,
      status: 'OK',
    });
  } catch (error) {
    console.error('Error fetching students data:', error);
    return res.status(500).json({
      message: 'Internal server error',
      data: [],
      status: 'ERROR',
    });
  }
});

// this route is for posting data
app.post('/api/Controler/add',async(req,res)=>{
  
    const db=await dbConnection();
    let name = req.body.name
    let role = req.body.role
    let stringth=req.body.stringth? req.body.stringth:"None"

    
    const ControlerCollection  = await db.collection("Controler");
    constControlerData=await ControlerCollection.insertOne({
      stringth:stringth
    });
    return res.json({message:"new data inserted successfully",Data:[],status:'ok'}).status(200)
})


//this routeis for update
app.post('/api/Data/:id' ,async(req,res)=>{

})


const PORT = 2000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
