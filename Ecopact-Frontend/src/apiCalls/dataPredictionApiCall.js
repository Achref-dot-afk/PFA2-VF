import request from './request';
import { dataActions } from '../slices/dataSlice';
import { toast } from 'react-toastify';



const postPredictionFile = (file) => {
    return async (dispatch, getState) => {
      try {
        const res = await request.post('/api/data/addPrediction', file, {
          headers: {
            Authorization: "Bearer " + getState().auth.user.token,
            'Content-Type': "multipart/form-data"
          }
        });
        toast.success(res.data);
        dispatch(getNH4AverageData());
        dispatch(getPxOyAverageData());
        dispatch(getNO3AverageData());
        dispatch(getRecentData('NH4'));
        dispatch(getRecentData('PxOy'));
        dispatch(getRecentData('NO3'));
        dispatch(getArrangementsNumber());
      } catch (err) {
        toast.error(err?.response?.data)
      }
    };
  };

const getNH4AveragePredictionData=()=>{
    return async (dispatch,getState)=>{
        try{
            
            const res= await request.get(`/api/data/averageprediction/NH4`,{
                headers: {
                    Authorization: "Bearer " + getState().auth.user.token, 
                }})
            dispatch(dataActions.getNH4AverageRates(res.data?.averageRate));
        }catch(err){
            //toast.error(err?.response?.data)
        }
    }
}

const getPxOyAveragePredictionData=()=>{
    return async (dispatch,getState)=>{
        try{
            
            const res= await request.get(`/api/data/averageprediction/PxOy`,{
                headers: {
                    Authorization: "Bearer " + getState().auth.user.token, 
                }})
            dispatch(dataActions.getPxOyAverageRates(res.data?.averageRate));
        }catch(err){
            //toast.error(err?.response?.data)
        }
    }
}

const getNO3AveragePredictionData=()=>{
    return async (dispatch,getState)=>{
        try{
            
            const res= await request.get(`/api/data/averageprediction/NO3`,{
                headers: {
                    Authorization: "Bearer " + getState().auth.user.token, 
                }})
            dispatch(dataActions.getNO3AverageRates(res.data?.averageRate));
        }catch(err){
            //toast.error(err?.response?.data)
        }
    }
}

const getPredictionDataPerDate=(dataType,date)=>{
    return async (dispatch,getState)=>{
        try{
            const res= await request.post(`/api/data/predictiondataPerDate`,{dataType,date},{
                headers: {
                    Authorization: "Bearer " + getState().auth.user.token, 
                }})
            if(dataType==="NH4"){
                dispatch(dataActions.getNH4PerDate(res.data));    
            }else if(dataType==="PxOy"){
                dispatch(dataActions.getPxOyPerDate(res.data));
            }else if(dataType==="NO3"){
                dispatch(dataActions.getNO3PerDate(res.data));
            }
        }catch(err){          
            toast.error(err.response.data)
            if(dataType==="NH4"){
                dispatch(dataActions.getNH4PerDate(null));    
            }else if(dataType==="PxOy"){
                dispatch(dataActions.getPxOyPerDate(null));
            }else if(dataType==="NO3"){
                dispatch(dataActions.getNO3PerDate(null));
            }
        }
    }
}

const getPredictionDataPerMonth=(dataType,month,year)=>{
    return async (dispatch,getState)=>{
        try{
           
            const res= await request.post(`/api/data/predictiondataPerMonth`,{dataType,month,year},{
                headers: {
                    Authorization: "Bearer " + getState().auth.user.token, 
                }})
                if(dataType==="NH4"){
                    dispatch(dataActions.getNH4PerMonth(res.data));    
                }else if(dataType==="PxOy"){
                    dispatch(dataActions.getPxOyPerMonth(res.data));
                }else if(dataType==="NO3"){
                    dispatch(dataActions.getNO3PerMonth(res.data));
                }    
        }catch(err){
            toast.error(err.response.data)
        }
    }
}

const getArrangementsNumber=()=>{
    return async (dispatch,getState)=>{
        try{
           
            const res= await request.get(`/api/data/arrangements`,{
                headers: {
                    Authorization: "Bearer " + getState().auth.user.token, 
                }})
               
            dispatch(dataActions.getArrangements(res.data));    
        }catch(err){
           // console.log(err)
        }
    }
}

const getPredictionDataPerYear=(dataType,year)=>{
    return async (dispatch,getState)=>{
        try{
           
            const res= await request.post(`/api/data/predictiondataPerYear`,{dataType,year},{
                headers: {
                    Authorization: "Bearer " + getState().auth.user.token, 
                }})
                if(dataType==="NH4"){
                    dispatch(dataActions.getNH4PerYear(res.data));    
                }else if(dataType==="PxOy"){
                    dispatch(dataActions.getPxOyPerYear(res.data));
                }else if(dataType==="NO3"){
                    dispatch(dataActions.getNO3PerYear(res.data));
                }      
            
        }catch(err){
            toast.error(err.response.data)
        }
    }
}


export {getNH4AveragePredictionData,getPxOyAveragePredictionData,getNO3AveragePredictionData,postPredictionFile,getPredictionDataPerDate,getPredictionDataPerMonth,getPredictionDataPerYear,getArrangementsNumber}