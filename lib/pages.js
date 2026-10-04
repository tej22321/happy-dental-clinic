import { Baby, Crown, MapPin, Smile, Sparkles, Video } from 'lucide-react'
import ToothIcon from '@/components/ToothIcon'

/**
 * Single source of truth for the keyword-targeted pages. Drives the [slug] route,
 * generateStaticParams, per-page metadata, sitemap.xml and the footer links.
 */
export const SERVICE_PAGES = [
  {
    slug: 'pediatric-dentistry',
    kind: 'service',
    name: 'Pediatric Dentistry',
    cardTitle: 'Pediatric Dentistry',
    cardText: 'Drill-free dental sealants and gentle cavity protection for children, delivered by a specialist pedodontist.',
    icon: Baby,
    image: 'pediatric',
    imageAlt: 'Pediatric dental treatment for a child at Happy Super Speciality Dental Clinic Machilipatnam',
    metaTitle: 'Pediatric Dentist in Machilipatnam | Kids Dental Care',
    metaDescription:
      'Specialist pediatric dentistry in Machilipatnam by Dr. Ch. Tanuja (MDS, Pedodontist): drill-free sealants, gentle cavity care and sedation options for anxious children.',
    eyebrow: 'Pediatric Dentistry in Machilipatnam',
    h1: 'Gentle, Specialist Dental Care for Children',
    intro: [
      'Children are not small adults: their teeth, behaviour and comfort needs are different. Our pediatric care is led by Dr. Ch. Tanuja, an MDS pedodontist who has trained specifically in treating infants, children and teenagers.',
      'From a first check-up to cavity treatment, every visit is planned to be calm and positive, so children grow up without a fear of the dentist.',
    ],
    highlights: [
      { title: 'Drill-free sealants', text: 'A protective coating on the chewing surfaces of back teeth that helps prevent cavities, with no drilling or injections.' },
      { title: 'Gentle cavity care', text: 'Early decay treated with child-friendly techniques and tooth-coloured fillings.' },
      { title: 'Sedation options', text: 'Safe, specialist-supervised options for very young or anxious children who need more extensive treatment.' },
      { title: 'Kid-safe clinic', text: 'A colourful waiting area with a play corner, and treatment chairs set up for small patients.' },
    ],
    faqs: [
      { q: 'When should my child first see a dentist?', a: 'Ideally by their first birthday, or within six months of the first tooth appearing. Early visits are short and help children get used to the clinic.' },
      { q: 'What are dental sealants?', a: 'Sealants are a thin protective layer painted onto the grooves of back teeth to keep food and bacteria out. Applying them is painless and needs no drilling.' },
      { q: 'My child is scared of the dentist. Can you help?', a: 'Yes. As a pedodontist, Dr. Tanuja uses child-friendly communication and step-by-step introductions, and sedation options are available when needed.' },
    ],
    bookService: 'Pediatric Dentistry',
  },
  {
    slug: 'root-canal-machilipatnam',
    kind: 'service',
    name: 'Root Canal Treatment',
    cardTitle: 'Painless Root Canal & Zirconia Crowns',
    cardText: 'Comfortable, painless root canal therapy (RCT) finished with strong, natural-looking zirconia protective crowns.',
    icon: Crown,
    image: 'rootCanal',
    imageAlt: 'Dr. Ch. Tanuja performing painless root canal treatment in Machilipatnam',
    metaTitle: 'Painless Root Canal Treatment in Machilipatnam | Zirconia Crowns',
    metaDescription:
      'Painless root canal treatment (RCT) in Machilipatnam with natural-looking zirconia crowns. Specialist-led care at Happy Super Speciality Dental Clinic, Buttaipeta.',
    eyebrow: 'Root Canal Treatment in Machilipatnam',
    h1: 'Painless Root Canal Treatment & Zirconia Crowns',
    intro: [
      'A root canal removes infected or inflamed pulp from inside a tooth, cleans and seals it, and saves the natural tooth instead of extracting it. With modern local anaesthesia the procedure itself is typically no more uncomfortable than a filling.',
      'We finish treated teeth with zirconia crowns: strong, tooth-coloured caps that protect the tooth and blend in with your smile.',
    ],
    highlights: [
      { title: 'Comfort first', text: 'Effective local anaesthesia and a calm, unhurried approach, with sedation available for anxious patients.' },
      { title: 'Save your natural tooth', text: 'Treating the infection keeps your own tooth in place and avoids the need for a replacement.' },
      { title: 'Zirconia crowns', text: 'Durable, metal-free crowns shaded to match your neighbouring teeth.' },
      { title: 'Sterile protocols', text: 'Hospital-grade autoclave sterilization for every instrument used.' },
    ],
    faqs: [
      { q: 'Does a root canal hurt?', a: 'The tooth is fully numbed before treatment, so most patients feel pressure rather than pain. The procedure usually relieves the pain caused by the infection.' },
      { q: 'How many visits does a root canal need?', a: 'Many cases are completed in one or two visits, followed by a visit to fit the crown. The exact plan depends on the tooth and the infection.' },
      { q: 'Why do I need a crown after a root canal?', a: 'A root-canal-treated tooth can become brittle. A crown protects it from cracking and restores normal chewing.' },
    ],
    bookService: 'Painless Root Canal & Zirconia Crowns',
  },
  {
    slug: 'dental-implants-machilipatnam',
    kind: 'service',
    name: 'Dental Implants',
    cardTitle: 'Advanced Dental Implants',
    cardText: 'Permanent, natural-feeling tooth replacement that restores your bite, speech and confidence.',
    icon: ToothIcon,
    image: 'implants',
    imageAlt: 'Dental implant tooth replacement at Happy Super Speciality Dental Clinic Machilipatnam',
    metaTitle: 'Dental Implants in Machilipatnam | Permanent Tooth Replacement',
    metaDescription:
      'Dental implants in Machilipatnam for permanent, natural-feeling tooth replacement. Consultation, planning and implant crowns at Happy Super Speciality Dental Clinic.',
    eyebrow: 'Dental Implants in Machilipatnam',
    h1: 'Dental Implants: Permanent, Natural-Feeling Teeth',
    intro: [
      'A dental implant replaces the root of a missing tooth with a small titanium post placed in the jawbone. Once it has healed, it supports a crown that looks, feels and functions like a natural tooth.',
      'Implants do not rely on neighbouring teeth for support, and they help preserve the jawbone where a tooth has been lost.',
    ],
    highlights: [
      { title: 'Thorough planning', text: 'A detailed examination and X-rays to check bone and gum health before treatment begins.' },
      { title: 'Natural look and feel', text: 'Custom crowns shaded to match your smile, so the implant is hard to tell apart from your own teeth.' },
      { title: 'Eat with confidence', text: 'A fixed replacement that lets you chew and speak normally, with no loose dentures.' },
      { title: 'Long-term care', text: 'Follow-up reviews and hygiene guidance to keep your implant healthy for years.' },
    ],
    faqs: [
      { q: 'Am I suitable for a dental implant?', a: 'Most healthy adults with enough jawbone are suitable. We assess your oral health, bone and medical history at the consultation.' },
      { q: 'How long does the implant process take?', a: 'The implant usually needs a few months to bond with the bone before the final crown is fitted. We explain your timeline at the planning stage.' },
      { q: 'How do I look after an implant?', a: 'Brush and floss as you would with natural teeth and keep up regular check-ups and cleanings.' },
    ],
    bookService: 'Advanced Dental Implants',
  },
  {
    slug: 'sedation-dentistry',
    kind: 'service',
    name: 'Sedation Dentistry',
    cardTitle: 'Sedation & Anesthesia Dentistry',
    cardText: 'Zero-pain, anxiety-free procedures for nervous patients and young children.',
    icon: Smile,
    image: 'sedation',
    imageAlt: 'Calm, anxiety-free waiting area for sedation dentistry patients in Machilipatnam',
    metaTitle: 'Sedation Dentistry in Machilipatnam | Anxiety-Free Treatment',
    metaDescription:
      'Sedation and anaesthesia dentistry in Machilipatnam for nervous adults and children. Relaxed, pain-free treatment at Happy Super Speciality Dental Clinic.',
    eyebrow: 'Sedation Dentistry in Machilipatnam',
    h1: 'Sedation Dentistry for Relaxed, Anxiety-Free Treatment',
    intro: [
      'Dental anxiety is common, and it should never stop you or your child from getting the care you need. Sedation dentistry uses carefully monitored medication to help you feel calm and comfortable during treatment.',
      'We discuss your medical history and the options available, and recommend the gentlest approach that suits the treatment you need.',
    ],
    highlights: [
      { title: 'For nervous patients', text: 'Helps adults with dental fear, a strong gag reflex or difficulty sitting through long procedures.' },
      { title: 'For young children', text: 'Specialist-supervised options for children who need more extensive treatment.' },
      { title: 'Careful monitoring', text: 'Your comfort and safety are monitored throughout the procedure.' },
      { title: 'Clear guidance', text: 'Simple instructions on what to do before and after your appointment.' },
    ],
    faqs: [
      { q: 'Is sedation safe?', a: 'When it is planned and monitored by trained professionals after a review of your medical history, dental sedation is a well-established and safe practice.' },
      { q: 'Will I be asleep?', a: 'Most dental sedation keeps you relaxed but responsive rather than asleep. We explain which option is right for you before treatment.' },
      { q: 'Can I drive home after sedation?', a: 'Depending on the type of sedation used, you may need someone to accompany you home. We confirm this when we book your appointment.' },
    ],
    bookService: 'Sedation & Anesthesia Dentistry',
  },
  {
    slug: 'cosmetic-dentistry-machilipatnam',
    kind: 'service',
    name: 'Cosmetic Dentistry',
    cardTitle: 'Cosmetic Dentistry & Composite Fillings',
    cardText: 'Smile makeovers and tooth-coloured composite fillings that blend invisibly with your natural teeth.',
    icon: Sparkles,
    image: 'cosmetic',
    imagePosition: 'object-top',
    imageAlt: 'Cosmetic dentistry and tooth-coloured fillings by Dr. Ch. Tanuja in Machilipatnam',
    metaTitle: 'Cosmetic Dentistry in Machilipatnam | Tooth-Coloured Fillings',
    metaDescription:
      'Cosmetic dentistry in Machilipatnam: smile makeovers, aligners and tooth-coloured composite fillings that blend with your natural teeth.',
    eyebrow: 'Cosmetic Dentistry in Machilipatnam',
    h1: 'Cosmetic Dentistry & Tooth-Coloured Fillings',
    intro: [
      'Small changes can make a big difference to how you feel about your smile. Our cosmetic treatments improve the colour, shape and alignment of your teeth while keeping them healthy.',
      'Tooth-coloured composite fillings repair cavities and chips without the dark appearance of metal fillings.',
    ],
    highlights: [
      { title: 'Composite fillings', text: 'Natural-looking fillings bonded to the tooth and shaded to match.' },
      { title: 'Smile makeovers', text: 'A combined plan to improve chipped, worn, uneven or discoloured teeth.' },
      { title: 'Aligners', text: 'Discreet options for straightening mildly crowded or spaced teeth.' },
      { title: 'Crowns', text: 'Tooth-coloured zirconia crowns for heavily damaged or root-canal-treated teeth.' },
    ],
    faqs: [
      { q: 'Can my old metal fillings be replaced?', a: 'Often, yes. If a metal filling is worn or you would prefer a natural look, we can assess whether replacing it with a composite filling is suitable.' },
      { q: 'How long do composite fillings last?', a: 'With good oral hygiene and regular check-ups, composite fillings can last many years.' },
      { q: 'Is cosmetic treatment only about appearance?', a: 'No. Many cosmetic treatments also repair damage, protect teeth and improve your bite.' },
    ],
    bookService: 'Cosmetic Dentistry & Composite Fillings',
  },
  {
    slug: 'teledentistry',
    kind: 'service',
    name: 'Teledentistry',
    cardTitle: 'Teledentistry & Online Consultations',
    cardText: 'Speak to our specialist from home via WhatsApp or video call before you visit.',
    icon: Video,
    image: 'teledentistry',
    imageAlt: 'Online dental consultation with Dr. Ch. Tanuja, Happy Super Speciality Dental Clinic',
    metaTitle: 'Online Dental Consultation | Teledentistry with Dr. Ch. Tanuja',
    metaDescription:
      'Consult Dr. Ch. Tanuja (MDS) online via WhatsApp or video call. Share photos of your concern and get specialist dental guidance from home.',
    eyebrow: 'Teledentistry & Online Consultations',
    h1: 'Consult a Dental Specialist Online',
    intro: [
      'Not sure whether your problem needs a visit? Teledentistry lets you describe your concern, share photos and get specialist advice from home, by WhatsApp or video call.',
      'It is ideal for second opinions, follow-ups, deciding how urgent a problem is, and families who live outside Machilipatnam.',
    ],
    highlights: [
      { title: 'WhatsApp consultations', text: 'Send a message and photos of your concern, and we will reply with guidance and next steps.' },
      { title: 'Video calls', text: 'Book a scheduled video consultation to talk your concern through face to face.' },
      { title: 'Know before you go', text: 'Find out whether you need an in-clinic visit and what treatment may involve.' },
      { title: 'Follow-up care', text: 'Check in after treatment without travelling to the clinic.' },
    ],
    faqs: [
      { q: 'Can a dentist diagnose me online?', a: 'An online consultation gives a professional opinion based on what you describe and show. Some conditions need an in-clinic examination or X-ray to confirm, and we will tell you when that is the case.' },
      { q: 'How do I take useful photos of my teeth?', a: 'Use good light, hold the phone close, and take a few angles of the area of concern. A short description of your symptoms helps too.' },
      { q: 'What if I need treatment?', a: 'We can book your clinic appointment directly so that the visit is focused and efficient.' },
    ],
    bookService: 'Teledentistry & Online Consultations',
  },
]

