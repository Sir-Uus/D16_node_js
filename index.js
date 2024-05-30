const port = 3000,
  express = require("express");
layouts = require("express-ejs-layouts");
app = express();
const path = require("path");

app.use("/css", express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")));
app.use("/js", express.static(path.join(__dirname, "node_modules/jquery/dist")));
app.use("/html", express.static("./public"));
app.set("view engine", "ejs");
app.use(layouts);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const staticAppControllers = require("./controllers/staticAppControllers");
const errorControllers = require("./controllers/errorControllers");
app.get("/", staticAppControllers.Dashboard);
app.get("/produk", staticAppControllers.getHomeProduk);
app.get("/tambah_produk", staticAppControllers.getTambahProduk);
app.post("/tambah_produk", staticAppControllers.saveProduk);

app.get("/karyawan", staticAppControllers.getHomekaryawan);
app.get("/tambah_karyawan", staticAppControllers.getTambahKaryawan);
app.post("/tambah_karyawan", staticAppControllers.saveKaryawan);

app.get("/transaksi", staticAppControllers.getHomeTransaksi);
app.get("/tambah_transaksi", staticAppControllers.getTambahTransaksi);
app.post("/tambah_transaksi", staticAppControllers.saveTransaksi);

app.use(errorControllers.pageNotFoundError);
app.use(errorControllers.internalServerError);
app.listen(port, () => {
  console.log(`The express.js server has started and listening on port number: ${port}`);
});
