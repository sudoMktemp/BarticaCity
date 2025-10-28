# GitHub Pages Deployment Guide

## Quick Start

Your Bartica website is configured for automatic deployment to GitHub Pages. Follow these steps:

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select:
   - Source: **GitHub Actions**
4. Click **Save**

### 2. Push Your Code

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit - Bartica Guyana website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git push -u origin main
```

### 3. Automatic Deployment

Once you push to the `main` branch:
- GitHub Actions will automatically trigger
- Your site will be built using Vite
- The built files will be deployed to GitHub Pages
- You can monitor the deployment in the **Actions** tab

### 4. Access Your Site

After deployment completes (usually 2-5 minutes):
- Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`
- If your repo is named `YOUR-USERNAME.github.io`, it will be at: `https://YOUR-USERNAME.github.io/`

## Custom Domain (Optional)

To use a custom domain like `barticacity.gov.gy`:

1. Create a file named `CNAME` in the root directory:
   ```
   bartica.gov.gy
   ```

2. Configure DNS records with your domain provider:
   - Add a CNAME record pointing to `YOUR-USERNAME.github.io`
   - Or add A records pointing to GitHub Pages IPs

3. In GitHub Settings → Pages, enter your custom domain

## Troubleshooting

### Site Not Loading / 404 Error

If you see 404 errors, check:
1. **Repository name**: If your repo is NOT named `username.github.io`, the base path needs to match your repo name
2. **GitHub Pages is enabled**: Check Settings → Pages
3. **Deployment succeeded**: Check the Actions tab for any errors
4. **Base path in vite.config.ts**: Should automatically configure, but verify it matches your repo structure

### Build Failures

Check the Actions tab for error logs. Common issues:
- Missing dependencies in `package.json`
- TypeScript errors
- Import path issues

### Manual Trigger

You can manually trigger a deployment:
1. Go to **Actions** tab
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow** → **Run workflow**

## Configuration Files

- **`.github/workflows/deploy.yml`**: GitHub Actions workflow
- **`vite.config.ts`**: Vite build configuration
- **`package.json`**: Dependencies and scripts
- **`index.html`**: Entry HTML file
- **`main.tsx`**: Application entry point

## Environment Variables

The deployment automatically configures:
- `VITE_BASE_PATH`: Set based on repository name for correct routing

## Updates

To update your site:
```bash
# Make your changes
# ...

# Commit and push
git add .
git commit -m "Update content"
git push
```

The site will automatically rebuild and deploy! 🚀

---

**Need Help?**
- Check GitHub Pages documentation: https://docs.github.com/en/pages
- Check GitHub Actions logs in the Actions tab
- Verify all configuration files are properly set up
