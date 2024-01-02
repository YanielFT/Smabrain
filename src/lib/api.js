
const API = 'http://localhost:8080/'

function createData(id, name, calories, fat) {
  return {
    id,
    name,
    calories,
    fat,
  };
}

// export async function getOffers() {
//   const response = await fetch(API + "api/v1/offers/");
//   if (!response.ok) {
//      throw { message: "Failed to fetch posts.", status: 500 };
//   }
//   const dataJson = await response.json();

//   const items = [];

//   for (const taskKey in dataJson) {
//     items.push({
//       id: dataJson[taskKey].id,
//       title: dataJson[taskKey].title,
//       desc: dataJson[taskKey].desc,
//       bigDesc: dataJson[taskKey].bigDesc,
//     });
//   }
//   const data = items.map((offer) =>
//     createData(offer.id, offer.title, offer.desc, offer.bigDesc)
//   );
//   return data;
// }

// export async function getOffer({ params }) {
//   const id = params.id;
//   const response = await fetch(API + "api/v1/offers/"+id);
//   if (!response.ok) {
//       throw { message: "Failed to fetch post.", status: 500 };
//   }

//   return response.json();
// }


//**Only for working without server */

export function getOffers() {

  const offers = [
    {
      id: 1,
      title: 'Fullstack react',
      desc: 'Developer with knowledge about react js, next js framework...',
      bigDesc: 'Develop a Modern Web App',

    },
    {
      id: 2,
      title: 'Fullstack java',
      desc: 'Developer with knowledge about Java, spring boot framework...',
      bigDesc: 'Develop a Modern Web App',

    },
  ]
  return offers;
}

export function getOffer({ params }) {
  const offers = {
    id: 1,
    title: 'Fullstack react',
    desc: 'Developer with knowledge about react js, next js framework...',
    bigDesc: 'Develop a Modern Web App',
  }
  return offers;
}

//********end  */

export async function saveOffer(post) {


  if (post.title.trim().length < 5 || post.desc.trim().length < 5 || post.bigDesc.trim().length < 5) {
    throw { message: 'Existen campos con longitud menor a 5', status: 422 }
  }

  const response = await fetch(API + "api/v1/offers/save", {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw { message: "Could not save post.", status: 500 };
  }
  return response.json();
}

export async function deleteOffer(id) {

  const response = await fetch(API + "api/v1/offers/" + id, {
    method: "DELETE",
    body: null,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Error al enviar los datos');
  }

  return data.message;
}

export async function deleteOffers(id) {

  const response = await fetch(API + "api/v1/offers/some/" + id, {
    method: "DELETE",
    body: null,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Error al enviar los datos');
  }

  return data.message;
}




export async function saveContact({
  cvValue,
  nameValue,
  emailValue,
  phoneValue,
  espcValue,
  studiesValue,
  token,
}, lite = false) {
  const body = new FormData();
  body.append("file", cvValue.target.files[0]);
  body.append("fullName", nameValue);
  body.append("email", emailValue);
  if (!lite) {
    body.append("phone", phoneValue);
    body.append("specialty", espcValue);
  }
  body.append("studies", studiesValue);

  const response = await fetch(API + "api/v1/contacts/save", {
    method: "POST",
    body,
    headers: {
      'token': token
    }
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Error al enviar los datos');
  }

  return data.message;
}
