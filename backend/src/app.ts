import express from "express";

const app = express();

app.get("/api", (req, res) => {
  res.send(200).json({ success: "success" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server started on port 5000..."));
