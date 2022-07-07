//lay token de dang nhap
// import { getUserInfo } from "../common/utils/other";

export function authHeader() {
  // return authorization header with jwt token.
  // const user =  getUserInfo();
  // if (user && user?.auth?.AccessToken) {
  //     return {'authorization': 'Bearer'+ user?.auth?.AccessToken };
  // } else {
  // return {};
  // }
  return {};
}

export function bodyHeader() {
  return {
    "Content-Type": "application/json",
  };
}

export function postOption(params) {
  return {
    mode: "cors",
    method: "POST",
    headers: { ...authHeader(), ...bodyHeader() },
    body: JSON.stringify(params),
  };
}

export async function getMethod(urlPath, params = {}) {
  try {
    const options = {
      method: "GET",
      mode: "cors",
      headers: authHeader(),
    };
    const url = new URL(urlPath);
    Object.keys(params).forEach((k) => url.searchParams.append(k, params[k]));
    let ret = await fetch(url, options).then(handleResponse);
    if (ret?.errCode === "401") {
      // Get token belong to refresh token
    }
    return ret;
    // return fetch(url, options).then(handleResponse);
  } catch (error) {
    return {
      errCode: "1",
    };
  }
}
export async function postMethod(urlPath, params) {
  try {
    const options = {
      method: "POST",
      mode: "cors",
      headers: { ...authHeader(), ...bodyHeader() },
      body: JSON.stringify(params || {}),
    };
    let ret = await fetch(urlPath, options).then(handleResponse);

    if (ret.errCode === "401") {
      // Get token belong to refresh token.
    }

    return ret;

    // return fetch(urlPath, options). then (handleResponse);
  } catch (error) {
    return {
      errCode: "1",
    };
  }
}
export async function putMethod(urlPath, params) {
  try {
    const options = {
      method: "PUT",
      mode: "cors",
      headers: { ...authHeader(), ...bodyHeader() },
      body: JSON.stringify(params || {}),
    };
    let ret = await fetch(urlPath, options).then(handleResponse);

    if (ret.errCode === "401") {
      // Get token belong to refresh token
    }

    return ret;
    // return fetch(urlPath, options).then(handleResponse)
  } catch (error) {
    return {
      errCode: "1",
      
    };
  }
}

export async function deleteMethod(urlPath, params) {
  try {
    const options = {
      method: "DELETE",
      mode: "cors",
      headers: { ...authHeader(), ...bodyHeader() },
      body: JSON.stringify(params || {}),
    };

    const ret = await fetch(urlPath, options).then(handleResponse);

    if (ret.errCode === "401") {
      // Get token belong to refresh token
    }
    return ret;
    // return fetch(urlPath, options).then(handleResponse);
  } catch (error) {
    return {
      errCode: "1",
    };
  }
}
export async function patchMethod(urlPath, params) {
  try {
    const options = {
      method: "PATCH",
      mode: "cors",
      headers: { ...authHeader(), ...bodyHeader() },
      body: JSON.stringify(params || {}),
    };
    const ret = await fetch(urlPath, options).then(handleResponse);
    if ((ret.errCode = 401)) {
      // Get token belong to refresh token
    }
    return ret;
    // return fetch(urlPath, options).then(handleResponse);
  } catch (error) {
    return {
      errCode: "1",
    };
  }
}
export function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        localStorage.removeItem("user");
        window.location.reload();
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
