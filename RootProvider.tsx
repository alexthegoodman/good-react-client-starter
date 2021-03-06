import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";

import { hot } from "react-hot-loader/root";

import * as mixpanel from "mixpanel-browser";
import { ApolloProvider } from "react-apollo";
import { MixpanelProvider } from "react-mixpanel";
import { Router, View } from "react-navi";
import * as Sentry from "@sentry/browser";
import { CookiesProvider } from "react-cookie";
import FullStory from "react-fullstory";
// import MessengerCustomerChat from "react-messenger-customer-chat";
import whyDidYouRender from "@welldone-software/why-did-you-render";

import routes from "./routes";
import ErrorFallback from "./components/pages/status/ErrorFallback/ErrorFallback";
import client from "./services/ApolloClient";
import { ErrorHandler } from "./services/ErrorHandler";
import { StyleProvider } from "./StyleProvider";

// TagManager

mixpanel.init(process.env.MIXPANEL_SECRET);

if (process.env.NODE_ENV !== "development") {
  Sentry.init({ dsn: process.env.SENTRY });
}

// if (process.env.NODE_ENV === "development") {
//   whyDidYouRender(React, {
//     trackAllPureComponents: true,
//   });
// }

interface RootProviderProps {}

const RootProvider: React.FC<RootProviderProps> = (props) => {
  return (
    <ErrorBoundary onError={ErrorHandler} FallbackComponent={ErrorFallback}>
      <MixpanelProvider mixpanel={mixpanel}>
        {process.env.NODE_ENV !== "development" ? (
          <>
            <FullStory org="KKJA5" />
            {/* <MessengerCustomerChat
              pageId="431860910314038"
              appId="1534142523521486"
            /> */}
          </>
        ) : (
          <></>
        )}
        <ApolloProvider client={client}>
          {/** TODO: Good spot for Layout if desire no rerender, consider best placement for context */}
          <CookiesProvider>
            <Router routes={routes}>
              <StyleProvider />
            </Router>
          </CookiesProvider>
        </ApolloProvider>
      </MixpanelProvider>
    </ErrorBoundary>
  );
};

export default hot(RootProvider);
