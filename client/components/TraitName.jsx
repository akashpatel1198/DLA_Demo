import React, { useEffect, useState } from "react";
import { useFilterContext } from "../contexts/FilterContext";

const TraitName = ({name, layer}) => {
  const filters = useFilterContext().filters;
  const setFilters = useFilterContext().setFilters;
  const [isChecked, setIsChecked] = useState(filters[layer][name])

  useEffect(() => {
    setIsChecked(filters[layer][name])
  }, [filters])

  const handleChange = () => {
    setFilters(prevState => {
      const newState = {...prevState}
      newState[layer] = {...prevState[layer]};
      newState[layer][name] = !newState[layer][name];
      return newState
    })
  }

  return(
    <div className="value">
      <span>{name}</span>
      <input type="checkbox" checked={isChecked} onChange={handleChange}></input>
    </div>
  )
}

export default TraitName;