// src/components/CardStatus.jsx
import { useState } from 'react'; // 1. Importamos o Hook de estado

export function CardStatus({ protocolo, ip, statusInicial }) {
  // 2. Criamos a memória interna do componente
  const [status, setStatus] = useState(statusInicial);

  // 3. Função que é acionada pelo clique do botão
  function alternarConexao() {
    if (status === 'UP') {
      setStatus('DOWN');
    } else {
      setStatus('UP');
    }
  }

  return (
    <div className="card shadow mb-3">
      <div className="card-header bg-primary text-white fw-bold">
        {protocolo}
      </div>
      <div className="card-body">
        <p className="card-text mb-1">
          <strong>Target (IP):</strong> {ip}
        </p>
        <p className="card-text mb-3">
          {/* O texto e a cor reagem automaticamente à variável 'status' */}
          <strong>Status:</strong>{' '}
          <span className={status === 'UP' ? 'text-success fw-bold' : 'text-danger fw-bold'}>
            {status}
          </span>
        </p>
        
        {/* 4. O evento onClick chama a nossa função JS */}
        {/* O texto do botão também muda de acordo com o status[cite: 1] */}
        <button 
          className="btn btn-outline-primary btn-sm" 
          onClick={alternarConexao}
        >
          {status === 'UP' ? 'Simular Queda' : 'Restabelecer'}
        </button>
      </div>
    </div>
  );
}