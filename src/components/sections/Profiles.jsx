import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaHackerrank, FaInstagram } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { profiles as profilesData } from '../../data/config'

const iconMap = {
    'GitHub': FaGithub,
    'LinkedIn': FaLinkedin,
    'LeetCode': SiLeetcode,
    'HackerRank': FaHackerrank,
    'Email': FaEnvelope,
    'Instagram': FaInstagram,
}

const colorMap = {
    'GitHub': 'hover:border-[#6e5494]',
    'LinkedIn': 'hover:border-[#0077B5]',
    'LeetCode': 'hover:border-[#FFA116]',
    'HackerRank': 'hover:border-[#2EC866]',
    'Email': 'hover:border-slate',
    'Instagram': 'hover:border-[#E4405F]',
}

const profiles = profilesData.map(profile => ({
    ...profile,
    icon: iconMap[profile.name] || FaCode, // Fallback to FaCode if icon not found
    color: colorMap[profile.name] || 'hover:border-slate',
}))

const ProfileCard = ({ profile, index }) => {
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    })

    const Icon = profile.icon || FaCode // Safety check

    return (
        <motion.a
            ref={ref}
            href={profile.url}
            target={profile.url.startsWith('mailto') ? undefined : '_blank'}
            rel={profile.url.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className={`card group transition-all duration-300 ${profile.color}`}
        >
            <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent-darker flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                    <Icon className="w-6 h-6 text-text-secondary group-hover:text-text-primary transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-text-primary group-hover:text-white transition-colors duration-300">
                        {profile.name}
                    </h3>
                    <p className="text-sm text-slate truncate">{profile.username}</p>
                    <p className="text-xs text-text-muted mt-1">{profile.description}</p>
                </div>
            </div>
        </motion.a>
    )
}

const Profiles = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
            },
        },
    }

    return (
        <section id="profiles" className="section-padding">
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="section-container"
            >
                {/* Section Header */}
                <motion.div variants={itemVariants} className="mb-16">
                    <span className="section-label">Profiles</span>
                    <h2 className="section-title">
                        Find me{' '}
                        <span className="section-title-accent">online</span>
                    </h2>
                </motion.div>

                {/* Profiles Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {profiles.map((profile, index) => (
                        <ProfileCard key={profile.name} profile={profile} index={index} />
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Profiles
