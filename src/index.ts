
import { config } from "./config";
import ExpressApp from "./app";
import { MongoDB } from "./loaders";

(async () => {
    const expressApp = new ExpressApp();
    await MongoDB.connect();
    expressApp.getApp().listen(config.port, () => console.log(`running on port ${config.port}`))
})()