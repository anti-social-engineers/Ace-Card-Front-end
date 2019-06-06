const app = require("express")();
const stripe = require("stripe")("sk_test_A08xxHNErF3lqxa91aD5C67j00BFpwSAO2");

app.use(require("body-parser").text());

app.post("/charge", async (req, res) => {
    try {
      let {status} = await stripe.charges.create({
        currency: "eur",
        description: "Opladen van saldo",
        source: req.body,
        amount: 500
      });
  
      res.json({status});
    } catch (err) {
      res.status(500).end();
    }
  });

  app.post("/charge1", async (req, res) => {
    try {
      let {status} = await stripe.charges.create({
        currency: "eur",
        description: "Opladen van saldo",
        source: req.body,
        amount: 1000
      });
  
      res.json({status});
    } catch (err) {
      res.status(500).end();
    }
  });

app.listen(7000, () => console.log("Listening on port 7000"));
