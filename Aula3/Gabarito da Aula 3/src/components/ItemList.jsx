import React from 'react';
import SingleItem from './SingleItem';
import { Link } from 'react-router-dom';


const ItemList = ({ title, items, itemsArray, path, idPath}) => {
    //console.log(items); 

  return (
    <div className='item-list'>
            <div className='item-list__header'>
                <h2>{title} Populares</h2>
                <Link to={path}className="item-list__link" >Mostrar Tudo</Link>
            </div>

            <div className='item-list__container'>
                {
                    itemsArray
                    .filter((currentValue, index) => index < items)
                    .map((currentObj, index) => (
                        <SingleItem
                        idPath={idPath}
                        {...currentObj}//... passa todas as chaves do operador
                        key={`${title}-${index}`}/>
                        )
                    )
                }     
            </div>       
        </div>
  )
}

export default ItemList;