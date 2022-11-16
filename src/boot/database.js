import { boot } from 'quasar/wrappers'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
// export default boot(async (/* { app, router, ... } */) => {
// something to do
// })

export default { initializeApp, getFirestore, boot }