export const LOCATION_PAGES = [
  {
    slug: 'dentist-in-buttaipeta-machilipatnam',
    kind: 'location',
    name: 'Dentist in Buttaipeta',
    icon: MapPin,
    image: 'reception',
    imageAlt: 'Reception and waiting area of Happy Super Speciality Dental Clinic, Buttaipeta, Machilipatnam',
    metaTitle: 'Dentist in Buttaipeta, Machilipatnam | Beside Town Hall',
    metaDescription:
      'Looking for a dentist in Buttaipeta, Machilipatnam? Happy Super Speciality Dental Clinic is opposite Bharat Gas Company, beside Town Hall. Specialist care for the whole family.',
    eyebrow: 'Buttaipeta · Machilipatnam',
    h1: 'Your Specialist Dentist in Buttaipeta, Machilipatnam',
    intro: [
      'Happy Super Speciality Dental Clinic is in the heart of Buttaipeta, opposite Bharat Gas Company and beside Town Hall, and easy to reach from anywhere in Machilipatnam and the surrounding Krishna District.',
      'Led by Dr. Ch. Tanuja (MDS, Pedodontist), the clinic offers specialist dental care for children and adults under one roof, from check-ups and root canals to implants and cosmetic treatment.',
    ],
    highlights: [
      { title: 'Easy to find', text: 'Opposite Bharat Gas Company and beside Town Hall, Buttaipeta.' },
      { title: 'Care for the whole family', text: 'Specialist pediatric care alongside complete adult dentistry.' },
      { title: 'Hospital-grade hygiene', text: '100% autoclave sterilization protocols for every patient.' },
      { title: 'Book your way', text: 'Call, WhatsApp or book online, with teledentistry available if you live further away.' },
    ],
    faqs: [
      { q: 'Where exactly is the clinic?', a: '25/324, Buttaipeta, opposite Bharat Gas Company, beside Town Hall, Machilipatnam, Andhra Pradesh 521001.' },
      { q: 'Do I need an appointment?', a: 'Appointments are recommended so we can keep waiting times short. You can call, message us on WhatsApp or use the booking form.' },
      { q: 'Do you treat patients from outside Machilipatnam?', a: 'Yes. Patients visit from across Krishna District, and online consultations help you plan your visit in advance.' },
    ],
    bookService: undefined,
  },
]

export const ALL_PAGES = [...SERVICE_PAGES, ...LOCATION_PAGES]

export const getPage = (slug) => ALL_PAGES.find((p) => p.slug === slug)
