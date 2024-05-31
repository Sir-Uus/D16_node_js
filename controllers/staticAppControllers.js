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
  res.render("produk", { myProduks: produks });
};
exports.editProduk = (req, res) => {
  const produkId = req.params.id_produk;
  const produkEdit = produks.find((p) => p.id_produk === produkId);
  if (produkEdit) {
    res.render("edit_produk", { myProduks: produkEdit });
  } else {
    res.status(404).send("User not found");
  }
};

exports.updateProduk = (req, res) => {
  const id_produk = req.params.id_produk;
  const updatedProduk = req.body;

  // Cari produk berdasarkan id_produk dan perbarui propertinya
  const index = produks.findIndex((p) => p.id_produk === id_produk);
  if (index !== -1) {
    produks[index] = { ...produks[index], ...updatedProduk };
  }

  // Redirect kembali ke halaman daftar produk
  res.redirect("/produk");
};

// exports.updateProduk = (req, res) => {
//   const produkId = req.params.id;
//   const updatedproduk = req.body;
//   const produkIndex = produks.findIndex((p) => p.id === produkId);
//   if (produkIndex !== -1) {
//     produks[produkIndex] = { ...updatedproduk, id: produkId };
//     res.redirect("/");
//   } else {
//     res.status(404).send("Produk not found");
//   }
// };
exports.deleteProduk = (req, res) => {
  const produkId = req.params.id;
  const produkIndex = produks.findIndex((p) => p.id === produkId);
  if (produkIndex !== -1) {
    produks.splice(produkIndex, 1);
    res.redirect("/produk");
  } else {
    res.status(404).send("produk not found");
  }
};

// karyawan
const karyawans = [];
exports.getHomekaryawan = (req, res) => {
  res.render("karyawan", { myKaryawan: karyawans });
};

exports.getTambahKaryawan = (req, res) => {
  res.render("tambah_karyawan");
};

exports.saveKaryawan = (req, res) => {
  karyawans.push(req.body);
  res.render("karyawan", { myKaryawan: karyawans });
};
exports.editKaryawan = (req, res) => {
  const karyawanId = req.params.id_karyawan;
  const karyawanEdit = karyawans.find((p) => p.id_karyawan === karyawanId);
  if (karyawanEdit) {
    res.render("edit_karyawan", { myKaryawan: karyawanEdit });
  } else {
    res.status(404).send("Karyawan not found");
  }
};
exports.updateKaryawan = (req, res) => {
  const id_karyawan = req.params.id_karyawan;
  const updatedkaryawan = req.body;

  // Cari produk berdasarkan id_produk dan perbarui propertinya
  const index = karyawans.findIndex((p) => p.id_karyawan === id_karyawan);
  if (index !== -1) {
    karyawans[index] = { ...karyawans[index], ...updatedkaryawan };
  }

  // Redirect kembali ke halaman daftar produk
  res.redirect("/karyawan");
};
exports.deleteKaryawan = (req, res) => {
  const karyawanId = req.params.id;
  const karyawanIndex = karyawans.findIndex((p) => p.id === karyawanId);
  if (karyawanIndex !== -1) {
    karyawans.splice(karyawanIndex, 1);
    res.redirect("/karyawan");
  } else {
    res.status(404).send("karyawan not found");
  }
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
  res.render("transaksi", { myTransaksi: transaksis });
};
// INVESTOR
const investasis = [];
exports.getHomeInvestor = (req, res) => {
  res.render("investor", { myInvestasi: investasis });
};
exports.getTambahInvestor = (req, res) => {
  res.render("tambah_investor");
};
exports.saveInvestasi = (req, res) => {
  investasis.push(req.body);
  res.render("investor", { myInvestasi: investasis });
};
exports.editInvestor = (req, res) => {
  const investorId = req.params.id_investor;
  const investorEdit = investasis.find((p) => p.id_investor === investorId);
  if (investorEdit) {
    res.render("edit_investor", { myInvestasi: investorEdit });
  } else {
    res.status(404).send("investor not found");
  }
};
exports.updateInvestor = (req, res) => {
  const id_investor = req.params.id_investor;
  const updatedinvestor = req.body;

  // Cari produk berdasarkan id_produk dan perbarui propertinya
  const index = investasis.findIndex((p) => p.id_investor === id_investor);
  if (index !== -1) {
    investasis[index] = { ...investasis[index], ...updatedinvestor };
  }

  // Redirect kembali ke halaman daftar produk
  res.redirect("/investor");
};
exports.deleteInvestor = (req, res) => {
  const investorId = req.params.id;
  const investorIndex = investasis.findIndex((p) => p.id === investorId);
  if (investorIndex !== -1) {
    investasis.splice(investorIndex, 1);
    res.redirect("/investor");
  } else {
    res.status(404).send("investor not found");
  }
};
