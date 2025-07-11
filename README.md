# PlanPal

PlanPal is a simple platform where organizations can transparently store and manage group funds without the need for complex paperwork or traditional bank processes. Using a secure escrow model, the app ensures that funds are visible and traceable — while never being directly held by PlanPal itself.

---

## Features

- 🔐 **Role-Based Access**  
Admins, moderators, members, and contributors — each with clearly defined permissions.

- 🏦 **Vault Creation**  
  Create main vaults and allocate funds to sub-vaults for different committees, events, or projects.

- 💸 **Track Contributions Automatically**  
  See who paid, how much, and when — all without spreadsheets.

- ♻️ **Optional Auto Refunds**  
  Unused funds can be automatically returned to contributors after a set time (excluding contributors).

- 🧩 **Escrow-Based Architecture**  
  We do not store the money. It’s held safely through third-party wallets or services like Brankas (in future versions).

| Role            | Can Pay | Can Spend | Can Vote | Can Be Refunded |
| --------------- | ------- | --------- | -------- | --------------- |
| **Admin**       | ✅       | ✅         | ✅        | ✅               |
| **Moderator**   | ✅       | ✅         | ✅        | ✅               |
| **Member**      | ✅       | ❌         | ✅        | ✅               |
| **Contributor** | ✅       | ❌         | ❌        | ❌               |


## Tech Stack

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth
- **Coming Soon**: Brankas integration (for real-world fund disbursement)

---

## Getting Started

- PlanPal is currently in **prototype stage**. This is a personal project made for experimentation and learning. <br>
- All vault names, organization titles, contributor details, and logos are **fictional and used strictly as sample data.**
- **PlanPal does not hold or manage real funds.** It simulates an escrow-like system for demonstration only.
- This project is not intended for production use until full security audits, legal compliance checks, and integration with licensed financial APIs are completed.
<br>
<br>
  Please **do not** use this app to manage real money or represent actual organizations at this stage.

## Future Plans

    ✅ Mobile-responsive experience
    ✅ Role-based permissions
    ⏳ Brankas integration
    ⏳ Public vault sharing
    ⏳ Invite and access requests
    ⏳ Export and print ledger
### To run locally:

```bash
git clone https://github.com/kurtoswill/plan-pal.git
cd planpal
npm install
npm run dev
```

Acknowledgements
-
- Next.js
- Tailwind CSS
- Supabase
- Lucide Icons
- Shadcn
