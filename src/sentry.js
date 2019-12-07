import * as Sentry from "@sentry/browser";

const sentryTestkit = require("sentry-testkit");

const { sentryTransport } = sentryTestkit();

Sentry.init({
  dsn: "https://dummy@sentry.io/dummy",
  transport: sentryTransport,
  attachStacktrace: true,
  integrations: integrations => integrations.filter(integration => integration.name !== "Breadcrumbs"),
  environment: "development",
  beforeSend(event) {
    console.log("before send", event);
    return event;
  }
});
