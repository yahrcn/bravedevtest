import { NextApiRequest, NextApiResponse } from "next";

export default async function payForPhone(
    req: NextApiRequest,
    res: NextApiResponse
) {
    let random = Math.random();
    if (random >= 0.5) {
        res.status(200).json({ title: "Успешно!" });
    } else res.status(429).json({ title: "Сервер перегружен." });
}
