import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "../components/ui/navigation-menu";
import { Textarea } from "../components/ui/textarea";
// import "./globals.css";
import { useState } from "react";

export const PortfolioPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-slate-50">
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold gradient-text">
              DevPortfolio
            </a>

            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="space-x-6">
                <NavigationMenuItem>
                  <NavigationMenuLink onClick={() => scrollToSection("#about")}>
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
                {/* Similar items for Skills, Projects, Contact */}
              </NavigationMenuList>
            </NavigationMenu>

            <Button className="md:hidden" onClick={toggleMenu}>
              <i className="bi bi-list text-2xl"></i>
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white w-full">
            <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
              {["about", "skills", "projects", "contact"].map((item) => (
                <Button key={item} onClick={() => scrollToSection(`#${item}`)}>
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
          </p>
          <div className="flex justify-center space-x-4">
            <Button onClick={() => scrollToSection("#contact")}>
              Get in Touch
            </Button>
            <Button onClick={() => scrollToSection("#projects")}>
              View Projects
            </Button>
          </div>
        </div>
      </section>

      <section id="skills" className="py-12 md:py-24 px-4 bg-white">
        {/* Skills section content */}
      </section>

      <section id="projects" className="py-12 md:py-24 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                {/* Project card content */}
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
          <form onSubmit={handleFormSubmit} className="space-y-6">
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
            {["github", "linkedin", "twitter"].map((platform) => (
              <a key={platform} href="#" className="hover:text-blue-400">
                <i className={`bi bi-${platform} text-2xl`}></i>
              </a>
            ))}
          </div>
          <p className="text-gray-400">
            © 2023 Full Stack Developer. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
