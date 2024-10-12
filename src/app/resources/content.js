import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Yana',
    lastName:  'Turiak',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Junior Software Developer',
    avatar:    '/images/avatar.jpg',
    location:  'Manchester, UK',        
    languages: ['English', 'Ukrainian', 'Russian', 'Polish'] 
}

const social = [

    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/Yana23-sys',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/yana-turiak/',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:Turyak1998@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Junior Software Developer</>,
    subline: <>Creative Problem Solver | Passionate Full-Stack Developer | Always Learning</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: false,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Junior Full-Stack Developer with a solid foundation in JavaScript, React, Node.js and a background in graphic design. I’ve honed my problem-solving and collaborative skills through team projects, focusing on both frontend and backend development. Eager to contribute to and learn from a dynamic team, exploring new opportunities for growth in the tech industry.</>
    },
    professionalDevelopment: {
        display: true, // set to false to hide this section
        title: 'Professional Development',
        experiences: [
            {
                company: 'Northcoders Full-Stack JavaScript Bootcamp',
                timeframe: 'Jun 2024 - Sep 2024',
                role: 'Trainee Software Developer',
                achievements: [
                    <>Completed an intensive coding bootcamp focused on Full-Stack JavaScript development, covering Node.js, React, PostgreSQL and various JavaScript frameworks and libraries. Gained hands-on experience in pair programming, TDD, and utilising Git for version control.
                </>,
                ],
                projects: [
                    {
                        name: 'Northcoders News',
                        description: <> Developed a news aggregation platform based on React, NodeJS, Express and PostgreSQL technologies. The web app has mobile-first responsive design and supports optimistic rendering, as well as CRUD operations, pagination, filtering, and sorting of articles.</>,
                    },
                    {
                        name: 'ShelfShare',
                        description: <> Developed a book swapping platform using Next.js, React, Express and MongoDB, where users can list books for swapping, request swaps, and receive notifications for swap-related updates. Implemented features such as user authentication, real-time notifications, and a profile page displaying active and past swaps. Utilised GitHub Actions for Continuous Integration, setting up a manual deployment pipeline to Docker Hub and Northflank. </>,
                    }
                ],
                images: [ 
                    {
                        src: '/images/projects/nc-news.png',
                        alt: 'Northcoders News',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/shelf-share.png',
                        alt: 'ShelfShare',
                        width: 16,
                        height: 9
                    }
                ]
            }
        ]
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'FLY',
                timeframe: '2022 - Present',
                role: 'Senior Design Engineer',
                achievements: [
                    <>Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.</>,
                    <>Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Creativ3',
                timeframe: '2018 - 2022',
                role: 'Lead Designer',
                achievements: [
                    <>Developed a design system that unified the brand across multiple platforms, improving design consistency by 40%.</>,
                    <>Led a cross-functional team to launch a new product line, contributing to a 15% increase in overall company revenue.</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Education',
        institutions: [
            {
                name: 'University of Jakarta',
                description: <>Studied software engineering.</>,
            },
            {
                name: 'Build the Future',
                description: <>Studied online marketing and personal branding.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Languages & Frameworks',
                items: [
                    { name: 'JavaScript, TypeScript, Node.js, React, Next.js, HTML5, CSS3, Tailwind', 
                        description: 'Proficient in developing modern web applications using popular frontend and backend technologies' },
                    { name: 'Docker', description: 'Containerised applications for consistent development and deployment' },
                ]
            },
            {
                title: 'Databases',
                items: [
                    { name: 'PostgreSQL, SQL, MongoDB', description: 'Experienced in working with both relational and NoSQL databases, designing schemas, and handling database interactions efficiently' },
                ]
            },
            {
                title: 'Version Control',
                items: [
                    { name: 'Git, GitHub, GitHub Actions', description: 'Strong experience in version control with Git, including automated CI/CD pipelines using GitHub Actions' },
                ]
            },
            {
                title: 'Agile Methodologies',
                items: [
                    { name: 'Pair Programming, Test-driven development (TDD), SCRUM', description: 'Experience working in Agile teams, focusing on collaboration, continuous improvement, and delivering high-quality solutions' },
                ]
            },
            {
                title: 'Testing',
                items: [
                    { name: 'Jest, SuperTest (Unit & Integration Testing)', description: 'Competent in ensuring code quality through automated unit and integration tests to catch bugs early in the development process' },
                ]
            }
        ]
    }
}

const work = {
    label: 'Projects',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/work/projects
    // All projects will be listed on the /home and /work routes
}

export { person, social, home, about, work };