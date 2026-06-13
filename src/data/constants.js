export const NAV_ITEMS = [
  'Home', 'About Us', 'Knowledge Base', 'Resource', 
  'Brochure', 'Root Certificates', 'Test Certificates', 
  'Softwares', 'Certificate', 'Support'
];

export const FEATURES = [
  { title: 'Certificate Price', desc: 'Price depends on your choice for deployment – whether you are using tokens certificates or our fresh signing service.' },
  { title: 'User Manual', desc: 'Our User Manual helps you provide more knowledge about how to use certificate provided services in your daily life with some easy steps.' },
  { title: 'Repository Hub', desc: 'This is our central place where primary elements relating to certificates can be found.' },
  { title: 'Certificate Class', desc: 'In accordance to the guidelines of Electronic Transaction Act we have defined our certificates facility according to different Class.' }
];

export const DIRECTORS = [
  { name: 'Biplav Man Singh', url: '/assets/images/directors/Biplav-Man-Singh.jpeg', role: 'Chairman' },
  { name: 'Deepak Bhandari', url: '/assets/images/directors/Deepak-Bhandari.jpeg', role: 'Director' },
  { name: 'Kishor Pant', url: '/assets/images/directors/Kishor-Pant.jpeg', role: 'Director' },
  { name: 'Trishakti Sundar Joshi', url: '/assets/images/directors/Trishakti-Sundar-Joshi.jpeg', role: 'Director' },
  { name: 'Navaraj Lamichhane', url: '/assets/images/directors/Navaraj-Lamichhane.jpeg', role: 'Director' },
  { name: 'Purushottam Ghimire', url: '/assets/images/directors/Purushottam-Ghimire.jpeg', role: 'Advisor' },
  { name: 'Lochan Lal Amatya', url: '/assets/images/directors/Lochan-Lal-Amatya.jpeg', role: 'Advisor' }
];

export const SERVICES = [
  { title: 'Digital Signature and Certificate', desc: 'The only proven technology for the security, authenticity, integrity and non-repudiation is Digital Signature and Digital Certificate i.e. Public Key Infrastructure PKI Solution' },
  { title: 'Information Security (IS) Audit', desc: 'An information security audit is one of the best ways to determine the security of an organization\'s information without incurring the cost and other associated damages of a security incident.' },
  { title: 'API Development & PKI Integration', desc: 'The integration is a process of adding up of some modules in the system by which it extends its functionality of PKI. The Integration process will allow authentication and validation of the users.' },
  { title: 'Information Security Consulting', desc: 'We serve our client on any pre, during and post services related to Information Technology Security issues or any Technology implementation related issues in an organization.' },
  { title: 'E-Tokens', desc: 'A security token is a small hardware device that the owner carries to authorize access to a network service. We provide varieties of tokens such as USB tokens, OTP tokens etc.' },
  { title: 'Information Security Training', desc: 'The Short term and professional certifications training on Information Security is available with certified and professional instructor.' }
];

export const CERT_CLASSES = [
  { cls: 'Class-1', assurance: 'Basic', app: 'Individual', desc: 'For test purpose only.' },
  { cls: 'Class-2', assurance: 'Medium', app: 'Individual, Enterprise', desc: 'For signing email and documents with or without encryption' },
  { cls: 'Class-3', assurance: 'High', app: 'Individual, Enterprise', desc: 'For signing emails, documents, AD authentication, and app authentication (with/without encryption)' }
];

// 👇 THIS IS THE UPDATED VIDEOS SECTION 👇
export const VIDEOS = [
  { 
    title: 'Digital Signature in Nepal', 
    channel: 'OCC NEPAL',
    url: "https://www.youtube.com/watch?v=YRDxTJjFq4M" 
  },
  { 
    title: 'How to use Digital IDs for Secure email?', 
    channel: 'ICT Frame',
    url: "https://www.youtube.com/watch?v=AbnzXa8Z-C8&t=3s" 
  },
  { 
    title: 'डिजिटल सिग्नेचर चलाउन वा नचलेमा के गर्ने?', 
    channel: 'Prabidhi Kaa Kura',
    url: "https://www.youtube.com/watch?v=G6xssXTBgCg" // 👈 Replace with your YouTube link
  }
];

export const FAQS = [
  { q: 'Is Digital Signatures Certificate legally valid in Nepal?', a: 'Yes, subsequent to the enactment of Electronic Transaction Act 2063 and Rules 2064 in Nepal, Digital Signature Certificates are legally valid in Nepal. Legally valid for all online transaction.' },
  { q: 'Is multiple signing possible?', a: 'Yes, multiple signing can be done in PDF, Word, Excel, PowerPoint, and Document signing in web application.' },
  { q: 'Does DSC is required in both end to sign and encrypt?', a: 'For signing purpose DSC is not require in both end. For encryption purpose DSC is require in both end.' },
  { q: 'Reset Digital Signature Password', a: 'Contact our support line to reset password or mail at support@cert.com.np or call at +977 9802300374.' },
  { q: 'Emsigner not working [GIOMS,EBPS]', a: 'Check if emsigner is opened in taskbar. If open, close and reopen. Check port connection at https://127.0.0.1:8080. Contact support if issue persists.' }
];

export const NEWS = [
  { date: '17th June, 2020', loc: 'Kathmandu, Nepal', title: 'Digital signature creates new ways to transform Nepal', excerpt: 'Digital signatures help enforce security during data transfers. They\'re mainly responsible for establishing authentication, data integrity, and non-repudiation.', tag: 'News' },
  { date: '1st June, 2017', title: 'MOU Signing Ceremony between NCC and CAN Federation', excerpt: 'A Signing Ceremony was held in Federation Of Computer Association Nepal. A penned signature for Digital Signature Certificate was also performed.', tag: 'Event' },
  { date: '6th June, 2017', loc: 'Police Head Quarter, Naxal', title: 'Training program on Digital Signature Certificate', excerpt: 'Successful 2 days Training program on Digital Signature Certificate at Police Head Quarter, Naxal Tuesday and Wednesday.', tag: 'Event' }
];