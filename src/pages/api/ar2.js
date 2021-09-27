import fs from "fs";
import path from "path";

const filePath = path.resolve(".", "html/index2.html");
const file = fs.readFileSync(filePath);

export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html; charset=UTF-8");
  res.send(file);
}
