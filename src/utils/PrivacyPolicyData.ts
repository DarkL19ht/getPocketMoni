const privacySections = [
  {
    id: 1,
    title: 'Privacy Policy',
    text: `The information eTranzact collects to understand your needs and interests helps us deliver a consistent and personalized experience. 
                For example, eTranzact may use your information to assist you in completing a transaction; prevent and detect fraud or other malicious activity; communicate with you about products and services; provide service and support
                ; update you on new services and benefits; provide personalized promotional offers; select content to be communicated to you.`,
  },
  {
    id: 2,
    title: 'Service Contracts and Duration',
    text: `eTranzact shall supply, or make available on request, a copy of the contract or agreement for the provision of services, and such contracts shall be written in plain and clear language
                . Description of Services eTranzact offers USSD and Bulk SMS Services. This service caters to customer's need for SMS broadcast in areas such as marketing campaigns, promotion activities, and customer notifications.
                eTranzact will not share the personal information you provide to eTranzact with non- eTranzact third parties without your permission, unless to:`,
    list: [
      {
        id: 1,
        desc: 'Respond to duly authorized information requests of police and governmental authorities',
      },
      {
        id: 2,
        desc: 'Comply with any law, regulation, subpoena, or court order',
      },
      {
        id: 3,
        desc: 'Help prevent fraud or to enforce or protect the rights and properties of eTranzact',
      },
      {
        id: 4,
        desc: 'Protect the personal safety of eTranzact employees and third parties on eTranzact property.',
      },
    ],
  },
  {
    id: 3,
    title: 'How do we prevent harm to your personal Data?',
    text: `We build security into our services to protect your information. All eTranzact products are built with strong security features based on industry and regulatory requirements which will continuously protect your information.
                The insights we gain from continuous monitoring of our platforms help us to detect and block security threats from ever reaching you. Some of the measures we have in place include:`,
    list: [
      {
        id: 5,
        desc: 'Use encryption to keep your data private while in transit as required by PCI DSS',
      },
      {
        id: 6,
        desc: 'Safe Browsing by use of secure web protocol, Security Checkup, and 2 Step Verification to help you protect your account',
      },
      {
        id: 7,
        desc: 'Help prevent fraud or to enforce or protect the rights and properties of eTranzact',
      },
      {
        id: 8,
        desc: 'Monitoring and periodic reviews including physical security measures, to prevent unauthorized access to our systems',
      },
    ],
  },
  {
    id: 4,
    title: 'How will we notify you of changes to this policy?',
    text: `If there is any changes to policy, we shall notify you before we make final so that you can have the opportunity to review the revised policy before you choose to continue using our Products.`,
  },
  {
    id: 5,
    title: 'What personal data do we collect?',
    text: `The types of personal data that we may collect and process, based on the specific processing needs, fall into the following categories:`,
    tableData: [
      {
        id: 1,
        type: 'Identity Data',
        desc: 'Full name, date of birth, citizenship, gender, marital status, valid identification number',
      },
      {
        id: 2,
        type: 'Contact Data',
        desc: `We gather details such as your residential address, email address, and phone numbers, along with the information obtained from interactions like face-to-face meetings, phone conversations, emails, letters, and SMS. Additionally, for features like third party airtime purchases and wallet-to-wallet transfers, your contact list is used as destination account.
                NOTE: Phone Number is used as wallet ID`,
      },
      {
        id: 3,
        type: 'Financial Data',
        desc: 'Bank account information, Bank Verification Number (BVN), debit card information and account number.',
      },
      {
        id: 4,
        type: 'Technical Data',
        desc: 'Time zone setting and location, phone imei, phone os version details',
      },
      {
        id: 5,
        type: 'Transaction Data',
        desc: 'Transactional Information with respect to the products and services which you purchase Location data of of some products that require localization',
      },
      {
        id: 6,
        type: 'Usage Data',
        desc: 'Information about how you use our app, products and services',
      },
    ],
  },
  {
    id: 6,
    title: 'How we use your data and why?',
    text: `The personal data collected and processed is necessary for the purpose of collection, and we shall not collect or process more data than is reasonably required for a particular processing activity. We collect personal data to;`,
    list: [
      {
        id: 9,
        desc: 'Enable us to carry out transactions and provide the services requested by users',
      },
      {
        id: 10,
        desc: 'Enable us facilitate ease of transactions and services',
      },
      {
        id: 11,
        desc: 'Allow us to understand how services are being used by you',
      },
      {
        id: 12,
        desc: 'Improve our services and communicate new services and offers to you.',
      },
    ],
  },
  {
    id: 7,
    title: 'Retention of Records',
    text: `We will store your personal information as long as you are a customer of eTranzact, also only as long as it's needed for the intended purposes
                . This implies that we will keep your data only if you remain a customer of eTranzact and only for the duration required to deliver the services to you or to fulfill legal obligations.`,
  },
  {
    id: 8,
    title: 'Disclosure to Third-Parties',
    text: `Except in cases where eTranzact is legally obligated to reveal an individual's personal data due to requests from government authorities or law courts related to national security or law enforcement matters
                , eTranzact will not share the personal information of its data subjects with third parties without obtaining prior consent.`,
  },
  {
    id: 9,
    title: 'Data Protection Rights',
    list2: [
      {
        id: 13,
        desc: `eTranzact clients or partners have data protection rights and are entitled to the following`,
      },
      {
        id: 14,
        desc: `eTranzact clients or partners are entitled to request copies of their personal data. Charges for this service may apply if it will require significant resources to achieve.`,
      },
      {
        id: 15,
        desc: `eTranzact clients or partners have the right to request that we delete their personal data, within specific terms such terms are not limited to regulatory requirements, law enforcement agencies, Legal entities or where such action may result in system or services failure.`,
      },
      {
        id: 16,
        desc: `eTranzact clients or partners have the right to request that we update any information in our possession that they believe and prove to have been captured incorrectly and update such information should be updated as appropriate.`,
      },
      {
        id: 17,
        desc: `eTranzact clients or partners are at liberty to request that we limit the processing of their personal data, within specific terms such terms are not limited to regulatory requirements, law enforcement agencies, Legal entities or where such action may result in system or services failure.`,
      },
      {
        id: 18,
        desc: `eTranzact clients or partners are at will to object to eTranzact reusing their personal data, within specific terms such terms are not limited to regulatory requirements, law enforcement agencies, Legal entities or where such action may result in system or services failure`,
      },
      {
        id: 19,
        desc: `Should you have any questions about our GDPR/NDPR compliance program, please contact our Data Protection Office via:`,
      },
    ],
    list: [
      {
        id: 20,
        desc: 'dpo@etranzact.com',
      },
      {
        id: 21,
        desc: 'OR visit our head office: \n 27/29 Adeyomo Alakija, Victoria Island',
      },
    ],
  },
];

export default privacySections;
