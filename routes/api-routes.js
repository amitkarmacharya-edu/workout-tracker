const router = require("express").Router();
const Workout = require("../models");

// get all workouts
router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .sort({date: -1})
        .then(workouts => {
            res.json(workouts);
        })
        .catch(e => {
            res.status(400).json(e);
        });
});

// create new workout
router.post("/api/workouts", (req, res) => {
    Workout.create(req.body)
        .then(workout => {
            res.json(workout);
        })
        .catch(e => {
            res.status(400).json(e);
        });
});

// update
router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id,
    { $push: { "exercises": req.body}}, { new: true })
    .then(workout => {
        res.json(workout);
    })
    .catch((e) => {
        res.status(400).json(e);
    })
})

// get workout for 7 days
router.get("/api/workouts/:range", (req, res) => {
    Workout.find({})
    .sort({ date: -1 })
    .limit(7)
    .then(workout => {
        res.json(workout)
    })
    .catch((e) => {
        res.status(400).json(e);
    });
});

module.exports = router;