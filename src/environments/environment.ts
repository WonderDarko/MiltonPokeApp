// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endpoint: {
    api: 'https://pokeapi.co/api/v2/',
    pokemon: {
      id: 'pokemon/_id_',
      name: 'pokemon/_name_'
    },
    type: {
      id: 'type/_id_'
    },
    ability: {
      id: 'ability/_id_'
    }
  },

  endpointSW: {
    api: 'https://swapi.dev/api/',
    person: {
      id: 'people/_id_/',
    }
  },

  firebaseConfig: {
    apiKey: "AIzaSyBNROimHtrRts12UPsWEEwjs2bRTJbrbmc",
    authDomain: "ionicnodemcu-824de.firebaseapp.com",
    databaseURL: "https://ionicnodemcu-824de-default-rtdb.firebaseio.com",
    projectId: "ionicnodemcu-824de",
    storageBucket: "ionicnodemcu-824de.appspot.com",
    messagingSenderId: "714739478809",
    appId: "1:714739478809:web:31ced4a2b6dbd246ce1588",
    measurementId: "G-4W85T9KMB8"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
