import { z } from "zod";
import type { EcoMeshRole } from "@/store/onboardingRoleStore";

export type FieldType = "text" | "tel" | "email" | "select" | "textarea";

export interface RoleRegistrationField {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  optional?: boolean;
  options?: string[];
}

export interface RoleRegistrationConfig {
  title: string;
  description: string;
  fields: RoleRegistrationField[];
  schema: z.ZodObject<Record<string, z.ZodTypeAny>>;
}

const requiredText = (label: string) => z.string().min(1, `${label} is required`);
const optionalText = () => z.string().optional();
const phone = z.string().min(8, "Phone number is required");
const email = z.string().email("Enter a valid email address");

export const roleRegistrationConfig: Record<EcoMeshRole, RoleRegistrationConfig> = {
  fisherman: {
    title: "Fisherman Registration",
    description: "Register boat, fishing area, and emergency communication preferences.",
    fields: [
      { name: "fullName", label: "Full Name", type: "text", placeholder: "Md. Hasan Ali" },
      { name: "phoneNumber", label: "Phone Number", type: "tel", placeholder: "+88017..." },
      { name: "nationalId", label: "National ID", type: "text", placeholder: "Optional", optional: true },
      { name: "boatName", label: "Boat Name", type: "text", placeholder: "MV Meghna" },
      { name: "boatRegistrationNumber", label: "Boat Registration Number", type: "text", placeholder: "BR-2026-014" },
      { name: "fishingArea", label: "Fishing Area", type: "text", placeholder: "Nearshore Bay route" },
      { name: "homeDistrict", label: "Home District", type: "text", placeholder: "Barguna" },
      { name: "emergencyContact", label: "Emergency Contact", type: "tel", placeholder: "+88018..." },
      { name: "preferredAlertMethod", label: "Preferred Alert Method", type: "select", options: ["SMS", "Voice Call", "Mobile App"] },
      { name: "languagePreference", label: "Language Preference", type: "select", options: ["Bangla", "English"] },
    ],
    schema: z.object({
      fullName: requiredText("Full name"),
      phoneNumber: phone,
      nationalId: optionalText(),
      boatName: requiredText("Boat name"),
      boatRegistrationNumber: requiredText("Boat registration number"),
      fishingArea: requiredText("Fishing area"),
      homeDistrict: requiredText("Home district"),
      emergencyContact: phone,
      preferredAlertMethod: requiredText("Preferred alert method"),
      languagePreference: requiredText("Language preference"),
    }),
  },
  farmer: {
    title: "Farmer Registration",
    description: "Register farm, crop, and location details for climate intelligence.",
    fields: [
      { name: "fullName", label: "Full Name", type: "text" },
      { name: "phoneNumber", label: "Phone Number", type: "tel" },
      { name: "farmType", label: "Farm Type", type: "select", options: ["Rice", "Vegetable", "Fishery", "Mixed", "Livestock"] },
      { name: "farmSize", label: "Farm Size", type: "text", placeholder: "2.5 acres" },
      { name: "cropType", label: "Crop Type", type: "text", placeholder: "Aman rice" },
      { name: "district", label: "District", type: "text" },
      { name: "upazila", label: "Upazila", type: "text" },
      { name: "village", label: "Village", type: "text" },
      { name: "emergencyContact", label: "Emergency Contact", type: "tel" },
    ],
    schema: z.object({
      fullName: requiredText("Full name"),
      phoneNumber: phone,
      farmType: requiredText("Farm type"),
      farmSize: requiredText("Farm size"),
      cropType: requiredText("Crop type"),
      district: requiredText("District"),
      upazila: requiredText("Upazila"),
      village: requiredText("Village"),
      emergencyContact: phone,
    }),
  },
  "government-officer": {
    title: "Government Officer Registration",
    description: "Verify department identity and official communication details.",
    fields: [
      { name: "fullName", label: "Full Name", type: "text" },
      { name: "department", label: "Department", type: "text", placeholder: "Disaster Management" },
      { name: "designation", label: "Designation", type: "text" },
      { name: "officeId", label: "Office ID", type: "text" },
      { name: "officeLocation", label: "Office Location", type: "text" },
      { name: "officialEmail", label: "Official Email", type: "email" },
      { name: "phoneNumber", label: "Phone Number", type: "tel" },
    ],
    schema: z.object({
      fullName: requiredText("Full name"),
      department: requiredText("Department"),
      designation: requiredText("Designation"),
      officeId: requiredText("Office ID"),
      officeLocation: requiredText("Office location"),
      officialEmail: email,
      phoneNumber: phone,
    }),
  },
  ngo: {
    title: "NGO Registration",
    description: "Register organization identity and operational coverage.",
    fields: [
      { name: "organizationName", label: "Organization Name", type: "text" },
      { name: "officeAddress", label: "Office Address", type: "textarea" },
      { name: "contactPerson", label: "Contact Person", type: "text" },
      { name: "email", label: "Email", type: "email" },
      { name: "phone", label: "Phone", type: "tel" },
      { name: "operationalArea", label: "Operational Area", type: "textarea" },
    ],
    schema: z.object({
      organizationName: requiredText("Organization name"),
      officeAddress: requiredText("Office address"),
      contactPerson: requiredText("Contact person"),
      email,
      phone,
      operationalArea: requiredText("Operational area"),
    }),
  },
  volunteer: {
    title: "Volunteer Registration",
    description: "Register rescue availability and field response capabilities.",
    fields: [
      { name: "fullName", label: "Full Name", type: "text" },
      { name: "bloodGroup", label: "Blood Group", type: "select", options: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"] },
      { name: "skills", label: "Skills", type: "textarea", placeholder: "First aid, boat operation, logistics" },
      { name: "district", label: "District", type: "text" },
      { name: "emergencyContact", label: "Emergency Contact", type: "tel" },
      { name: "availability", label: "Availability", type: "select", options: ["Weekdays", "Weekends", "Emergency only", "Anytime"] },
    ],
    schema: z.object({
      fullName: requiredText("Full name"),
      bloodGroup: requiredText("Blood group"),
      skills: requiredText("Skills"),
      district: requiredText("District"),
      emergencyContact: phone,
      availability: requiredText("Availability"),
    }),
  },
  researcher: {
    title: "Researcher Registration",
    description: "Register institution and research interest for controlled data access.",
    fields: [
      { name: "fullName", label: "Full Name", type: "text" },
      { name: "institution", label: "Institution", type: "text" },
      { name: "department", label: "Department", type: "text" },
      { name: "researchArea", label: "Research Area", type: "textarea" },
      { name: "email", label: "Email", type: "email" },
      { name: "phoneNumber", label: "Phone Number", type: "tel" },
    ],
    schema: z.object({
      fullName: requiredText("Full name"),
      institution: requiredText("Institution"),
      department: requiredText("Department"),
      researchArea: requiredText("Research area"),
      email,
      phoneNumber: phone,
    }),
  },
  administrator: {
    title: "Administrator Registration",
    description: "Register platform administration identity and office contact details.",
    fields: [
      { name: "fullName", label: "Full Name", type: "text", placeholder: "Mushfik Arman" },
      { name: "username", label: "Username", type: "text", placeholder: "mushfik" },
      { name: "department", label: "Department", type: "text", placeholder: "Platform Administration" },
      { name: "designation", label: "Designation", type: "text", placeholder: "Administrator" },
      { name: "officeLocation", label: "Office Location", type: "text", placeholder: "EcoMesh Control Room" },
      { name: "officialEmail", label: "Official Email", type: "email", placeholder: "admin@ecomesh.local" },
      { name: "phoneNumber", label: "Phone Number", type: "tel", placeholder: "+8801000000000" },
    ],
    schema: z.object({
      fullName: requiredText("Full name"),
      username: requiredText("Username"),
      department: requiredText("Department"),
      designation: requiredText("Designation"),
      officeLocation: requiredText("Office location"),
      officialEmail: email,
      phoneNumber: phone,
    }),
  },
};
