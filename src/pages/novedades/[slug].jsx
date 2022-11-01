// import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function Novedad() {
  // const [news, setNews] = useState(false);
  const router = useRouter();
  const { id, slug } = router.query;

  console.log({ id, slug });
  return (
    <section>
      <div className="container">
        <h1>Novedad {id}</h1>
        <p>{slug}</p>
      </div>
    </section>
  );
}

export default Novedad;
