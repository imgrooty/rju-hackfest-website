import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface TeamMember {
  name: string;
  email: string;
  phone: string;
  gender: string;
  faculty: string;
  semester: string;
}

const RegisterForm: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registrationType, setRegistrationType] = useState('individual');
  
  // Initial empty team member
  const emptyMember: TeamMember = { name: '', email: '', phone: '', gender: '', faculty: '', semester: '' };
  
  const [formData, setFormData] = useState({
    registrationType: 'individual',
    teamName: '',
    teamLeader: { ...emptyMember },
    teamMembers: [{ ...emptyMember }], // Start with one empty member
    projectIdea: '',
    technologies: {
      programmingLanguages: [] as string[],
      frameworks: [] as string[],
      databases: [] as string[],
      other: ''
    },
    termsAccepted: false
  });

  // Available technology options
  const techOptions = {
    programmingLanguages: ['JavaScript', 'Python', 'Java', 'C++', 'TypeScript', 'Go', 'Ruby', 'Other'],
    frameworks: ['React', 'Angular', 'Vue.js', 'Next.js', 'Django', 'Flask', 'Spring', 'Express.js', 'Other'],
    databases: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis', 'Other']
  };

  // Faculty options
  const facultyOptions = [
    'BSc CSIT',
    'BCA'
    
  ];

  // Semester options
  const semesterOptions = ['1', '2', '3', '4', '5', '6', '7', '8'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleTeamLeaderChange = (field: keyof TeamMember, value: string) => {
    setFormData(prev => ({
      ...prev,
      teamLeader: {
        ...prev.teamLeader,
        [field]: value
      }
    }));
  };

  const handleTeamMemberChange = (index: number, field: keyof TeamMember, value: string) => {
    setFormData(prev => {
      const newMembers = [...prev.teamMembers];
      newMembers[index] = {
        ...newMembers[index],
        [field]: value
      };
      return {
        ...prev,
        teamMembers: newMembers
      };
    });
  };

  const addTeamMember = () => {
    if (formData.teamMembers.length < 3) { // Max 4 members including leader
      setFormData(prev => ({
        ...prev,
        teamMembers: [...prev.teamMembers, { ...emptyMember }]
      }));
    }
  };

  const removeTeamMember = (index: number) => {
    setFormData(prev => ({
      ...prev,
      teamMembers: prev.teamMembers.filter((_, i) => i !== index)
    }));
  };

  const handleTechnologyChange = (category: string, value: string[]) => {
    setFormData(prev => ({
      ...prev,
      technologies: {
        ...prev.technologies,
        [category]: value
      }
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwnXeg6vqddeOTSKZR0wyHYMmhP9m9fyxmisg9nYEq8mFx9CS9-RnLePAkLhSyiKxMnzQ/exec';

    try {
      const dataToSend = {
        registrationType: formData.registrationType,
        teamName: formData.teamName,
        teamLeader: formData.teamLeader,
        teamMembers: formData.teamMembers,
        projectIdea: formData.projectIdea,
        technologies: formData.technologies,
        termsAccepted: formData.termsAccepted
      };

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend)
      });

      toast({
        title: "Registration submitted!",
        description: "We'll contact you with further instructions soon.",
      });

      // Reset form
      setFormData({
        registrationType: 'individual',
        teamName: '',
        teamLeader: { ...emptyMember },
        teamMembers: [{ ...emptyMember }],
        projectIdea: '',
        technologies: {
          programmingLanguages: [],
          frameworks: [],
          databases: [],
          other: ''
        },
        termsAccepted: false
      });

      const form = e.target as HTMLFormElement;
      form.reset();

    } catch (error) {
      console.error('Registration error:', error);
      toast({
        title: "Registration failed",
        description: "Please try again or contact support.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="register" className="py-20 bg-transparent ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Register Now</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us for an unforgettable hackathon experience. Spots are limited!
          </p>
        </div>
        
        <Card className="max-w-3xl mx-auto shadow-xl">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Registration Type Selection */}
              <div className="space-y-4">
                <Label className="text-foreground">Registration Type</Label>
                <RadioGroup
                  defaultValue="individual"
                  onValueChange={(value) => {
                    setRegistrationType(value);
                    setFormData(prev => ({ ...prev, registrationType: value }));
                  }}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="individual" id="individual" />
                    <Label htmlFor="individual" className="text-foreground">Individual</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="team" id="team" />
                    <Label htmlFor="team" className="text-foreground">Team</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Team Name (only for team registration) */}
              {registrationType === 'team' && (
                <div>
                  <Label htmlFor="teamName" className="text-foreground">Team Name</Label>
                  <Input
                    id="teamName"
                    placeholder="Enter your team name"
                    required={registrationType === 'team'}
                    value={formData.teamName}
                    onChange={handleInputChange}
                    className="bg-background border-input"
                  />
                </div>
              )}

              {/* Team Leader/Individual Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {registrationType === 'team' ? 'Team Leader Details' : 'Personal Details'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="leaderName" className="text-foreground">Full Name</Label>
                    <Input
                      id="leaderName"
                      placeholder="Enter full name"
                      required
                      value={formData.teamLeader.name}
                      onChange={(e) => handleTeamLeaderChange('name', e.target.value)}
                      className="bg-background border-input"
                    />
                  </div>
                  <div>
                    <Label htmlFor="leaderEmail" className="text-foreground">Email</Label>
                    <Input
                      id="leaderEmail"
                      type="email"
                      placeholder="Enter email"
                      required
                      value={formData.teamLeader.email}
                      onChange={(e) => handleTeamLeaderChange('email', e.target.value)}
                      className="bg-background border-input"
                    />
                  </div>
                  <div>
                    <Label htmlFor="leaderPhone" className="text-foreground">Phone Number</Label>
                    <Input
                      id="leaderPhone"
                      type="tel"
                      placeholder="Enter phone number"
                      required
                      value={formData.teamLeader.phone}
                      onChange={(e) => handleTeamLeaderChange('phone', e.target.value)}
                      className="bg-background border-input"
                    />
                  </div>
                  <div>
                    <Label htmlFor="leaderGender" className="text-foreground">Gender</Label>
                    <Select
                      value={formData.teamLeader.gender}
                      onValueChange={(value) => handleTeamLeaderChange('gender', value)}
                    >
                      <SelectTrigger className="bg-background border-input">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="leaderFaculty" className="text-foreground">Faculty</Label>
                    <Select
                      value={formData.teamLeader.faculty}
                      onValueChange={(value) => handleTeamLeaderChange('faculty', value)}
                    >
                      <SelectTrigger className="bg-background border-input">
                        <SelectValue placeholder="Select faculty" />
                      </SelectTrigger>
                      <SelectContent>
                        {facultyOptions.map((faculty) => (
                          <SelectItem key={faculty} value={faculty.toLowerCase().replace(/\s+/g, '-')}>
                            {faculty}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="leaderSemester" className="text-foreground">Semester</Label>
                    <Select
                      value={formData.teamLeader.semester}
                      onValueChange={(value) => handleTeamLeaderChange('semester', value)}
                    >
                      <SelectTrigger className="bg-background border-input">
                        <SelectValue placeholder="Select semester" />
                      </SelectTrigger>
                      <SelectContent>
                        {semesterOptions.map((semester) => (
                          <SelectItem key={semester} value={semester}>
                            Semester {semester}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Team Members (only for team registration) */}
              {registrationType === 'team' && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-foreground">Team Members</h3>
                    {formData.teamMembers.length < 3 && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={addTeamMember}
                        className="border-input hover:bg-accent"
                      >
                        Add Member
                      </Button>
                    )}
                  </div>
                  
                  {formData.teamMembers.map((member, index) => (
                    <div key={index} className="p-4 border border-input rounded-lg space-y-4 bg-card">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium text-foreground">Member {index + 1}</h4>
                        {index > 0 && (
                          <Button
                            type="button"
                            variant="destructive"
                            size="sm"
                            onClick={() => removeTeamMember(index)}
                          >
                            Remove
                          </Button>
                        )}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label className="text-foreground">Full Name</Label>
                          <Input
                            placeholder="Enter full name"
                            required
                            value={member.name}
                            onChange={(e) => handleTeamMemberChange(index, 'name', e.target.value)}
                            className="bg-background border-input"
                          />
                        </div>
                        <div>
                          <Label className="text-foreground">Email</Label>
                          <Input
                            type="email"
                            placeholder="Enter email"
                            required
                            value={member.email}
                            onChange={(e) => handleTeamMemberChange(index, 'email', e.target.value)}
                            className="bg-background border-input"
                          />
                        </div>
                        <div>
                          <Label className="text-foreground">Phone Number</Label>
                          <Input
                            type="tel"
                            placeholder="Enter phone number"
                            required
                            value={member.phone}
                            onChange={(e) => handleTeamMemberChange(index, 'phone', e.target.value)}
                            className="bg-background border-input"
                          />
                        </div>
                        <div>
                          <Label className="text-foreground">Gender</Label>
                          <Select
                            value={member.gender}
                            onValueChange={(value) => handleTeamMemberChange(index, 'gender', value)}
                          >
                            <SelectTrigger className="bg-background border-input">
                              <SelectValue placeholder="Select gender" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label className="text-foreground">Faculty</Label>
                          <Select
                            value={member.faculty}
                            onValueChange={(value) => handleTeamMemberChange(index, 'faculty', value)}
                          >
                            <SelectTrigger className="bg-background border-input">
                              <SelectValue placeholder="Select faculty" />
                            </SelectTrigger>
                            <SelectContent>
                              {facultyOptions.map((faculty) => (
                                <SelectItem key={`${index}-${faculty}`} value={faculty.toLowerCase().replace(/\s+/g, '-')}>
                                  {faculty}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label className="text-foreground">Semester</Label>
                          <Select
                            value={member.semester}
                            onValueChange={(value) => handleTeamMemberChange(index, 'semester', value)}
                          >
                            <SelectTrigger className="bg-background border-input">
                              <SelectValue placeholder="Select semester" />
                            </SelectTrigger>
                            <SelectContent>
                              {semesterOptions.map((semester) => (
                                <SelectItem key={`${index}-${semester}`} value={semester}>
                                  Semester {semester}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Technologies Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Technical Preferences</h3>
                
                {/* Programming Languages */}
                <div>
                  <Label className="text-foreground">Programming Languages</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {techOptions.programmingLanguages.map((lang) => (
                      <div key={lang} className="flex items-center space-x-2">
                        <Checkbox
                          id={`lang-${lang}`}
                          checked={formData.technologies.programmingLanguages.includes(lang)}
                          onCheckedChange={(checked) => {
                            const newLangs = checked
                              ? [...formData.technologies.programmingLanguages, lang]
                              : formData.technologies.programmingLanguages.filter(l => l !== lang);
                            handleTechnologyChange('programmingLanguages', newLangs);
                          }}
                        />
                        <Label htmlFor={`lang-${lang}`} className="text-muted-foreground">{lang}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Frameworks */}
                <div>
                  <Label className="text-foreground">Frameworks</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {techOptions.frameworks.map((framework) => (
                      <div key={framework} className="flex items-center space-x-2">
                        <Checkbox
                          id={`framework-${framework}`}
                          checked={formData.technologies.frameworks.includes(framework)}
                          onCheckedChange={(checked) => {
                            const newFrameworks = checked
                              ? [...formData.technologies.frameworks, framework]
                              : formData.technologies.frameworks.filter(f => f !== framework);
                            handleTechnologyChange('frameworks', newFrameworks);
                          }}
                        />
                        <Label htmlFor={`framework-${framework}`} className="text-muted-foreground">{framework}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Databases */}
                <div>
                  <Label className="text-foreground">Databases</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {techOptions.databases.map((db) => (
                      <div key={db} className="flex items-center space-x-2">
                        <Checkbox
                          id={`db-${db}`}
                          checked={formData.technologies.databases.includes(db)}
                          onCheckedChange={(checked) => {
                            const newDatabases = checked
                              ? [...formData.technologies.databases, db]
                              : formData.technologies.databases.filter(d => d !== db);
                            handleTechnologyChange('databases', newDatabases);
                          }}
                        />
                        <Label htmlFor={`db-${db}`} className="text-muted-foreground">{db}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Other Technologies */}
                <div>
                  <Label htmlFor="otherTech" className="text-foreground">Other Technologies</Label>
                  <Textarea
                    id="otherTech"
                    placeholder="List any other technologies you plan to use"
                    value={formData.technologies.other}
                    onChange={(e) => handleTechnologyChange('other', [e.target.value])}
                    className="bg-background border-input"
                  />
                </div>
              </div>

              {/* Project Idea */}
              <div>
                <Label htmlFor="projectIdea" className="text-foreground">Project Idea (Optional)</Label>
                <Textarea
                  id="projectIdea"
                  placeholder="Briefly describe your project idea if you already have one"
                  rows={3}
                  value={formData.projectIdea}
                  onChange={handleInputChange}
                  className="bg-background border-input"
                />
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  required
                  checked={formData.termsAccepted}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, termsAccepted: checked as boolean }))
                  }
                />
                <div className="grid gap-1.5 leading-none">
                  <Label
                    htmlFor="terms"
                    className="text-sm font-normal text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the event rules and code of conduct
                  </Label>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-hackathon-primary hover:bg-hackathon-secondary text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Register Now"}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Registration deadline: One week before the event
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterForm;