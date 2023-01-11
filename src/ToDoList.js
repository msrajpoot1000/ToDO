import React, { useState ,useMemo} from "react";
import "./Style.css";
import UsedToDoList from "./UsedToDoList";
function ToDoList() {
    const [data, setData] = useState();
    const [listItem, setListItem] = useState([])
    const InputData = (event) => {
        if (document.querySelector(".in") == "")
        {
            alert("yes");
            }
        setData(event.target.value)
        // event.target.value = "";
        
    }
    const listOfItem = () => {
        setListItem(listItem.concat(data));
        setData(" ")
        // or
        // setListItem((oldItems)=> {
        //     return [...oldItems, data];
        // })
    }
    
      const DeleteItem = (id) => {
          console.log("item deleted");
          
setListItem((oldItems) => {
        return oldItems.filter((arrElem, index) => {   
            return index !== id;
        })
    })


    }
    return (
        <div className="mainBlock">
            <div className="insideBlock">
                <div className="title">ToDo List</div>
                <div className="content">
                    <input type="text"  id="in" onChange={InputData} placeholder="Add a Item" value={data} />   
                <button className="btnAdd" onClick={listOfItem} >+</button>
                </div>
                <ol className="list">-
                    {
                        listItem.map((item,index)=>{
                            {/* return <li>{item}</li> */ }
                            return <UsedToDoList
                                key={index}
                                id={index}
                                onSelect={DeleteItem}
                                Item={item} />
                        })
                    }
                </ol>
            </div>
        </div>
    )
}
export default ToDoList;