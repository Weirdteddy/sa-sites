# South African Links

A static directory of South African websites organized by category.

## Run locally

Open `index.html` in a browser, or serve this folder with a local static web server.

## Add a website

Edit `data/sites.js`:
1. Pick the category.
2. Add an object with `name`, `url`, and `howto`.
3. Use the organization's official HTTPS domain.
4. Test the link and the instructions before publishing.

## Security and maintenance

- This is a public directory, not a security boundary. Users can inspect or alter
  client-side files in their own browser.
- Keep directory edits restricted to trusted maintainers in your repository or
  hosting control panel; enable multi-factor authentication and review changes.
- Use HTTPS for the deployed site and set server-side security headers, especially
  Content-Security-Policy, X-Content-Type-Options, and Referrer-Policy.
- Review links periodically. This project does not verify that external sites
  remain official or safe.
- Never collect banking credentials, passwords, or personal information.
