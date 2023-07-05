const exp = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cP = require("cookie-parser");
require("dotenv").config();

const app = exp();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
  })
);
app.use(exp.json());
app.use(cP());

app.use("/api/train", require("./routes/train"));
app.use("/api/user", require("./routes/user"));
app.use("/api/book", require("./routes/book"));
app.use("/api/auth", require("./routes/auth"));

mongoose
  .connect("mongodb://localhost:27017/railway", {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log(`Database Connection Established at ${27017}`))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started at 5000`));
