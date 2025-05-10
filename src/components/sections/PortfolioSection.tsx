
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Slash-32 App & Website",
    category: "app",
    image: "/placeholder.svg",
    description: "Custom OCR model trained to recognize decorative hoodie text and convert binary to readable text."
  },
  {
    id: 2,
    title: "JewConnect (ReallyCapture)",
    category: "website",
    image: "/placeholder.svg",
    description: "Multivendor business platform with custom plugin for sponsored listings tracking, special search box, and registration forms."
  },
  {
    id: 3,
    title: "Invisalign",
    category: "website",
    image: "/placeholder.svg",
    description: "Modern dental site with custom animation and design features.",
    link: "https://invisalign.in"
  },
  {
    id: 4,
    title: "E-commerce Dashboard",
    category: "plugin",
    image: "/placeholder.svg",
    description: "Custom WordPress plugin for product management and analytics."
  },
  {
    id: 5,
    title: "Health Tracker App",
    category: "app",
    image: "/placeholder.svg",
    description: "Android application for tracking fitness goals and health metrics."
  },
  {
    id: 6,
    title: "Educational Platform",
    category: "website",
    image: "/placeholder.svg",
    description: "Online learning platform with course management and student progress tracking."
  }
];

const PortfolioSection: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'website', name: 'Websites' },
    { id: 'app', name: 'Apps' },
    { id: 'plugin', name: 'Plugins' }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2 text-navy">My Portfolio</h2>
          <div className="h-1 w-20 bg-orange mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Here are some of my recent projects. I've worked on a variety of websites, apps, and plugins for clients across different industries.
          </p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-3 mb-10">
          {categories.map(category => (
            <Button
              key={category.id}
              onClick={() => setFilter(category.id)}
              variant={filter === category.id ? "default" : "outline"}
              className={filter === category.id 
                ? "bg-orange hover:bg-orange/90 text-white" 
                : "border-gray-300 text-gray-700 hover:border-orange hover:text-orange"}
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="portfolio-item overflow-hidden">
              <div className="relative overflow-hidden group h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button className="bg-orange hover:bg-orange/90 text-white">
                    View Case Study
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-bold text-navy">{project.title}</h3>
                  <span className="text-xs px-2 py-1 bg-orange/10 text-orange rounded-full capitalize">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-700 text-sm">{project.description}</p>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-orange hover:underline text-sm mt-2 block">
                    Visit Site →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-navy hover:bg-navy/90 text-white">
            View More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
