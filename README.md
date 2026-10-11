# Car Part Messenger

Create a clean, basic, single-page web application for a South African car parts sourcing service called "PartLink SA". The goal is simple: a user visits the site on their phone or desktop, fills in what part they need, and clicking "Find My Part" opens WhatsApp to send their request directly to us.



### 1. Visual Direction (Glossy & Premium)

- Style: Premium, modern automotive aesthetic using "glassmorphic" layers. 

- UI Elements: Use cards with semi-transparent blurs, thin light borders, and subtle glowing gradients to create a glossy, polished chrome feel.

- Colors: Deep charcoal background, crisp white/silver text, and a vibrant, glossy metallic orange or emerald green for the main action buttons.

- Device Layout: 100% responsive. Ensure it looks like a sleek mobile app on smartphones and scales cleanly into a centered card layout on desktop monitors.



### 2. Simple User Flow & Form

The main focus of the page is a prominent "Find My Part" request form containing:

- Vehicle Make (Dropdown with popular SA brands: Toyota, VW, Ford, Nissan, BMW, Hyundai, Isuzu, Suzuki, Mercedes).

- Vehicle Model & Year (Text fields).

- Part Needed (Text field, e.g., "Bonnet", "Bakkie Tailgate", "Alternator").

- Part Condition Preference (Radio buttons: "Used / Scrap Yard", "Aftermarket New", or "Any").

- User Location (Dropdown of South African Provinces).



### 3. Basic WhatsApp Link Integration

- When the user clicks the "Find My Part via WhatsApp" button, validate the fields.

- Do not require a supplier login. Instead, immediately generate a dynamic WhatsApp Click-to-Chat link using: https://wa.me[OurBusinessNumber]?text=[EncodedMessage]

- Replace [OurBusinessNumber] with a placeholder number like +27821234567.

- The encoded text message must automatically format their input cleanly, using local South African terms: "Hi PartLink SA, I am looking for a [Condition] [Part Needed] for a [Year] [Vehicle Make] [Vehicle Model]. I am located in [Province]."



### 4. Simple Copywriting

- Hero Headline: "Find Car Parts Fast Anywhere in SA."

- Subheadline: "No more calling dozens of scrap yards. Tell us what you need, and we'll link your request to local spares suppliers instantly via WhatsApp."

- Include a small, clean "How It Works" 3-step section underneath the form (1. Enter Details, 2. Send via WhatsApp, 3. Get 

quotes from local yards).

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/912d74bd-a2ba-47c2-ac5c-f4e39d42cdac).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
