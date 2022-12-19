import React, {useReducer, useEffect} from 'react';

const App = () => {

  const initialState = {
    title: "",
    time: "",
  }
  
  const reducer = (state, action) => {
    switch(action.type){
      case "title": return {
        ...state,
        title: action.payload
      }
      case "date": return {
        ...state,
        time: action.payload
      }
    }
  }

  const [data, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <div className="card w-50 shadow mx-auto p-5 m-5">
        <h2 className="text-center">Title</h2>
        <input type="text" className="form-control p-3 m-3" onChange={(e) => dispatch({type: "title", payload: e.target.value})}/>
        <input type="date" className="form-control p-3 m-3" onChange={(e) => dispatch({type: "date", payload: e.target.value})}/>
      </div>

      <table className="table table-bordered shadow w-50 mx-auto m-5 text-center">
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.title}</td>
            <td>{data.time}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;