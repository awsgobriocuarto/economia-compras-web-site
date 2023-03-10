import { useEffect, useState } from 'react';
import { getNextOpening } from '@services/getNextOpening';

export function useNextOpening() {
  const [loading, setLoading] = useState(false);
  const [openings, setOpenings] = useState([]);

  useEffect(
    function () {
      setLoading(true);
      getNextOpening().then((openings) => {
        setOpenings(openings);
        setLoading(false);
      });
    },
    [setOpenings]
  );

  return { loading, openings };
}
