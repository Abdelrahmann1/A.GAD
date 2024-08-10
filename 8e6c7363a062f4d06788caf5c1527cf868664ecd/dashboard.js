function getAllUnits(gets) {
  db.collection(gets).get().then((querySnapshot) => {
      displayUnitCards(querySnapshot)
  });
}
  let x = 0;
function displayUnitCards(params) {
  const container = document.querySelector(".asd");
  container.innerHTML = ""; 

  let cardNumber = 1; 
  params.forEach((doc) => {
    // Access data from each document
    const propertyData = doc.data();
    const cardBanner = document.createElement("tr");
     x = x + 1;

    cardBanner.innerHTML = `
    <tr>
     </td>
    <td><button type="button" class="btn btn-danger" onclick="Delete('${doc.id}')">حذف العنصر</button>
    </td>
    <td><div class="clamp-text"> ${propertyData.Date}</div></td>
    <td><div class="clamp-text"> ${propertyData.productQuantity}</div></td>
    <td><div class="clamp-text"> ${propertyData.productColor}</div></td>
    <td><div class="clamp-text"> ${propertyData.alternatePhone}</div></td>
    <td><div class="clamp-text"> ${propertyData.phone}</div></td>
    <td><div class="clamp-text"> ${propertyData.province}</div></td>
    <td><div class="clamp-text"> ${propertyData.address} </div></td>
    <td><div class="clamp-text">${propertyData.fullName}</div></td>
    <th scope="row"><div class="clamp-text"> ${cardNumber}</div></th>
  </tr>

    `;
    container.appendChild(cardBanner);
    cardNumber++; 
  });
}





function Delete(params) {
  const confirmed = confirm("هل انت متأكد من أنك تريد مسح هذا العنصر");

  if (!confirmed) {
    console.log("تم الغاء الحذف");
    return;
  }

  const documentIdToDelete = params;
  const docRefToDelete = db.collection("orders").doc(documentIdToDelete);
  docRefToDelete.get()
    .then((docSnapshot) => {
      if (docSnapshot.exists) {
        const productData = docSnapshot.data();
        return docRefToDelete.delete().then(() => productData);
      } else {
        console.log("Document does not exist");
        window.location.reload();
        return null;
      }
    })
    .then((productData) => {
      if (productData) {
        alert("تم الحذف بنجاح")
        window.location.reload();
      }
    })
    .catch((error) => {
      alert("Error deleting document:", error);
    });
}
  
