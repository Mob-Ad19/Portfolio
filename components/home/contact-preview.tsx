'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SectionHeader } from '@/components/ui/section-header';
import { fadeIn } from '@/lib/motion';

export function ContactPreview() {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Form submission would be handled here
		alert('Form submitted! This is a demo - no actual email is sent.');
		setFormState({ name: '', email: '', message: '' });
	};

	return (
		<section className="py-16 md:py-24 bg-muted/30">
			<div className="container px-4">
				<SectionHeader
					title="Let's Build the Future"
					description="Have a complex challenge or an innovative idea? 
					I'm always open to discussing new projects and collaboration opportunities."
					className=""		
				/>

				<motion.div
					variants={fadeIn('up', 0.3)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="max-w-md mx-auto mt-10"
				>
				<div className="max-w-md mx-auto mt-10">
				<div className="space-y-4">
					<div>
						<Input
							name="name"
							placeholder="Your Name"
							value={formState.name}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<Input
							name="email"
							type="email"
							placeholder="Your Email (for my reply)"
							value={formState.email}
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<Textarea
							name="message"
							placeholder="Your Message"
							value={formState.message}
							onChange={handleChange}
							required
							className="min-h-[150px]"
						/>
					</div>
					<Button asChild className="w-full">
						<a
							href={`mailto:mo.adarissi@gmail.com?subject=Contact from Portfolio - ${formState.name}&body=${encodeURIComponent(formState.message + "\n\nFrom: " + formState.email)}`}
						>
							Send Message <Send className="ml-2 h-4 w-4" />
						</a>
					</Button>
				</div>
			</div>
				</motion.div>
			</div>
		</section>
	);
}