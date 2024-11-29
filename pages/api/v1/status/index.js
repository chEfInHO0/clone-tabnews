function status(req, res) {
  res.status(200).json({ status: "Tudo certo por aqui" })
}

export default status;