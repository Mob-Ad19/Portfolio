'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';
import { personalData } from '@/lib/constants'; // This import path is now CORRECT

export default function ContactPage() {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className="py-16 md:py-24">
			<div className="container">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="max-w-4xl mx-auto"
				>
					<motion.div
						variants={fadeIn('down', 0.2)}
						className="text-center mb-12"
					>
						<h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
						<p className="text-lg text-muted-foreground">
							Have a question or want to work together? I'm always open to discussing new projects.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{/* --- Contact Information Card (Now Works) --- */}
						<motion.div variants={fadeIn('right', 0.3)}>
							<Card className="card-gradient h-full">
								<CardContent className="p-6">
									<h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
									<div className="space-y-4">
										<div className="flex items-center">
											<Phone className="h-5 w-5 text-primary mr-3" />
											<a href={`tel:${personalData.phone}`} className="text-muted-foreground hover:text-primary">
												{personalData.phone}
											</a>
										</div>
										<div className="flex items-center">
											<Mail className="h-5 w-5 text-primary mr-3" />
											<a href={`mailto:${personalData.email}`} className="text-muted-foreground hover:text-primary">
												{personalData.email}
											</a>
										</div>
										<div className="flex items-center">
											<MapPin className="h-5 w-5 text-primary mr-3" />
											<p className="text-muted-foreground">{personalData.address}</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</motion.div>

						{/* --- Contact Form (Now Works) --- */}
						<motion.div variants={fadeIn('left', 0.3)}>
							<div className="space-y-4">
								<div>
									<Input placeholder="Your Name" name="name" value={formState.name} onChange={handleChange} required />
								</div>
								<div>
									<Input type="email" placeholder="Your Email" name="email" value={formState.email} onChange={handleChange} required />
								</div>
								<div>
									<Input placeholder="Subject" name="subject" value={formState.subject} onChange={handleChange} required />
								</div>
								<div>
									<Textarea placeholder="Your Message" name="message" value={formState.message} onChange={handleChange} required className="min-h-[150px]" />
								</div>
								<Button asChild className="w-full">
									<a
										href={`mailto:${personalData.email}?subject=${encodeURIComponent(formState.subject)} - ${formState.name}&body=${encodeURIComponent(formState.message + "\n\nFrom: " + formState.email)}`}
									>
										Send Message <Send className="ml-2 h-4 w-4" />
									</a>
								</Button>
							</div>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}