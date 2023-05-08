class HttpRes {
  static message500 = "Something went wrong. Contact support.";

  static status500(res) {
    res.status(500).json({ error: this.message500 });
  }
}

module.exports = HttpRes;
