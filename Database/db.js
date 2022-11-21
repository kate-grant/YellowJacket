import SQLite from 'react-native-sqlite-storage';

export function errorCB(err) {
  console.log('SQL Error: ' + JSON.stringify(err));
}

export function successCB() {
  console.log('SQL executed fine');
}

export function openCB() {
  console.log('Database OPENED');
}

const db = SQLite.openDatabase(
  {name: 'yellowjacketDB', location: 'default'},
  openCB,
  errorCB,
);

export default db;
