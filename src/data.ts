import { Medicine, FeaturedCategory, Testimonial, FAQItem, ServiceItem, GalleryImage, HealthTip, SpecialOffer } from './types';

export const BUSINESS_INFO = {
  name: 'Sri Pawanputra Hanuman Medical',
  category: 'Pharmacy | Medical Store',
  address: 'Choti, Tekari Rd, Kharkhura, Delha, Gaya, Bihar 823002',
  mapCoordinates: 'https://maps.google.com/maps?q=Sri%20Pawanputra%20Hanuman%20Medical%20Choti%20Tekari%20Rd%20Gaya&t=&z=15&ie=UTF8&iwloc=&output=embed',
  mapLink: 'https://goo.gl/maps/bH62qHPhqU6GgArP7', // Placeholder/General maps redirection
  phone: '09631715619',
  phoneFormatted: '09631 715619',
  phoneCallUrl: 'tel:+919631715619',
  whatsappNumber: '919631715619',
  whatsappOrderUrl: 'https://wa.me/919631715619',
  tagline: 'Your Trusted Medical Store for Genuine Medicines & Healthcare Needs',
  email: 'pawanputra.medical.gaya@gmail.com',
  workingHours: {
    weekdays: '08:00 AM - 10:00 PM',
    sunday: '09:00 AM - 08:00 PM',
    emergency: '24/7 Support Available for Urgent Needs'
  },
  owner: 'Sri Manoj Kumar',
  established: '2012',
  nearbyDeliveryAreas: ['Delha', 'Kharkhura', 'Choti', 'Tekari Road', 'Gaya Junction Area', 'Manpur', 'AP Colony', 'GB Road']
};

export const REVIEWS_STATS = {
  averageRating: 4.8,
  totalReviews: 142,
  platform: 'Google Reviews'
};

export const FEATURED_CATEGORIES: FeaturedCategory[] = [
  { id: 'cat-tablets', name: 'Tablets', iconName: 'Pil', count: '1200+ Products', description: 'Essential prescription & daily generic tablets.' },
  { id: 'cat-capsules', name: 'Capsules', iconName: 'Pills', count: '800+ Products', description: 'Multi-vitamins, antibiotics & supplements in gelatin shell.' },
  { id: 'cat-syrups', name: 'Syrups', iconName: 'Droplet', count: '450+ Products', description: 'Cough formulas, digestive enzymes & pediatric liquids.' },
  { id: 'cat-injections', name: 'Injections', iconName: 'Syringe', count: '250+ Products', description: 'Life-saving critical care liquids & vaccines.' },
  { id: 'cat-equipment', name: 'Medical Equipment', iconName: 'Activity', count: '100+ Products', description: 'Wheelchairs, walking aids, nebulizers & steam inhalers.' },
  { id: 'cat-protein', name: 'Protein Supplements', iconName: 'Flame', count: '150+ Products', description: 'High-protein shakes, nutrition powders & gym support.' },
  { id: 'cat-vitamins', name: 'Vitamins & Minerals', iconName: 'Sparkles', count: '320+ Products', description: 'Immunity booster formulations, Calcium, Vitamin D3 & Zinc.' },
  { id: 'cat-skincare', name: 'Skin Care', iconName: 'HeartHandshake', count: '400+ Products', description: 'Dermatologist tested medicated creams, lotions & sunscreens.' },
  { id: 'cat-baby', name: 'Baby Products', iconName: 'Baby', count: '180+ Products', description: 'Baby formulas, baby food, soft wipes, diapers & baby skin care.' },
  { id: 'cat-hygiene', name: 'Personal Hygiene', iconName: 'ShieldAlert', count: '350+ Products', description: 'Handwashes, disinfectants, dental hygiene & daily essentials.' },
  { id: 'cat-ortho', name: 'Orthopedic Support', iconName: 'Accessibility', count: '90+ Products', description: 'Knee caps, crepe bandages, lumbar belts & ankle binders.' },
  { id: 'cat-diabetic', name: 'Diabetic Care', iconName: 'HeartPulse', count: '210+ Products', description: 'Sugar-free syrups, test strips, glucometers & insulin needles.' }
];

