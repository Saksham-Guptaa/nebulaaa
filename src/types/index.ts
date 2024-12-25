// Define UserRole with the possible roles
export type UserRole =
  | "super-admin"
  | "admin"
  | "mentor"
  | "incubator"
  | "sponsor"
  | "startup"
  | "investor"
  | "influencer";

// Define the User interface to include all the necessary fields for each role
export interface User {
  uid: string;
  email: string;
  role: UserRole;
  displayName?: string; // Full name of the user
  phoneNumber?: string; // User's phone number
  profileImage?: string; // URL of the profile image (from Cloudinary)
  socialLinks?: {
    github?: string;
    linkedIn?: string;
    instagram?: string;
    twitter?: string;
  };
  subscription?: {
    amount: number; // Subscription amount based on role
    paymentMethod?: string; // Payment method (e.g., credit card, PayPal)
    paymentReference?: string; // Payment reference
    paymentDate?: string; // Payment date
  };
  startupData?: {
    industry: string[]; // Preferred industry for startup (dropdown of genres)
    totalFundingRequired: number; // Total funding required for the startup
    totalMembers: number; // Total number of members in the startup
    members: { name: string; email: string }[]; // List of members with their names and emails
    detailsPdf?: string; // Link to the PDF with detailed startup info
    milestones?: string[]; // Milestones for the startup
    otherDetails?: string; // Additional details about the startup
  };
  investorData?: {
    preferredIndustries: string[]; // Preferred industries (dropdown, multiple select)
    averageInvestmentSize: number; // Average investment size
    otherDetails?: string; // Additional details for the investor
  };
  mentorData?: {
    hourlyRate: number; // Hourly rate for the mentor
    availability: string[]; // Available days for the mentor
    interests?: string[]; // Areas of interest for the mentor
    expertise?: string[]; // Areas of expertise for the mentor
    certifications?: string[]; // Links to certifications (PDF or images)
  };
  influencerData?: {
    favoriteGenres: string[]; // Favorite genres for influencers
    totalReach: number; // Total reach across platforms
    followers: {
      github?: number;
      linkedIn?: number;
      instagram?: number;
      twitter?: number;
    };
    rating?: number; // Rating of the influencer
    description?: string; // Short description about the influencer
  };
}
