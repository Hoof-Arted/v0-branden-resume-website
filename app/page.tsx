import Link from "next/link"
import { Linkedin, Mail, ExternalLink, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"
import { Navbar } from "@/components/navbar"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { SmoothScroll } from "@/components/smooth-scroll"
import { HeroSection } from "@/components/hero-section"
import { LinkedInBanner } from "@/components/linkedin-banner"
import { AnimatedSection, ParticleBackground, AnimatedGradientBackground } from "@/components/client-animations"
import { linkedInArticleIds } from "@/lib/linkedin-articles"
import { LinkedInEmbed } from "@/components/linkedin-embed"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Background Effects */}
      <AnimatedGradientBackground />
      <ParticleBackground />
      <ScrollIndicator />
      <SmoothScroll />
      <LinkedInBanner />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white dark:bg-gray-800 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  I turn AI hype into reality—leveraging leading technologies and business expertise to deliver
                  competitive advantages at enterprise scale.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Over the past decade at J.P. Morgan, I've architected and delivered enterprise-scale AI and automation
                  programs that empowered 7,000+ citizen developers, eliminated 3M+ hours of manual work annually, and
                  generated $14M+ in new business value.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  As a self-taught coder and architect of one of finance's largest citizen development programs, I
                  bridge C-suites, strategists, and technologists—setting AI strategy, deploying production systems, and
                  translating vision into measurable business outcomes.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.4}>
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>
                <ul className="space-y-2">
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Launched AI strategy initiatives with ChatGPT, OpenAI APIs, Generative AI/LLMs, and RAG
                      architectures—reducing decision cycles by 90%
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Built and led teams of 20+ data scientists, machine learning engineers, and MLOps experts
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Developed and ran a Private Bank AI Advisory program, consulting with 50+ Clients including CEOs
                      and Chief AI Officers
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Presented on AI literacy at conferences and webcasts as keynote speaker and panelist
                    </span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Articles Section */}
        <section id="articles" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Articles & Insights</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
              Sharing thoughts on AI transformation, enterprise innovation, and digital strategy
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {linkedInArticleIds.map((articleId, index) => (
              <AnimatedSection key={articleId} delay={0.2 + index * 0.1}>
                <LinkedInEmbed articleId={articleId} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="mt-12 text-center">
              <Button asChild size="lg" variant="outline">
                <Link href="https://linkedin.com/in/brandenwachtel" target="_blank">
                  <Linkedin className="w-4 h-4 mr-2" />
                View More on LinkedIn
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>


      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-white dark:bg-gray-800 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
              J.P. Morgan Asset & Wealth Management, New York, NY
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            <AnimatedSection delay={0.2}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">AI Strategy and Execution Lead</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">Executive Director</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">January 2024 - Present</p>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>
                    Manage a cross-functional team of data scientists, engineers, and program managers to create AI
                    solutions that enhance core data products/platforms, offer new capabilities, drive cost-saving
                    efficiencies, and generate revenue
                  </li>
                  <li>
                    Champion ChatGPT adoption and citizen development to empower employees to be more efficient,
                    effective and innovative
                  </li>
                  <li>
                    Drive new business by creating an AI Advisory program for clients and prospects to meet with an AI
                    expert, generating over 50 relationship-deepening opportunities for advisors to engage clients,
                    discuss investments, and arrange follow-up meetings
                  </li>
                  <li>
                    Re-engineered a data governance review system with RAG architecture and OpenAI APIs, reducing
                    decision time by 90%
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Post-Acquisition Data and Automation Lead</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">Executive Director</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">August 2023 - January 2024</p>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>
                    Automated the roles of 11 voluntarily-departing First Republic Bank employees, enabling J.P. Morgan
                    to continue fulfilling fiduciary responsibilities and providing top-tier service during
                    mass-resignations and terminations post-merger
                  </li>
                  <li>
                    Engineered a Python-based data transfer tool used in 61 projects to securely migrate 25,000+
                    sensitive client datasets
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Head of Python Innovation & Training Center</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">Executive Director</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">January 2021 - August 2023</p>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>
                    Founded a transformative program that taught 7,000 employees to code, enabling them to automate
                    tedious parts of their jobs
                  </li>
                  <li>Saved over three million hours annually through 1,200+ employee-built custom Python solutions</li>
                  <li>
                    Recruited and managed a global team of 20 technical trainers, engineers, developers, project
                    managers, and strategists
                  </li>
                  <li>
                    Built a production framework for citizen-developer solutions with testing, governance, and
                    deployment workflows
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Data Science Lead Engineer</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">Vice President</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">January 2018 - January 2021</p>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>
                    Ran engineering for a new Data Science team, deploying servers, managing databases, and processing &
                    ingesting big data
                  </li>
                  <li>
                    Deployed and managed data science workbenches (JupyterHub, Domino Data Lab) across on-premise and
                    cloud servers
                  </li>
                  <li>
                    Learned advanced coding and engineering skills through self-guided online learnings and research
                  </li>
                  <li>
                    Created a Data Science newsletter with 16,000 weekly views and 1,000 comments to raise awareness and
                    understanding of AI
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Business & Compensation Strategist</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">Associate</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">March 2016 - January 2018</p>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>
                    Supported the CEO and CFO in managing a $1.5B bonus process through advanced financial modeling and
                    strategic analyses
                  </li>
                  <li>
                    Saved $500K per year after proactively identifying the opportunity to cancel phone contracts for
                    disconnected fax lines
                  </li>
                  <li>
                    Coordinated weekly operating committee meetings by managing the agenda, speakers, and materials
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.7}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Business Manager, Trusts & Estates</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">Analyst</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">June 2014 - March 2016</p>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>
                    Developed an interactive platform that saved over 9 hours per week through the automated collection
                    of trustee data
                  </li>
                  <li>
                    Partnered with Trust Officers and Trustees to extract and record key information from trust
                    agreements
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Education & Certifications</h2>
          </AnimatedSection>

          <div className="mb-12">
            <AnimatedSection direction="left" delay={0.2}>
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold">Bachelor of Science in Business Administration</h4>
                    <p className="text-purple-600 dark:text-purple-400">
                      Washington University in St. Louis - Olin Business School
                    </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">2010 - 2014</p>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Majors:</h5>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full text-sm">
                      Entrepreneurship
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full text-sm">
                      Economics
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">GPA:</span> 3.9/4.0 | <span className="font-medium">Graduated:</span>{" "}
                    Magna Cum Laude
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div>
            <AnimatedSection direction="right" delay={0.3}>
              <h3 className="text-2xl font-bold mb-6">Certifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="font-semibold">Executive Data Science</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Johns Hopkins University</p>
                  <p className="text-gray-500 dark:text-gray-500 text-xs mt-1">April 2025</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="font-semibold">Series 7</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Securities License</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="font-semibold">Series 63</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Securities License</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Cookbook Section */}
      <section id="cookbook" className="py-16 px-4 bg-white dark:bg-gray-800 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">AI Cookbook</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
              Practical guides, code snippets, and resources for AI implementation
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-12 shadow-lg text-center">
              <div className="max-w-2xl mx-auto">
                <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ExternalLink className="w-10 h-10 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Coming Soon</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  I'm currently compiling a comprehensive collection of AI implementation guides, best practices, and
                  code examples. Check back soon for practical resources to accelerate your AI transformation journey.
                </p>
                <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
                  <Link href="mailto:branden.wachtel@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Get Notified
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-purple-600 mr-3" />
                    <a
                      href="mailto:branden.wachtel@gmail.com"
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      branden.wachtel@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Linkedin className="w-5 h-5 text-purple-600 mr-3" />
                    <a
                      href="https://linkedin.com/in/brandenwachtel"
                      target="_blank"
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      rel="noreferrer"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    I'm always open to discussing AI transformation initiatives, speaking opportunities, or strategic
                    partnerships. Feel free to reach out!
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3}>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800 dark:bg-gray-950 text-white relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">Branden Wachtel</h2>
              <p className="text-gray-400">AI Transformation Leader</p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://linkedin.com/in/brandenwachtel"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:branden.wachtel@gmail.com"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Branden Wachtel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
