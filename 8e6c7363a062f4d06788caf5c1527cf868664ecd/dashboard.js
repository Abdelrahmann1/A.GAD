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





  
