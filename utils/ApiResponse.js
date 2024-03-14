class ApiRespone {
  constructor(statuscode, data, message) {
    this.statuscode = statuscode;
    this.message = message;
    this.data = data;
  }
}

export { ApiRespone };
