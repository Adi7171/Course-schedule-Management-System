const express = require("express");
const router = express.Router();
const db = require("../configs/db");

// router.put("/display", () => {
//   const { id, day, section, time, period } = req.body;
//   db.query("UPDATE SET classTable period");
// });

router.get("/section1", (req, res) => {
  const section1 = 1;

  db.query(
    `SELECT * FROM classes WHERE section = ${section1} `,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
router.get("/section2", (req, res) => {
  const section2 = 2;
  db.query(
    `SELECT * FROM classes WHERE section = ${section2} `,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.get("/periodslist1", (req, res) => {
  db.query(
    "select periods, count(*) as count from ((select period1 as periods from classes where section='1') union all (select period2 as periods from classes where section='1') union all (select period3 as periods from classes where section='1') union all (select period4 as periods from classes where section='1') union all (select period5 as periods from classes where section='1') union all (select period6 as periods from classes where section='1') )g  group by periods",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
        console.log(result[1].periods);
        console.log(result[1].count);
      }
    }
  );
});

router.get("/periodslist2", (req, res) => {
  db.query(
    "select periods, count(*) as count from ((select period1 as periods from classes where section='2') union all (select period2 as periods from classes where section='2') union all (select period3 as periods from classes where section='2') union all (select period4 as periods from classes where section='2') union all (select period5 as periods from classes where section='2') union all (select period6 as periods from classes where section='2') )g  group by periods",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
        console.log(result[1].periods);
        console.log(result[1].count);
      }
    }
  );
});

// router.get("/student/section1", (req, res) => {
//   const section1 = 1;

//   db.query(
//     `SELECT * FROM classes WHERE section = ${section1} `,
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     }
//   );
// });

// router.get("/student/section2", (req, res) => {
//   const section2 = 2;
//   db.query(
//     `SELECT * FROM classes WHERE section = ${section2} `,
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     }
//   );
// });
// router.put("/update", (req,res) => {
//   const { id } = req.body;
//   db.query(
//     "UPDATE SET classes period1 =?,period2=?,period3=?,period4=?,period5=?,period6=? WHERE id=?",
//     [period1, period2, period3,period4,period5,period6],(err,result)=>
//     {

//     }
//   );
// });

router.get("/edit/:id", (req, res) => {
  const { id } = req.params;

  db.query("SELECT * FROM classes WHERE id = ?", [id], (err, rows) => {
    if (err) {
      console.log("There has been an error", err);
    }
    res.send(rows);
    console.log("The data in get part  \n", rows);
  });
});

router.post("/update/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  const { period1, period2, period3, period4, period5, period6 } = req.body;

  db.query(
    "UPDATE classes SET period1 = ?,period2 = ?,period3 = ?,period4 = ?,period5 = ?,period6 = ? WHERE id = ?",
    [period1, period2, period3, period4, period5, period6, id],
    (err, rows) => {
      if (!err) {
        db.query("SELECT * FROM classes WHERE id = ?", [id], (err, rows) => {
          if (!err) {
            res.send(rows);
            console.log("The data in update part \n", rows);
          }

          console.log("error catch one", err);
        });
      } else {
        console.log("error catch two", err);
      }

      console.log("The data in update part \n", rows);
    }
  );
});

module.exports = router;
