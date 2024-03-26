import Jwt from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  console.log(authorization);
  const token = authorization.split(" ")[1];
  console.log(token);
  try {
    const decode = await Jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode;
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
};
