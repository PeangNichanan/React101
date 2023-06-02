import { Fragment, useState } from "react";
import { MouseEvent } from "react";
import "../App.css";

let lists: string[] = ['An item', 'A second item', 'A third item','A fourth item','And a fifth item'];

interface Props{
    items: string[];
    heading : string;
    onSelectItem: (item:string)=>void;
}

function ListGroup({items,heading,onSelectItem}: Props) {
    
    // items =[];

    // let selectedIndex = -1;
    const [selectedIndex, setSelectedIndex] = useState(-1);



    const handleClick = (event : MouseEvent) => console.log(event);

    const message = items.length === 0 ? <p className='px-3'>No item found </p> : null;

    const getMessage = () => {
        return items.length === 0 ? <p className='px-3'>No item found </p> : null;
    }

  return (
    <>
        <h1 className="p-3 font-semibold text-3xl bg-black text-white">{heading}</h1>
        {/* --- No item found : 4 ways --- */}
        {/* {message} */}
        {/* {getMessage()} */}
        {/* {props.items.length === 0 ? <p className='px-3'>No item found</p> : null} */}
        {/* {props.items.length === 0 && <p className='px-3'>No item found</p>} */}

        <ul role='list' className=" text-gray-800 divide-y">
            {
                items.map((item,index)=>(
                    <li className={selectedIndex === index ? 'global-list-div active' : 'px-3 pt-2 hover:bg-gray-200'}
                    key={item}
                    onClick={()=>{
                        setSelectedIndex(index);
                        onSelectItem(item);
                        }}>
                        {item}
                    </li>
                ))
            }
            {/* {
                lists.map((e)=>(
                    <li className="p-3">{e}</li>
                ))
            } */}
        
        </ul>
    </>
  );
}

export default ListGroup;
