const express = require("express");
const router = express.Router();
const db = require("../configs/db");
const bcrypt = require("bcrypt");

// const session = require("express-session");
// const cookieParser = require("cookie-parser");

// router.use(
//   session({
//     key: "userId",
//     secret: "secret",
//     resave: false,
//     saveUninitialized: false,
//     cookie: { expires: 1000000 },
//   })
// );
// router.use(cookieParser());
const saltRounds = 10;

// POST REGISTER
router.post("/register", (req, res) => {
  const { username, password, section, role } = req.body;

  db.query(
    "SELECT * FROM users WHERE username = ? ;",
    [username],
    (err, result) => {
      if (result.length === 0) {
        bcrypt.hash(password, saltRounds, (err, hash) => {
          db.query(
            "INSERT INTO users (username,password,section,role) VALUES (?,?,?,?)",
            [username, hash, section, role],
            (err, results) => {
              res.send(results);
              console.log(err);
            }
          );
        });
      } else {
        res.json({
          flag: false,
          message: "User already exists",
        });
      }
    }
  );
});

// router.get("/login", (req, res) => {
//   if (req.username) {
//     console.log(req.role);
//     res.send({ loggedIn: true, user: req.username, role: req.role });
//   } else {
//     res.send({ loggedIn: false });
//   }
// });

// router.get("/login", (req, res) => {
//   db.query(
//     "SELECT * FROM users WHERE username = ?",
//     username,
//     (err, results) => {
//       if (err) console.log(err);
//       if (username === results[0].username) {
//         res.send({
//           loggedIn: true,
//           username: username,
//           role: results[0].role,
//         });
//       } else {
//         res.send({ loggedIn: false, message: "User doesnt exist" });
//       }
//     }
//   );
// });

// router.get("/getRole", (req, res) => {
//   const { username, password } = req.body;
//   // if (err) console.log(err);

//   db.query("SELECT * FROM users", (err, results) => {
//     if (err) console.log(err);
//     else {
//       res.send(results);
//     }

//     // res.send(results);
//   });
// });

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  // if (err) console.log(err);

  db.query(
    "SELECT * FROM users WHERE username = ? ;",
    [username],
    (err, result) => {
      if (err) console.log(err);

      console.log(username);
      console.log(result);
      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (err, response) => {
          if (response) {
            // res.send(results);

            res.json({
              loggedIn: true,
              username: username,
              role: result[0].role,
              section: result[0].section,
            });
            console.log(result[0].role);
            console.log(result);
          } else {
            res.json({
              loggedIn: false,
              message: "Wrong username password combo",
            });
          }
        });
      } else {
        console.log("its here");
        res.json({ loggedIn: false, message: "User doesnt exist" });
      }
    }
  );
});

// router.get("/login", (req, res) => {
//   const { username, password } = req.body;
//   // if (err) console.log(err);
//   // console.log(username);

//   db.query(
//     `SELECT * FROM users WHERE username = ${username}`,
//     (err, result) => {
//       if (err) console.log(err);
//       console.log("getrole");
//       console.log(result[0].username);
//       console.log(result);
//       if (result.length > 0) {
//         // res.send(results);
//         res.json({
//           loggedIn: true,
//           username: result[0].username,
//           role: result[0].role,
//         });
//         console.log(result.role);
//         console.log(result);
//       } else {
//         console.log("its here");
//         res.json({ loggedIn: false, message: "User doesnt exist" });
//       }
//     }
//   );
// });

module.exports = router;
