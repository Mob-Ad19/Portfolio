// --- PERSONAL DATA ---
export const personalData = {
	name: 'Mohamed El Adarissi',
	profile: 'https://y259nvmlltdutuek.public.blob.vercel-storage.com/portfolio.jpg',
	designation: 'Industrial Engineer & Industry 4.0 Architect',
	description: 'I design and implement intelligent systems that merge IoT, automation, and data analytics to optimize complex manufacturing processes.',
	email: 'mo.adarissi@gmail.com',
	phone: '+212 638-024-878',
	address: 'Meknes, Morocco',
	github: 'https://github.com/Mo-Ad22',
	linkedin: 'https://www.linkedin.com/in/mohamed-el-adarissi/',
};

export const siteConfig = {
	name: 'Engineering Portfolio',
	description:
		'A professional portfolio website template for engineering students.',
	mainNav: [
		{
			title: 'Home',
			href: '/',
		},
		{
			title: 'About',
			href: '/about',
		},
		{
			title: 'Education',
			href: '/education',
		},
		{
			title: 'Skills',
			href: '/skills',
		},
		{
			title: 'Experience',
			href: '/experience',
		},
		{
			title: 'Projects',
			href: '/projects',
		},
		{
			title: 'Certificates',
			href: '/certificates',
		},
		{
			title: 'Blog',
			href: '/blog',
		},
		{
			title: 'Contact',
			href: '/contact',
		},
	],
	links: {
		github: 'https://github.com/Mob-Ad22',
		linkedin: 'www.linkedin.com/in/mohamed-el-adarissi',
		email: 'mailto:mo.adarissi@gmail.com',
		phone: 'tel:+212638024878',
	},
};

export type Experience = {
	title: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string[];
	technologies: string[];
};

export const experiences: Experience[] = [
	{
		title: 'Technical Leader',
		company: 'FSDM ROBOTICS CLUB - USMBA',
		location: 'Fes, Morocco',
		startDate: 'Sep 2024',
		endDate: 'Present',
		description: [
			'Lead and mentor a team of engineering students in the design and execution of robotics projects for national competitions.',
			'Oversee project management, from initial concept and hardware selection to programming and final testing.',
			'Organize workshops on topics such as embedded systems, control theory, and competitive robotics strategy.',
		],
		technologies: ['Leadership', 'Project Management', 'Robotics', 'Mentoring', 'C++', 'Python', 'Digital Twins'],
	},
	{
		title: 'Industrial Maintenance Technician',
		company: 'AI-SYSTEMS',
		location: 'Mohammedia-Casablanca, Morocco',
		startDate: 'Jan 2024',
		endDate: 'June 2024',
		description: [
			'Promoted to full-time technician after a successful internship, taking on greater responsibility for industrial automation projects.',
			'Led the complete internal rebuild of an industrial cutting machine, including redesigning electrical circuits and programming the control system.',
			'Diagnosed and performed predictive maintenance on high-precision printing and packaging machinery at client sites like ETISOFT.',
            'Managed the assembly and wiring of industrial electrical cabinets for critical infrastructure, such as pumping stations.',
		],
		technologies: ['Industrial Automation', 'Predictive Maintenance', 'PLC Programming', 'Electrical Design', 'Machine Rebuilding'],
	},
    {
		title: 'Industrial Engineering Intern',
		company: 'AI-SYSTEMS',
		location: 'Mohammedia-Casablanca, Morocco',
		startDate: 'Jul 2023',
		endDate: 'Jan 2024',
		description: [
			'Contributed to the design and development of an automatic bagging and weighing machine for a client in the animal feed sector (AVIFEED).',
            'Participated in a high-stakes maintenance mission at SAFIEC, Morocco\'s largest thermal power plant, performing diagnostics on hundreds of electrical cabinets.',
			'Gained hands-on experience in industrial power distribution, sensor calibration, and automation logic using TIA Portal.',
		],
		technologies: ['Automation', 'Mechanical Design', 'TIA Portal', 'Sensor Calibration', 'Industrial Electricity'],
	},
];

