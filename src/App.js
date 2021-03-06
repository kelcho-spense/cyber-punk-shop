
import './App.css';
import Header from './components/Header';
import { useState , useEffect } from "react";
import axios from "axios";
import Punklist from './components/Punklist';
import Main from './components/Main';

function App() {
const [punkListData, setPunkListData] = useState([])
const [selectedPunk, setSelectedPunk] = useState(5);

useEffect(() => {
 const getMyNfts = async () => {
    const openseaData = await axios.get(
      'https://testnets-api.opensea.io/assets?asset_contract_address=0x8c0dbDc089215080A4753371ECE99d01C2D63eB3&order_direction=asc'
      
      ,{ headers: {"Access-Control-Allow-Origin" :  "*"}})
   // console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets) //saves fetched data to punklist
   }
   return getMyNfts()

}, [])


  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 &&(
        <>
           <Main punkListData={punkListData} selectedPunk={selectedPunk} />
           <Punklist punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
        </>
      )}    
     
    </div>
  );
}

export default App;
