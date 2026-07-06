'use client';

import { motion } from 'framer-motion';
import {
  HiHeart,
  HiLightningBolt,
  HiGlobe,
  HiUserGroup,
  HiShieldCheck,
  HiSparkles,
} from 'react-icons/hi';
import { FaLeaf } from 'react-icons/fa';

const values = [
  {
    icon: <FaLeaf className="w-6 h-6" />,
    title: 'Fresh Ingredients',
    description:
      'We source the freshest vegetables, proteins, and grains daily. Every ingredient is hand-selected for quality and flavor.',
  },
  {
    icon: <HiHeart className="w-6 h-6" />,
    title: 'Made With Love',
    description:
      'Every bowl and burrito is crafted with care. We believe healthy food should also be delicious and satisfying.',
  },
  {
    icon: <HiGlobe className="w-6 h-6" />,
    title: 'Locally Sourced',
    description:
      'We partner with local farmers and suppliers to bring you the best ingredients while supporting our community.',
  },
  {
    icon: <HiShieldCheck className="w-6 h-6" />,
    title: 'Quality First',
    description:
      'No artificial preservatives, no shortcuts. Just real food made from real ingredients you can trust.',
  },
];

const team = [
  {
    name: 'Chef Mwamba',
    role: 'Head Chef & Founder',
    description:
      'With over 15 years of culinary experience, Chef Mwamba brings passion for healthy eating to every dish.',
    initials: 'CM',
  },
  {
    name: 'Sarah Banda',
    role: 'Nutrition Specialist',
    description:
      'Sarah ensures every menu item is balanced, nutritious, and designed to fuel your body the right way.',
    initials: 'SB',
  },
  {
    name: 'James Phiri',
    role: 'Operations Manager',
    description:
      'James keeps everything running smoothly, from sourcing ingredients to ensuring every order is perfect.',
    initials: 'JP',
  },
];

export default function AboutClient() {
  return (
    <>
      {/* Hero header */}
      <div className="relative bg-gradient-to-br from-brand-forest via-brand-leaf to-brand-dark py-20 md:py-28">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-brand-fresh font-semibold text-sm uppercase tracking-wider"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-4"
          >
            About The Green Buffet
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-gray-200 max-w-2xl mx-auto text-lg md:text-xl"
          >
            Fresh food, real ingredients, and a passion for healthy living.
          </motion.p>
        </div>
        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z"
              fill="#FAFAF7"
            />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Our Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Story text */}
            <div>
              <span className="text-brand-fresh font-semibold text-sm uppercase tracking-wider">
                How It All Started
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2 mb-6">
                From Passion to Plate
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  The Green Buffet was born from a simple idea: healthy food should be
                  delicious, accessible, and made with real ingredients. In 2020, Chef
                  Mwamba noticed a gap in Lusaka&apos;s food scene, people wanted nutritious
                  meals but didn&apos;t have enough options that were both healthy and satisfying.
                </p>
                <p>
                  Starting from a small kitchen at Liberty Mall, we began crafting bowls
                  and burritos using fresh, locally-sourced ingredients. Word spread quickly.
                  Customers loved that they could build their own meals exactly how they
                  wanted them no compromises on taste or nutrition.
                </p>
                <p>
                  Today, The Green Buffet serves hundreds of happy customers every week.
                  We&apos;ve grown, but our commitment remains the same: fresh ingredients,
                  bold flavors, and food that makes you feel good.
                </p>
              </div>
            </div>

            {/* Story image placeholder */}
            <div className="bg-gradient-to-br from-brand-forest/20 to-brand-leaf/30 rounded-3xl h-[400px] flex items-center justify-center relative overflow-hidden">
              <div className="text-center text-brand-forest/30">
                <HiSparkles className="w-24 h-24 mx-auto mb-4" />
                <p className="text-lg font-medium text-brand-forest/40">Our Kitchen</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-brand-forest rounded-3xl p-8 md:p-12 text-white text-center mb-20"
        >
          <HiLightningBolt className="w-12 h-12 text-brand-fresh mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            To make healthy eating easy, enjoyable, and accessible for everyone in Lusaka.
            We believe good food has the power to transform how you feel, think, and live.
            Every bowl and burrito we serve is a step toward a healthier, happier community.
          </p>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <span className="text-brand-fresh font-semibold text-sm uppercase tracking-wider">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do — from sourcing ingredients to
              serving you with a smile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="bg-brand-forest/10 p-4 rounded-xl inline-flex text-brand-forest mb-4">
                  {value.icon}
                </div>
                <h3 className="font-bold text-brand-dark text-lg mb-2">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <span className="text-brand-fresh font-semibold text-sm uppercase tracking-wider">
              The People Behind the Food
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Passionate people dedicated to bringing you the freshest, healthiest meals
              in Lusaka.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow"
              >
                {/* Avatar placeholder */}
                <div className="w-24 h-24 bg-gradient-to-br from-brand-forest to-brand-leaf rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{member.initials}</span>
                </div>
                <h3 className="font-bold text-brand-dark text-lg">{member.name}</h3>
                <p className="text-brand-fresh text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center bg-gradient-to-br from-brand-warm to-orange-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <HiUserGroup className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Try?</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Come visit us at Liberty Mall and taste the difference fresh ingredients make.
            Build your own bowl or try one of our signature creations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/menu"
              className="bg-white text-brand-warm px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors"
            >
              View Our Menu
            </a>
            <a
              href="/location"
              className="bg-white/20 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/30 transition-colors border border-white/30"
            >
              Find Us
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
}