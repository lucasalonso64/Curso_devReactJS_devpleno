import React from 'react'

const minAno = 2019
const maxAno = 2022

const AdicionarMes = () => {
    const anos = []
    const meses = []
    for(let i = minAno; i<= maxAno; i++){
        anos.push(i)
    }
    for(let i = 1; i <=12; i++){
        meses.push(i)
    }

    const zeroPad = num => {
        if(num < 10){
            return '0'+num
        }
        return num
    }
      return (
        <>
        <h2>Adicionar mês</h2>
        <select>
            {anos.map(ano => <option key={ano} value={ano}>{ano}</option>)}            
            
        </select>
        <select>
            { meses.map(zeroPad).map(mes =><option  key={mes}  value={mes }>{mes}</option>)}
            
            
        </select>
        <button>Adicionar mês</button>
        </>
    )

}

export default AdicionarMes