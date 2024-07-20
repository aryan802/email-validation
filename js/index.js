console.log("Hello");

let result = {
  tag: "",
  free: true,
  role: false,
  user: "aj8022003",
  email: "aj8022003@gmail.com",
  score: 0.64,
  state: "deliverable",
  domain: "gmail.com",
  reason: "valid_mailbox",
  mx_found: true,
  catch_all: null,
  disposable: false,
  smtp_check: true,
  did_you_mean: "",
  format_valid: true,
};

submitBtn.addEventListener("click", async () => {
  e.preventDefault();
    console.log("clicked");
  let key = "ema_live_x1MRbUnYMxC8L0AasMgxFG8Fy8nh1LkIYRaW8TAB";
  let email = document.getElementById("username").value;
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
  let res = await fetch(url);
  let result = await res.json();
  let str = ``;
  for (key of Object.keys(result)) {
    str = str + `<div>${key}: ${result[key]}</div>`;
  }
  console.log(str);
  resultCont.innerHTML = str;
});
