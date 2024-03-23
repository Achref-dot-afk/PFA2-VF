import {createSlice} from "@reduxjs/toolkit"

const predictionSlice=createSlice({
    name:'prediction',
    initialState:{
        NH4PredictionAverageRates:0,
        PxOyPredictionAverageRates:0,
        NO3PredictionAverageRates:0,
        NH4PredictionDataPerDate:null,
        PxOyPredictionDataPerDate:null,
        NO3PredictionDataPerDate:null,
        NH4PredictionDataPerMonth:[],
        PxOyPredictionDataPerMonth:[],
        NO3PredictionDataPerMonth:[],
        NH4PredictionDataPerYear:[],
        PxOyPredictionDataPerYear:[],
        NO3PredictionDataPerYear:[],
        recentPredictionNH4Year:null,
        recentPredictionPxOyYear:null,
        recentPredictionNO3Year:null,
        NH4PredictionRecentData:[],
        PxOyPredictionRecentData:[],
        NO3PredictionRecentData:[],
        Arrangements:[]
    },
    reducers:{
        getNH4PredictionAverageRates:(state,action)=>{
            state.NH4AverageRates=action.payload;
        },
        getPxOyPredictionAverageRates:(state,action)=>{
            state.PxOyAverageRates=action.payload;
        },
        getNO3PredictionAverageRates:(state,action)=>{
            state.NO3AverageRates=action.payload;
        },
        getNH4PredictionPerDate:(state,action)=>{
            state.NH4DataPerDate=action.payload?.data?.dataRate;
        },
        getPxOyPredictionPerDate:(state,action)=>{
            state.PxOyDataPerDate=action.payload?.data?.dataRate;
        },
        getNO3PredictionPerDate:(state,action)=>{
            state.NO3DataPerDate=action.payload?.data?.dataRate;
        },
        setRecentNH4PredictionYear:(state,action)=>{
            state.recentNH4Year=action.payload;
        },
        setRecentPxOyPredictionYear:(state,action)=>{
            state.recentPxOyYear=action.payload;
        },
        setRecentNO3PredictionYear:(state,action)=>{
            state.recentNO3Year=action.payload;
        },
        getNH4RecentPredictionData:(state,action)=>{
            state.NH4RecentData=action.payload;
        },
        getPxOyRecentPredictionData:(state,action)=>{
            state.PxOyRecentData=action.payload;
        },
        getNO3RecentPredictionData:(state,action)=>{
            state.NO3RecentData=action.payload;
        },
       
        getNH4PredictionPerMonth:(state,action)=>{
            state.NH4DataPerMonth=action.payload;
        },
        getPxOyPredictionPerMonth:(state,action)=>{
            state.PxOyDataPerMonth=action.payload;
        },
        getNO3PredictionPerMonth:(state,action)=>{
            state.NO3DataPerMonth=action.payload;
        },
        getNH4PredictionPerYear:(state,action)=>{
            state.NH4DataPerYear=action.payload;
        },
        getPxOyPredictionPerYear:(state,action)=>{
            state.PxOyDataPerYear=action.payload;
        },
        getNO3PredictionPerYear:(state,action)=>{
            state.NO3DataPerYear=action.payload;
        },
        getArrangements:(state,action)=>{
            state.Arrangements=action.payload;
        },
    }
})

const predictionActions=predictionSlice.actions;

const predictionReducers=predictionSlice.reducer;
export {predictionActions,predictionReducers}