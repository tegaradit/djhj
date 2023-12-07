// function verifyToken(req, res, next) {
// 	const token = req.headers["authorization"];

// 	if (token) {
//       // Memeriksa apakah token sudah dicabut atau belum
//       if (revokedTokens.includes(token)) {
//          return res.status(401).json({ error: "Token sudah dicabut" });
//       }

//       jwt.verify(token, "kunci_rahasia_anda", (err, decoded) => {
//          if (err) {
//             return res.status(401).json({ error: "Token tidak valid" });
//          }
//          req.decoded = decoded;
//       })
// 	}

//    next();
// }

const getCookie = (name) => {
	const cookie = "token=sometoken; data=nama";
	return cookie.slice(
		cookie.indexOf("=", cookie.indexOf(name)) + 1,
		cookie.indexOf(";", cookie.indexOf(name)) != -1
			? cookie.indexOf(";", cookie.indexOf(name))
			: cookie.length
	)
}


console.log(getCookie("data"));
