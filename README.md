# PredictaFund AI Platform

An AI-powered crowdfunding platform that revolutionizes fundraising through intelligent predictions and data-driven insights.

## Repository Structure

```
├── frontend/          # React frontend application
│   ├── src/          # Source code
│   ├── public/       # Static assets
│   └── README.md     # Frontend-specific documentation
├── backend/          # Backend API (placeholder for Supabase integration)
│   └── README.md     # Backend-specific documentation
└── README.md         # This file
```

## Quick Start

### Frontend Development

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:8080`

### Backend Development

The backend is currently a placeholder. The platform uses Supabase for backend functionality including:
- Authentication
- Database operations
- Real-time updates
- Edge Functions

To set up backend functionality:
1. Connect to Supabase via Lovable's native integration
2. Configure database tables and authentication
3. Implement Edge Functions as needed

## Project Overview

**URL**: https://lovable.dev/projects/93e0b55e-5365-4f37-8209-c786ae8c35fb

## Technologies

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- shadcn/ui component library
- React Router for navigation
- TanStack Query for data fetching

### Backend (Planned)
- Supabase for backend services
- PostgreSQL database
- Edge Functions for serverless logic
- Real-time subscriptions

## Features

- 🎯 **AI-Powered Predictions**: Smart campaign success forecasting
- 📊 **Analytics Dashboard**: Comprehensive campaign insights
- 🚀 **Campaign Management**: Easy campaign creation and tracking
- 👥 **User Authentication**: Secure user management
- 📱 **Responsive Design**: Mobile-first approach
- 🌙 **Dark Mode**: Theme switching support

## Development Commands

### Frontend
```bash
cd frontend
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Backend
```bash
cd backend
npm run dev      # Start backend development (placeholder)
```

## Deployment

The project can be deployed using Lovable's built-in deployment:
1. Open the [Lovable Project](https://lovable.dev/projects/93e0b55e-5365-4f37-8209-c786ae8c35fb)
2. Click Share → Publish

For custom domains, navigate to Project > Settings > Domains.

## Contributing

1. Create a new branch for your feature
2. Make your changes in the appropriate directory (frontend/ or backend/)
3. Test your changes
4. Submit a pull request

## License

Private project - All rights reserved.