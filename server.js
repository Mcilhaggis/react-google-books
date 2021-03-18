const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");

const mongoose = require("mongoose");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Add routes, both API and view
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Define mongoose connection
//urlparse param needs to be passed to accept the url format.
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/radiant-refuge-42277",
//this needs to be passed to acccept the orange/second url format.
 { useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
 });
 
 app.listen(PORT, () => {
   console.log(`🌎 ==> API server now on port ${PORT}!`);
});
