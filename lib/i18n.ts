export type Lang = "en" | "id";

type NavItem = {
  label: string;
  href: string;
};

type Badge = {
  label: string;
  description?: string;
};

type Step = {
  title: string;
  description: string;
};

type PricingTier = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
};

type Testimonial = {
  name: string;
  age: string;
  initialWeight: string;
  weightLost: string;
  quote: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

export type PageContent = {
  meta: {
    siteName: string;
    title: string;
    description: string;
  };
  navbar: {
    logo: string;
    nav: NavItem[];
    orderNow: string;
    languageLabel: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    disclaimer: string;
    trustBar: Badge[];
  };
  trust: {
    title: string;
    subtitle: string;
    badges: Badge[];
  };
  whatIs: {
    eyebrow: string;
    title: string;
    lead: string;
    body: string[];
    bullets: string[];
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    steps: Step[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    subtitle: string;
    tiers: PricingTier[];
    disclaimer: string;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ratingLabel: string;
    cards: Testimonial[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: FaqItem[];
  };
  order: {
    eyebrow: string;
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      phone: string;
      message: string;
      messagePlaceholder: string;
      consent: string;
      submit: string;
      success: string;
    };
  };
  footer: {
    linksTitle: string;
    links: NavItem[];
    medicalDisclaimerTitle: string;
    medicalDisclaimerBody: string;
    copyright: string;
  };
};

export const content: Record<Lang, PageContent> = {
  en: {
    meta: {
      siteName: "Mounjaro Weight Loss Clinic",
      title: "Clinically Supervised Mounjaro Weight Loss Programme",
      description:
        "Safe, clinician-led Mounjaro (tirzepatide) weight loss treatment with UK GMC doctors, discreet delivery and ongoing support. Start your medical assessment today."
    },
    navbar: {
      logo: "Mounjaro Clinic",
      nav: [
        { label: "How it works", href: "#how-it-works" },
        { label: "Pricing", href: "#pricing" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "FAQ", href: "#faq" }
      ],
      orderNow: "Order now",
      languageLabel: "Language"
    },
    hero: {
      eyebrow: "Clinician-led Mounjaro treatment",
      title: "Medical weight loss with Mounjaro, prescribed by UK doctors",
      subtitle:
        "Evidence-based tirzepatide treatment, personalised by GMC-registered clinicians and delivered discreetly to your door.",
      primaryCta: "Start online assessment",
      secondaryCta: "Speak to a clinician",
      disclaimer: "Prescription is subject to clinical suitability following your medical assessment.",
      trustBar: [
        { label: "MHRA licensed medicine" },
        { label: "Free online consultation" },
        { label: "Discreet UK delivery" }
      ]
    },
    trust: {
      title: "Trusted medical weight loss care",
      subtitle:
        "Your treatment is overseen by experienced doctors, using regulated medicines and UK pharmacies.",
      badges: [
        { label: "MHRA licensed", description: "UK regulated medication" },
        { label: "Eli Lilly approved", description: "Authentic Mounjaro supply" },
        { label: "GMC doctors", description: "UK-registered clinicians" },
        { label: "10,000+ patients", description: "Supported across the UK" }
      ]
    },
    whatIs: {
      eyebrow: "What is Mounjaro?",
      title: "Tirzepatide: dual GIP and GLP-1 receptor agonist",
      lead:
        "Mounjaro contains tirzepatide, a once-weekly injectable medicine that targets two key hormone pathways involved in appetite and blood sugar control.",
      body: [
        "Tirzepatide activates both GIP and GLP-1 receptors. These are natural gut hormones that signal fullness to your brain, help regulate insulin and slow how quickly food leaves your stomach.",
        "When combined with lifestyle changes and appropriate medical supervision, Mounjaro can support significant weight loss for eligible adults living with obesity or overweight with weight-related health conditions."
      ],
      bullets: [
        "Once-weekly injectable pen",
        "Used alongside nutrition and activity changes",
        "Prescribed only after a clinician reviews your medical history"
      ]
    },
    howItWorks: {
      eyebrow: "How Mounjaro works",
      title: "Three key ways tirzepatide supports weight loss",
      steps: [
        {
          title: "Slows digestion",
          description:
            "Food leaves your stomach more slowly, helping you feel comfortably full for longer after meals."
        },
        {
          title: "Reduces appetite",
          description:
            "Signals in the brain are adjusted so that cravings are reduced and smaller portions feel satisfying."
        },
        {
          title: "Stabilises blood sugar",
          description:
            "Helps smooth out blood sugar peaks and dips, which can support more stable energy and fewer hunger spikes."
        }
      ]
    },
    pricing: {
      eyebrow: "Simple, transparent pricing",
      title: "Choose the programme that fits your journey",
      subtitle:
        "All plans include medical assessment, prescribing where appropriate, treatment reviews and access to our clinical support team.",
      tiers: [
        {
          name: "Starter",
          price: "£199",
          description: "Ideal for trying Mounjaro for the first time.",
          features: [
            "Full online medical assessment",
            "1 month of treatment if clinically suitable",
            "Nurse support by secure messaging"
          ]
        },
        {
          name: "Popular",
          price: "£549",
          description: "Recommended for meaningful early results.",
          features: [
            "3 months of treatment if appropriate",
            "Monthly clinician review",
            "Personalised lifestyle guidance"
          ],
          highlight: true
        },
        {
          name: "Full programme",
          price: "£999",
          description: "Comprehensive 6-month medical programme.",
          features: [
            "Up to 6 months of treatment",
            "Progress tracking and dose adjustments",
            "Priority access to clinical team"
          ]
        }
      ],
      disclaimer:
        "Medication, dose and duration are always tailored to the individual and may differ from the examples above. Final pricing depends on your personalised treatment plan."
    },
    testimonials: {
      eyebrow: "Real patient stories",
      title: "Support that goes beyond the prescription",
      subtitle:
        "Patients who were clinically suitable for Mounjaro share their experiences of structured support and steady progress.",
      ratingLabel: "Average 4.9/5 patient satisfaction",
      cards: [
        {
          name: "Sarah",
          age: "42",
          initialWeight: "101 kg",
          weightLost: "18 kg lost in 6 months",
          quote:
            "The regular check-ins kept me accountable and safe. I felt listened to, not judged."
        },
        {
          name: "Mohammed",
          age: "36",
          initialWeight: "115 kg",
          weightLost: "22 kg lost in 7 months",
          quote:
            "For the first time I was not constantly thinking about food. The team helped me change my habits."
        },
        {
          name: "Emma",
          age: "50",
          initialWeight: "94 kg",
          weightLost: "14 kg lost in 5 months",
          quote:
            "Everything was clearly explained and I always knew what to expect at each stage."
        }
      ]
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "Your questions about Mounjaro answered",
      items: [
        {
          question: "Who is Mounjaro suitable for?",
          answer:
            "Mounjaro is generally considered for adults with obesity, or overweight with certain weight-related health conditions. A GMC-registered clinician will review your full medical history to decide if it is appropriate for you."
        },
        {
          question: "How is Mounjaro taken?",
          answer:
            "Mounjaro is given as a once-weekly injection using a pre-filled pen. Your care team will provide clear instructions and support so you feel confident using it safely."
        },
        {
          question: "What side effects should I be aware of?",
          answer:
            "Common side effects can include nausea, vomiting, diarrhoea, constipation and reduced appetite. Serious side effects are less common but can occur. You will receive full safety information and should contact the team urgently if you feel unwell."
        },
        {
          question: "Can I stop Mounjaro once I reach my goal weight?",
          answer:
            "Any decision to reduce or stop treatment should be made together with your clinician. They will help you plan how to maintain your results with lifestyle support as treatment is adjusted."
        },
        {
          question: "Will I definitely receive a prescription?",
          answer:
            "No. Prescription is never guaranteed. If Mounjaro is not clinically appropriate or safe for you, your clinician will discuss alternative options and you will not be supplied with the medicine."
        },
        {
          question: "Is this service a replacement for my GP?",
          answer:
            "No. We work alongside, not instead of, your usual NHS or private GP. You should continue to attend regular check-ups and share details of any weight loss treatment with them."
        }
      ]
    },
    order: {
      eyebrow: "Ready to begin?",
      title: "Start your confidential online assessment",
      subtitle:
        "Share a few details and one of our clinicians will review your information and next steps.",
      form: {
        name: "Full name",
        email: "Email address",
        phone: "Mobile number",
        message: "Tell us about your goals",
        messagePlaceholder:
          "For example: previous weight loss attempts, medical conditions, and what you hope to achieve.",
        consent:
          "I consent to being contacted about my medical assessment and understand this is not emergency care.",
        submit: "Submit assessment request",
        success: "Thank you. A clinician will review your details and contact you securely."
      }
    },
    footer: {
      linksTitle: "Clinic",
      links: [
        { label: "How it works", href: "#how-it-works" },
        { label: "Pricing", href: "#pricing" },
        { label: "Clinical team", href: "#" },
        { label: "Contact", href: "#order" }
      ],
      medicalDisclaimerTitle: "Medical disclaimer",
      medicalDisclaimerBody:
        "Information on this website is general in nature and does not replace an individual consultation with a qualified healthcare professional. Never delay seeking medical advice because of something you have read online. In an emergency, call your local emergency services immediately.",
      copyright: "© "
    }
  },
  id: {
    meta: {
      siteName: "Klinik Mounjaro",
      title: "Program penurunan berat badan medis dengan Mounjaro",
      description:
        "Perawatan penurunan berat badan Mounjaro (tirzepatide) yang dipantau dokter, dengan pengiriman tersembunyi dan dukungan berkelanjutan. Mulai asesmen medis Anda hari ini."
    },
    navbar: {
      logo: "Klinik Mounjaro",
      nav: [
        { label: "Cara kerja", href: "#how-it-works" },
        { label: "Harga", href: "#pricing" },
        { label: "Testimoni", href: "#testimonials" },
        { label: "FAQ", href: "#faq" }
      ],
      orderNow: "Pesan sekarang",
      languageLabel: "Bahasa"
    },
    hero: {
      eyebrow: "Perawatan Mounjaro diawasi dokter",
      title: "Program penurunan berat badan medis dengan Mounjaro",
      subtitle:
        "Terapi tirzepatide berbasis bukti, dipersonalisasi oleh dokter berpengalaman dan dikirim secara rahasia ke rumah Anda.",
      primaryCta: "Mulai asesmen online",
      secondaryCta: "Bicara dengan dokter",
      disclaimer:
        "Resep hanya diberikan bila Anda dinilai layak secara klinis setelah asesmen medis.",
      trustBar: [
        { label: "Obat berlisensi MHRA" },
        { label: "Konsultasi online gratis" },
        { label: "Pengiriman rahasia" }
      ]
    },
    trust: {
      title: "Perawatan medis yang tepercaya",
      subtitle:
        "Perjalanan Anda dipantau dokter dengan penggunaan obat teregulasi dan apotek resmi.",
      badges: [
        { label: "Lisensi MHRA", description: "Obat teregulasi" },
        { label: "Disetujui Eli Lilly", description: "Mounjaro asli" },
        { label: "Dokter GMC", description: "Dokter terdaftar" },
        { label: "10.000+ pasien", description: "Didukung di seluruh Inggris" }
      ]
    },
    whatIs: {
      eyebrow: "Apa itu Mounjaro?",
      title: "Tirzepatide: agonis reseptor GIP dan GLP-1 ganda",
      lead:
        "Mounjaro mengandung tirzepatide, obat suntik mingguan yang menarget dua jalur hormon penting yang mengatur nafsu makan dan gula darah.",
      body: [
        "Tirzepatide mengaktivasi reseptor GIP dan GLP-1. Hormon usus ini memberi sinyal rasa kenyang ke otak, membantu mengatur insulin dan memperlambat pengosongan lambung.",
        "Bila dikombinasikan dengan perubahan gaya hidup dan pemantauan medis yang tepat, Mounjaro dapat mendukung penurunan berat badan yang bermakna pada orang dewasa yang memenuhi kriteria."
      ],
      bullets: [
        "Suntikan sekali seminggu",
        "Digunakan bersama perubahan pola makan dan aktivitas",
        "Diresepkan hanya setelah dokter meninjau riwayat medis Anda"
      ]
    },
    howItWorks: {
      eyebrow: "Cara kerja Mounjaro",
      title: "Tiga cara utama tirzepatide mendukung penurunan berat badan",
      steps: [
        {
          title: "Memperlambat pencernaan",
          description:
            "Makanan keluar dari lambung lebih lambat sehingga Anda merasa kenyang lebih lama setelah makan."
        },
        {
          title: "Mengurangi nafsu makan",
          description:
            "Sinyal di otak berubah sehingga keinginan makan berkurang dan porsi kecil terasa cukup."
        },
        {
          title: "Menstabilkan gula darah",
          description:
            "Membantu meratakan lonjakan dan penurunan gula darah sehingga energi lebih stabil dan rasa lapar berkurang."
        }
      ]
    },
    pricing: {
      eyebrow: "Harga yang jelas",
      title: "Pilih program yang sesuai dengan tujuan Anda",
      subtitle:
        "Semua paket mencakup asesmen medis, peresepan bila sesuai, peninjauan berkala, dan akses ke tim klinis kami.",
      tiers: [
        {
          name: "Starter",
          price: "£199",
          description: "Cocok untuk mencoba Mounjaro pertama kali.",
          features: [
            "Asesmen medis online lengkap",
            "Obat untuk 1 bulan bila layak",
            "Dukungan perawat melalui pesan aman"
          ]
        },
        {
          name: "Populer",
          price: "£549",
          description: "Direkomendasikan untuk hasil awal yang bermakna.",
          features: [
            "Hingga 3 bulan terapi bila sesuai",
            "Tinjauan bulanan dengan dokter",
            "Panduan gaya hidup personal"
          ],
          highlight: true
        },
        {
          name: "Program penuh",
          price: "£999",
          description: "Program medis komprehensif selama 6 bulan.",
          features: [
            "Hingga 6 bulan terapi",
            "Pemantauan progres dan penyesuaian dosis",
            "Akses prioritas ke tim klinis"
          ]
        }
      ],
      disclaimer:
        "Obat, dosis, dan durasi selalu dipersonalisasi sehingga dapat berbeda dari contoh di atas. Harga akhir mengikuti rencana terapi Anda."
    },
    testimonials: {
      eyebrow: "Cerita pasien",
      title: "Dukungan yang menyeluruh, bukan hanya resep",
      subtitle:
        "Pasien yang dinilai layak untuk Mounjaro berbagi pengalaman mereka dengan dukungan yang terstruktur dan progres yang stabil.",
      ratingLabel: "Rata-rata kepuasan pasien 4,9/5",
      cards: [
        {
          name: "Rina",
          age: "40",
          initialWeight: "98 kg",
          weightLost: "16 kg turun dalam 6 bulan",
          quote:
            "Kontrol rutin membuat saya merasa aman dan termotivasi. Saya merasa didukung, bukan disalahkan."
        },
        {
          name: "Andi",
          age: "35",
          initialWeight: "112 kg",
          weightLost: "20 kg turun dalam 7 bulan",
          quote:
            "Untuk pertama kalinya pikiran saya tidak terus-menerus memikirkan makanan. Tim klinik membantu saya mengubah kebiasaan."
        },
        {
          name: "Siti",
          age: "48",
          initialWeight: "92 kg",
          weightLost: "13 kg turun dalam 5 bulan",
          quote:
            "Semua penjelasan sangat jelas dan saya selalu tahu langkah selanjutnya dalam program."
        }
      ]
    },
    faq: {
      eyebrow: "Pertanyaan yang sering diajukan",
      title: "Pertanyaan umum tentang Mounjaro",
      items: [
        {
          question: "Siapa yang dapat menggunakan Mounjaro?",
          answer:
            "Mounjaro umumnya dipertimbangkan untuk orang dewasa dengan obesitas, atau kelebihan berat badan dengan kondisi kesehatan terkait. Dokter akan menilai riwayat medis lengkap Anda sebelum memutuskan kelayakan."
        },
        {
          question: "Bagaimana cara penggunaan Mounjaro?",
          answer:
            "Mounjaro diberikan sebagai suntikan sekali seminggu menggunakan pena praisi. Tim kami akan memberi panduan jelas agar Anda merasa yakin menggunakan obat dengan aman."
        },
        {
          question: "Apa saja efek samping yang mungkin muncul?",
          answer:
            "Efek samping yang sering dilaporkan antara lain mual, muntah, diare, konstipasi, dan penurunan nafsu makan. Efek samping serius lebih jarang namun bisa terjadi. Anda akan menerima informasi keamanan lengkap dan harus segera menghubungi tim jika merasa tidak sehat."
        },
        {
          question: "Apakah saya bisa berhenti Mounjaro setelah mencapai berat ideal?",
          answer:
            "Keputusan menghentikan atau menurunkan dosis sebaiknya dibuat bersama dokter. Mereka akan membantu menyusun rencana mempertahankan hasil dengan dukungan gaya hidup saat terapi disesuaikan."
        },
        {
          question: "Apakah saya pasti mendapat resep?",
          answer:
            "Tidak. Resep tidak pernah dijamin. Bila Mounjaro dinilai tidak sesuai atau tidak aman untuk Anda, dokter akan menjelaskan pilihan lain dan obat tidak akan diberikan."
        },
        {
          question: "Apakah layanan ini menggantikan dokter keluarga saya?",
          answer:
            "Tidak. Layanan ini melengkapi, bukan menggantikan, dokter umum Anda. Anda tetap perlu melakukan kontrol rutin dan sebaiknya memberi tahu dokter tentang terapi penurunan berat badan apa pun."
        }
      ]
    },
    order: {
      eyebrow: "Siap memulai?",
      title: "Mulai asesmen online yang rahasia",
      subtitle:
        "Beritahu kami beberapa detail dan dokter akan meninjau informasi Anda sebelum menawarkan langkah selanjutnya.",
      form: {
        name: "Nama lengkap",
        email: "Alamat email",
        phone: "Nomor ponsel",
        message: "Ceritakan tujuan Anda",
        messagePlaceholder:
          "Contoh: upaya diet sebelumnya, kondisi medis, dan hasil yang Anda harapkan.",
        consent:
          "Saya setuju dihubungi terkait asesmen medis ini dan memahami bahwa layanan ini bukan untuk keadaan gawat darurat.",
        submit: "Kirim permintaan asesmen",
        success:
          "Terima kasih. Dokter akan meninjau detail Anda dan menghubungi Anda secara aman."
      }
    },
    footer: {
      linksTitle: "Klinik",
      links: [
        { label: "Cara kerja", href: "#how-it-works" },
        { label: "Harga", href: "#pricing" },
        { label: "Tim klinis", href: "#" },
        { label: "Kontak", href: "#order" }
      ],
      medicalDisclaimerTitle: "Disclaimer medis",
      medicalDisclaimerBody:
        "Informasi di situs ini bersifat umum dan tidak menggantikan konsultasi pribadi dengan tenaga kesehatan profesional. Jangan menunda mencari pertolongan medis karena informasi yang Anda baca secara online. Untuk keadaan gawat darurat, hubungi layanan darurat setempat segera.",
      copyright: "© "
    }
  }
};

