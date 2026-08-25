export const applicationStatuses = [
  "new",
  "under_review",
  "needs_more_info",
  "qualified",
  "sent_to_partner",
  "partner_onboarding",
  "approved",
  "rejected",
  "customer_created",
] as const;

export const businessPaymentsFaqs = [
  {
    question: "Kan mina kunder betala till ett svenskt bankgiro?",
    answer:
      "Ja. Kunden kan betala till ett svenskt bankgirobaserat betalningsflöde och ni kan få utbetalning även om företaget använder ett utländskt bankkonto, förutsatt att ansökan och onboarding godkänns av relevant betalnings- eller finansaktör.",
  },
  {
    question: "Behöver mitt företag ha ett svenskt bankkonto?",
    answer:
      "Inte alltid. Många kontaktar oss just för att de saknar svenskt företagskonto eller bankgiro. Vi går igenom ert behov och ser vilket flöde som kan passa.",
  },
  {
    question: "Kan vi fakturera svenska kunder även om vi har utländsk bank?",
    answer:
      "Ja, det kan vara möjligt. Kunden betalar till ett svenskt betalningsflöde och utbetalning sker enligt den lösning och de villkor som godkänns i relevant onboarding.",
  },
  {
    question: "Får mitt företag ett eget bankgiro?",
    answer:
      "Det beror på upplägg, godkännande och vilken lösning som passar företaget. Vi lovar inte eget bankgiro innan ansökan och relevant onboarding har granskats.",
  },
  {
    question: "Kan jag ansöka om banken har sagt nej?",
    answer:
      "Ja. Du kan ansöka även om företaget tidigare haft svårt att få företagskonto, bankgiro eller betalningslösning. Varje ärende bedöms individuellt och ett tidigare avslag innebär inte någon garanti om godkännande.",
  },
  {
    question: "Är Attmos en bank?",
    answer:
      "Nej. Attmos AB är inte en bank. Vi tillhandahåller teknik, portal, ansökningsflöde och administrativ onboarding. Betalnings- och finansmoment hanteras, där det krävs, av relevant betalnings- eller finansaktör enligt dess egna villkor och prövning.",
  },
  {
    question: "Garanteras bankgiro?",
    answer:
      "Nej. Tjänsten kräver godkänd ansökan och relevant onboarding. Vi är tydliga med vad som är möjligt först efter att ärendet har granskats.",
  },
  {
    question: "Gör Attmos KYC/AML i webbansökan?",
    answer:
      "Nej. Webbansökan samlar grunduppgifter och behov. KYC/AML och eventuell dokumentinsamling hanteras senare av relevant betalnings- eller finansaktör när det krävs.",
  },
];

export const businessPaymentIncluded = [
  "Bankgirobaserade betalningsflöden",
  "Fakturering och kundinbetalningar",
  "Ansökan och onboarding via Attmos",
  "Status och uppföljning i portal",
  "Intern hantering och support",
  "Möjlighet till API/integration längre fram",
];
