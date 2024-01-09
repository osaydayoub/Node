import express from "express";

// Create a get, post, delete, put route in Express. The base route
// url will be called “numbers”.
// In each response send back a string “success using (method
// name)”.
// Test your work with postman.


const router = express.Router();

router.get("/", (req, res) => {
  res.send("success using get");
});

router.post("/", (req, res) => {
  res.send("success using post");
});

router.delete("/", (req, res) => {
  res.send("success using delete");
});
export default router;


