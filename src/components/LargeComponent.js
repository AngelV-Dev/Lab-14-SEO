export default function LargeComponent() {
  return (
    <section style={{ marginTop: "24px", padding: "16px", border: "1px solid #ccc" }}>
      <h2>Componente cargado con lazy loading</h2>
      <p>Este componente se descarga solo cuando la página ya cargó en el navegador.</p>
    </section>
  );
}