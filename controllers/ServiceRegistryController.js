import ServiceRegistry from '../models/ServiceRegistry.js';

class ServiceRegistryController {

  constructor() {
    this.serviceRegistry = new ServiceRegistry();
  }

  get = async (req, res) => {
    const { name, version } = req.params;
    const service = this.serviceRegistry.get(name, version);
    console.log(service);
    if(!service){
      res.sendStatus(404);
    }
    res.json(service);
  }

  store = async (req, res) => {
    const { name, version, port } = req.params;
    let ip =  req.connection.remoteAddress;
    if (ip.substr(0, 7) == "::ffff:") {
      ip = ip.substr(7)
    }
    ip = ip.includes("::") ? `[${req.connection.remoteAddress}]` : ip;
    const key = this.serviceRegistry.register(name, version, ip, port);
    res.json({ success: true, key });
  }

  destroy = (req, res) => {
    const { name, version, port } = req.params;
    let ip =  req.connection.remoteAddress;
    if (ip.substr(0, 7) == "::ffff:") {
      ip = ip.substr(7)
    }
    ip = ip.includes("::") ? `[${req.connection.remoteAddress}]` : ip;
    const key = this.serviceRegistry.unregister(name, version, ip, port);
    res.json({ success: true, key });
  }
}

export default ServiceRegistryController;