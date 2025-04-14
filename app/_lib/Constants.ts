import { officesdataType, QATypes, Step, ValueType } from "./Types";
import {
  BanknoteIcon,
  Hotel,
  Mail,
  MapPin,
  Phone,
  StoreIcon,
  Sun,
} from "lucide-react";
import { ChartPie, Database, Signal, Speech } from "lucide-react";
import { Grid2x2Plus, Sparkles, SwatchBook } from "lucide-react";
import { Flame, Lightbulb } from "lucide-react";

export const QA: QATypes[] = [
  {
    id: 1,
    question: "How do I search for properties on Estatein?",
    answer:
      "Learn how to use our user-friendly search tools to find properties that match your criteria.",
  },
  {
    id: 2,
    question: "What documents do I need to sell my property through Estatein?",
    answer:
      "Find out about the necessary documentation for listing your property with us.",
  },
  {
    id: 3,
    question: "How can I contact an Estatein agent?",
    answer:
      "Discover the different ways you can get in touch with our experienced agents.",
  },
];

export const steps: Step[] = [
  {
    id: 1,
    step: "Discover a World of Possibilities",
    info: "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.",
  },
  {
    id: 2,
    step: "Narrowing Down Your Choices",
    info: "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
  },
  {
    id: 3,
    step: "Personalized Guidance",
    info: "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
  },
  {
    id: 4,
    step: "See It for Yourself",
    info: "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
  },
  {
    id: 5,
    step: "Making Informed Decisions",
    info: "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.",
  },
  {
    id: 6,
    step: "Getting the Best Deal",
    info: "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
  },
];

export const services = [
  { id: 1, icon: StoreIcon, title: "Find Your Dream Home" },
  { id: 2, icon: BanknoteIcon, title: "Unlock Property Value" },
  { id: 3, icon: Hotel, title: "Effortless Property Management" },
  { id: 4, icon: Sun, title: "Effortless Property Management" },
];

export const valuesData: ValueType[] = [
  {
    id: 1,
    title: "Valuation Mastery",
    description:
      "Discover the true worth of your property with our expert valuation services.",
    icon: Signal,
  },
  {
    id: 2,
    title: "Strategic Marketing",
    description:
      "Selling a property requires more than just a listing; it demands a strategic marketing approach.",
    icon: ChartPie,
  },
  {
    id: 3,
    title: "Negotiation Wizardry",
    description:
      "Negotiating the best deal is an art, and our negotiation experts are masters of it.",
    icon: Database,
  },
  {
    id: 4,
    title: "Closing Success",
    description:
      "A successful sale is not complete until the closing. We guide you through the intricate closing process.",
    icon: Speech,
  },
];

export const propertyMangments: ValueType[] = [
  {
    id: 1,
    title: "Tenant Harmony",
    description:
      "Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.",
    icon: Grid2x2Plus,
  },
  {
    id: 2,
    title: "Maintenance Ease",
    description:
      "Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.",
    icon: SwatchBook,
  },
  {
    id: 3,
    title: "Financial Peace of Mind",
    description:
      "Managing property finances can be complex. Our financial experts take care of rent collection",
    icon: Sparkles,
  },
  {
    id: 4,
    title: "Legal Guardian",
    description:
      "Stay compliant with property laws and regulations effortlessly.",
    icon: Sun,
  },
];

export const propertyDecisions: ValueType[] = [
  {
    id: 1,
    title: "Tenant Harmony",
    description:
      "Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.",
    icon: Signal,
  },
  {
    id: 2,
    title: "Maintenance Ease",
    description:
      "Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.",
    icon: Flame,
  },
  {
    id: 3,
    title: "Financial Peace of Mind",
    description:
      "Managing property finances can be complex. Our financial experts take care of rent collection",
    icon: Lightbulb,
  },
  {
    id: 4,
    title: "Legal Guardian",
    description:
      "Stay compliant with property laws and regulations effortlessly.",
    icon: Sun,
  },
];

export const contactInfo = [
  { id: 1, icon: Mail, title: "info@estatein.com" },
  { id: 2, icon: Phone, title: "+1 (123) 456-7890" },
  { id: 3, icon: MapPin, title: "Main Headquarters" },
];

export const officesData: officesdataType[] = [
  {
    id: 0,
    name: "123 Estatein Plaza, City Center, Metropolis",
    describtion:
      "Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
    type: "International",
    city: "Metropolis",
    contactInfo: ["info@estatein.com", "+1 (123) 456-7890"],
    locationUrl: "https://maps.app.goo.gl/5UAi28LWCtz8dcqy5",
  },
  {
    id: 1,
    name: "456 Urban Avenue, Downtown District, Metropolis",
    describtion:
      "Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.",
    type: "Regional",
    city: "Metropolis",
    contactInfo: ["info@restatein.com", "+1 (123) 628-7890"],
    locationUrl: "https://maps.app.goo.gl/5UAi28LWCtz8dcqy5",
  },
];
