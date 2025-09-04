import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Calendar, ExternalLink, Trophy } from "lucide-react";
const Certifications = () => {
  const certifications = [{
    title: "IBM Z Xplore Concepts Badge",
    issuer: "IBM",
    date: "2025",
    status: "Active",
    description: "Recognition badge demonstrating understanding of IBM Z mainframe concepts and technologies",
    skills: ["IBM Z", "z/OS", "JCL", "RACF", "CICS", "IMS", "Db2", "MQ", "COBOL", "REXX"],
    credentialUrl: "https://www.credly.com/badges/0c9ade46-9ebd-4c64-b1f8-a2402d18f3a2/public_url"
  }];
  return <div className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6 text-primary animate-glow">
          Certifications 🏆
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
        
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {certifications.map((cert, index) => <a key={cert.title} href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="block">
            <Card className="bg-card/50 border border-border hover:border-primary/50 hover:scale-105 hover:bg-primary/5 hover:shadow-xl transition-all duration-300 group cursor-pointer h-full">
              <CardHeader>
                {cert.title === "IBM Z Xplore Concepts Badge" && <div className="mb-4">
                    <Button variant="outline" size="sm" onClick={e => {
                e.preventDefault();
                e.stopPropagation();
                window.open(cert.credentialUrl, '_blank');
              }} className="hover:text-primary w-full">
                      <Trophy className="w-4 h-4 mr-2" />
                      View My Credly Badge from IBM
                    </Button>
                  </div>}
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 overflow-hidden">
                      {cert.title === "IBM Z Xplore Concepts Badge" ? <img src="/lovable-uploads/343292da-0392-43e1-b819-243e9527de88.png" alt="IBM Z Xplore Badge" className="w-full h-full object-cover rounded-lg" /> : <Award className="text-primary" size={20} />}
                    </div>
                    <Badge variant="secondary" className="bg-accent/20 text-accent">
                      {cert.status}
                    </Badge>
                  </div>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
              
              <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                {cert.title}
              </CardTitle>
              
              <CardDescription className="flex items-center gap-2 text-muted-foreground">
                <span className="font-medium">{cert.issuer}</span>
                <Calendar size={14} />
                <span>{cert.date}</span>
              </CardDescription>
            </CardHeader>

            <CardContent>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {cert.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {cert.skills.map(skill => <Badge key={skill} variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 transition-colors duration-300">
                    {skill}
                  </Badge>)}
              </div>
            </CardContent>
            </Card>
          </a>)}
      </div>

      <div className="text-center mt-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          <span className="text-foreground font-medium">Currently studying for AWS Certified Cloud Practitioner ☁️</span>
        </div>
      </div>
    </div>;
};
export default Certifications;