const app = require("./app");

app.listen(process.env.PORT, () => {
  console.log(`Running port: ${process.env.PORT}`);
});