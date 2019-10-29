import React from 'react'
import Rest from './rest'
import Header from './elements/Header'
const baseURL = 'https://mymoney-alonsosistemas.firebaseio.com/'
const { useGet } = Rest(baseURL)



const Meses = () => {
    const data = useGet('meses')
    if (data.loading) {
        return <span>Carregando...</span>
    }

    if (Object.keys(data.data).length >0 ) {
        return (
            <table className='table'>
                <thead>
                    <th>Mês</th>
                    <th>Previsão entrada</th>
                    <th>Entrada</th>

                    <th>Previsão saída</th>
                    <th>Saída</th>
                </thead>
                <tbody>
                    {
                        Object
                            .keys(data.data)
                            .map(mes => {
                                return (
                                    <tr key={mes}>
                                        <td>{mes}</td>
                                        <td>{data.data[mes].previsao_entrada}</td>
                                        <td>{data.data[mes].entrada}</td>
                                        <td>{data.data[mes].previsao_saida}</td>
                                        <td>{data.data[mes].saida}</td>
                                    </tr>
                                )
                            })
                    }
                </tbody>
            </table>
        )
    }
    return null
}

export default Meses