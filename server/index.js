import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import { siteConfig } from '../src/data/config.js'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 5000

// Security middleware
app.use(helmet({
    contentSecurityPolicy: false, // Disable for development
    crossOriginEmbedderPolicy: false,
}))

// CORS configuration
// Allow requests from your Vercel frontend
app.use(cors({
    origin: process.env.NODE_ENV === 'production'
        ? [process.env.FRONTEND_URL, 'https://your-portfolio.vercel.app']
        : ['http://localhost:3000', 'http://127.0.0.1:3000'],
    methods: ['GET', 'POST'],
    credentials: true,
}))

// Body parser
app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true, limit: '10kb' }))

// Rate limiting
const generalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: { error: 'Too many requests, please try again later.' },
    standardHeaders: true,
    legacyHeaders: false,
})

app.use('/api/', generalLimiter)

// API Routes

// Health check
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
    })
})

// Resume download endpoint
app.get('/api/download/resume', (req, res) => {
    const resumePath = path.join(__dirname, `../public${siteConfig.resumePath}`)

    res.download(resumePath, siteConfig.resumeDownloadName, (err) => {
        if (err) {
            console.error('Resume download error:', err)
            res.status(404).json({ error: 'Resume not found' })
        }
    })
})

// Projects API (optional - for dynamic content)
app.get('/api/projects', (req, res) => {
    // This could fetch from a database in production
    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'Full-stack e-commerce solution',
            tech: ['React', 'Node.js', 'PostgreSQL'],
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'Collaborative project management tool',
            tech: ['React', 'TypeScript', 'Supabase'],
        },
        {
            id: 3,
            title: 'AI Content Generator',
            description: 'AI-powered content generation platform',
            tech: ['Next.js', 'Python', 'FastAPI'],
        },
    ]

    res.json({ projects })
})


// Serve React build
app.use(express.static(path.join(__dirname, "../dist")));

// React fallback route
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../dist/index.html"));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Server error:', err)
    res.status(err.status || 500).json({
        error: 'An unexpected error occurred',
        ...(process.env.NODE_ENV !== 'production' && { details: err.message })
    })
})
// 404 handler for unknown API routes
app.use((req, res) => {
    res.status(404).json({
        error: 'API endpoint not found',
        message: `Cannot ${req.method} ${req.path}`
    })
})

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`)
})

export default app
