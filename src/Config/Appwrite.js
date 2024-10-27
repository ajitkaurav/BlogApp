import { Client,Databases,Account } from "appwrite";
const client =new Client()

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("67034637001a7ad272f9");
export const account = new Account(client);
export const database =new Databases(client)
