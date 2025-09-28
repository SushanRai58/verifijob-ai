import { GraduationCap, Shield, Target, Users, Award, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const teamMembers = [
    { name: "Shravya", id: "4SF23CS206" },
    { name: "Sushan Rai", id: "4SF23CS223" },
    { name: "Thushar B K", id: "4SF23CS233" },
    { name: "Arpitha Shetty", id: "4SF23CS251" }
  ];

  const objectives = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Accurate Detection",
      description: "Develop ML models with NLP to classify job postings as legitimate or fake with high accuracy."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Advanced Safety Features",
      description: "Implement keyword detection, user reporting, and verification badges for comprehensive protection."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User-Friendly Platform",
      description: "Create an accessible web platform with real-time analysis and community intelligence features."
    }
  ];

  const impacts = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Protecting Students",
      description: "Safeguarding students and fresh graduates from fraudulent job postings and recruitment scams.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Fair Employment",
      description: "Promoting ethical hiring practices and building trust between applicants and employers.",
      color: "bg-success/10 text-success"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "SDG 8 Alignment",
      description: "Contributing to Decent Work and Economic Growth through transparent employment verification.",
      color: "bg-warning/10 text-warning"
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            About JobVerify AI
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            An academic project developed by computer science students to combat job posting fraud 
            and create a safer digital employment environment.
          </p>
        </div>

        {/* Project Overview */}
        <Card className="max-w-4xl mx-auto mb-16 shadow-strong">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Project Vision</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  In today's digital world, students and recent graduates rely heavily on online platforms 
                  to find employment opportunities. While this has expanded access to career options, 
                  it has also increased exposure to fraudulent postings that exploit job seekers.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our AI-powered system analyzes job descriptions using Natural Language Processing 
                  and Machine Learning to determine their legitimacy, providing transparent and 
                  interpretable results in real-time.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary">Flask</div>
                  <div className="text-sm text-muted-foreground">Backend Framework</div>
                </div>
                <div className="text-center p-4 bg-success/5 rounded-lg">
                  <div className="text-2xl font-bold text-success">NLP</div>
                  <div className="text-sm text-muted-foreground">Text Analysis</div>
                </div>
                <div className="text-center p-4 bg-warning/5 rounded-lg">
                  <div className="text-2xl font-bold text-warning">ML</div>
                  <div className="text-sm text-muted-foreground">Classification</div>
                </div>
                <div className="text-center p-4 bg-accent/20 rounded-lg">
                  <div className="text-2xl font-bold text-accent-foreground">React</div>
                  <div className="text-sm text-muted-foreground">Frontend UI</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Project Objectives */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">Project Objectives</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    {objective.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">{objective.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{objective.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Societal Impact */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">Societal Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impacts.map((impact, index) => (
              <Card key={index} className="shadow-medium">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${impact.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    {impact.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">{impact.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{impact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Academic Information */}
        <Card className="max-w-4xl mx-auto shadow-strong">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-foreground mb-2">Academic Project</h3>
              <p className="text-muted-foreground">
                Bachelor of Engineering in Computer Science & Engineering
              </p>
              <p className="text-muted-foreground">
                Sahyadri College of Engineering & Management, Mangaluru
              </p>
              <p className="text-muted-foreground">
                Under the guidance of <strong>Dr. Ananth Prabhu G</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-4">Project Team</h4>
                <div className="space-y-3">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        {member.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{member.name}</div>
                        <div className="text-sm text-muted-foreground">{member.id}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4">Future Enhancements</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    Mobile application integration for quick verification
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    Internship opportunity verification system
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    Continuous algorithm updates for evolving scam trends
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    Integration with university placement portals
                  </li>
                </ul>

                <div className="mt-6 p-4 bg-gradient-hero rounded-lg">
                  <p className="text-primary-foreground text-sm font-medium">
                    "Building a safer digital employment environment for the next generation of professionals."
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;