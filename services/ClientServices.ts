import Strings from "./Strings";
import RestClient from "./RestClient";
import AuthClient from "./AuthClient";
import ItemClient from "./ItemClient";
import StringHandler from "./StringHandler";
import IntegrationClient from "./IntegrationClient";
import ApolloClient from "apollo-client";
import client from "./ApolloClient";
import Logs from "./Logs";

export default class ClientServices {
  public strings: Strings;
  public restClient: RestClient;
  public authClient: AuthClient;
  public integrationClient: IntegrationClient;
  public apolloClient: ApolloClient<any>;
  public itemClient: ItemClient;
  public stringHandler: StringHandler;
  public logs: Logs;

  constructor() {
    this.apolloClient = client;
    this.strings = new Strings();
    this.restClient = new RestClient();
    this.authClient = new AuthClient();
    this.integrationClient = new IntegrationClient();
    this.itemClient = new ItemClient();
    this.stringHandler = new StringHandler();
    this.logs = new Logs();
  }
}
