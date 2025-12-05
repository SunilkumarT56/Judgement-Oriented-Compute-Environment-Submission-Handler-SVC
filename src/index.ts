import express from "express";

const app = express();

app.get("/me", (req, res) => {
    
    res.send("Hello World!!!!!!!!!!!!!");
});
app.get("/submit", (req, res) => {
    res.send("OK");
})
app.get("/health", (req, res) => {
    res.send("OK");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
