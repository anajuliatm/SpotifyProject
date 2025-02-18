import React from 'react';
import SingleItem from './SingleItem';
import { Link, useLocation } from 'react-router-dom';


const ItemList = ({ title, items, itemsArray, path, idPath}) => {
    //console.log(items); 
    const {pathname} = useLocation();
    const isHome = pathname === "/";
    let finalItems;

    finalItems = isHome ? items : Infinity; //finalItems é igual ao parametro items se estiver na home, senão, aparece todos os items existentes

  return (
    <div className='item-list'>
            <div className='item-list__header'>
                <h2>{title} Populares</h2>

                {isHome? (
                    <Link to={path}className="item-list__link" >Mostrar Tudo</Link>
                ) : (
                    <></>
                )}
                
            </div>

            <div className='item-list__container'>
                {
                    itemsArray
                    .filter((currentValue, index) => index < finalItems)
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