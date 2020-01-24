import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyCm7Zlngp3-IdvjElO-P8qbbAVqOtXfIok',
	authDomain: 'crown-clothing-db-c69d0.firebaseapp.com',
	databaseURL: 'https://crown-clothing-db-c69d0.firebaseio.com',
	projectId: 'crown-clothing-db-c69d0',
	storageBucket: 'crown-clothing-db-c69d0.appspot.com',
	messagingSenderId: '480417950550',
	appId: '1:480417950550:web:fd7fab2f3010c9a8a104f7',
	measurementId: 'G-XF0TWF36LT',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) {
		return;
	}

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	} else {
		console.log('user already exists');
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
