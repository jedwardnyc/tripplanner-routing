const router = require("express").Router();
const Hotel = require("../models").Hotel;
const Restaurant = require("../models").Restaurant;
const Activity = require("../models").Activity;
const Itinerary = require("../models").Itinerary;

router.get("/", (req, res, next) => {
  Promise.all([
    Hotel.findAll({ include: [{ all: true }] }),
    Restaurant.findAll({ include: [{ all: true }] }),
    Activity.findAll({ include: [{ all: true }] })
  ])
    .then(([hotels, restaurants, activities]) => {
      res.json({
        hotels,
        restaurants,
        activities
      });
    })
    .catch(next);
});

router.get("/itineraries/:id", (req,res,next)=>{
  // Promise.all([
    // Hotel.findById(req.params.id, { include: [{ all: true, nested: true }] }),
    // Restaurant.findById(req.params.id, { include: [{ all: true, nested: true }] }),
    // Activity.findById(req.params.id,{ include: [{ all: true, nested: true }] }),
    Itinerary.findById(req.params.id, { include: [{ all: true, nested: true }]})
  .then((itinerary)=>{
    res.send({
      itinerary
    })
  })
})

module.exports = router;
