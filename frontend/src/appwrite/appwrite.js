import { Client, Account, Databases, ID } from 'appwrite';

const client = new Client();
client.setEndpoint('https://cloud.appwrite.io/v1').setProject('648a1c84467d2af0152a');

export const account = new Account(client);
export const databases = new Databases(client, '648a1d0b99c02b8e8534');

// Create data
const documentData = {
  movieName: [
    "m _ s _ _ o _  i _ _ o _ s _ _ l _",
    "m i s s i o n  i m p o s s i b l e",
  "i _ c _ p _ i _ n",
  "i n c e p t i o n",
  "t _ _   _ _ r _  k _ _ g _ t",
  "t h e   d a r k  k n i g h t",
  "t _ t _ _ i _",
  "t i t a n i c",
  "_ l _ d _ a _ _ r"
 ,"g l a d i a t o r",
 "a _ _ t _ _",
 "a v a t a r",
 "_ _ _ a _ g _ r  _ _ i _ _ s",
 "s t r a n g e r  t h i n g s",
 "g _ _ r _ _ a _  o _  _ _ e  _ a _ a _ _",
 "g a u r d i a n  o f  t h e  g a l a x y",
]
 
};

const promise = databases.createDocument('648a1d0b99c02b8e8534', '648a1d76ca950097482a', ID.unique(), documentData);

promise.then(function (response) {
  console.log(response);
}).catch(function (error) {
  console.log(error);
});




