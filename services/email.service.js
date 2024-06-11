import { ServiceBroker } from "moleculer";

const broker = new ServiceBroker();

broker.createService({
  name: "email",
  actions: {
    sendEmail(ctx) {
      const { recipient, subject, content } = ctx.params;
      //Simulate email logic
      console.log(`Sending email to ${recipient} with subject ${subject}`);
      console.log(`Content: ${content}`);
      return `Email sent to ${recipient}`;
    },
  },
});

export default broker;
