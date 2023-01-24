import {
  bankingAndCoverageIcon,
  costumerPaymentsIcon,
  personalFinancesIcon,
} from '../assets';

export const links = [
  { id: 1, name: 'about', path: '/about' },
  { id: 2, name: 'pricing', path: '/pricing' },
  { id: 3, name: 'contact', path: '/contact' },
];

export const features = [
  {
    id: 1,
    title: 'personal finances',
    icon: personalFinancesIcon,
    content:
      'Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account.',
  },
  {
    id: 2,
    title: 'banking & coverage',
    icon: bankingAndCoverageIcon,
    content:
      'With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.',
  },
  {
    id: 3,
    title: 'customer payments',
    icon: costumerPaymentsIcon,
    content:
      'It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.',
  },
];

export const plans = [
  {
    id: 1,
    plan: 'free',
    price: '0.00',
    description:
      'Build and test using our core set of products with up to 100 API requests ',
    features: [
      {
        id: 2,
        feature: 'transactions',
        included: true,
      },
      {
        id: 3,
        feature: 'auth',
        included: true,
      },
      {
        id: 4,
        feature: 'identity',
        included: true,
      },
      {
        id: 5,
        feature: 'investments',
        included: false,
      },
      {
        id: 6,
        feature: 'assets',
        included: false,
      },
      {
        id: 7,
        feature: 'liabilities',
        included: false,
      },
      {
        id: 8,
        feature: 'income',
        included: false,
      },
    ],
  },
  {
    id: 2,
    plan: ' basic',
    price: '249.00',
    description:
      'Build and test using our core set of products with up to 100 API requests ',
    features: [
      {
        id: 1,
        feature: 'transactions',
        included: true,
      },
      {
        id:2 ,
        feature: 'auth',
        included: true,
      },
      {
        id: 3,
        feature: 'identity',
        included: true,
      },
      {
        id:4 ,
        feature: 'investments',
        included: true,
      },
      {
        id:5 ,
        feature: 'assets',
        included: true,
      },
      {
        id: 6,
        feature: 'liabilities',
        included: false,
      },
      {
        id: 7,
        feature: 'income',
        included: false,
      },
    ],
  },
  {
    id: 3,
    plan: 'premium',
    price: '499.00',
    description:
      'Get tailored solutions, volume pricing, and dedicated support for your team ',
    features: [
      {
        id: 1,
        feature: 'transactions',
        included: true,
      },
      {
        id:3 ,
        feature: 'auth',
        included: true,
      },
      {
        id:2 ,
        feature: 'identity',
        included: true,
      },
      {
        id:4 ,
        feature: 'investments',
        included: true,
      },
      {
        id: 5,
        feature: 'assets',
        included: true,
      },
      {
        id: 6,
        feature: 'liabilities',
        included: true,
      },
      {
        id: 7,
        feature: 'income',
        included: true,
      },
    ],
  },
];
