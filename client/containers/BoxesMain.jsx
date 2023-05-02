import React, { useEffect, useState } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
import Box from "../components/Box";
import BoxesScroll from "../components/BoxesScroll";
import { useFilterContext } from "../contexts/FilterContext";

const BoxesMain = () => {
  const [data, setData] = useState([])
  const [boxes, setBoxes] = useState([]);
  const filters = useFilterContext().filters

  useEffect(() => {
    // console.log('useEffect[] in BoxesMain')
    for (let i = 0; i < 201; i++){
      let filename = 'metadata_'
      let zFill = ('0000' + i).slice(-4);
      filename += zFill
      import(`./test_metadata/${filename}.json`)
        .then(module => module.default)
        .then(data => {
          setData(prevState => {
            const newState = [...prevState]
            newState.push(data)
            return newState
          })
          return data;
        })
        .then((data) => {
          setBoxes(prevState => {
            const newState = [...prevState]
            newState.push(<Box data={data}></Box>)
            return newState
          })
        })
        .catch(e => {
          console.log('error with dynamic import in BoxesMain')
          console.log(e)
        })
    }
  }, [])

  const checkFilters = (data) => {
    const layers = Object.keys(filters)
    for (const layer of layers) {
      if (Object.values(filters[layer]).some((el) => el)) {
        if (!data[layer]) return false
        if (filters[layer][data[layer]] === false) {
          return false
        }
      }
    }
    return true;
  }

  useEffect(() => {
    // console.log('useEffect[filters] in BoxesMain')
    setBoxes((prev) => {
      const newState = [];
      for (const el of data) {
        if (checkFilters(el)) {
          newState.push(<Box key={el.id }data={el}></Box>)
        }
      }
      return newState;
    })
  }, [filters])

  return (
    <div>
      <BoxesScroll boxes={boxes}></BoxesScroll>
    </div>
  );
};

export default BoxesMain;