const express=require('express');
const uploadFile = require('../middlewares/uploadFile');
const { addNewReport, getAverageOfAllData, getDataPerMonth, getDataPerYear,  getDataPerDate, getRecentData, getNumberArrangements } = require('../controllers/dataController');
const { addNewPredictionReport, getAverageOfAllPredictionData, getPredictionDataPerMonth, getPredictionDataPerYear,  getPredictionDataPerDate} = require('../controllers/predictionController');
const { verifyToken } = require('../middlewares/verifyToken');

const dataRoutes=express.Router();

// add new report
dataRoutes.post('/add',verifyToken,uploadFile.single('file'),addNewReport);

// get data per dataType and specific date
dataRoutes.post('/dataPerDate',verifyToken,getDataPerDate)

// get average of all data per dataType
dataRoutes.get(`/average/:type`,verifyToken,getAverageOfAllData)

// get average of all data per dataType
dataRoutes.get(`/recent/:type`,verifyToken,getRecentData)


// get data per month of a given dataType
dataRoutes.post('/dataPerMonth',verifyToken,getDataPerMonth)

// get data per year of a given dataType
dataRoutes.post('/dataPerYear',verifyToken,getDataPerYear)


// get data per year of a given dataType
dataRoutes.get('/arrangements',verifyToken,getNumberArrangements);

//predictions 

dataRoutes.post('/addPrediction',verifyToken,uploadFile.single('file'),addNewPredictionReport);


// get data per month of a given dataType
dataRoutes.post('/predictiondataPerMonth',verifyToken,getPredictionDataPerMonth)

// get data per year of a given dataType
dataRoutes.post('/predictiondataPerYear',verifyToken,getPredictionDataPerYear)


// get data per dataType and specific date
dataRoutes.post('/predictiondataPerDate',verifyToken,getPredictionDataPerDate)

// get average of all data per dataType
dataRoutes.get(`/averageprediction/:type`,verifyToken,getAverageOfAllPredictionData)
module.exports={dataRoutes}