'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function AboutPage() {
	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
				>
					<motion.div variants={fadeIn('right', 0.3)} className="space-y-6">
						<h1 className="text-4xl font-bold">About Me</h1>
						<p className="text-lg text-muted-foreground">
							I am an Industrial Engineer specializing in the architecture of intelligent systems for Industry 4.0.
							With a Master's focus on Smart Industry, I design and implement solutions 
							that merge IoT, automation, and data analytics to optimize complex manufacturing processes.
						</p>
						<div className="space-y-4">
							<h2 className="text-2xl font-semibold">My Mission</h2>
							<p className="text-muted-foreground">
								 My mission is to bridge the gap between physical machinery and intelligent software.
								 I thrive on developing predictive maintenance systems, creating digital twins for simulation,
								 and automating industrial operations with robotics and embedded systems to drive efficiency and innovation.
							</p>
						</div>
						<Button className="mt-6" asChild>
							<a href="https://y259nvmlltdutuek.public.blob.vercel-storage.com/MOHAMED%20EL%20ADARISSI_Robotics%20Engineering%20Intern.pdf" download>
								Download CV <ArrowDownCircle className="ml-2 h-4 w-4" />
							</a>
						</Button>
					</motion.div>

					<motion.div variants={fadeIn('left', 0.3)} className="relative h-[500px]">
						<Image
							src="https://y259nvmlltdutuek.public.blob.vercel-storage.com/portfolio5.jpg"
							alt="Mohamed El Adarissi"
							fill
							className="object-cover rounded-lg"
							sizes="(max-width: 768px) 100vw, 50vw"
						/>
					</motion.div>
				</motion.div>

				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					<motion.div variants={fadeIn('up', 0.1)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Education</h3>
								<p className="text-muted-foreground">
									Master's in Smart Industry and a Bachelor's in Industrial Engineering, providing a strong foundation in both 
									classical process optimization and modern digital transformation.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.2)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Experience</h3>
								<p className="text-muted-foreground">
									Hands-on experience in industrial maintenance and automation.
									Proven ability to diagnose complex systems, optimize processes,
									and manage projects from concept to completion.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					<motion.div variants={fadeIn('up', 0.3)}>
						<Card className="h-full card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-semibold mb-4">Core Skills</h3>
								<p className="text-muted-foreground">
									 Proficient in IoT systems, Automation, robotics, Mechatronics,
								embedded systems , and cloud platforms 
									 for data analysis and real-time monitoring.
								</p>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}