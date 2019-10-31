import React from 'react'

import Rest from '../utils/rest'

const baseURL = 'https://mymoney-alonsosistemas.firebaseio.com/'
const { useGet } = Rest(baseURL)

const Movimentacoes = ({ match }) => {
  const data = useGet(`movimentacoes/${match.params.data}`)
    return (
      <div className="container">
        <h1>Movimentações</h1>
        <pre>{JSON.stringify(data)}</pre>
      </div>

    )
  }

  export default Movimentacoes