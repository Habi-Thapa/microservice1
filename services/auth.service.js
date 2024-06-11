import { ServiceBroker } from "moleculer";

const broker = new ServiceBroker();

broker.createService({
  name: "auth",
  actions: {
    async authUser(ctx) {
      const { username, password } = ctx.params;
      if (username === "admin" && password === "admin") {
        return { success: true, message: "Auth was success" };
      }
      return { success: false, message: "Auth failed" };
    },
  },
});

export default broker;
