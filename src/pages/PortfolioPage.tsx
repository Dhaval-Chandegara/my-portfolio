import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

export const PortfolioPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-slate-50">
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold gradient-text">
              DevPortfolio
            </a>
            <div className="hidden md:flex space-x-6">
              {["about", "skills", "projects", "contact"].map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  onClick={() => scrollToSection(`#${item}`)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Button>
              ))}
            </div>
            <Button
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className="bi bi-list text-2xl"></i>
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white w-full">
            <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
              {["about", "skills", "projects", "contact"].map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  onClick={() => scrollToSection(`#${item}`)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section className="pt-24 pb-12 md:pt-32 md:pb-24 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Full Stack <span className="gradient-text">Developer</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            5+ years of experience crafting robust mobile and web applications
            with cutting-edge technologies
          </p>
          <div className="flex justify-center space-x-4">
            <Button onClick={() => scrollToSection("#contact")}>
              Get in Touch
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("#projects")}
            >
              View Projects
            </Button>
          </div>
        </div>
      </section>

      <section id="skills" className="py-12 md:py-24 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Technical Skills
          </h2>

          {[
            {
              title: "Frontend Development",
              skills: [
                "Flutter/Dart",
                "Material UI",
                "Jetpack Compose",
                "React Native",
              ],
            },
            {
              title: "Backend Development",
              skills: ["Java", "Kotlin", "SQLite", "Firebase", "NodeJS"],
            },
            {
              title: "Tools & Technologies",
              skills: [
                "Git",
                "MVVM",
                "Clean Architecture",
                "Firebase",
                "Asana",
              ],
            },
          ].map((section) => (
            <div key={section.title} className="mb-12">
              <h3 className="text-xl font-semibold mb-6 gradient-text">
                {section.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {section.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-pill bg-blue-100 text-blue-800 px-4 py-2 rounded-full transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="py-12 md:py-24 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce App",
                desc: "A full-featured mobile commerce application built with Flutter and Firebase.",
                tags: ["Android", "Flutter", "Firebase"],
                image: "https://source.unsplash.com/random/800x600?app",
              },
              {
                title: "Social Media Platform",
                desc: "A social networking app with real-time messaging using Socket.IO.",
                tags: ["Kotlin", "Socket.IO", "MVVM"],
                image: "https://source.unsplash.com/random/800x600?mobile",
              },
              {
                title: "Health & Fitness Tracker",
                desc: "A comprehensive fitness tracking application with ML integration.",
                tags: ["Java", "Room DB", "Retrofit"],
                image: "https://source.unsplash.com/random/800x600?code",
              },
            ].map((project) => (
              <Card key={project.title}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="link">View Project →</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <Input
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <Textarea
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <div className="text-center">
              <Button type="submit">Send Message</Button>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            {["github", "linkedin", "twitter"].map((social) => (
              <a key={social} href="#" className="hover:text-blue-400">
                <i className={`bi bi-${social} text-2xl`}></i>
              </a>
            ))}
          </div>
          <p className="text-gray-400">
            © 2023 Full Stack Developer. All rights reserved.
          </p>
        </div>
      </footer>

      <style>{`
        .gradient-text {
          background: linear-gradient(45deg, #3b82f6, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .skill-pill:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
};
