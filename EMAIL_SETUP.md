# Email Setup Guide

## What was implemented:
1. ✅ Contact form now sends emails to `adejareolamide01@gmail.com`
2. ✅ Auto-reply sent to form submitter
3. ✅ TikTok link added to contact page and footer (@jm_cocktails)
4. ✅ Better UX with loading state and success/error messages

## How to enable emails:

### Option 1: Gmail (Recommended for testing)
1. Go to your Google Account: https://myaccount.google.com/
2. Go to **Security** tab
3. Enable **2-Step Verification** (if not already enabled)
4. Search for **App passwords** 
5. Select "Mail" and "Windows Computer"
6. Copy the 16-character password (without spaces)
7. In your `.env.local` file, set:
   ```
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_SECURE=false
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASSWORD=paste-16-char-password-here
   ```

### Option 2: SendGrid (recommended for production)
SendGrid is reliable, secure, and offers a free tier suitable for small sites.

Steps for SendGrid:
1. Create a SendGrid account at https://app.sendgrid.com/
2. In the SendGrid dashboard go to "Settings → API Keys" and create a new API Key with "Mail Send" permission.
3. Verify a sender identity (either single sender verification or domain verification) in SendGrid. The `from` address used by the app must be a verified sender.
4. Add the API key and `from` address to your environment variables (locally in `.env.local`, and in production via your host's env UI):
   ```
   SENDGRID_API_KEY=your_sendgrid_api_key_here
   SENDGRID_FROM=your-verified-from@example.com
   ```
5. Deploy. No password is shared — the client only creates an API key and adds it to the host's environment variables.

### Option 3: Formspree (completely free/no-credentials needed for low volume)
Formspree lets you receive form submissions by email without adding server code or handling credentials. The client can configure the form and endpoint themselves and don't need to share credentials.

Steps:
1. Sign up at https://formspree.io and create a new form.
2. Copy the form endpoint (looks like `https://formspree.io/f/xxxxxx`).
3. Add the endpoint to your environment variables for the site build as `NEXT_PUBLIC_FORM_ENDPOINT` (locally add it to `.env.local` for testing):
   ```
   NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/your_form_id
   ```
4. When `NEXT_PUBLIC_FORM_ENDPOINT` is set, the site will POST directly to Formspree. No API keys or passwords need to be shared.

Notes:
- Free tiers have submission limits and may include branding. Good for small sites and testing.
- If you later need higher volume or better deliverability, switch to SendGrid/Mailgun/AWS SES.
Alternative services: Mailgun, Postmark, AWS SES — they use similar API keys or SMTP credentials.

## Installation:
```bash
# Install dependencies
pnpm install
# or
npm install
```

## Testing:
1. Start the dev server:
   ```bash
   pnpm dev
   ```
2. Open http://localhost:3000/contact
3. Fill out and submit the form
4. Check that `adejareolamide01@gmail.com` receives the email
5. Check the form submitter's email for confirmation

## Files Modified:
- `app/contact/page.tsx` - Added email API integration and TikTok link
- `components/footer.tsx` - Added TikTok link
- `app/api/contact/route.ts` - NEW: Email handler API (SendGrid)
- `package.json` - Added `@sendgrid/mail` (and nodemailer was previously added)
- `.env.local` - NEW: Email configuration template (includes SendGrid instructions)

## Important Security Notes:
- Never commit `.env.local` to git (it's in .gitignore by default)
- Never hardcode email credentials in the code
- In production, use environment variables from your hosting platform (Vercel, Heroku, etc.)
