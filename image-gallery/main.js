console.log(
  "Dear reviewer!\nPlease review my priject a couple of days later, I'm still working on project.\nThank you very much!"
);
const url =
  "https://api.unsplash.com/search/photos?page=1&query=office&client_id=tl5SPOXDUnmZktEBhWhfAJFaQgwYwBZHCKf6jOPqlxE";

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
}
getData();
