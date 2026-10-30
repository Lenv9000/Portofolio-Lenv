# 🚀 Analyst Portfolio Template

**The professional, interactive portfolio designed specifically for Data Analysts.**

Stop sending static PDFs. Impress recruiters with a live dashboard that showcases your SQL, Python, and visualization skills in action.

---

## ⚡ Quick Start (No Coding Required!)

You do **not** need to install any software or use the command line to set up this portfolio. Everything is done through your web browser!

---

## 📋 Phase 1: Upload Your Code to GitHub

### Step 1: Prepare Your Files
1. **Unzip** the downloaded file (`Analyst_Portfolio_Template_v1.zip`) on your computer
2. **Open the folder** you just unzipped
3. You should see files like:
   - `userConfig.js`
   - `package.json`
   - A `public` folder
   - Other files and folders

**Keep this folder window open** - you'll need it later!

---

### Step 2: Create a New GitHub Repository
1. Go to [GitHub.com](https://github.com) and **log in** (or create a free account)
2. Click the **+** icon in the top-right corner
3. Select **"New repository"**

---

### Step 3: Configure Your Repository
Fill out the form with these **important settings**:

- **Repository name:** Choose a name (e.g., `my-portfolio` or `data-analyst-portfolio`)
- **Public/Private:** Select **Public** ✅ (required for free hosting)
- **⚠️ CRITICAL:** Leave ALL checkboxes **UNCHECKED**:
  - ❌ DO NOT check "Add a README file"
  - ❌ DO NOT check "Add .gitignore"
  - ❌ DO NOT check "Choose a license"

Click the green **"Create repository"** button.

---

### Step 4: Upload Your Files
After creating the repository, you'll see a page with setup instructions.

1. Look for the text that says **"uploading an existing file"** (it's a clickable link in blue)
2. **Click that link** - this takes you to the upload page

Now for the drag-and-drop:

3. Go back to the **unzipped folder** on your computer
4. **Select ALL files and folders** inside (use Ctrl+A on Windows or Cmd+A on Mac)
5. **⚠️ CRITICAL:** Drag the **contents** into your browser window, NOT the main folder itself
   - ✅ Correct: Select all items inside the folder, then drag
   - ❌ Wrong: Dragging the folder itself
6. Wait for the upload to complete (you'll see a progress bar)
7. Scroll down and click the green **"Commit changes"** button

**Congratulations!** Your code is now on GitHub. 🎉

---

### 💡 PRO TIP: How to Create New Folders in GitHub

GitHub doesn't have a "Create Folder" button, but here's the trick:

1. Click **"Add file"** → **"Create new file"**
2. In the name box, type: `folder-name/filename.txt`
   - Example: `images/test.txt`
3. GitHub automatically creates the `images` folder
4. Type any text in the file content area
5. Click **"Commit changes"**

**Note:** GitHub won't keep empty folders, so you must add at least one file.

---

## 🌐 Phase 2: Deploy Your Portfolio (Go Live!)

Now let's make your portfolio accessible on the internet - for free!

---

### Step 1: Sign Up for Vercel
1. Go to [Vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account

---

### Step 2: Import Your Project
1. On your **Vercel Dashboard**, click **"Add New..."** → **"Project"**
2. You'll see a list of your GitHub repositories
3. Find your portfolio repository (e.g., `my-portfolio`)
4. Click **"Import"** next to it

---

### Step 3: Configure and Deploy
On the configuration screen:

- **Framework Preset:** Should auto-detect as **Next.js** ✅
- **Root Directory:** Leave as `./` ✅
- **Build Settings:** Don't change anything

Click the blue **"Deploy"** button and wait about 1-2 minutes.

---

### Step 4: See Your Live Site! 🎆
When deployment finishes, you'll see **fireworks animation** (seriously!).

Click on the **domain link** (e.g., `my-portfolio.vercel.app`) to see your portfolio live on the internet!

**Share this link with recruiters and on your resume!**

---

## 🛠️ Phase 3: Customize Your Portfolio

**You only need to edit ONE file: `userConfig.js`**

All your personal information, work experience, projects, and skills are controlled from this single file.

---

### 1️⃣ Update Your Personal Information

1. Go to your **GitHub repository**
2. Click on the file named **`userConfig.js`**
3. Click the **✏️ pencil icon** (top-right) to edit
4. Change the text inside the quotes:

```javascript
// Change this:
name: "Your Name Here",

// To this:
name: "Jane Smith",
```

**Scroll down** and click **"Commit changes"** (green button).

**Vercel automatically detects the change and updates your live site within 30 seconds!** 🚀

---

### 2️⃣ Add Your Profile Photo

1. **Rename your photo** to exactly: `profile.png`
   - Supported formats: `.png`, `.jpg`, `.jpeg`
   - If using `.jpg`, update the filename in `userConfig.js` accordingly
2. In your GitHub repository, navigate to the **`public/`** folder
3. Click **"Add file"** → **"Upload files"**
4. Drag and drop `profile.png`
5. Click **"Commit changes"**

**Your photo will appear on your live site automatically!**

---

### 3️⃣ Add Your Resume PDF

1. **Rename your resume** to exactly: `resume.pdf`
2. Navigate to the **`public/`** folder in your GitHub repository
3. Click **"Add file"** → **"Upload files"**
4. Drag and drop `resume.pdf`
5. Click **"Commit changes"**

**Visitors can now download your resume directly from your portfolio!**

---

## 🎨 What You Can Customize in `userConfig.js`

Here's everything you can personalize:

### **Hero Section**
- Your name
- Professional tagline
- Location
- Profile image path

### **Stats Cards**
- Revenue impact numbers
- Years of experience
- Projects completed
- Any custom metric

### **Work Experience**
- Company names
- Job titles
- Employment dates
- Bullet points describing your achievements
- **Add unlimited jobs** - the timeline expands automatically!

### **Projects Section**
- Project names
- Descriptions
- Technologies used
- GitHub links
- Live demo links

### **Skills Section**
- Programming languages (SQL, Python, R)
- Visualization tools (Tableau, Power BI)
- Other tools (Excel, Git, etc.)
- Skill proficiency levels

### **Skill Balance Charts**
The colorful pie charts update **automatically** based on the numbers you enter - no need to create graphics yourself!

---

## 🔄 How to Update Your Portfolio

Every time you want to make changes:

1. Go to your **GitHub repository**
2. Edit **`userConfig.js`**
3. Click **"Commit changes"**
4. Wait 30-60 seconds
5. **Refresh your live site** to see updates

**That's it!** No complicated deployment process needed.

---

## 🆘 Troubleshooting

### My site isn't updating after I made changes
- Wait 1-2 minutes for Vercel to rebuild
- Check your GitHub repository - did the changes save?
- Try a hard refresh: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)

### My profile photo isn't showing
- Make sure the filename is exactly `profile.png` (lowercase)
- Check that it's in the `public/` folder
- Verify the path in `userConfig.js` matches your filename

### I made a mistake in `userConfig.js`
- GitHub keeps version history!
- Click on the file → Click **"History"** → Restore a previous version

---

## 💻 For Developers (Advanced Users Only)

If you're comfortable with React/Next.js and want to run this locally:

```bash
# Clone the repository
git clone https://github.com/yourusername/my-portfolio.git

# Navigate to the folder
cd my-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Hosting:** Vercel

---

## 📂 Project Structure

```
├── userConfig.js        ← 🚨 EDIT THIS FILE (your content)
├── public/              ← 📁 Your images and resume go here
├── app/                 ← Advanced: Website pages
├── components/          ← Advanced: React components
├── package.json         ← Advanced: Dependencies
└── tailwind.config.ts   ← Advanced: Styling config
```

**For non-developers:** You only need to touch `userConfig.js` and the `public/` folder!

---

## 🙋 Need Help?

- **Found a bug?** Open an issue on GitHub
- **Have questions?** Check out the discussions tab
- **Want to suggest a feature?** We'd love to hear from it!

---

## 📜 License

This template is for personal and commercial portfolios.

---

## 🌟 Show Your Support

If this template helped you land an interview or job, consider:
- ⭐ Starring this repository on GitHub
- 📢 Sharing it with other analysts
- 💼 Mentioning it in your portfolio footer

---

**Built with ❤️ by [Real Analyst Jobs](https://realanalystjobs.com/)**

*Helping data analysts build careers they love.*

---

## 🚀 Ready to Get Started?

Jump back to [Phase 1](#-phase-1-upload-your-code-to-github) and create your portfolio in the next 10 minutes!
