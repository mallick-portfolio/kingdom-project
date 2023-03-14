import { API_URL } from "@/config/index";


export default async (req, res) => {
  if (req.method === "POST") {
    const { identifier, password } = req.body;

    const strapiRes = await fetch(`https://demo-production-edcf.up.railway.app/api/auth/local`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });

    const data = await strapiRes.json();
    if (strapiRes.ok) {
      res.status(200).json(data);
      // set cookie
      // res.setHeader(
      //   "Set-Cookie",
      //   cookie.serialize("token", data.jwt, {
      //     httpOnly: true,
      //     secure: false,
      //     maxAge: 60 * 60 * 24 * 7, // 1 week
      //     sameSite: "strict",
      //     path: "/",
      //   })
      // );
    } else {
      res.send(data);
    }
  }
};
