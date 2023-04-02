const jwt = require("jsonwebtoken")

const auth = (req, res, next) => {
  //TODO: implenemt cookie session
  // read {token} from (req.cookies)
  //   if !(req.cookies) then __Header-Auth__
  
  const token = req.header("Authorization").replace("Bearer ", "")

  if (!token) {
    return res.status(403).send("token missing..")
  }
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET)
    console.log(decode)
    req.user = decode
  } catch (error) {
    return res.status(401).send("Invalied Token")
  }
  return next()
}
module.exports = auth