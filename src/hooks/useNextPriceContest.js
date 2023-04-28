import { getNextPriceContest } from '@services/getNextPriceContest';
import { useEffect, useState } from 'react';

export function useNextPriceContest() {
  const [loading, setLoading] = useState(false);
  const [openings, setOpenings] = useState([]);

  useEffect(
    function () {
      setLoading(true);
      getNextPriceContest().then((openings) => {
        setOpenings(openings);
        setLoading(false);
      });
    },
    [setOpenings]
  );

  return { loading, openings };
}
