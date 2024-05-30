const produks = [];

exports.Dashboard = (req, res) => {
  res.render("index")
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
const inputKaryawan = [];
exports.getHomePage = (req, res) => {
    res.render("inputKaryawan", { karyawanBudi: inputKaryawan});
}

exports.getKaryawanPage = (req, res) => {
    res.render("inputKaryawan");
}

exports.saveKaryawan = (req, res) => {
    inputKaryawan.push(req.body);
    res.render("simpandata copy");
}
//DATA TRANSAKSI
const inputdatatransaksi = [];
exports.getHomePage = (req, res) => {
    res.render("datatransaksi", { myData: inputdatatransaksi});
}

exports.getDataPage = (req, res) => {
    res.render("inputdatatransaksi");
}

exports.saveData = (req, res) => {
    inputdatatransaksi.push(req.body);
    res.render("simpandata");
}