export const MEDICINES_DB: Medicine[] = [
  { id: 'med-1', name: 'Paracetamol 650mg (Dolo)', category: 'Tablets', type: 'Tablet', description: 'Effective relief from fever, mild to moderate aches, and pains.', price: '₹30 for a strip of 15', isRx: false, manufacturer: 'Micro Labs Ltd', availability: 'In Stock' },
  { id: 'med-2', name: 'Amoxycillin & Potassium Clavulanate 625mg', category: 'Tablets', type: 'Tablet', description: 'Broad-spectrum antibiotic used to treat bacterial infections.', price: '₹200 for a strip of 10', isRx: true, manufacturer: 'Alkem Laboratories', availability: 'In Stock' },
  { id: 'med-3', name: 'Pantoprazole Gastro-resistant 40mg (Pan-40)', category: 'Tablets', type: 'Tablet', description: 'Reduces stomach acid, helpful for acidity, heartburn, and GERD.', price: '₹145 for a strip of 15', isRx: true, manufacturer: 'Alkem Laboratories', availability: 'In Stock' },
  { id: 'med-4', name: 'Amlodipine 5mg (Amlong)', category: 'Tablets', type: 'Tablet', description: 'Used to treat high blood pressure (hypertension) and chest pain.', price: '₹22 for a strip of 15', isRx: true, manufacturer: 'Micro Labs Ltd', availability: 'In Stock' },
  { id: 'med-5', name: 'Metformin SR 500mg (Glycomet)', category: 'Diabetic Care', type: 'Tablet', description: 'Oral anti-diabetic medication used to manage type 2 diabetes.', price: '₹25 for a strip of 10', isRx: true, manufacturer: 'USV Biotech', availability: 'In Stock' },
  { id: 'med-6', name: 'Becosules Capsules', category: 'Vitamins & Minerals', type: 'Capsule', description: 'B-Complex vitamins with Vitamin C to support energy levels and skin health.', price: '₹50 for a strip of 20', isRx: false, manufacturer: 'Pfizer India', availability: 'In Stock' },
  { id: 'med-7', name: 'Multivitamin & Minerals (Zincovit)', category: 'Vitamins & Minerals', type: 'Tablet', description: 'Nutritional supplement to boost immunity and general vitality.', price: '₹110 for a strip of 15', isRx: false, manufacturer: 'Apex Laboratories', availability: 'In Stock' },
  { id: 'med-8', name: 'Cough Syrup (Alex)', category: 'Syrups', type: 'Syrup', description: 'Formula for quick and effective relief from dry and irritating cough.', price: '₹125 for 100ml bottle', isRx: false, manufacturer: 'Glenmark Pharmaceuticals', availability: 'In Stock' },
  { id: 'med-9', name: 'Digital Glucometer (Accu-Chek Active)', category: 'Diabetic Care', type: 'Device', description: 'Accurate and rapid monitoring of blood glucose levels at home.', price: '₹1,549 per unit', isRx: false, manufacturer: 'Roche Diabetes Care', availability: 'In Stock' },
  { id: 'med-10', name: 'Digital Blood Pressure Monitor', category: 'Medical Equipment', type: 'Device', description: 'Fully automatic upper arm blood pressure and pulse monitor.', price: '₹1,850 per unit', isRx: false, manufacturer: 'Omron Healthcare', availability: 'In Stock' },
  { id: 'med-11', name: 'Cetirizine 10mg (Okacet)', category: 'Tablets', type: 'Tablet', description: 'Antihistamine providing effective relief from running nose, sneezing, and allergies.', price: '₹18 for a strip of 10', isRx: false, manufacturer: 'Cipla Ltd', availability: 'In Stock' },
  { id: 'med-12', name: 'Crepe Bandage (7.5cm x 4m)', category: 'Orthopedic Support', type: 'Support', description: 'High elastic support bandage for relief from muscle strains and sprains.', price: '₹120 per unit', isRx: false, manufacturer: 'Dyna Care', availability: 'In Stock' },
  { id: 'med-13', name: 'ORS Powder (Electral)', category: 'First Aid Supplies', type: 'Supplement', description: 'WHO formula oral rehydration salts for dehydration relief and energy.', price: '₹22 per sachet', isRx: false, manufacturer: 'FDC Limited', availability: 'In Stock' },
  { id: 'med-14', name: 'Baby Diapers (Pampers - Medium)', category: 'Baby Products', type: 'Support', description: 'Soft, dry and stretchable baby diapers with wetness indicator.', price: '₹699 for pack of 54', isRx: false, manufacturer: 'Procter & Gamble', availability: 'In Stock' },
  { id: 'med-15', name: 'Inhaler (Asthalin 100mcg)', category: 'Medical Equipment', type: 'Equipment', description: 'Relieves asthma symptoms and chronic obstructive pulmonary disorder.', price: '₹140 per inhaler', isRx: true, manufacturer: 'Cipla Ltd', availability: 'Available in 24h' },
  { id: 'med-16', name: 'Lactocalamine Lotion', category: 'Skin Care', type: 'Cream', description: 'Clay-based lotion providing hydration and relief from pimples and dark spots.', price: '₹195 for 120ml bottle', isRx: false, manufacturer: 'Piramal Pharma', availability: 'In Stock' }
];

