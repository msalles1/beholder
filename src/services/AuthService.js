export function doLogin(email, password) {
  return new Promise((response, reject) => {
    if (email === "marcelo.ys1@gmail.com" && password === "12345") {
      response(true);
    } else {
      reject("Invalid user and/or password!");
    }
  });
}

export function doLogout() {}
