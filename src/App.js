import "./App.css"
import records from "./covid_data.json"
import DaeRangePickerComp from "./components/DateRangePickerComp.jsx"

function App() {
    return (
      <div>
       <div className="App">
    
      <h4> Please choose the dates</h4>
      <DaeRangePickerComp></DaeRangePickerComp>
      <br/><hr/>

      {
       Object.values(records).map(record=>{
         return (
         <div 
            className="box" 
            key={record.location}> 
                                 {record.location}
                                  {record.new_deaths_per_million}
        
        </div> )})}
       
    </div>

    </div>
  );
}

export default App;
