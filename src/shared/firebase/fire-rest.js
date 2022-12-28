// eslint-disable-next-line no-unused-vars
import { collection, doc, setDoc, getDocs, getDoc, updateDoc } from "firebase/firestore"; 
import { fireDatabase } from '../../Firebase';


export const menuRef = collection(fireDatabase, "menu");
export const welcomeRef = collection(fireDatabase, "welcome");

export const createCollectionDbRef = (pathArray) => {
  return collection(fireDatabase, ...pathArray);
};

export const createDocDbRef = (pathArray) => {
  return doc(fireDatabase, ...pathArray);
};

export const getCollection = async (pathArray) => {
  const querySnapshot = await getDocs(createCollectionDbRef(pathArray));
  const res = [];
  querySnapshot.forEach((doc) => {
    res.push({
      id: doc.id,
      ...doc.data()
    });
  });
  return res;
};

export const getDocument = async (pathArray) => {
  const docRef = createDocDbRef(pathArray);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};



export const getFullMenu = async () => {
  const querySnapshot = await getDocs(createCollectionDbRef(['menu']));
  const res = [];
  querySnapshot.forEach((doc) => {
    //console.log(doc.id, " => ", doc.data());
    res.push({
      id: doc.id,
      ...doc.data()
    });
  });
  return res;
};


export const getWelcomeMessageArray = async (pathArray) => {
  const querySnapshot = await getDocs(createCollectionDbRef(pathArray));
  const messageArray = [];
  querySnapshot.forEach((doc) => {
    //console.log(doc.id, " => ", doc.data());
    messageArray.push({
      id: doc.id,
      messages: doc.data()
    });
  });
  const result = messageArray[0];
  return result;
};


export const updateWelcome = async (pathArray, message) => {
  const welcomeRef = createDocDbRef(['welcome', ...pathArray]);
  const res = await updateDoc(welcomeRef, {
    ...message
  });
  return res;
};

