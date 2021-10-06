import type { NextApiRequest, NextApiResponse } from "next";
import { handleRefresh } from "../../helpers/spotifyHelpers";

export type Data = {
  accessToken: string;
  expiryTime: any;
  refreshToken: string;
};

const refresh = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { refreshToken } = req.body;

  const authInfo = await handleRefresh(refreshToken);

  const {
    accessToken,
    expiryTime,
    refreshToken: newRefreshToken,
  } = authInfo ?? {};

  res.status(200).send({
    accessToken,
    expiryTime,
    refreshToken: newRefreshToken,
  });
};

export default refresh;