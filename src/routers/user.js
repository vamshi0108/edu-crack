const express = require("express");
const User = require("../models/user");
const auth = require("../middleware/auth");
const router = new express.Router();

//Default page
router.get("/", async (req, res) => {
  try {
    res.send("Edu-Crack API");
  } catch (e) {
    res.status(400).send();
  }
});

//Existing user login
router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send();
  }
});

//New user
router.post("/users", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

//Logging out of current single device
router.post("/users/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

//Logging out of all devices
router.post("/users/logoutAll", auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

// router.get("/users/me", auth, async (req, res) => {
//   res.send(req.user);
// });

//Making update
router.patch("/users/me", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "password"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  //Restricting user to save his details and stop updating some data like email
  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();
    res.send(req.user);
  } catch (e) {
    res.status(400).send(e);
  }
});

//Delete the user
router.delete("/users/me", auth, async (req, res) => {
  try {
    //req.user.remove() to remove all entries of tasks before deleteing the user
    await req.user.remove();
    res.send(req.user);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
