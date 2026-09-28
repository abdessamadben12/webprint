import { EASE, Reveal } from '@/components/motion';
import { site } from '@/data/site';
import { useForm } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronDown, Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Paperclip, PenLine, Phone, Send, User } from 'lucide-react';
import React from 'react';

const Contact: React.FC = () => {
    const { data, setData, post, processing, errors, reset, wasSuccessful } = useForm<{
        request_type: 'contact';
        first_name: string;
        last_name: string;
        email: string;
        phone: string;
        project_type: string;
        message: string;
        attachment: File | null;
    }>({
        request_type: 'contact',
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        project_type: '',
        message: '',
        attachment: null,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('contact.submit'), {
            forceFormData: true,
            onSuccess: () => reset(),
        });
    };

    return (
        <div className="min-h-screen ">
            {/* SECTION HERO */}
        <section
    className="
        relative flex min-h-[420px] w-full
        items-center justify-center overflow-hidden
        bg-[url('/images/backround-print.png')]
        bg-cover bg-center bg-no-repeat
        px-6 py-12 text-center text-white
        md:min-h-[500px]
    "
>
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="
            relative z-10
            flex w-full max-w-3xl
            flex-col items-center justify-center
            text-center
        "
    >
        <span
            className="
                text-alidade-gold
                flex items-center justify-center gap-3
                text-sm font-bold tracking-widest uppercase
                sm:text-xl
            "
        >
            <span className="bg-alidade-gold h-[2px] w-8" />

            Nous sommes à votre écoute

            <span className="bg-alidade-gold h-[2px] w-8" />
        </span>

        <h1 className="site-title mt-4 mb-6 text-center text-white">
            Contactez-Nous
        </h1>

        <p className="site-text-lead mx-auto max-w-xl text-center text-white/90">
            Une impression, une enseigne, un stand ou une
            <br className="hidden sm:block" />
            campagne à préparer ?
            <br />
            Notre équipe vous accompagne.
        </p>
    </motion.div>
</section>
            {/* SECTION FORMULAIRE & INFOS */}
            <section className="mx-auto grid site-container grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-3">
                {/* Formulaire (Col 1 & 2) */}
                <Reveal className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm lg:col-span-2" amount={0.1}>
                    <h2 className="site-subheading text-alidade-navy border-alidade-gold mb-8 border-l-4 pl-4 font-bold">Envoyez-nous un message</h2>

                    {wasSuccessful && (
                        <div className="border-alidade-gold bg-alidade-gold/10 text-alidade-navy mb-6 flex items-start gap-3 rounded-lg border p-4 text-sm font-medium">
                            <CheckCircle2 className="text-alidade-gold-dark mt-0.5 h-5 w-5 shrink-0" />
                            <span>Votre message a été envoyé avec succès. Nous vous recontacterons bientôt.</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        required
                                        value={data.first_name}
                                        onChange={(e) => setData('first_name', e.target.value)}
                                        placeholder="Prénom"
                                        className="focus:ring-alidade-gold/20 w-full rounded-lg border border-gray-200 bg-gray-50 p-4 pr-12 transition focus:ring-2 focus:outline-none"
                                    />
                                    <User className="absolute top-4 right-4 h-5 w-5 text-gray-400" />
                                </div>
                                {errors.first_name && <p className="mt-1 site-text-small text-red-500">{errors.first_name}</p>}
                            </div>

                            <div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        required
                                        value={data.last_name}
                                        onChange={(e) => setData('last_name', e.target.value)}
                                        placeholder="Nom"
                                        className="focus:ring-alidade-gold/20 w-full rounded-lg border border-gray-200 bg-gray-50 p-4 pr-12 transition focus:ring-2 focus:outline-none"
                                    />
                                    <User className="absolute top-4 right-4 h-5 w-5 text-gray-400" />
                                </div>
                                {errors.last_name && <p className="mt-1 site-text-small text-red-500">{errors.last_name}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <div className="relative">
                                    <input
                                        type="email"
                                        required
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        placeholder="Email"
                                        className="focus:ring-alidade-gold/20 w-full rounded-lg border border-gray-200 bg-gray-50 p-4 pr-12 transition focus:ring-2 focus:outline-none"
                                    />
                                    <Mail className="absolute top-4 right-4 h-5 w-5 text-gray-400" />
                                </div>
                                {errors.email && <p className="mt-1 site-text-small text-red-500">{errors.email}</p>}
                            </div>

                            <div>
                                <div className="relative">
                                    <input
                                        type="tel"
                                        value={data.phone}
                                        onChange={(e) => setData('phone', e.target.value)}
                                        placeholder="Téléphone"
                                        className="focus:ring-alidade-gold/20 w-full rounded-lg border border-gray-200 bg-gray-50 p-4 pr-12 transition focus:ring-2 focus:outline-none"
                                    />
                                    <Phone className="absolute top-4 right-4 h-5 w-5 text-gray-400" />
                                </div>
                                {errors.phone && <p className="mt-1 site-text-small text-red-500">{errors.phone}</p>}
                            </div>
                        </div>

                        <div>
                            <div className="relative">
                                <select
                                    value={data.project_type}
                                    onChange={(e) => setData('project_type', e.target.value)}
                                    className="focus:ring-alidade-gold/20 w-full appearance-none rounded-lg border border-gray-200 bg-gray-50 p-4 pr-12 text-gray-600 transition focus:ring-2 focus:outline-none"
                                >
                                    <option value="">Sujet</option>
                                    <option value="Impression offset">Impression offset</option>
                                    <option value="Impression numérique">Impression numérique</option>
                                    <option value="Grand format et signalétique">Grand format et signalétique</option>
                                    <option value="PLV et industrie publicitaire">PLV et industrie publicitaire</option>
                                    <option value="Stand d'exposition">Stand d'exposition</option>
                                    <option value="Design graphique">Design graphique</option>
                                    <option value="Publicité par l'objet">Publicité par l'objet</option>
                                    <option value="Autre">Autre</option>
                                </select>
                                <ChevronDown className="pointer-events-none absolute top-4 right-4 h-5 w-5 text-gray-400" />
                            </div>
                            {errors.project_type && <p className="mt-1 site-text-small text-red-500">{errors.project_type}</p>}
                        </div>

                        <div>
                            <div className="relative">
                                <textarea
                                    rows={4}
                                    required
                                    value={data.message}
                                    onChange={(e) => setData('message', e.target.value)}
                                    placeholder="Votre message"
                                    className="focus:ring-alidade-gold/20 w-full resize-none rounded-lg border border-gray-200 bg-gray-50 p-4 pr-12 transition focus:ring-2 focus:outline-none"
                                ></textarea>
                                <PenLine className="absolute top-4 right-4 h-5 w-5 text-gray-400" />
                            </div>
                            {errors.message && <p className="mt-1 site-text-small text-red-500">{errors.message}</p>}
                        </div>

                        <div>
                            <label className="hover:border-alidade-gold flex cursor-pointer items-center justify-between gap-3 rounded-lg border border-dashed border-gray-300 bg-gray-50 p-4 text-sm text-gray-500 transition-colors">
                                <span className="inline-flex min-w-0 items-center gap-2">
                                    <Paperclip className="text-alidade-gold-dark h-5 w-5 shrink-0" />
                                    <span className="truncate">{data.attachment?.name || 'Pièce jointe (PDF, Word ou image, max 10 Mo)'}</span>
                                </span>
                                <span className="text-alidade-navy shrink-0 text-xs font-bold tracking-widest uppercase">Choisir</span>
                                <input
                                    type="file"
                                    className="sr-only"
                                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.webp"
                                    onChange={(e) => setData('attachment', e.target.files?.[0] ?? null)}
                                />
                            </label>
                            {errors.attachment && <p className="mt-1 site-text-small text-red-500">{errors.attachment}</p>}
                        </div>

                        <button type="submit" disabled={processing} aria-busy={processing} className="brand-button w-full">
                            {processing ? 'Envoi...' : 'Envoyer le message'} <Send className="h-4 w-4 rotate-[-45deg]" />
                        </button>
                    </form>
                </Reveal>

                {/* Coordonnées (Col 3) */}
                <Reveal className="flex flex-col justify-between rounded-xl border border-gray-100 bg-white p-8 shadow-sm" delay={0.15} amount={0.1}>
                    <div>
                        <h2 className="site-subheading text-alidade-navy border-alidade-gold mb-8 border-l-4 pl-4 font-bold">Nos Coordonnées</h2>

                        <div className="space-y-6">
                            <ContactInfoItem icon={<MapPin />} title="Adresse" content={site.address} />
                            <ContactInfoItem icon={<Phone />} title="Téléphone" content={site.phone} />
                            <ContactInfoItem icon={<Mail />} title="Email" content={site.email} />
                            <ContactInfoItem icon={<Clock />} title="Horaires d'ouverture" content={<>Lundi - Vendredi : 8h30 - 18h30</>} />
                        </div>
                    </div>

                    {(site.socials.facebook || site.socials.instagram || site.socials.linkedin) && (
                        <div className="mt-8 flex justify-center gap-4 lg:justify-start">
                            {site.socials.facebook && <SocialIcon icon={<Facebook />} href={site.socials.facebook} label="Facebook" />}
                            {site.socials.instagram && <SocialIcon icon={<Instagram />} href={site.socials.instagram} label="Instagram" />}
                            {site.socials.linkedin && <SocialIcon icon={<Linkedin />} href={site.socials.linkedin} label="LinkedIn" />}
                        </div>
                    )}
                </Reveal>
            </section>

            {/* SECTION MAP */}
            <section className="bg-alidade-dark flex min-h-[400px] flex-col md:flex-row">
                <Reveal className="flex w-full flex-col justify-center p-8 sm:p-12 md:w-2/5 md:pl-24" amount={0.3}>
                    <span className="text-alidade-gold mb-4 flex items-center gap-2 text-sm font-bold sm:text-xl">
                        <span className="bg-alidade-gold h-[2px] w-8"></span>
                        Où nous trouver ?
                    </span>
                    <p className="site-text-lead max-w-xs text-white">
                        Retrouvez webprint.ma au cœur de Casablanca. <br />
                        Nous serons ravis de vous conseiller.
                    </p>
                </Reveal>

                <div className="relative min-h-[400px] w-full overflow-hidden md:w-3/5">
                    <iframe
                        src={site.mapEmbedUrl}
                        title="Localisation webprint.ma sur Google Maps"
                        className="absolute inset-0 h-full w-full border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

// Sous-composants pour la propreté du code
const ContactInfoItem = ({ icon, title, content }: { icon: React.ReactNode; title: string; content: React.ReactNode }) => (
    <div className="flex gap-4">
        <div className="bg-brand-blue/5 text-brand-blue h-fit rounded-lg p-3">
            {React.cloneElement(icon as React.ReactElement<{ size?: number }>, { size: 18 })}
        </div>
        <div>
            <h3 className="site-label text-alidade-navy font-bold">{title}</h3>
            <div className="site-text text-gray-500">{content}</div>
        </div>
    </div>
);

const SocialIcon = ({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="bg-alidade-navy hover:bg-alidade-gold rounded-full p-3 text-white transition-colors"
    >
        {React.cloneElement(icon as React.ReactElement<{ size?: number }>, { size: 18 })}
    </a>
);

export default Contact;
