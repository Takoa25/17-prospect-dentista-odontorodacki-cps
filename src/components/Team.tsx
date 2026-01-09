import React from 'react';
import { content } from '../Content';
import ScrollReveal from './ScrollReveal';

const Team: React.FC = () => {
    const { team } = content;

    if (!team.enabled || !team.members.length) return null;

    return (
        <section className="w-full bg-white py-16 md:py-24" id="team">
            <div className="container-custom">
                {/* Header Full Width with Pill and Line */}
                <ScrollReveal>
                    <div className="flex items-center gap-4 mb-12">
                        <span className="border border-primary rounded-full px-5 py-2 text-sm font-medium font-grotesk text-neutral-800 bg-neutral-50">
                            {team.pill}
                        </span>
                        <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                        <div className="h-px bg-neutral-200 flex-1"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                    </div>

                    <div className="flex flex-col items-start text-left gap-6 mb-16 max-w-4xl">
                        <h2 className="font-grotesk text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.1] uppercase tracking-tight whitespace-pre-line">
                            {team.headline}
                        </h2>
                        <p className="text-neutral-500 text-lg leading-relaxed max-w-2xl">
                            {team.subHeadline}
                        </p>
                    </div>
                </ScrollReveal>

                {/* Single Dentist Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-20 items-center">
                    {/* Image Column (Left on Desktop, Top on Mobile) */}
                    <div className="lg:col-span-5 order-1 lg:order-1">
                        <ScrollReveal>
                            <div className="group relative w-full aspect-[3/4] rounded-[32px] overflow-hidden shadow-2xl">
                                <img
                                    src={team.members[0].image}
                                    alt={team.members[0].name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Detail decorative element */}
                                <div className="absolute inset-0 border-[1px] border-white/10 rounded-[32px] pointer-events-none"></div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Text Column (Right on Desktop, Bottom on Mobile) */}
                    <div className="lg:col-span-7 order-2 lg:order-2">
                        <ScrollReveal delay={0.2}>
                            <div className="flex flex-col gap-8">
                                <div className="space-y-2">
                                    <h3 className="font-grotesk font-bold text-3xl md:text-5xl text-black uppercase tracking-tight">
                                        {team.members[0].name}
                                    </h3>
                                    <p className="font-grotesk text-xl md:text-2xl text-primary font-medium uppercase tracking-wide">
                                        {team.members[0].role}
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    {team.members[0].bio && team.members[0].bio.split('\n\n').map((paragraph, idx) => (
                                        <p key={idx} className="text-neutral-600 text-lg leading-relaxed font-body">
                                            {paragraph}
                                        </p>
                                    ))}

                                    {!team.members[0].bio && (
                                        <p className="text-neutral-600 text-lg leading-relaxed font-body">
                                            Especialista dedicada a oferecer o melhor tratamento odontológico, combinando técnica apurada e tecnologia avançada para transformar sorrisos e vidas.
                                        </p>
                                    )}
                                </div>

                                {team.members[0].cro && (
                                    <div className="pt-4 border-t border-neutral-100">
                                        <p className="font-grotesk text-neutral-400 text-sm uppercase tracking-[0.2em]">
                                            {team.members[0].cro}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
