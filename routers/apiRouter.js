
const { Router } = require('express');

const router = Router();

const CALENDAR_MOCK = {"data":[{"date":"2019-04-01","events":[]},{"date":"2019-04-02","events":[]},{"date":"2019-04-03","events":[]},{"date":"2019-04-04","events":[]},{"date":"2019-04-05","events":[]},{"date":"2019-04-06","events":[{"title":"asdasd","id":"5ca8d236b88ea80031689143"},{"title":"2","id":"5ca8df04253edf003193e41a"}]},{"date":"2019-04-07","events":[]},{"date":"2019-04-08","events":[]},{"date":"2019-04-09","events":[]},{"date":"2019-04-10","events":[]},{"date":"2019-04-11","events":[]},{"date":"2019-04-12","events":[]},{"date":"2019-04-13","events":[]},{"date":"2019-04-14","events":[]},{"date":"2019-04-15","events":[]},{"date":"2019-04-16","events":[]},{"date":"2019-04-17","events":[]},{"date":"2019-04-18","events":[{"title":"tet","id":"5ca4c3f7b992740031c55154"}]},{"date":"2019-04-19","events":[]},{"date":"2019-04-20","events":[]},{"date":"2019-04-21","events":[]},{"date":"2019-04-22","events":[]},{"date":"2019-04-23","events":[]},{"date":"2019-04-24","events":[]},{"date":"2019-04-25","events":[]},{"date":"2019-04-26","events":[]},{"date":"2019-04-27","events":[]},{"date":"2019-04-28","events":[]},{"date":"2019-04-29","events":[]},{"date":"2019-04-30","events":[]},{"date":"2019-05-01","events":[]},{"date":"2019-05-02","events":[]},{"date":"2019-05-03","events":[]},{"date":"2019-05-04","events":[]},{"date":"2019-05-05","events":[]},{"date":"2019-05-06","events":[]},{"date":"2019-05-07","events":[]},{"date":"2019-05-08","events":[]},{"date":"2019-05-09","events":[{"title":"asdasda","id":"5ca4c406b992740031c55155"}]},{"date":"2019-05-10","events":[]},{"date":"2019-05-11","events":[]},{"date":"2019-05-12","events":[]}]}
const DAY_MOCK = {"data":[{"id":"5ca4925a385642003103fc14","description":"asda","time":"2019-04-11T02:00","title":"tetijnijnijnjinijn","notification":false}]};  router.get('/api/calendar', (req, res) => { console.log('working calendar');
  res.status(200);  //correct response, but no content
  res.send(CALENDAR_MOCK);
});

router.get('/api/day', (req, res) => {
  console.log('working day');
  res.status(200);//correct response, but no content
  res.send(DAY_MOCK);
});

router.post('/api/event', (req, res) => {
  console.log('working day', req.body);
  res.status(200);//correct response, but no content
  res.send( { id: 1});
});


router.put('/api/event/:id', (req, res) => {
  console.log('working day', req.body, req.params);
  res.status(200);//correct response, but no content
  // good practive is to give id on REST update
  res.send( { id: req.params.id});
});

router.delete('/api/event/:id', (req, res) => {
  console.log('working day', req.params);
  res.status(200);//correct response, but no content
  // good practive is to give id on REST update
  res.send( { id: req.params.id});
});

module.exports = router;
