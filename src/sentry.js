import * as Sentry from "@sentry/browser";

const sentryTestkit = require("sentry-testkit");

const { sentryTransport } = sentryTestkit();

Sentry.init({
  dsn: "https://dummy@sentry.io/dummy",
  transport: sentryTransport,
  beforeSend(event) {
    console.log("before send", event);
    return event;
  }
});
