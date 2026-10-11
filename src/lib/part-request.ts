export const whatsappNumber = '2747245593';
export const makes = ['Toyota', 'VW', 'Ford', 'Nissan', 'BMW', 'Hyundai', 'Isuzu', 'Suzuki', 'Mercedes'];
export const provinces = ['Eastern Cape', 'Free State', 'Gauteng', 'KwaZulu-Natal', 'Limpopo', 'Mpumalanga', 'North West', 'Northern Cape', 'Western Cape'];
export const conditions = ['Used / Scrap Yard', 'Aftermarket New', 'Any'];
export type PartRequest = { make: string; model: string; year: string; part: string; condition: string; province: string };
export function whatsappLink(request: PartRequest) {
 const message = `Hi PartLink SA, I am looking for a ${request.condition.trim()} ${request.part.trim()} for a ${request.year.trim()} ${request.make.trim()} ${request.model.trim()}. I am located in ${request.province.trim()}.`;
 return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
