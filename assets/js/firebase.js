const firebaseConfig = {
    apiKey: "AIzaSyCirASv8Z_UszoCWnon3j-S_fFZmSbTRjo",
    authDomain: "ahmed-gad-d2d98.firebaseapp.com",
    projectId: "ahmed-gad-d2d98",
    storageBucket: "ahmed-gad-d2d98.appspot.com",
    messagingSenderId: "925945617121",
    appId: "1:925945617121:web:90a2554482f5390b9735a0",
    measurementId: "G-2G5RT3Q8WZ"
  };
const colorInput = document.getElementById("productColor");
// alert(colorInput)
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
  

function get_to_dash_order(data) {
    const loadingModal = new bootstrap.Modal(document.getElementById('loadingModal'), {
        keyboard: false,
        backdrop: 'static'
    });
    const loadedModal = new bootstrap.Modal(document.getElementById('loadedModal'), {
        keyboard: false,
        backdrop: 'static'
    });
    const errorloadedModal = new bootstrap.Modal(document.getElementById('errorloadedModal'), {
        keyboard: false,
        backdrop: 'static'
    });
        loadingModal.show();
        var postData = {
            "Color": colorInput
          };
    db.collection('orders').add(data, postData)
    .then(() => {
        loadingModal.hide();
        loadedModal.show();

        // alert('Order submitted successfully!');
    })
    .catch((error) => {
        loadingModal.hide();
        errorloadedModal.show();

        // console.error('Error submitting order: ', error);
    });
  }
