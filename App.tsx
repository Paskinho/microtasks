import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";

type FilterType ='all' | 'Dollars' | 'RUBLS'

export type NewComponentType = {
    currentMoney = ()=>
}

export type currentMoney ={
    banknots: string
    value: number
    number: string
}


function App(){

    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

 const [filter,setFilter] =useState('all')


    let currentMoney = money;
    if (filter === 'Dollars') {
        money.filter((filteredMoney)=>filteredMoney.banknots === 'Dollars')
    }
    if (filter === 'RUBLS') {
        money.filter((filteredMoney)=>filteredMoney.banknots === "RUBLS")
    }




    const onClickFilterHandler=(nameButton:string)=>{
        setFilter(nameButton)
    }

    return (
        <>
            <NewComponent/>
{/*            <ul>*/}
{/*                {currentMoney.map((objFromMoneyArr, index )=>{*/}
{/*                        return (*/}
{/*                            <li key={index}>*/}
{/*                                <span>{objFromMoneyArr.banknots}</span>*/}
{/*                                <span>{objFromMoneyArr.value}</span>*/}
{/*                                <span>{objFromMoneyArr.number}</span>*/}
{/*                            </li>*/}
{/*                        )*/}

{/*                    }*/}
{/*                )*/}
{/*                }*/}
{/*            </ul>*/}
{/*<div style={{marginLeft: '35px'}}>*/}
{/*       <button onClick={()=>onClickFilterHandler('all')}>all</button>*/}
{/*       <button onClick={()=>onClickFilterHandler('RUBLS')}>rubles</button>*/}
{/*       <button onClick={()=>onClickFilterHandler('Dollars')}>dollars</button>*/}
{/*</div>*/}
        </>

  )

}

export default App
