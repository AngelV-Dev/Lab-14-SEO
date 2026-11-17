export default function LargeComponent() {
  return (
    <section className="cy-panel">
      <h2>Componente cargado con lazy loading</h2>
      <p>Este componente se descarga solo cuando la página ya cargó en el navegador.</p>
    </section>
  );
}