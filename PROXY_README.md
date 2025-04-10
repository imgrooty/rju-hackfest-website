# RJU HACKFEST Proxy Server

This proxy server is used to fetch content from the RJU HACKFEST website to avoid CORS issues when using the AI chatbot.

## Setup and Running

1. Install dependencies:
```bash
npm install
```

2. Start the proxy server:
```bash
npm run server
```

The server will run on port 3001 by default. You can change this by setting the PORT environment variable.

## How It Works

The proxy server fetches the content from https://rjuhackfest.vercel.app and serves it to the frontend application. This allows the AI chatbot to access the website content without running into CORS issues.

## Deployment

For production deployment, you should:

1. Deploy the proxy server to a hosting service like Heroku, Vercel, or AWS
2. Update the `PROXY_URL` in `src/services/gemini.ts` to point to your deployed proxy server
3. Ensure CORS is properly configured to allow requests from your frontend domain

## Troubleshooting

If you encounter issues:

1. Make sure the proxy server is running
2. Check that the URL in `src/services/gemini.ts` matches your proxy server's URL
3. Verify that CORS is properly configured
4. Check the browser console for any errors 