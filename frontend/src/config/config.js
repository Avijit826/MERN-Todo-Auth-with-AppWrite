import { Client, Account, ID } from 'appwrite';

const client = new Client();

client
    .setEndpoint('http://localhost/v1')
    .setProject('64286f0c712128230c27');

const account = new Account(client);

export { account, ID }