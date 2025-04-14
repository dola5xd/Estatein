import { LucideProps } from "lucide-react";
import { SanityAssetDocument } from "next-sanity";
import { ForwardRefExoticComponent, RefAttributes } from "react";
export interface QATypes {
  id: number;
  question: string;
  answer: string;
}
export interface Step {
  id: number;
  step: string;
  info: string;
}

export interface ValueType {
  id: number;
  title: string;
  description: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}
export interface serviceType {
  id: number;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  title: string;
}
export interface RatingType {
  _id: number;
  title: string;
  message: string;
  rating: number;
  avatar: string;
  name: string;
  location: string;
}
export interface ClientType {
  _id: number;
  title: string;
  message: string;
  publishedAt: number;
  domin: string;
  category: string;
  herf: string;
}

export interface PropertyType {
  _id: string;
  name: string;
  location: string;
  price: number;
  area: number;
  bedrooms: number;
  bathrooms: number;
  images: SanityAssetDocument[];
  description: string;
  keyFeatures: string[];
  amenities: string[];
}
export interface officesdataType {
  id: number;
  name: string;
  describtion: string;
  type: string;
  city: string;
  contactInfo: string[];
  locationUrl: string;
}