export const WHY_CHOOSE_US = [
  { title: '100% Genuine Medicines', description: 'Direct sourcing from verified distributors ensures only original and unexpired medicines reach you.', icon: 'CheckCircle2' },
  { title: 'Experienced Staff', description: 'Our certified pharmacists and staff have deep knowledge to help you read prescriptions correctly.', icon: 'Users' },
  { title: 'Affordable Prices', description: 'We offer fair prices, genuine discounts on bulk purchases, and generic medicine alternatives.', icon: 'IndianRupee' },
  { title: 'Fast Local Service', description: 'Quick dispensing at store and superfast home delivery in Kharkhura and Delha areas.', icon: 'Clock' },
  { title: 'Prescription Medicines', description: 'Strict compliance and proper guidance for critical medicines like blood pressure and diabetic meds.', icon: 'FileText' },
  { title: 'Wide Product Range', description: 'Beyond pills, we stock surgical gear, baby care items, personal hygiene, and fitness supplements.', icon: 'Heart' },
  { title: 'Trusted Local Pharmacy', description: 'Serving Gaya for over a decade with trust, building long-term family-like relationships.', icon: 'MapPin' },
  { title: 'Easy WhatsApp Support', description: 'Just upload your prescription on WhatsApp and your medicines will be ready for pickup/delivery.', icon: 'MessageSquare' }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'Prescription Medicines',
    description: 'Accurate dispensing of critical life-saving medications based on valid prescriptions.',
    details: [
      'Double-check verification by certified pharmacists',
      'Proper dosage instruction guidelines',
      'Maintenance of chronic patient medication logs',
      'Affordable generic alternatives suggestions'
    ],
    iconName: 'FileText',
    isPopular: true
  },
  {
    id: 'srv-2',
    title: 'General & OTC Medicines',
    description: 'Over-the-counter remedies for everyday health troubles like pain, colds, allergies & acidity.',
    details: [
      'Pain relievers & anti-fever tablets',
      'Cough syrups & throat lozenges',
      'Acidity relievers & digestive enzyme solutions',
      'Expert advice on minor symptoms'
    ],
    iconName: 'Pil'
  },
  {
    id: 'srv-3',
    title: 'Health Supplements',
    description: 'Premium vitamins, protein powders, and herbal formulations for enhanced energy and health.',
    details: [
      'Multi-vitamins and multi-minerals strips',
      'Whey protein & medical nutrition shakes (Ensure, Protinex)',
      'Calcium & Vitamin D3 capsules for bone health',
      'Ayurvedic immunity builders (Chyawanprash, Giloy)'
    ],
    iconName: 'Sparkles',
    isPopular: true
  },
  {
    id: 'srv-4',
    title: 'Baby Care Products',
    description: 'Ultra-safe and premium baby foods, formulas, diapers, and gentle skin care essentials.',
    details: [
      'Baby food formulas (Cerelac, Lactogen, Similac)',
      'Premium rash creams & organic baby soaps',
      'Super-absorbent skin-friendly diapers & soft wipes',
      'Baby feeding bottles and pacifiers'
    ],
    iconName: 'Baby'
  },
  {
    id: 'srv-5',
    title: 'Personal Care Products',
    description: 'Daily grooming and hygiene essentials including medicated skin care and dental hygiene.',
    details: [
      'Dermatologist-recommended skin creams & lotions',
      'Antiseptic soaps & moisturizing body washes',
      'Medicated toothpaste and dental accessories',
      'Hair oils and nourishing shampoos'
    ],
    iconName: 'HeartHandshake'
  },
  {
    id: 'srv-6',
    title: 'Medical Equipment',
    description: 'Essential self-monitoring devices and orthopedic recovery supports for everyday convenience.',
    details: [
      'Digital blood pressure monitors & blood sugar meters',
      'Pulse oximeters & infrared thermometers',
      'Nebulizers & vaporizers for breathing comfort',
      'Steamer cups & hot water bags'
    ],
    iconName: 'Activity'
  },
  {
    id: 'srv-7',
    title: 'Surgical Supplies',
    description: 'High-quality clinical disposable supplies, surgical instruments, and wound dressings.',
    details: [
      'Disposable syringes & sterile injection needles',
      'Surgical masks (3-ply, N95) & latex examination gloves',
      'IV fluid sets and butterfly cannula',
      'Surgical scissors, forcep tweezers, and tape rolls'
    ],
    iconName: 'Syringe'
  },
  {
    id: 'srv-8',
    title: 'First Aid Products',
    description: 'Fully stocked first aid boxes and single wound management essentials for immediate safety.',
    details: [
      'Antiseptic solutions (Dettol, Savlon, Hydrogen Peroxide)',
      'Betadine ointments and burn cooling gels',
      'Sterile cotton balls, gauze pads & micropore tapes',
      'Waterproof Band-Aids & elastic crepe rollers'
    ],
    iconName: 'BriefcaseMedical'
  },
  {
    id: 'srv-9',
    title: 'Diabetic Care',
    description: 'Comprehensive solutions for sugar monitoring, insulin injection, and special diet control.',
    details: [
      'Insulin pen devices & ultra-fine disposable needles',
      'Continuous glucose test strips (Accu-Chek, OneTouch)',
      'Sugar-free sweeteners and low-glycemic health drinks',
      'Diabetic socks for nerve protection and circulation'
    ],
    iconName: 'HeartPulse',
    isPopular: true
  },
  {
    id: 'srv-10',
    title: 'Healthcare Essentials',
    description: 'General sanitizing and protective equipment for the safety of your family.',
    details: [
      'Alcohol-based pocket hand sanitizers',
      'Air purification respiratory masks',
      'Daily multi-vitamin immunity packs',
      'Healthy herbal teas & green tea collections'
    ],
    iconName: 'ShieldAlert'
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 'img-1', title: 'Sri Pawanputra Hanuman Medical storefront', category: 'Store Front', imageUrl: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=800&q=80', aspectRatio: 'aspect-video' },
  { id: 'img-2', title: 'Neatly organized medicine shelves', category: 'Shelves', imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80', aspectRatio: 'aspect-[4/3]' },
  { id: 'img-3', title: 'Prescription verification station', category: 'Store Front', imageUrl: 'https://images.unsplash.com/photo-1607619056574-7b8d304b3b86?auto=format&fit=crop&w=800&q=80', aspectRatio: 'aspect-square' },
  { id: 'img-4', title: 'High-quality medical equipment display', category: 'Equipment', imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80', aspectRatio: 'aspect-[3/4]' },
  { id: 'img-5', title: 'Baby and personal care shelves', category: 'Products', imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660db0969?auto=format&fit=crop&w=800&q=80', aspectRatio: 'aspect-[4/3]' },
  { id: 'img-6', title: 'A wide range of vitamins & healthcare supplements', category: 'Products', imageUrl: 'https://images.unsplash.com/photo-1626847037657-fd3622613ce3?auto=format&fit=crop&w=800&q=80', aspectRatio: 'aspect-video' },
  { id: 'img-7', title: 'Our trusted team ready to serve you', category: 'Team', imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80', aspectRatio: 'aspect-[4/3]' },
  { id: 'img-8', title: 'Surgical supplies & first-aid accessories', category: 'Equipment', imageUrl: 'https://images.unsplash.com/photo-1631549916768-4119b295f266?auto=format&fit=crop&w=800&q=80', aspectRatio: 'aspect-square' }
];

export const FAQ_DATA: FAQItem[] = [
  { id: 'faq-1', question: 'How can I order medicines through WhatsApp?', answer: 'It is very simple! Go to our WhatsApp Order section, fill out your name, address, list of medicines, and upload an optional picture of your prescription. Click "Send via WhatsApp". It will instantly format a clean template and open WhatsApp for you to send to our store number (09631715619). We will pack it and confirm immediately.', category: 'Ordering' },
  { id: 'faq-2', question: 'Do you deliver medicines at home in Gaya?', answer: 'Yes! We offer fast home delivery in Kharkhura, Delha, Choti, Tekari Road, and nearby localities in Gaya. Most deliveries are completed within 2 to 4 hours of order confirmation. Delivery is free for monthly prescriptions or orders above ₹500.', category: 'Store' },
  { id: 'faq-3', question: 'Is a prescription mandatory to purchase medicines?', answer: 'For general health medicines (OTC), pain relievers, vitamins, and baby care products, no prescription is required. However, for scheduled prescription-only drugs (marked Rx) such as antibiotics, psychiatric medicines, high blood pressure, and advanced diabetic drugs, you must submit/present a valid doctor prescription.', category: 'Prescription' },
  { id: 'faq-4', question: 'How do I know if my medicine is genuine and not expired?', answer: 'Sri Pawanputra Hanuman Medical is dedicated to 100% genuine products. We source medicines exclusively from verified government-licensed pharmaceutical distributors. Every batch is rigorously checked for expiry date during receiving and before dispensing to patients.', category: 'General' },
  { id: 'faq-5', question: 'What payment methods do you accept at your store?', answer: 'We accept a wide range of convenient payment methods: Cash, UPI (PhonePe, Google Pay, Paytm, BHIM), and all major Credit and Debit Cards.', category: 'Store' },
  { id: 'faq-6', question: 'Do you offer discounts on monthly chronic medicines?', answer: 'Yes, we value our long-term customer relationships. For chronic patients purchasing regular monthly medicines (e.g., for Diabetes, Blood Pressure, Heart Care), we offer special discount rates and prioritize your stock reservations so you never run out.', category: 'General' },
  { id: 'faq-7', question: 'Can I return unused medicines if my prescription changes?', answer: 'Yes, we accept returns or exchanges of unused medicines within 30 days of purchase, provided the medicine strips/bottles are intact, sealed, undamaged, have clear expiry details visible, and you present the original invoice.', category: 'General' },
  { id: 'faq-8', question: 'What are the store working hours?', answer: 'We are open from Monday to Saturday, 08:00 AM to 10:00 PM. On Sundays, we are open from 09:00 AM to 08:00 PM. For emergency medicine requests, you can contact us at 09631715619.', category: 'Store' },
  { id: 'faq-9', question: 'Do you stock surgical items and medical equipment like nebulizers?', answer: 'Yes, we maintain a rich stock of medical equipment including digital blood pressure monitors, glucometers, nebulizers, steam inhalers, pulse oximeters, and orthopedic supports like knee caps, crepe bandages, and heating pads.', category: 'General' },
  { id: 'faq-10', question: 'Can you source rare medicines if they are not in stock?', answer: 'Absolutely. If you require a rare or specialized medication that is currently out of stock, share your prescription with us. We have direct contact with top state distributors and can usually procure it for you within 24 to 48 hours.', category: 'Ordering' }
];

export const WORKING_PROCESS_STEPS = [
  { step: '01', title: 'Visit or Share', description: 'Walk into our store on Tekari Road or share your prescription over WhatsApp.', icon: 'UploadCloud' },
  { step: '02', title: 'Verify & Pack', description: 'Our certified pharmacists inspect the prescription and prepare fresh medicines.', icon: 'FileCheck' },
  { step: '03', title: 'Pay Securely', description: 'Make payment via cash, card, or UPI (GPay, PhonePe, Paytm) after review.', icon: 'CreditCard' },
  { step: '04', title: 'Stay Healthy', description: 'Collect your medicines or receive them at your doorstep with dosing guidelines.', icon: 'HeartHandshake' }
];

export const TIMELINE_EVENTS = [
  { year: '2012', title: 'Store Foundation', description: 'Sri Pawanputra Hanuman Medical was opened on Tekari Road, Delha to serve the Gaya community.' },
  { year: '2015', title: 'Expansion of Inventory', description: 'Introduced medical equipment, orthopedic supports, and high-quality surgical supplies.' },
  { year: '2018', title: 'Digital Upgrade', description: 'Began using computerized inventory tracking to monitor batch exprises and prevent stockouts.' },
  { year: '2021', title: 'Pandemic Support & 24/7 Delivery', description: 'Served tirelessly during COVID-19, supplying essential oxygen cylinders, sanitizers, and home delivering critical care meds.' },
  { year: '2024 & Beyond', title: 'Online Presence & WhatsApp Ordering', description: 'Launched online web portal and seamless WhatsApp prescribing to make health access simpler.' }
];

export const HEALTH_TIPS: HealthTip[] = [
  { id: 'tip-1', title: 'How to Store Your Medicines Correctly to Maintain Potency', category: 'Medicine Safety', summary: 'Proper storage ensures your medicine remains effective until the expiry date. Avoid humid bathrooms and hot direct sunlight.', content: 'Did you know that keeping your medicine cabinet in the bathroom might reduce the potency of your medication? High humidity and temperature fluctuations degrade active chemicals. Always store tablets, capsules, and liquids in a cool, dry place (under 25°C) away from children. Certain medicines, like insulin and vaccines, strictly require refrigeration (2°C - 8°C). Keep them in the center of the fridge, never in the door where temperature varies.', readTime: '3 min read', date: 'July 5, 2026', iconName: 'ThermometerSun' },
  { id: 'tip-2', title: 'Understanding Your Prescription: What Do These Abbreviation Codes Mean?', category: 'Health Literacy', summary: 'Learn the common abbreviations doctor write on prescriptions like OD, BD, TDS, and AC.', content: 'Medical prescriptions can often look like an ancient language. Here is a quick guide to understanding the dosing frequency abbreviations written by your doctor: \n- **OD**: Once a day (Daily)\n- **BD / BID**: Twice a day\n- **TDS / TID**: Three times a day\n- **QD**: Four times a day\n- **AC**: Before meals (Ante Cibum)\n- **PC**: After meals (Post Cibum)\n- **HS / BT**: At bedtime (Hora Somni)\n- **PRN**: As and when required (Pro Re Nata)\nAlways ask our pharmacist if you have any questions before taking any dosage.', readTime: '4 min read', date: 'June 28, 2026', iconName: 'BookOpen' },
  { id: 'tip-3', title: 'Essential Tips for Managing Diabetes & Blood Pressure Daily', category: 'Chronic Care', summary: 'Simple steps like standard checks, low sodium intake, and regular walking can protect your heart and kidneys.', content: 'Managing chronic conditions like high BP and diabetes requires consistency. Measure your levels at the same time every day and log them. Limit sodium (salt) to under 1.5g per day for blood pressure safety, and keep carbohydrates consistent. Daily brisk walking for 30 minutes significantly increases insulin sensitivity. Never miss a dose of your medication, even if your levels seem normal—stopping medication suddenly can cause dangerous rebound spikes.', readTime: '5 min read', date: 'June 15, 2026', iconName: 'Activity' }
];

export const SPECIAL_OFFERS: SpecialOffer[] = [
  { id: 'off-1', title: 'New Customer Welcome Discount', description: 'Get flat discount on your very first prescription order placed through our WhatsApp portal.', code: 'WELCOMEHANUMAN', discount: 'Flat 10% OFF', validUntil: 'Dec 31, 2026' },
  { id: 'off-2', title: 'Chronic Care Health Pack', description: 'For recurring monthly medicines (diabetes, blood pressure, thyroid). Guaranteed lowest rates.', code: 'MONTHLYHEALTH', discount: 'Up to 15% OFF', validUntil: 'Ongoing Support' },
  { id: 'off-3', title: 'Free Home Delivery in Gaya', description: 'Order any medicines or baby essentials above ₹500 and get free express home delivery.', code: 'FREEDELIVERY', discount: 'Free Shipping', validUntil: 'Always Active' }
];
