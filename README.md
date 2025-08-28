# GitHub Activities CLI

A simple Node.js command-line tool to fetch and display recent GitHub activities for any user using the [GitHub Events API](https://docs.github.com/en/rest/activity/events).

This project is inspired by the [GitHub User Activity project on roadmap.sh](https://roadmap.sh/projects/github-user-activity).

---

## 🚀 Features

- Fetches recent GitHub activities for a given username.
- Displays actions like:
  - Pushes (commits pushed)
  - Repository creation
  - Repository deletion
  - Forking repositories
  - Watching repositories
  - Issues opened/closed
  - Stars given
- Provides error handling for invalid usernames or API issues.

---

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/github-activities-cli.git
   cd github-activities-cli
   ```

2. Make the script executable:

   ```bash
   chmod +x index.js
   ```

3. (Optional) Link it globally to use `gh-activity` anywhere:

   ```bash
   npm link
   ```

---

## 🛠️ Usage

### Run directly with Node:

```bash
node index.js <github-username>
```

### Run as a CLI (after linking):

```bash
gh-activity <github-username>
```

---

## 📖 Example

```bash
gh-activity torvalds
```

Output:

```
- Pushed 3 commits to torvalds/linux
- Created repo torvalds/test
- Forked torvalds/linux
- Watched torvalds/subsurface
```

---

## ⚠️ Notes

- The script uses the **GitHub Events API**, which may have rate limits (60 requests/hour for unauthenticated requests).
- If you need higher limits, you can extend the script to use a GitHub Personal Access Token (PAT).
- Currently, it only prints recent events — you can customize it further.

---

## 📌 Roadmap / Future Improvements

- Add support for GitHub authentication (for higher rate limits).
- Display more event details (e.g., commit messages, issue titles).
- Format output with colors for better readability.
- Add options/flags for filtering event types (e.g., only `PushEvent`).

---

## 📝 License

MIT License. Free to use and modify.
