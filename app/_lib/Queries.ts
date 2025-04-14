export const ratingQuery = `
*[_type == "rating"] | order(publishedAt desc) {
  avatar,
  rating,
  message,
  title,
  _id, 
  name,
  location
}
`;

export const propertyQuery = `
*[_type == "property"] | order(_createdAt desc) {  
_id, 
  name,
  location,
  price,
  area,
  bedrooms,
  bathrooms,
  images,
  description,
  keyFeatures,
  amenities,
}
`;

export const shortPropertyQuery = `
*[_type == "property"] | order(price desc)[0...3] { 
 _id, 
  name,
  location,
  price,
  area,
  bedrooms,
  bathrooms,
  images,
  description,
  keyFeatures,
  amenities,
}
`;
export const propertyIDFetch = `*[_type == "property" && _id == $id][0] {
  _id,
  name,
  location,
  price,
  area,
  bedrooms,
  bathrooms,
  images,
  description,
  keyFeatures,
  amenities
}
`;

export const clientsQuery = `*[_type == "clients"] | order(publishedAt asc) {
  publishedAt,
  domin,
  message,
  title,
  category,
  herf,
  _id
}`;

export const sanityOptions = { next: { revalidate: 30 } };
