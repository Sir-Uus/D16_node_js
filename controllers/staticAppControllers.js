const produks = [];

exports.Dashboard = (req, res) => {
  res.render("index");
};
exports.getHomeProduk = (req, res) => {
  res.render("produk", { myProduks: produks });
};
exports.getTambahProduk = (req, res) => {
  res.render("tambah_produk");
};
exports.saveProduk = (req, res) => {
  produks.push(req.body);
  res.render("produk");
};
// karyawan
const Karyawans = [];
exports.getHomekaryawan = (req, res) => {
  res.render("karyawan", { myKaryawan: Karyawans });
};

exports.getTambahKaryawan = (req, res) => {
  res.render("tambah_karyawan");
};

exports.saveKaryawan = (req, res) => {
  Karyawans.push(req.body);
  res.render("karyawan");
};
//DATA TRANSAKSI
const transaksis = [];
exports.getHomeTransaksi = (req, res) => {
  res.render("transaksi", { myTransaksi: transaksis });
};

exports.getTambahTransaksi = (req, res) => {
  res.render("tambah_transaksi");
};

exports.saveTransaksi = (req, res) => {
  transaksis.push(req.body);
  res.render("transaksi");
};
