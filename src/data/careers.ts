export interface CareerOpening {
  id: string;
  title: string;
  department: string;
  description: string;
}

export interface WhyWorkWithUs {
  icon: string;
  title: string;
  description: string;
}

export const whyWorkWithUs: WhyWorkWithUs[] = [
  {
    icon: '🚀',
    title: 'Growth',
    description: 'Career advancement and continuous learning opportunities'
  },
  {
    icon: '👥',
    title: 'Team Culture',
    description: 'Collaborative and inclusive work environment'
  },
  {
    icon: '💼',
    title: 'Benefits',
    description: 'Competitive compensation and comprehensive benefits'
  },
  {
    icon: '🎯',
    title: 'Projects',
    description: 'Work on impactful traffic safety projects that save lives'
  },
  {
    icon: '🏆',
    title: 'Recognition',
    description: 'Your hard work and contributions are valued and recognized'
  },
  {
    icon: '⚖️',
    title: 'Work-Life Balance',
    description: 'Flexible schedules and work-life balance support'
  }
];

export const careerOpenings: CareerOpening[] = [
  {
    id: 'traffic-engineer',
    title: 'Traffic Safety Engineer',
    department: 'Engineering',
    description: 'We are looking for a talented Traffic Safety Engineer to join our team. You will be responsible for designing and developing innovative traffic control solutions, conducting safety assessments, and ensuring compliance with standards. Experience with traffic engineering principles and project management is required.'
  },
  {
    id: 'quality-manager',
    title: 'Quality Assurance Manager',
    department: 'Quality Assurance',
    description: 'Join our quality team to ensure all products and services meet the highest safety standards. You will oversee quality inspections, develop quality control processes, conduct safety audits, and work closely with project managers to maintain excellence in traffic management solutions.'
  },
  {
    id: 'site-supervisor',
    title: 'Traffic Management Supervisor',
    department: 'Operations',
    description: 'Lead on-site traffic management operations and coordinate traffic control teams. Ideal candidate has strong leadership skills and extensive experience in managing traffic control projects, event management, and emergency response coordination across multiple sites.'
  },
  {
    id: 'logistics-coordinator',
    title: 'Equipment Logistics Coordinator',
    department: 'Logistics',
    description: 'Manage equipment inventory, logistics, and distribution across our rental fleet. You will coordinate deliveries, maintain equipment status, optimize logistics routes, and ensure timely deployment of traffic management equipment to project sites.'
  }
];
