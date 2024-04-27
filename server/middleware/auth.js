const jwt = require("jsonwebtoken");

function checkAuthentication(req, res, next) {
     try {
          loggedIn = false;
          // let token = req.headers.authorization?.replace("Bearer ", "");
          const authHeader = req.headers?.authorization;
          const token = authHeader && authHeader.split(" ")[1];

          if (!token) return res.status(401).send("Invalid credentials");

          try {
               var decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
               req.user = decoded;
               // console.log(decoded);
          } catch (err) {
               return res.status(403).send("permission denied");
          }

          next();
     } catch (err) {
          next(err);
     }
}

module.exports = {
     checkAuthentication,
};
