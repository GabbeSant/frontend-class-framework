// src/pages/Redes.jsx
import { useState, useEffect } from 'react'; // Importamos os Hooks[cite: 1]
import { CardStatus } from '../components/CardStatus'; //[cite: 1]

export function Redes() {
  const [listaRedes, setListaRedes] = useState([]); //[cite: 1]

  // useEffect garante que o fetch ocorra apenas uma vez ao carregar a página[cite: 1]
  useEffect(() => {
    fetch('/dados.json') //[cite: 1]
      .then(resposta => resposta.json()) // Converte a resposta para objeto JS[cite: 1]
      .then(dados => setListaRedes(dados.redes)); // Salva o array de redes no State[cite: 1]
  }, []); //[cite: 1]

  return (
    <div className="container mt-4">
      <h4 className="mb-4 text-secondary">Monitoramento de Core</h4>
      <div className="row">
        
        {/* Mapeamento dinâmico: cria um Card para cada item do Banco de Dados[cite: 1] */}
        {listaRedes.map(rede => (
          <div className="col-12 col-md-4" key={rede.id}> {/* A propriedade key é obrigatória no React[cite: 1] */}
            <CardStatus
              protocolo={rede.protocolo} //[cite: 1]
              ip={rede.ip} //[cite: 1]
              statusInicial={rede.statusInicial} //[cite: 1]
            />
          </div>
        ))}
        
      </div>
    </div>
  );
}