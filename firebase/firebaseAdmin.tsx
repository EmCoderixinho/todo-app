interface FirebaseAdminAppParams {
  projectId: string;
  clientEmail: string;
  privateKey: string;
}

import admin from 'firebase-admin';
 
function formatFirebasePrivateKey(key: string) {
  return key.replace(/\\n/g, '\n');
}
 
export function createFirebaseAdminApp(params: FirebaseAdminAppParams) {
  const privateKey = formatFirebasePrivateKey(params.privateKey);
  
  // if already created, return the same instance
  if (admin.apps.length > 0) {
    return admin.app();
  }
 
  // create certificate
  const cert = admin.credential.cert({
    projectId: params.projectId,
    clientEmail: params.clientEmail,
    privateKey,
  });
 
  // initialize admin app
  return admin.initializeApp({
    credential: cert,
    projectId: params.projectId
  });
}