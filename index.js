require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const emailRoute = require("./routes/email");

const app = express();

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// Enable reverse proxy support in Express. This causes the
// the "X-Forwarded-Proto" header field to be trusted so its
// value can be used to determine the protocol. See
// http://expressjs.com/api#app-settings for more details.
app.enable("trust proxy");

// Use Routes
app.use("/api/email", emailRoute);

// Serve static files from the React app if in production
if (process.env.NODE_ENV === "production") {
  // Add a handler to inspect the req.secure flag (see
  // http://expressjs.com/api#req.secure). This allows us
  // to know whether the request was via http or https.
  app.use(function(req, res, next) {
    if (req.secure) {
      // request was via https, so do no special handling
      next();
    } else {
      // request was via http, so redirect to https
      res.redirect("https://" + req.headers.host + req.url);
    }
  });

  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
