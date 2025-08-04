# Austin and Emily Creative

A modern, elegant wedding videography portfolio website built with Next.js 14 and TypeScript.

## Overview

Austin and Emily Creative is a professional wedding creative services website showcasing wedding films, photography, and service packages. The site features a clean, celestial-themed design with smooth animations and an intuitive user experience designed to attract and convert potential wedding clients.

## Features

- **Interactive Hero Slider** - Showcase of wedding photography with smooth carousel transitions
- **Video Portfolio** - Embedded wedding films with React Player integration
- **Service Packages** - Investment/pricing information with detailed package breakdowns
- **Client Testimonials** - Social proof from previous wedding clients
- **Functional Contact Form** - Lead capture with email delivery via Resend
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Brand Recognition** - Featured publication logos (The Knot, Vogue Italia, Zola)

## Tech Stack

### Frontend

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern React component library

### Key Dependencies

- **React Hook Form + Zod** - Form handling and validation
- **Resend** - Email delivery service for contact forms
- **Embla Carousel** - Touch-friendly carousel component
- **React Player** - Video player for wedding films
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page and components
│   ├── films/             # Wedding film portfolio
│   ├── investment/        # Pricing and packages
│   ├── contact/           # Contact form
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
│   ├── ui/               # shadcn/ui components
│   └── *.tsx             # Feature components
├── lib/                  # Utility functions and constants
└── public/               # Static assets
    ├── assets/           # Icons, logos, decorative elements
    └── images/           # Wedding photography portfolio
```

## Key Components

- **HeroSlider** - Main homepage carousel showcasing wedding photography
- **HeroVideo** - Featured wedding film with autoplay functionality
- **Testimonials** - Client reviews with star ratings
- **ContactForm** - Lead capture with React Hook Form validation
- **Navigation** - Responsive navigation with mobile menu

## Design System

The site uses a celestial/cosmic theme with:

- Warm color palette (creams, golds, bronze)
- Custom star and moon phase decorative elements
- Elegant typography with serif headings
- Smooth hover transitions and animations

## Development

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your Resend API key and contact email

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type checking
npm run typecheck
```

## Environment Setup

Create a `.env.local` file with the following variables:

```bash
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=your_email@example.com
```

- **RESEND_API_KEY**: Get this from [Resend.com](https://resend.com) after creating an account
- **CONTACT_EMAIL**: The email address where contact form submissions will be sent

## Portfolio Context

This project demonstrates:

- Modern React/Next.js development practices
- Component-based architecture with TypeScript
- Responsive design with Tailwind CSS
- Form handling and validation
- Media integration (images, videos)
- Performance optimization for wedding portfolio sites
- Professional client-focused web design

Built as a complete wedding business website with focus on conversion optimization and user experience.
