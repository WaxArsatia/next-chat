# next-chat

## Overview

`next-chat` is a Next.js 14 chat frontend with GitHub authentication. After sign-in, users can join a public chat page and exchange real-time messages through a Socket.IO server.

## Features

- GitHub OAuth login/logout via NextAuth.
- Protected chat route (`/chat`) that redirects unauthenticated users to `/`.
- Real-time public messaging using `socket.io-client`.
- Message list is stored in client state and resets on page reload.
- UI built with NextUI components and Tailwind CSS.

## Tech Stack

- Next.js 14 (App Router)
- React 18
- NextAuth
- Socket.IO client
- NextUI
- Tailwind CSS + PostCSS + Autoprefixer

## Setup and Run

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create `.env.local` in the project root:

```env
GITHUB_ID=your_github_oauth_client_id
GITHUB_SECRET=your_github_oauth_client_secret
```

These are used by NextAuth in `src/app/api/auth/[...nextauth]/route.js`.

### 3. Start development server

```bash
npm run dev
```

Open `http://localhost:3000`.

### 4. Other scripts

```bash
npm run build
npm run start
npm run lint
```

## Project Structure

```text
next-chat/
├─ src/
│  ├─ app/
│  │  ├─ api/auth/[...nextauth]/route.js   # NextAuth route (GitHub provider)
│  │  ├─ chat/page.js                       # Protected chat page
│  │  ├─ layout.js                          # Root layout + session/provider setup
│  │  └─ page.js                            # Landing page
│  ├─ components/
│  │  ├─ MessageBody.js                     # Message rendering and receive handler
│  │  ├─ MessageInput.js                    # Message input and send handler
│  │  ├─ SignInButton.js
│  │  ├─ SignOutButton.js
│  │  └─ SessionProvider.js
│  └─ utils/socket.js                       # Socket.IO client connection
├─ public/
└─ package.json
```

## Notes

- The Socket.IO client currently connects to `https://apichat.nirwana.id` (hardcoded in `src/utils/socket.js`).
- This repository does not include a local Socket.IO backend implementation.
