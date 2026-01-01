# Vercel Deployment Guide

This guide will help you deploy the Hospital Management System to Vercel.

## Prerequisites

Before deploying to Vercel, ensure you have:

1. A Vercel account (sign up at [vercel.com](https://vercel.com))
2. The Vercel CLI installed (optional): `npm i -g vercel`
3. A PostgreSQL database (for production)

## Environment Variables

Before deployment, you need to set up the following environment variables in your Vercel project:

- `DATABASE_URL`: PostgreSQL connection string for your production database
- `NEXTAUTH_URL`: The URL where your application will be hosted (e.g., `https://your-project.vercel.app`)
- `NEXTAUTH_SECRET`: Secret key for NextAuth security (generate with `openssl rand -base64 32`)
- `JWT_SECRET`: Secret key for JWT token generation
- `NODE_ENV`: Set to `production`

## Deployment Methods

### Method 1: Connect Your Git Repository (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [vercel.com](https://vercel.com) and click "New Project"
3. Import your repository
4. In the "Environment Variables" section, add the variables listed above
5. Click "Deploy" and Vercel will automatically build and deploy your application

### Method 2: Using Vercel CLI

1. Install the Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts to link your project
4. Add your environment variables when prompted
5. Your project will be deployed automatically

### Method 3: Deploy from GitHub

1. Fork this repository to your GitHub account
2. Go to Vercel and select "New Project"
3. Choose "Import Git Repository"
4. Select your forked repository
5. Add the required environment variables
6. Click "Deploy"

## Database Setup

For production deployment, you'll need a PostgreSQL database. You can use:

- [Vercel Postgres](https://vercel.com/postgres) (recommended)
- [Supabase](https://supabase.com)
- [PlanetScale](https://planetscale.com)
- Any other PostgreSQL provider

After setting up your database, update the `DATABASE_URL` environment variable with your database connection string.

## Post-Deployment Steps

After successful deployment:

1. Run database migrations by executing:
   ```bash
   npx prisma migrate deploy
   ```
   This should be done as a post-deployment script or manually in your production environment.

2. Seed the database if needed (for initial data):
   ```bash
   npx prisma db seed
   ```

3. Create an admin user by running the create-admin script if it exists in your project.

## Configuration Wizard

The project includes a configuration wizard to help set up environment variables:

```bash
npm run conf-wiz
```

This will guide you through setting up your environment variables interactively.

## Troubleshooting

### Common Issues:

1. **Database Connection Issues**: Ensure your `DATABASE_URL` is correctly set and your database is accessible from Vercel.

2. **Authentication Issues**: Verify that `NEXTAUTH_URL` matches your deployed URL and `NEXTAUTH_SECRET` is properly set.

3. **Build Failures**: Check that all environment variables are properly configured in your Vercel project settings.

### Environment Variables in Vercel:

To add environment variables in Vercel:
1. Go to your project dashboard
2. Navigate to Settings → Environment Variables
3. Add each variable with its corresponding value

## Custom Domains

To connect a custom domain:
1. Go to your project settings in Vercel
2. Navigate to Domains
3. Add your custom domain and follow the DNS configuration instructions

## Scaling

Vercel automatically scales your application based on traffic. For database scaling, consider upgrading your PostgreSQL provider plan as needed.

## Monitoring

Vercel provides built-in analytics and logs. Access them through your project dashboard to monitor performance, traffic, and errors.