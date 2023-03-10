import { getSheetData } from '@services/getSheetData';
import { useEffect } from 'react';
import { useState } from 'react';

export function useSheetData({ sheetId, sheet }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    getSheetData({ sheetId, sheet }).then((items) => {
      setData(items);
      setLoading(false);
    });
  }, [sheetId, sheet]);

  return { loading, data };
}
