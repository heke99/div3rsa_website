export { company, siteMeta } from "./company";
export const locale = "en" as const;
export const navItems = [{label:"Our work",href:"/systems"},{label:"Services",href:"/services"},{label:"Websites",href:"/websites"},{label:"Company",href:"/about"}];
export const services = [
 {title:"Business software & SaaS",text:"Turn a working process into a product: accounts, permissions, workflows, billing and the tools your team needs to run it.",deliverable:"A clear product structure, built around your operations."},
 {title:"Customer & partner portals",text:"Give customers, partners and colleagues a useful place to manage documents, requests, status and day-to-day work.",deliverable:"One connected experience, with the right access for each role."},
 {title:"Integrations & automation",text:"Connect the systems you already use. Move data through APIs and webhooks, automate repeatable tasks and keep a traceable record.",deliverable:"Less copying between systems. More dependable information."},
 {title:"Websites & product design",text:"Explain what your business does, make the next step obvious and connect your public website to the product behind it.",deliverable:"A considered interface, from first visit to everyday use."},
];
export const processSteps = [
 {title:"Understand the work",text:"Map the people, decisions and information involved. Agree on the problem before deciding on features."},
 {title:"Define the product",text:"Set the scope, design the important journeys and establish the data model, roles and integrations."},
 {title:"Build & verify",text:"Develop in reviewable stages. Test the interface, business rules and access controls together."},
 {title:"Launch & improve",text:"Plan the handover, deployment and support. Use real feedback to decide what comes next."},
];
export const websiteStyles = [
 {slug:"hybrid-business",title:"The business website",shortTitle:"Business",badge:"Clear & connected",href:"/websites/hybrid-business",description:"A clear presentation of your business, with the right balance of services, project work and a direct route to an enquiry.",summary:"Confident typography, structured content and purposeful navigation.",bestFor:"Service businesses, consultancies and B2B companies",exampleTitle:"Make the offer easy to understand.",exampleText:"Lead with the problem you solve. Support it with specific work, a clear process and a straightforward way to get in touch.",previewSections:["What you do","Your services","Selected work","How you work","Start a conversation"],fits:["B2B services","Consultancies","Growing companies"],features:["Service pages","Project portfolio","Contact flows","Responsive design"],cta:"Discuss a business website"},
 {slug:"premium-3d",title:"The product-led website",shortTitle:"Product-led",badge:"Distinctive & expressive",href:"/websites/premium-3d",description:"A distinctive launch or product website that makes a complex idea tangible through considered art direction and interaction.",summary:"A memorable visual identity, with motion only where it helps.",bestFor:"Digital products, software companies and product launches",exampleTitle:"Give the product a point of view.",exampleText:"Build the story around the product itself. Use interface details, demonstrations and a visual language that belongs to your business.",previewSections:["Product introduction","The core experience","Key capabilities","Use cases","Request a demonstration"],fits:["SaaS products","Technology companies","Product launches"],features:["Art direction","Product storytelling","Considered motion","Accessible interaction"],cta:"Discuss a product website"},
 {slug:"simple-info",title:"The focused website",shortTitle:"Focused",badge:"Essential & effective",href:"/websites/simple-info",description:"A compact, carefully edited website for businesses that need to explain their offer and make contact simple.",summary:"Fewer pages. The same attention to content, usability and detail.",bestFor:"Independent businesses, specialists and new ventures",exampleTitle:"Say what matters. Nothing more.",exampleText:"A focused introduction, useful information and a visible way to contact you. A sensible foundation that can grow with the business.",previewSections:["Your introduction","What you offer","About the business","Common questions","Contact details"],fits:["Independent businesses","Specialists","New ventures"],features:["Content structure","Essential pages","Contact details","Fast-loading layouts"],cta:"Discuss a focused website"},
];
export const websiteStyleLinks=websiteStyles.map(style=>({label:style.shortTitle,href:style.href}));
export const projectTypes=["Business software","SaaS product","Customer or partner portal","API or integration","Automation","Website or product design","Existing product development","Not sure yet"];
export const budgetRanges=["Not sure yet","Under SEK 50,000","SEK 50,000–150,000","SEK 150,000–500,000","SEK 500,000+"];
export const techItems=["Web applications","APIs & webhooks","Data modelling","Roles & permissions","Payments & subscriptions","Automated workflows","Testing & deployment","Operational dashboards"];
export const solutionPackages=[
 {title:"Define the brief",subtitle:"For a complex need that deserves a clear plan before development begins.",includes:["Process and user mapping","Scope and priorities","Technical approach","Delivery phases"],cta:"Start with discovery"},
 {title:"Build the product",subtitle:"For a business ready to turn an agreed scope into working software.",includes:["Interface and product design","Application development","Integrations and testing","Release and handover"],cta:"Discuss your product",featured:true},
 {title:"Develop what is next",subtitle:"For an existing product that needs new capabilities or a better foundation.",includes:["Product and code review","Prioritised improvements","New workflows and integrations","Ongoing development"],cta:"Discuss an existing system"},
];
export const faqs=[
 {question:"Can you work on an existing product?",answer:"Yes. A review of the existing product and code is the starting point for agreeing a useful next phase."},
 {question:"Do you build websites as well as software?",answer:"Yes. We design company and product websites, including the connections to portals, forms and onboarding."},
 {question:"How does a project start?",answer:"Tell us what the business does, who will use the solution and what needs to improve. We then agree the scope and next steps."},
];