export type Project = {
	title: string;
	description: string;
	image: string;
	tags: string[];
	link?: string;
	repo?: string;
};

export const projects: Project[] = [
	{
		title: 'SmartRail Morocco – Predictive Maintenance',
		description:
			'An AI and Digital Twin platform to predict maintenance needs and optimize scheduling for Morocco\'s Al Boraq high-speed trains.',
		image: 'https://y259nvmlltdutuek.public.blob.vercel-storage.com/Picture1.jpg',
		tags: ['AI/ML', 'Digital Twin', 'IoT', 'Data Analytics', 'Simulation', 'LLM','Data Science'],
		link: '#',
		repo: '#',
	},
	{
		title: 'MedXAccess – Smart Pharmacy Kiosk',
		description:
			'Led development of a 24/7 robotic pharmacy system using QR codes, a mobile app, and AI-powered prescription validation.',
		image: 'https://y259nvmlltdutuek.public.blob.vercel-storage.com/logo%20medxaccess.jpg',
		tags: ['AI/LLM', 'C++', 'Robotics', 'Embedded Systems', 'Python', 'System Design','3D modelisation'],
		link: 'https://www.linkedin.com/posts/medxaccess_medxaccess-injazalmaghrib-smarthealth-activity-7342329702688186368-TXHq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPRtqcBeZHdSf45wG3l4y8ifN_hZ8gReDM',
		repo: '#',
	},
	{
		title: 'Intelligent Quadcopter Drone',
		description:
			'Built a GPS-based autonomous drone (Raspberry Pi, LoRa, ESP32, PID control) for precision waypoint navigation.',
		image: 'https://y259nvmlltdutuek.public.blob.vercel-storage.com/drone%20project.jpg',
		tags: ['IoT', 'C++', 'Robotics', 'Embedded Systems', 'Python', 'System Design'],
	},
	{
		title: 'Wooden Quadruped Rescue Robot',
		description:
			'Designed and built a 4-legged wooden rescue robot from scratch in a 24-hour national robotics competition, programming it to navigate a maze and retrieve survivors autonomously.',
		image: 'https://y259nvmlltdutuek.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-01%20at%2019.50.43_ea068820.jpg',
		tags: ['Robotics', 'Embedded Systems', 'Mechatronics', 'Competition', 'C++'],
		link: 'https://www.linkedin.com/posts/mohamed-el-adarissi_nrcum6p-roboticsmadness-woodenquadruped-activity-7335042484248498176-DUZr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPRtqcBeZHdSf45wG3l4y8ifN_hZ8gReDM',
		repo: '#',
	},
	{
		title: 'Smart Cane for the Visually Impaired',
		description:
			'An IoT-enabled mobility aid designed to enhance safety and navigation for visually impaired individuals. The cane uses ultrasonic sensors for real-time obstacle detection and provides audio guidance.',
		image: 'https://y259nvmlltdutuek.public.blob.vercel-storage.com/blob-2025-09-11%20at%202.09.53%20PM.jpg',
		tags: ['C++', 'Robotics', 'Embedded Systems', 'Python', 'Raspberry Pi', 'GPS', 'AI/LLM ','Assistive Technology'],
		link: '#',
		repo: '#',
	},
	{
		title: 'hand gesture guided mobile robot ',
		description:
			'Developed a mobile robot controlled in real-time by hand gestures, using an ESP32-CAM for video streaming and a Python-based AI model on a laptop for gesture recognition.',
		image: 'https://y259nvmlltdutuek.public.blob.vercel-storage.com/hand%20gesture%20robot.jpg',
		tags: ['IoT', 'C++', 'Robotics', 'Embedded Systems', 'Python', 'System Design'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Autonomous Maze-Solving Robot',
		description:
			'A mobile robot designed to navigate and escape complex mazes autonomously using ultrasonic sensors and pathfinding algorithms.',
		image: 'https://y259nvmlltdutuek.public.blob.vercel-storage.com/autonomous%20maze%20robot.jpg',
		tags: ['C++', 'Arduino', 'Ultrasonic Sensors', 'Robotics'],
		link: '#',
		repo: '#',
	},
	{
		title: 'AI Waste-Collecting Robot Rover',
		description:
			'A mobile robot that uses computer vision and a custom AI model to autonomously identify, locate, and collect waste with a robotic arm.',
		image: 'https://y259nvmlltdutuek.public.blob.vercel-storage.com/waste%20collecting%20robot.JPG',
		tags: ['AI', 'Computer Vision', 'ROS', 'Automation', 'Robotics', 'Python'],
		link: '#',
		repo: '#',
	},
	{
		title: 'SAFIEC – Morocco\'s Largest Thermal Power Plant',
		description:
			'Executed a one-month mission for electrical cabinet diagnosis and thermal inspections during a planned shutdown at Morocco\'s largest power station, ensuring national energy infrastructure reliability.',
		image: 'https://y259nvmlltdutuek.public.blob.vercel-storage.com/SAFIEC%20%E2%80%93%20Morocco%5C%27s%20Largest%20Thermal%20Power%20Plant',
		tags: ['Industrial Maintenance', 'Electrical Diagnostics', 'Thermal Inspection', 'Safety Protocols'],
		link: 'https://www.linkedin.com/posts/mohamed-el-adarissi_energysector-safiec-industrialmaintenance-activity-7332527529418788864-j2eI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPRtqcBeZHdSf45wG3l4y8ifN_hZ8gReDM',
	},
	{
		title: 'Industrial Cutter Rebuild at AI-SYSTEMS',
		description:
			'Led the full internal rebuild of an industrial cutting machine, including redesigning electrical circuitry, integrating new components, and programming the control system.',
		image: 'https://y259nvmlltdutuek.public.blob.vercel-storage.com/Industrial%20Cutter%20Rebuild%20at%20AI-SYSTEMS',
		tags: ['Machine Rebuilding', 'Electrical Design', 'PLC Programming', 'System Integration'],
		link: 'https://www.linkedin.com/posts/mohamed-el-adarissi_industrialmaintenance-smartindustry-electricalengineering-activity-7332519931588001794-afdy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPRtqcBeZHdSf45wG3l4y8ifN_hZ8gReDM',
	},
	{
		title: 'Automatic Bagging System for AVIFEED',
		description:
			'Contributed to the design and development of an automatic bagging and weighing machine, from mechanical structure to sensor calibration and automation logic in TIA Portal.',
		image: 'https://y259nvmlltdutuek.public.blob.vercel-storage.com/Automatic%20Bagging%20System%20for%20AVIFEED',
		tags: ['Automation', 'Mechanical Design', 'Sensor Calibration', 'TIA Portal'],
		link: 'https://www.linkedin.com/posts/mohamed-el-adarissi_smartindustry-industrialautomation-tiaabrportal-activity-7332496697165496320-xDS9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPRtqcBeZHdSf45wG3l4y8ifN_hZ8gReDM',
	},
		{
		title: 'Pumping Station Electrical Cabinet Installation',
		description:
			'Assisted in the complete wiring and installation of industrial electrical control cabinets for critical water pumping infrastructure, from schematic to field execution.',
		image: 'https://y259nvmlltdutuek.public.blob.vercel-storage.com/cabinet%20wiring',
		tags: ['Industrial Electricity', 'Cabinet Wiring', 'Schematics', 'Field Installation'],
		link: 'https://www.linkedin.com/posts/mohamed-el-adarissi_industrialelectricity-electricalcabinet-pumpingstation-activity-7332501176334143489-0Ye0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPRtqcBeZHdSf45wG3l4y8ifN_hZ8gReDM',
	},
	{
		title: 'Predictive Maintenance at ETISOFT',
		description:
			'Supported a predictive maintenance project on high-precision industrial printing and packaging machines, diagnosing and replacing faulty mechanical components to ensure equipment availability.',
		image: 'https://y259nvmlltdutuek.public.blob.vercel-storage.com/Predictive%20Maintenance%20at%20ETISOFT',
		tags: ['Predictive Maintenance', 'Mechanical Diagnostics', 'Industrial Machinery', 'Industrial Electricity'],
		link: 'https://www.linkedin.com/posts/mohamed-el-adarissi_predictivemaintenance-industrialengineering-activity-7332494596809125888-0IV0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEPRtqcBeZHdSf45wG3l4y8ifN_hZ8gReDM',
	},
	{
		title: 'Line-Following Robot (PID Control)',
		description:
			'Designed and built multiple prototypes of a high-speed line-following robot using 2-4 IR sensors and advanced PID control algorithms to navigate complex tracks.',
		image: 'https://y259nvmlltdutuek.public.blob.vercel-storage.com/autonomous%20maze%20robot.jpg',
		tags: ['Control Systems', 'PID Control', 'IR Sensors', 'Robotics','Esp32',],
		link: '#',
		repo: '#',
	},
	{
		title: 'Digital Twin for Smart Irrigation',
		description:
			'Created an interactive 3D digital twin of an agricultural IoT system, using LoRa and Raspberry Pi to visualize and control a smart irrigation setup in real-time.',
		image: 'https://y259nvmlltdutuek.public.blob.vercel-storage.com/digital%20twin.jpg',
		tags: ['Digital Twin', 'IoT', 'LoRa', 'Raspberry Pi', '3D Visualization','3D Modelisation','Arduino','C++'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Tello Drone with Autonomous Flight',
		description:
			'Integrated ArduPilot and a Pixhawk flight controller with a DJI drone to enable fully autonomous, GPS-based flight modes for tournament participation.',
		image: 'https://y259nvmlltdutuek.public.blob.vercel-storage.com/tello%20drone',
		tags: ['Python', 'Autonomous Systems'],
		link: '#',
		repo: '.',
	},
    {
		title: 'Sumo Robot',
		description:
			'Designed and built a competitive combat robot for an arena tournament, utilizing ultrasonic and IR sensors to implement "tornado" and "woodpecker" strategies.',
		image: 'https://y259nvmlltdutuek.public.blob.vercel-storage.com/sumo%20robot.jpg',
		tags: ['Robotics', 'Competition', 'C++', 'Arduino'],
		link: '#',
		repo: '.',
	},
];

export type Education = {
	degree: string;
	field: string;
	institution: string;
	location: string;
	startDate: string;
	endDate: string;
	gpa?: string;
	achievements: string[];
};

export const education: Education[] = [
	{
		degree: 'Master\'s Degree in Smart Industry',
		field: 'Industrial Engineering',
		institution: 'University Sidi Mohamed Ben Abdellah',
		location: 'Fes, Morocco',
		startDate: 'Sep 2024',
		endDate: 'Present',
		gpa: '14.50/20',
		achievements: [
			'Focused on advanced topics in IoT, industrial automation, and data analytics.',
			'Led a team project on developing a Digital Twin for a manufacturing process.',
			'Recipient of the Merit Scholarship for academic excellence.',
		],
	},
	{
		degree: 'Bachelor in Elecronic Industry & Computer Science',
		field: 'Science of Physics ',
		institution: 'University Moulay Ismail',
		location: 'Meknes, Morocco',
		startDate: 'Sep 2020',
		endDate: 'Jun 2024',
		gpa: '12.30/20',
		achievements: [
			'Valedictorian',
			'National Mathematics Competition Finalist',
			'Science Fair Gold Medal',
		],
	},
	{
		degree: 'Baccalauréat, Sciences Mathématiques A',
		field: 'Science of Math',
		institution: 'Omar Ibn El Khattab High School',
		location: 'Meknes, Morocco',
		startDate: 'Sep 2019',
		endDate: 'Jun 2020',
		gpa: '13.30/20',
		achievements: [
			'Valedictorian',
			'National Mathematics Competition Finalist',
			'Science Fair Gold Medal',
		],
	},
];

export type Certificate = {
	title: string;
	issuer: string;
	date: string;
	id?: string;
	url?: string;
	pdf?: string;
};

export const certificates: Certificate[] = [
	{
		title: 'A3C Competition Certificate',
		issuer: 'University Internationale of Rabat - School of Aerospace & Automotive Engineering - Rabat',
		date: 'May 2024',
		pdf: 'https://y259nvmlltdutuek.public.blob.vercel-storage.com/UIR%20certificate%20competition',
	},
	{
		title: 'NRC Competition Certificate',
		issuer: 'EMINES - Université Mohammed VI Polytechnique',
		date: 'April 2024',
		pdf: 'https://y259nvmlltdutuek.public.blob.vercel-storage.com/NRC%20Competition%20Cerificate',
	},
	{
		title: 'AI Workshop Certificate',
		issuer: 'FSDM - University Sidi Mohamed Ben Abdellah',
		date: 'march 2024',
		pdf: 'https://y259nvmlltdutuek.public.blob.vercel-storage.com/ai%20workshop%20fsdm%20club',
	},
	{
		title: 'UPF Competition Certificate',
		issuer: 'University Private Fes',
		date: 'may 2024',
		pdf: 'https://y259nvmlltdutuek.public.blob.vercel-storage.com/upf%20fes',
	},
	{
		title: 'Enactus Competition Certificate',
		issuer: 'Enactus University Sidi Mohamed Ben Abdellah',
		date: 'january  2024',
		pdf: 'https://y259nvmlltdutuek.public.blob.vercel-storage.com/enactus',
	},
];

export type Skill = {
	name: string;
	level: number; 
	category: 'technical' | 'software' | 'soft' | 'language';
};

export const skills: Skill[] = [
	// Technical Skills
	{ name: 'Industrial Automation & Control Systems', level: 9, category: 'technical' },
	{ name: 'Robotics & Mechatronics', level: 9, category: 'technical' },
	{ name: 'PLC & SCADA System Programming', level: 8, category: 'technical' },
	{ name: 'IoT & Embedded Systems Architecture', level: 8, category: 'technical' },
	{ name: 'Predictive Maintenance Strategy', level: 8, category: 'technical' },
	{ name: 'Digital Twin & Simulation', level: 7, category: 'technical' },
	{ name: 'Lean Manufacturing & Six Sigma', level: 7, category: 'technical' },
	{ name: 'Circuit Design', level: 6, category: 'technical' },

	// Software Skills
	{ name: 'CAD & 3D Modeling (SolidWorks, CATIA, Auto CAD)', level: 7, category: 'software' },
	{ name: 'MATLAB & Simulink', level: 7, category: 'software' },
	{ name: 'Python (for Data Science & AI)', level: 8, category: 'software' },
	{ name: 'Cloud Platforms (AWS/Azure for IoT)', level: 9, category: 'software' },
	{ name: 'AI & Machine Learning (TensorFlow, PyTorch)', level: 9, category: 'software' },
	{ name: 'Data Analysis & Visualization (SQL, Power BI)', level: 9, category: 'software' },
	{ name: 'Embedded Programming (C++, MicroPython)', level: 9, category: 'software' },

	// Soft Skills
	{ name: 'Team Leadership', level: 10, category: 'soft' },
	{ name: 'Project Management', level: 9, category: 'soft' },
	{ name: 'Technical Writing', level: 8, category: 'soft' },
	{ name: 'Presentation', level: 8, category: 'soft' },
	{ name: 'Problem Solving', level: 10, category: 'soft' },
	{ name: 'Initiative & Proactive Innovation', level: 9, category: 'soft' },
	{ name: 'Adaptability in High-Pressure Environments', level: 8, category: 'soft' },
	{ name: 'Communication', level: 8, category: 'soft' },

	// Languages
	{ name: 'French', level: 8, category: 'language' },
	{ name: 'English', level: 9, category: 'language' },
	{ name: 'Arabic', level: 10, category: 'language' },
];

export type BlogPost = {
	title: string;
	excerpt: string;
	date: string;
	author: string;
	image: string;
	slug: string;
};

export const blogPosts: BlogPost[] = [
	{
		title: 'Coming soon',
		excerpt: 'Exploring the latest innovations in ...',
		date: 'Mar 15, .....',
		author: 'Your Name',
		image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg',
		slug: 'advances-in-....',
	},

];