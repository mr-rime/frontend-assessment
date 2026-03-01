# Frontend assessment

## Setup instructions

- Clone the repository

```bash
git clone https://github.com/mr-rime/frontend-assessment.git
```

- Install dependencies and run the development server

```bash
pnpm install
pnpm dev
```

## Multi-role routing

### Logical Grouping (Pathless Routes)

- (admin): contains all routes related to the admin panel
- (store): contains all routes related to the store

### Route Protection (Guards)

- Acesss control is handled by the beforeLoad function
- It checks the `adminAuth` context, if a user is not authenticated, it redirects to the login page

### Layout Components

- `AdminLayout`: Provides the sidebar and header for the admin panel
- `StoreLayout`: Provides the customer navbar, shopping cart button, and search

## How to access Admin panel

- Navigate to <http://localhost:5174/admin/login>
- Enter the admin credentials

```yaml
    - email: admin@admin.com
    - password: password123
```

## How to access Store

Actaully you can access the store without logging in

## How to register

- Navigate to <http://localhost:5174/register>
- Create an account
