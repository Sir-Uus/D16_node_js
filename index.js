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
app.get("/update_produk/:id_produk", staticAppControllers.editProduk);
app.post("/update_produk/:id_produk", staticAppControllers.updateProduk);
app.post("/delete_produk/:id_produk", staticAppControllers.deleteProduk);

app.get("/karyawan", staticAppControllers.getHomekaryawan);
app.get("/tambah_karyawan", staticAppControllers.getTambahKaryawan);
app.post("/tambah_karyawan", staticAppControllers.saveKaryawan);
app.get("/update_karyawan/:id_karyawan", staticAppControllers.editKaryawan);
app.post("/update_karyawan/:id_karyawan", staticAppControllers.updateKaryawan);
app.post("/delete_karyawan/:id_karyawan", staticAppControllers.deleteKaryawan);

app.get("/transaksi", staticAppControllers.getHomeTransaksi);
app.get("/tambah_transaksi", staticAppControllers.getTambahTransaksi);
app.post("/tambah_transaksi", staticAppControllers.saveTransaksi);

app.get("/investor", staticAppControllers.getHomeInvestor);
app.get("/tambah_investor", staticAppControllers.getTambahInvestor);
app.post("/tambah_investor", staticAppControllers.saveInvestasi);
app.get("/update_investor/:id_investor", staticAppControllers.editInvestor);
app.post("/update_investor/:id_investor", staticAppControllers.updateInvestor);
app.post("/delete_investor/:id_investor", staticAppControllers.deleteInvestor);

// app.use(errorControllers.pageNotFoundError);
app.use(errorControllers.internalServerError);
app.listen(port, () => {
  console.log(`The express.js server has started and listening on port number: ${port}`);
});
