const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const isEmpty = require("../validation/is-empty");

const OAuth2 = google.auth.OAuth2;
const OAuth2_client = new OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET
);

OAuth2_client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

// Load Input Validation
const validateEmailInput = require("../validation/email");

//Send Email Logic
exports.sendEmail = (req, res) => {
  const { errors, isValid } = validateEmailInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  req.body.request = !isEmpty(req.body.request) ? req.body.request : "";

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  const {
    firstName,
    lastName,
    email,
    mobile,
    delivery,
    address,
    suburb,
    cart,
    request,
    total,
    totalItems,
    shippingFee,
  } = req.body;

  let htmlEmail = `
      <h2>Thank you for your order!</h2>
      <h3>Customer Details</h3>
      <ul>
        <li>Customer Name: ${firstName} ${lastName}</li>
        <li>Customer Email: ${email}</li>
        <li>Customer Phone: ${mobile}</li>       
        <li>Total Items: ${totalItems}</li>    
        <li>Delivery Type: ${delivery}</li> 
        <li>Address: ${address}, ${suburb}</li>         
      </ul>    

      <h3>Order Requests</h3>
      <ul>      
    `;

  cart.forEach((product) => {
    htmlEmail =
      htmlEmail +
      `<li>${product.title} $${product.price} x ${product.amount}</li>`;
  });

  htmlEmail =
    htmlEmail +
    `</ul>` +
    `<h3>Additional Requests</h3>` +
    `<p>${request}</p>` +
    `<h2>Total: $${(total + shippingFee).toFixed(2)} ${
      delivery !== "standard (72hrs)" ? "(Express Service Included)" : ""
    }`;

  const accessToken = OAuth2_client.getAccessToken();

  let auth = {
    type: "OAuth2",
    user: process.env.USER_EMAIL,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
    accessToken: accessToken,
  };

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: auth,
    //dev only for localhost user
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailList = ["info@wgpdrycleaners.co.nz", email];

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"WGP Drycleaners" <info@wgpdrycleaners.co.nz>', // sender address
    to: mailList, // list of receivers
    subject: "Order Request", // Subject line
    text: "You have a new order", // plain text body
    html: htmlEmail, // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log("Error: ", err);
      return res.status(400).json(err);
    } else {
      console.log("Success", info);
      res.json(mailOptions);
    }
    transporter.close();
  });
};
