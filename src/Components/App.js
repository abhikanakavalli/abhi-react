import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
//React.createElement => object => HTMLElement 

// const ResCard = () => {
//     return(
//         <div style={{display:'flex'}}>
//         {dataRes.map((res,id) => (
//             <div className="card-cont" key={id} style={{margin: 10}}>
//             <img className="card-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/btea7jwuwkbgd0nebcyd"
//             alt='no-img' />
//             <h1>{res.info.name}</h1>
//             <p>{res.info.cuisines.join(", ")}</p>
//         </div>
//         ))}
        
//         </div>
//     )
// };

const AppLayout = () => {
  return(
    <div className="App-cont">
        <Header/>
        <Body/>
        {/* <div id='body-cont'>
            <div>Search</div>
            <ResCard/>
        </div> */}
    </div>
  )
    
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);