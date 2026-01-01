# Configuration Wizard

The Hospital Management System includes a configuration wizard to help you easily set up your environment variables.

## Running the Configuration Wizard

To run the configuration wizard, use the following command:

```bash
npm run conf-wiz
```

Or if you're using yarn:

```bash
yarn conf-wiz
```

## What the Wizard Does

The configuration wizard will:

1. Read the `.env.example` file in your project root
2. Present you with each environment variable that needs to be configured
3. Show the current/default value (with sensitive values masked)
4. Allow you to enter new values or keep the defaults
5. Generate a `.env` file with your configured values

## Environment Variables Explained

The wizard will help you configure the following environment variables:

- `DATABASE_URL`: PostgreSQL connection string for your database
- `NEXTAUTH_URL`: The URL where your application will be hosted
- `NEXTAUTH_SECRET`: Secret key for NextAuth security
- `JWT_SECRET`: Secret key for JWT token generation
- `NODE_ENV`: Environment mode (development, production)

## Important Notes

- Make sure to update the generated `.env` file with your actual values before running the application
- The `.env` file is included in `.gitignore` and will not be committed to version control
- After running the wizard, you'll need to restart your development server for changes to take effect
- For production deployments, ensure these environment variables are set in your hosting platform (like Vercel)

## Example Usage

```
npm run conf-wiz
# Follow the prompts to enter your configuration values
# The wizard will create a .env file with your settings
```