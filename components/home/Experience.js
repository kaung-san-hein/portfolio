import styles from './Experience.module.css';
import ProjectCard from './ProjectCard';

const projects = [
    {
        id: 1,
        title: 'Admin Panel of Phone Book App',
        category: 'web app',
        duration: '4 months',
        develop: 'developed with my teacher(IT ONE MM)',
        link: 'https://rcs.com',
        url: 'https://rcs.com',
        code: 'Reactjs, Laravel(API), Postgresql, AWS'
    },
    {
        id: 2,
        title: 'Kakehashi Japanese Language Center Official Website',
        category: 'website',
        duration: '1.5 months',
        develop: 'developed with RCS team',
        link: 'https://kakehashi.com',
        url: 'https://rcs.com',
        code: 'HTML, CSS, Nextjs'
    },
    {
        id: 3,
        title: 'Point of Sale(POS)',
        category: 'mobile app',
        duration: '4 months',
        develop: 'developed with RCS team',
        link: 'https://kakehashi.com',
        url: 'https://rcs.com',
        code: 'Flutter, Sqlite'
    },
    {
        id: 4,
        title: 'RCS Official Website',
        category: 'website',
        duration: '3 months',
        develop: 'developed with RCS team',
        link: 'https://rcs.com',
        url: 'https://rcs.com',
        code: 'HTML, CSS, Nextjs, Strapi'
    }
]

function Experience() {
    return (
        <div className={styles.container}>
            <div className={styles.experienceContainer}>
                <h1>Work Experiences</h1>
                {projects.map((item) => (
                    <ProjectCard key={item.id} item={item} />
                ))}
            </div>
            <div className={styles.skillContainer}>
                <h1>Skills</h1>
            </div>
        </div>
    )
}

export default Experience;