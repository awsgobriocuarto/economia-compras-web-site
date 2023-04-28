import { getNextPriceContestApi } from '@services/getNextPriceContestApi';

export default async function handler(req, res) {
  const result = await getNextPriceContestApi();
  res.status(200).json(result);
}
