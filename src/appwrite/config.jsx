import { Account, Client } from "appwrite";

const AppClient = new Client()
    .setEndpoint("https://nyc.cloud.appwrite.io/v1")
    .setProject("6874f2790016bd5fadd5")

export const account = new Account(AppClient)