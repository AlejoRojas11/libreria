
 import ListView from './ListView';
import frameworksList from './items'
import { useState } from "react";
 //Componentes de presetanción y componentes contenedores


function List(){
    let [items, setItems] = useState(frameworksList);

    function filterItems(searchPattern){
        if(searchPattern == ""){
            setItems(frameworksList);
        }else{
            let newItems = filterItemsBySearchPattern(searchPattern);
            setItems(newItems);
        }
    }

    function filterItemsBySearchPattern(searchPattern){
        let filterItems = frameworksList.filter(item => item.toLowerCase().includes(searchPattern.toLowerCase()));
        return filterItems;
    }

    return(
        <ListView elements={items} funcFilterItems={filterItems} />
    )
}

export default List;