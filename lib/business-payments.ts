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
      "Ja. Kunden kan betala till ett svenskt bankgirobaserat betalningsflöde och ni kan få utbetalning även om företaget använder ett utländskt bankkonto, förutsatt att ansökan och onboarding godkänns.",
  },
  {
    question: "Behöver mitt företag ha ett svenskt bankkonto?",
    answer:
      "Inte alltid. Många kontaktar oss just för att de saknar svenskt företagskonto eller bankgiro. Vi går igenom ert behov och ser vilket flöde som kan passa.",
  },
  {
    question: "Kan vi fakturera svenska kunder även om vi har utländsk bank?",
    answer:
      "Ja, det kan vara möjligt. Kunden betalar till ett svenskt betalningsflöde och utbetalning sker enligt överenskommen lösning efter godkänd onboarding.",
  },
  {
    question: "Får mitt företag ett eget bankgiro?",
    answer:
      "Det beror på upplägg, godkännande och vilken lösning som passar företaget. Vi lovar inte eget bankgiro innan ansökan är granskad.",
  },
  {
    question: "Kan jag ansöka om banken har sagt nej?",
    answer:
      "Ja. Du kan ansöka även om företaget tidigare haft svårt att få företagskonto, bankgiro eller betalningslösning. Varje ärende bedöms individuellt.",
  },
  {
    question: "Är Div3rsa en bank?",
    answer:
      "Nej. Div3rsa är inte en bank. Vi tillhandahåller teknik, portal, onboarding och kundflöde. Betalnings- och finansmoment hanteras där det krävs genom relevant betalnings- eller finansaktör.",
  },
  {
    question: "Garanteras bankgiro?",
    answer:
      "Nej. Tjänsten kräver godkänd ansökan och onboarding. Vi är tydliga med vad som är möjligt först efter att vi gått igenom ert ärende.",
  },
  {
    question: "Gör Div3rsa KYC/AML i webbansökan?",
    answer:
      "Nej. Webbansökan samlar bara grunduppgifter och behov. KYC/AML och eventuell dokumentinsamling hanteras senare av relevant betalnings- eller finansaktör när det krävs.",
  },
];

export const businessPaymentIncluded = [
  "Bankgirobaserade betalningsflöden",
  "Fakturering och kundinbetalningar",
  "Ansökan och onboarding via Div3rsa",
  "Status och uppföljning i portal",
  "Intern hantering och support",
  "Möjlighet till API/integration längre fram",
];
