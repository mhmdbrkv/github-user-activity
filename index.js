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
    console.log("Error fetching data: Invalid username or invalid API");
    process.exit(1);
  }

  const events = await data.json();

  events?.forEach((element) => {
    switch (element.type) {
      case "PushEvent":
        console.log(
          `- Pushed ${events[0].payload.commits.length} commits to ${events[0].repo.name}`
        );
        break;

      case "CreateEvent":
        console.log(`- Created ${events[0].repo.name}`);
        break;

      case "DeleteEvent":
        console.log(`- Deleted ${events[0].repo.name}`);
        break;

      case "ForkEvent":
        console.log(`- Forked ${events[0].repo.name}`);
        break;

      case "WatchEvent":
        console.log(`- Watched ${events[0].repo.name}`);
        break;

      case "IssuesEvent":
        console.log(
          `- ${events[0].payload.action} an issue in ${events[0].repo.name}`
        );
        break;

      case "StarEvent":
        console.log(`- Starred ${events[0].repo.name}`);
        break;

      default:
        break;
    }
  });
} catch (err) {
  console.log("Error fetching data: ", err);
}
