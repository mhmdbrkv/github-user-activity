#!/usr/bin/env node
const [, , username] = process.argv;
const url = `https://api.github.com/users/${username}/events`;

try {
  if (!username) {
    console.log("Provide a username");
    process.exit(1);
  }

  const data = await fetch(url);
  if (!data.ok) {
    console.log("Error fetching data: Invalid username");
    process.exit(1);
  }

  const events = await data.json();
  const commits = events
    .filter((event) => event.type === "PushEvent")
    .map((event) => event.payload.commits[0].message);

  console.log(commits.join("\n"));
} catch (err) {
  console.log("Error fetching data: ", err);
}
