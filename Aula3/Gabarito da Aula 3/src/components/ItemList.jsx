import React from 'react';
import SingleItem from './SingleItem';


const ItemList = ({ title, items, itemsArray, path, idPath}) => {
    //console.log(items); 

  return (
    <div className='item-list'>
            <div className='item-list__header'>
                <h2>{title} Populares</h2>
                <a href={path}className="item-list__link" >Mostrar Tudo</a>
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