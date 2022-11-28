import Posts from '@components/Posts';

function Novedades() {
  return (
    <section>
      <div className="container">
        <h1>Novedades</h1>
        <Posts limit={8} />
      </div>
    </section>
  );
}

export default Novedades;
