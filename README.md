# Store It Storage Management

Store It is a web-based storage management application built with React and Next.js. It allows users to upload, view, and manage files such as documents, images, videos, and audio. The project integrates with Appwrite for backend storage and authentication, providing a secure and scalable solution for file management.

## Features

- **File Upload & Download:** Users can upload files to cloud storage and download them securely.
- **File Preview:** Supports previewing images, documents, videos, and audio files.
- **Categorized Dashboard:** Files are organized into categories (Documents, Images, Media, Others) with usage summaries.
- **Modern UI:** Built with Tailwind CSS for a responsive and clean interface.
- **Authentication:** User authentication and access control via Appwrite.

## Tech Stack

- **Frontend:** React, Next.js, TypeScript
- **Styling:** Tailwind CSS, PostCSS
- **Backend:** Appwrite (Storage, Authentication)
- **Utilities:** ESLint, Prettier
- **Other:** Netlify (Deployment), dotenv for environment variables

## Surface Level Working

1. **User Authentication:** Users sign in via Appwrite authentication.
2. **File Management:** Users can upload files, which are stored in Appwrite buckets. Files are categorized and displayed on the dashboard.
3. **Preview & Download:** Users can preview supported file types and download files using secure URLs constructed with environment variables.
4. **Dashboard:** The dashboard summarizes storage usage by category and provides quick navigation.

## 📦 Project Structure

- `app/` – Next.js app directory (pages, layout, global styles, fonts)
- `constants/` – Static values (navigation, actions, sort types)
- `hooks/` – Custom React hooks (e.g., toast notifications)
- `lib/` – Utility functions (file type detection, formatting, Appwrite URLs)
- `public/` – Static assets (icons, images)
- `types/` – TypeScript type definitions

---

## 🌐 Access the Project

You can access and explore the project directly through the following link:

🔗 **[Store It Cloud Storage App](https://store-it-cloud-storage.netlify.app/)**

Simply open the link in your browser to start using the application.

---
