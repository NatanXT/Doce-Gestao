import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard">
      {/* TÍTULO E SUBTÍTULO */}
      <header className="dashboard-header">
        <h1>Doce Gestão</h1>
        <p>
          Controle simples e inteligente para seus custos, receitas e lucros.
        </p>
      </header>

      {/* AÇÕES */}
      <div className="dashboard-actions">
        <button className="btn-orange">+ Adicionar Ingrediente</button>
        <button className="btn-orange">Adicionar Receita</button>
        <button className="btn-green">Adicionar Produção</button>
      </div>

      {/* INDICADORES */}
      <section className="indicadores">
        <div className="indicador-card card-orange">
          <h3>Custo Unitário Médio</h3>
          <p className="valor">R$ 0,85</p>
          <span>por unidade</span>
        </div>

        <div className="indicador-card card-blue">
          <h3>Orçamento Disponível</h3>
          <p className="valor">R$ 150,00</p>
          <span>esta semana</span>
        </div>

        <div className="indicador-card card-green">
          <h3>Receita Mais Lucrativa</h3>
          <p className="valor">Rosca Simples</p>
          <span>margem 62%</span>
        </div>
      </section>

      {/* GRID DE NAVEGAÇÃO */}
      <section className="menu-grid">
        <div className="menu-card">
          <h4>Ingredientes</h4>
          <p>+ cadastrar ingredientes</p>
        </div>

        <div className="menu-card">
          <h4>Simulador de Produção</h4>
          <p>Estime custos e rendimentos</p>
        </div>

        <div className="menu-card">
          <h4>Lucratividade</h4>
          <p>Margem, preço e lucro</p>
        </div>
      </section>
    </div>
  );
}
