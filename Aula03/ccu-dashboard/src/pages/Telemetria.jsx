// src/pages/Telemetria.jsx
import { useState, useEffect } from 'react'; // Importamos os hooks
import '../telemetria.css';

export function Telemetria() {
  // 1. Definição do Estado para armazenar a frota
  const [frota, setFrota] = useState([]);

  // 2. Busca assíncrona dos dados ao carregar a tela
  useEffect(() => {
    fetch('/dados.json')
      .then(resposta => resposta.json())
      .then(dados => setFrota(dados.veiculos)); // Extrai apenas o array de veículos
  }, []);

  return (
    <div className="container mt-4">
      <h4 className="text-secondary mb-4">Monitoramento de Frota em Campo</h4>
      <div className="row">
        
        {/* 3. Laço de repetição: Cria um card para cada veículo no JSON */}
        {frota.map((veiculo) => (
          <div key={veiculo.id} className="col-12 col-xl-6 mb-4">
            <div className="card shadow-lg border-0 h-100">
              
              {/* O Cenário Animado */}
              <div id="cenario">
                <div className="sol">☀️</div>
                <div className="nuvens">☁️</div>
                <div className="arvores">
                  <span>🌲</span><span>🌳</span><span>🌲</span>
                </div>
                
                {/* 4. Injeção de Estilo Inline: O CSS reage ao dado do JSON[cite: 1] */}
                {/* As chaves duplas {{ }} criam um Objeto contendo as regras de CSS[cite: 1] */}
                <div 
                  className="estrada"
                  style={{ animationDuration: veiculo.tempoAnimacao }}
                ></div>
                
                {/* Renderiza o emoji/vetor dinamicamente[cite: 1] */}
                <div className="veiculo">{veiculo.modelo}</div>
              </div>
              
              {/* Rodapé Dinâmico[cite: 1] */}
              <div className="card-body bg-light">
                <h5 className="card-title text-primary">Viatura {veiculo.id}</h5>
                <p className="card-text text-muted mb-0">{veiculo.descricao}</p>
                <small className="text-muted fw-bold">
                  Velocidade (Update Rate): {veiculo.tempoAnimacao}
                </small>
              </div>
              
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}