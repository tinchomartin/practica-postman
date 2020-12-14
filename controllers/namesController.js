//const axios = require("axios");

class NamesController {
  constructor() {
    this.names = [];
  }

  async getUser(req, res) {
    res.send(this.names);
  }

  postUser(req, res) {
    const { body } = req;
    const { headers } = req;

    if (body.names && headers.token === "r2d2") {
      this.names.push(body);

      res.status(200).send("usuario agregado con éxito");
    } else {
      res.status(401).send("login malardo");
    }
  }

  putUser(req, res) {
    const indexMfy = req.query.index;
    const { body } = req;

    if (indexMfy >= 0 && body.names) {
      console.log(req.headers);
      this.names.splice(indexMfy, 1, body);

      res.status(200).send("modificación exitosa");
    } else {
      res.status(400).send("valor incorrecto");
    }
  }

  deleteUser(req, res) {
    const { indice } = req.params;
    const { body } = req;
    if (indice >= 0 && this.names.length > 0) {
      this.names.splice(indice, 1);

      res.status(200).send("usuario deleteadazo");
    } else {
      res.status(400).send("valor incorrecto o no existen datos");
    }
  }
}
module.exports = NamesController;
