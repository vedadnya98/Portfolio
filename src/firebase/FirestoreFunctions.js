// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import firebaseApp from './Firebase'

// let db = firebaseApp.firestore();

// async function getProjects(){
//   let cityRef = db.collection('portfolio').doc('Projects');
//   let getDoc = cityRef.get()
//     .then(doc => {
//       if (!doc.exists) {
//         console.log('No such document!');
//       } else {
//         console.log('Document data:', doc.data());
//         return doc.data();
//       }
//     })
//     .catch(err => {
//       console.log('Error getting document', err);
//     });
// };

// async function getExperience(){
//   let cityRef = db.collection('portfolio').doc('Experience');
//   let getDoc = cityRef.get()
//     .then(doc => {
//       if (!doc.exists) {
//         console.log('No such document!');
//       } else {
//         console.log('Document data:', doc.data());
//         return doc.data();
//       }
//     })
//     .catch(err => {
//       console.log('Error getting document', err);
//     });
// };

// async function getEduction(){
//   let cityRef = db.collection('portfolio').doc('Eductaion');
//   let getDoc = cityRef.get()
//     .then(doc => {
//       if (!doc.exists) {
//         console.log('No such document!');
//       } else {
//         console.log('Document data:', doc.data());
//         return doc.data();
//       }
//     })
//     .catch(err => {
//       console.log('Error getting document', err);
//     });
// };


// async function getSkills(){
//   let cityRef = db.collection('portfolio').doc('Skills');
//   let getDoc = cityRef.get()
//     .then(doc => {
//       if (!doc.exists) {
//         console.log('No such document!');
//       } else {
//         console.log('Document data:', doc.data());
//         return doc.data();
//       }
//     })
//     .catch(err => {
//       console.log('Error getting document', err);
//     });
// };


// async function addProject(projectObj) {
//   let length = 0;
//   await db.collection('users').doc('Projects').get().then(function(doc) {
//     length = doc.data().Projects.length
//   });
//   await db.collection('portfolio').doc('Projects').update({
//     ProjectCards: firebase.firestore.FieldValue.arrayUnion({ length : projectObj })
//   })
// };

// async function addExperince(expObj) {
//   let length = 0;
//   await db.collection('users').doc("Experince").get().then(function(doc) {
//     length = doc.data().Projects.length
//   });
//   await db.collection('portfolio').doc("Experience").update({
//     Experience: firebase.firestore.FieldValue.arrayUnion({ length : expObj })
//   })
// };


// async function addEducation(projectObj) {
//   let length = 0;
//   await db.collection('users').doc('Projects').get().then(function(doc) {
//     length = doc.data().Projects.length
//   });
//   await db.collection('portfolio').doc('Projects').update({
//     ProjectCards: firebase.firestore.FieldValue.arrayUnion({ length : projectObj })
//   })
// };

// async function addSkillSection(skillObj,skillType) {
//   await db.collection('portfolio').doc('Skills').set()
// }

// async function addSkill(skill,skillType){
//   await db.collection('portfolio').doc('Skills').set()
// };




// export default {
//       getEduction,
//       getExperience,
//       getProjects,
//       getSkills,
//       addEducation,
//       addExperince,
//       addProject,
//       addSkill,
//       addSkillSection
 
// };


import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseApp from './Firebase'

let db = firebaseApp.firestore();

async function getProjects(){
  let collegeRef = await db.collection('portfolio').doc('Projects');
  let getDoc = collegeRef.get()
    .then(doc => {
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        return doc.data()
      }
    })
    .catch(err => {
      console.log('Error getting document', err);
    });
  return getDoc
};


async function getExperience(){
  let expRef = await db.collection('portfolio').doc('Experience');
  let getDoc = expRef.get()
    .then(doc => {
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        return doc.data()
      }
    })
    .catch(err => {
      console.log('Error getting document', err);
    });
  return getDoc
};


async function getEducation(){
  let eduRef = await db.collection('portfolio').doc('Education');
  let getDoc = eduRef.get()
    .then(doc => {
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        return doc.data()
      }
    })
    .catch(err => {
      console.log('Error getting document', err);
    });
  return getDoc
};


async function getSkills(){
  let skillRef = await db.collection('portfolio').doc('Skills');
  let getDoc = skillRef.get()
    .then(doc => {
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        return doc.data()
      }
    })
    .catch(err => {
      console.log('Error getting document', err);
    });
  return getDoc
};

async function addProject(projectObj) {
  await db.collection('portfolio').doc('Projects').update({
    'ProjectCards': firebase.firestore.FieldValue.arrayUnion(projectObj)
  })
    .then(function () {
      console.log("Project added to ProjectCards Document successfully updated!");
    })
    .catch(function (error) {
      console.error("Error updating document: ", error);
    });

};

async function addExperince(expObj) {
  await db.collection('portfolio').doc('Experience').update({
    'Experience': firebase.firestore.FieldValue.arrayUnion(expObj)
  })
    .then(function () {
      console.log("Experience added to Experience Document successfully updated!");
    })
    .catch(function (error) {
      console.error("Error updating document: ", error);
    });

};

async function addEducation(eduObj) {
  await db.collection('portfolio').doc('Education').update({
    'EducationCards': firebase.firestore.FieldValue.arrayUnion(eduObj)
  })
    .then(function () {
      console.log("Education added to EducationCards Document successfully updated!");
    })
    .catch(function (error) {
      console.error("Error updating document: ", error);
    });

};;



export {
  getProjects,
  getExperience,
  getEducation,
  getSkills,
  addEducation,
  addExperince,
  addProject
};





