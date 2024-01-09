// project imports
import React, { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';
// ==============================|| SAMPLE PAGE ||============================== //

const data = [
  {
    BankTransactionID: '9575e6f9-fead-4456-bfba-aefed46937f2',
    BankAccount: {
      AccountID: 'ceef66a5-a545-413b-9312-78a53caadbc4',
      Code: '090',
      Name: 'Checking Account'
    },
    Type: 'SPEND',
    Reference: '',
    IsReconciled: true,
    HasAttachments: false,
    Contact: {
      ContactID: 'c7127731-d324-4e26-a03e-854ce9a3a269',
      Name: 'Berry Brew',
      Addresses: [],
      Phones: [],
      ContactGroups: [],
      ContactPersons: [],
      HasValidationErrors: false
    },
    DateString: '2023-10-07T00:00:00',
    Date: '/Date(1696636800000+0000)/',
    Status: 'AUTHORISED',
    LineAmountTypes: 'Inclusive',
    LineItems: [],
    SubTotal: 15.6,
    TotalTax: 0.0,
    Total: 15.6,
    UpdatedDateUTC: '/Date(1317858901777+0000)/',
    CurrencyCode: 'USD'
  },
  {
    BankTransactionID: '6e3f44aa-4122-451e-9767-2882f396489f',
    BankAccount: {
      AccountID: 'ceef66a5-a545-413b-9312-78a53caadbc4',
      Code: '090',
      Name: 'Checking Account'
    },
    Type: 'SPEND',
    Reference: '',
    IsReconciled: true,
    HasAttachments: false,
    Contact: {
      ContactID: '8203e078-7385-4858-b2c8-8aaf49945ea9',
      Name: 'Espresso 31',
      Addresses: [],
      Phones: [],
      ContactGroups: [],
      ContactPersons: [],
      HasValidationErrors: false
    },
    DateString: '2023-10-14T00:00:00',
    Date: '/Date(1697241600000+0000)/',
    Status: 'AUTHORISED',
    LineAmountTypes: 'Inclusive',
    LineItems: [],
    SubTotal: 16.0,
    TotalTax: 0.0,
    Total: 16.0,
    UpdatedDateUTC: '/Date(1317858914537+0000)/',
    CurrencyCode: 'USD'
  },
  {
    BankTransactionID: 'cd94b413-0250-49ab-8dfc-185827a5662d',
    BankAccount: {
      AccountID: 'ceef66a5-a545-413b-9312-78a53caadbc4',
      Code: '090',
      Name: 'Checking Account'
    },
    Type: 'SPEND',
    IsReconciled: true,
    HasAttachments: false,
    Contact: {
      ContactID: 'b47b7750-4d86-447b-92ad-6fbefcf888b6',
      Name: 'Ridgeway Bank',
      Addresses: [],
      Phones: [],
      ContactGroups: [],
      ContactPersons: [],
      HasValidationErrors: false
    },
    DateString: '2023-09-21T00:00:00',
    Date: '/Date(1695254400000+0000)/',
    Status: 'AUTHORISED',
    LineAmountTypes: 'Inclusive',
    LineItems: [],
    SubTotal: 15.0,
    TotalTax: 0.0,
    Total: 15.0,
    UpdatedDateUTC: '/Date(1317858982353+0000)/',
    CurrencyCode: 'USD'
  },
  {
    BankTransactionID: '04b2e43e-8de7-4916-af8b-de59045471bd',
    BankAccount: {
      AccountID: 'ceef66a5-a545-413b-9312-78a53caadbc4',
      Code: '090',
      Name: 'Checking Account'
    },
    Type: 'SPEND',
    IsReconciled: true,
    HasAttachments: false,
    Contact: {
      ContactID: 'b47b7750-4d86-447b-92ad-6fbefcf888b6',
      Name: 'Ridgeway Bank',
      Addresses: [],
      Phones: [],
      ContactGroups: [],
      ContactPersons: [],
      HasValidationErrors: false
    },
    DateString: '2023-10-22T00:00:00',
    Date: '/Date(1697932800000+0000)/',
    Status: 'AUTHORISED',
    LineAmountTypes: 'Inclusive',
    LineItems: [],
    SubTotal: 15.0,
    TotalTax: 0.0,
    Total: 15.0,
    UpdatedDateUTC: '/Date(1317861777290+0000)/',
    CurrencyCode: 'USD'
  },
  {
    BankTransactionID: '5e1657d3-edff-4a9b-bc30-8592c56cb39d',
    BankAccount: {
      AccountID: 'ceef66a5-a545-413b-9312-78a53caadbc4',
      Code: '090',
      Name: 'Checking Account'
    },
    Type: 'SPEND',
    Reference: '',
    IsReconciled: true,
    HasAttachments: false,
    Contact: {
      ContactID: '54999de9-4690-4195-99bc-646970b23fb1',
      Name: 'Brunswick Petals',
      Addresses: [],
      Phones: [],
      ContactGroups: [],
      ContactPersons: [],
      HasValidationErrors: false
    },
    DateString: '2023-10-15T00:00:00',
    Date: '/Date(1697328000000+0000)/',
    Status: 'AUTHORISED',
    LineAmountTypes: 'Inclusive',
    LineItems: [],
    SubTotal: 50.0,
    TotalTax: 0.0,
    Total: 50.0,
    UpdatedDateUTC: '/Date(1318022752950+0000)/',
    CurrencyCode: 'USD'
  },
  {
    BankTransactionID: 'c4f6c03a-0092-4b8f-ba9e-11e07f0fba43',
    BankAccount: {
      AccountID: 'ceef66a5-a545-413b-9312-78a53caadbc4',
      Code: '090',
      Name: 'Checking Account'
    },
    Type: 'SPEND',
    Reference: '',
    IsReconciled: true,
    HasAttachments: false,
    Contact: {
      ContactID: '6a31faab-588e-46a1-be9a-bd6d1dd468df',
      Name: 'Woolworths Market',
      Addresses: [],
      Phones: [],
      ContactGroups: [],
      ContactPersons: [],
      HasValidationErrors: false
    },
    DateString: '2023-10-06T00:00:00',
    Date: '/Date(1696550400000+0000)/',
    Status: 'AUTHORISED',
    LineAmountTypes: 'Inclusive',
    LineItems: [],
    SubTotal: 65.2,
    TotalTax: 0.0,
    Total: 65.2,
    UpdatedDateUTC: '/Date(1318022767820+0000)/',
    CurrencyCode: 'USD'
  },
  {
    BankTransactionID: '920cbd30-5bdf-48b8-9fc0-2f2903c4ae1c',
    BankAccount: {
      AccountID: 'ceef66a5-a545-413b-9312-78a53caadbc4',
      Code: '090',
      Name: 'Checking Account'
    },
    Type: 'SPEND',
    Reference: 'CHK409',
    IsReconciled: true,
    HasAttachments: false,
    Contact: {
      ContactID: 'ce108527-e45b-4f3c-b92d-7006397206d6',
      Name: 'Melrose Parking',
      Addresses: [],
      Phones: [],
      ContactGroups: [],
      ContactPersons: [],
      HasValidationErrors: false
    },
    DateString: '2023-10-14T00:00:00',
    Date: '/Date(1697241600000+0000)/',
    Status: 'AUTHORISED',
    LineAmountTypes: 'Inclusive',
    LineItems: [],
    SubTotal: 148.5,
    TotalTax: 0.0,
    Total: 148.5,
    UpdatedDateUTC: '/Date(1318022854027+0000)/',
    CurrencyCode: 'USD'
  },
  {
    BankTransactionID: '91007479-df0a-41f5-91b8-fb729acac99a',
    BankAccount: {
      AccountID: 'ceef66a5-a545-413b-9312-78a53caadbc4',
      Code: '090',
      Name: 'Checking Account'
    },
    Type: 'SPEND',
    Reference: '',
    IsReconciled: true,
    HasAttachments: false,
    Contact: {
      ContactID: 'c313aeb9-6fd1-4ead-9e0a-4b7e8bff0d1a',
      Name: 'Office Supplies Company',
      Addresses: [],
      Phones: [],
      ContactGroups: [],
      ContactPersons: [],
      HasValidationErrors: false
    },
    DateString: '2023-09-22T00:00:00',
    Date: '/Date(1695340800000+0000)/',
    Status: 'AUTHORISED',
    LineAmountTypes: 'Inclusive',
    LineItems: [],
    SubTotal: 21.71,
    TotalTax: 0.0,
    Total: 21.71,
    UpdatedDateUTC: '/Date(1318022994930+0000)/',
    CurrencyCode: 'USD'
  },
  {
    BankTransactionID: '2355f1d6-91f3-4a4b-b7e2-d13b1f58c531',
    BankAccount: {
      AccountID: 'ceef66a5-a545-413b-9312-78a53caadbc4',
      Code: '090',
      Name: 'Checking Account'
    },
    Type: 'RECEIVE',
    Reference: 'Sub 098801',
    IsReconciled: false,
    HasAttachments: false,
    Contact: {
      ContactID: '41d5f1eb-a007-4ef8-b68a-b6856ab1791e',
      Name: 'Wilson Periodicals',
      Addresses: [],
      Phones: [],
      ContactGroups: [],
      ContactPersons: [],
      HasValidationErrors: false
    },
    DateString: '2023-12-23T00:00:00',
    Date: '/Date(1703289600000+0000)/',
    Status: 'AUTHORISED',
    LineAmountTypes: 'Inclusive',
    LineItems: [],
    SubTotal: 35.0,
    TotalTax: 0.0,
    Total: 35.0,
    UpdatedDateUTC: '/Date(1318023218673+0000)/',
    CurrencyCode: 'USD'
  },
  {
    BankTransactionID: '225d2975-c769-4f11-92cf-c3ca901f3aa4',
    BankAccount: {
      AccountID: 'ceef66a5-a545-413b-9312-78a53caadbc4',
      Code: '090',
      Name: 'Checking Account'
    },
    Type: 'SPEND',
    Reference: 'Sub 098801',
    IsReconciled: false,
    HasAttachments: false,
    Contact: {
      ContactID: '41d5f1eb-a007-4ef8-b68a-b6856ab1791e',
      Name: 'Wilson Periodicals',
      Addresses: [],
      Phones: [],
      ContactGroups: [],
      ContactPersons: [],
      HasValidationErrors: false
    },
    DateString: '2023-12-19T00:00:00',
    Date: '/Date(1702944000000+0000)/',
    Status: 'AUTHORISED',
    LineAmountTypes: 'Inclusive',
    LineItems: [],
    SubTotal: 49.9,
    TotalTax: 0.0,
    Total: 49.9,
    UpdatedDateUTC: '/Date(1318023229420+0000)/',
    CurrencyCode: 'USD'
  },
  {
    BankTransactionID: '0447091c-42b4-4d5e-bd1d-cf8ff6713db4',
    BankAccount: {
      AccountID: 'ceef66a5-a545-413b-9312-78a53caadbc4',
      Code: '090',
      Name: 'Checking Account'
    },
    Type: 'SPEND',
    Reference: '',
    IsReconciled: true,
    HasAttachments: false,
    Contact: {
      ContactID: '6a31faab-588e-46a1-be9a-bd6d1dd468df',
      Name: 'Woolworths Market',
      Addresses: [],
      Phones: [],
      ContactGroups: [],
      ContactPersons: [],
      HasValidationErrors: false
    },
    DateString: '2023-11-22T00:00:00',
    Date: '/Date(1700611200000+0000)/',
    Status: 'AUTHORISED',
    LineAmountTypes: 'Inclusive',
    LineItems: [],
    SubTotal: 34.1,
    TotalTax: 0.0,
    Total: 34.1,
    UpdatedDateUTC: '/Date(1337386552583+0000)/',
    CurrencyCode: 'USD'
  },
  {
    BankTransactionID: '870e12c1-5afd-4095-a6a5-b55aa4dddc37',
    BankAccount: {
      AccountID: 'ceef66a5-a545-413b-9312-78a53caadbc4',
      Code: '090',
      Name: 'Checking Account'
    },
    Type: 'SPEND',
    Reference: 'CHK411',
    IsReconciled: true,
    HasAttachments: false,
    Contact: {
      ContactID: 'ce108527-e45b-4f3c-b92d-7006397206d6',
      Name: 'Melrose Parking',
      Addresses: [],
      Phones: [],
      ContactGroups: [],
      ContactPersons: [],
      HasValidationErrors: false
    },
    DateString: '2023-11-20T00:00:00',
    Date: '/Date(1700438400000+0000)/',
    Status: 'AUTHORISED',
    LineAmountTypes: 'Inclusive',
    LineItems: [],
    SubTotal: 148.5,
    TotalTax: 0.0,
    Total: 148.5,
    UpdatedDateUTC: '/Date(1337386595437+0000)/',
    CurrencyCode: 'USD'
  },
  {
    BankTransactionID: '084385ce-dc55-464a-9cb4-a4e224a7642b',
    BankAccount: {
      AccountID: 'ceef66a5-a545-413b-9312-78a53caadbc4',
      Code: '090',
      Name: 'Checking Account'
    },
    Type: 'SPEND',
    Reference: '',
    IsReconciled: true,
    HasAttachments: false,
    Contact: {
      ContactID: 'c313aeb9-6fd1-4ead-9e0a-4b7e8bff0d1a',
      Name: 'Office Supplies Company',
      Addresses: [],
      Phones: [],
      ContactGroups: [],
      ContactPersons: [],
      HasValidationErrors: false
    },
    DateString: '2023-11-23T00:00:00',
    Date: '/Date(1700697600000+0000)/',
    Status: 'AUTHORISED',
    LineAmountTypes: 'Inclusive',
    LineItems: [],
    SubTotal: 49.2,
    TotalTax: 0.0,
    Total: 49.2,
    UpdatedDateUTC: '/Date(1337386601147+0000)/',
    CurrencyCode: 'USD'
  },
  {
    BankTransactionID: 'aea04f93-fbae-4b3a-b96e-ace25c696d58',
    BankAccount: {
      AccountID: 'ceef66a5-a545-413b-9312-78a53caadbc4',
      Code: '090',
      Name: 'Checking Account'
    },
    Type: 'SPEND',
    IsReconciled: true,
    HasAttachments: false,
    Contact: {
      ContactID: 'c7127731-d324-4e26-a03e-854ce9a3a269',
      Name: 'Berry Brew',
      Addresses: [],
      Phones: [],
      ContactGroups: [],
      ContactPersons: [],
      HasValidationErrors: false
    },
    DateString: '2023-11-24T00:00:00',
    Date: '/Date(1700784000000+0000)/',
    Status: 'AUTHORISED',
    LineAmountTypes: 'Inclusive',
    LineItems: [],
    SubTotal: 22.0,
    TotalTax: 0.0,
    Total: 22.0,
    UpdatedDateUTC: '/Date(1337386609930+0000)/',
    CurrencyCode: 'USD'
  },
  {
    BankTransactionID: 'ac8718fd-2834-4396-bf34-1f53b584eabf',
    BankAccount: {
      AccountID: 'ceef66a5-a545-413b-9312-78a53caadbc4',
      Code: '090',
      Name: 'Checking Account'
    },
    Type: 'SPEND',
    Reference: 'CHK412',
    IsReconciled: true,
    HasAttachments: false,
    Contact: {
      ContactID: '4f8dbc9b-889f-44d7-b263-d99f14ccf6f7',
      Name: '24 Locks',
      Addresses: [],
      Phones: [],
      ContactGroups: [],
      ContactPersons: [],
      HasValidationErrors: false
    },
    DateString: '2023-11-26T00:00:00',
    Date: '/Date(1700956800000+0000)/',
    Status: 'AUTHORISED',
    LineAmountTypes: 'Inclusive',
    LineItems: [],
    SubTotal: 69.5,
    TotalTax: 0.0,
    Total: 69.5,
    UpdatedDateUTC: '/Date(1337386615390+0000)/',
    CurrencyCode: 'USD'
  },
  {
    BankTransactionID: '1a0b9a32-004f-4cd2-b153-1661f0b62427',
    BankAccount: {
      AccountID: 'ceef66a5-a545-413b-9312-78a53caadbc4',
      Code: '090',
      Name: 'Checking Account'
    },
    Type: 'SPEND',
    Reference: '',
    IsReconciled: false,
    HasAttachments: false,
    Contact: {
      ContactID: 'ef704256-b000-4f82-95d8-ff8bf642675d',
      Name: 'Willow Properties',
      Addresses: [],
      Phones: [],
      ContactGroups: [],
      ContactPersons: [],
      HasValidationErrors: false
    },
    DateString: '2023-12-17T00:00:00',
    Date: '/Date(1702771200000+0000)/',
    Status: 'DELETED',
    LineAmountTypes: 'Inclusive',
    LineItems: [],
    SubTotal: 1181.0,
    TotalTax: 0.0,
    Total: 1181.0,
    UpdatedDateUTC: '/Date(1337387309330+0000)/',
    CurrencyCode: 'USD'
  },
  {
    BankTransactionID: 'be83314f-e4f4-45f7-91f7-ee37620d0e45',
    BankAccount: {
      AccountID: 'ceef66a5-a545-413b-9312-78a53caadbc4',
      Code: '090',
      Name: 'Checking Account'
    },
    Type: 'SPEND',
    Reference: '',
    IsReconciled: false,
    HasAttachments: false,
    Contact: {
      ContactID: 'c313aeb9-6fd1-4ead-9e0a-4b7e8bff0d1a',
      Name: 'Office Supplies Company',
      Addresses: [],
      Phones: [],
      ContactGroups: [],
      ContactPersons: [],
      HasValidationErrors: false
    },
    DateString: '2019-09-19T00:00:00',
    Date: '/Date(1568851200000+0000)/',
    Status: 'AUTHORISED',
    LineAmountTypes: 'Inclusive',
    LineItems: [],
    SubTotal: 20.0,
    TotalTax: 0.0,
    Total: 20.0,
    UpdatedDateUTC: '/Date(1703874024750+0000)/',
    CurrencyCode: 'USD'
  },
  {
    BankTransactionID: 'e1b861c0-97ab-4c3a-87ce-3ca89db66312',
    BankAccount: {
      AccountID: 'ceef66a5-a545-413b-9312-78a53caadbc4',
      Code: '090',
      Name: 'Checking Account'
    },
    Type: 'SPEND',
    Reference: '',
    IsReconciled: false,
    HasAttachments: false,
    Contact: {
      ContactID: 'c313aeb9-6fd1-4ead-9e0a-4b7e8bff0d1a',
      Name: 'Office Supplies Company',
      Addresses: [],
      Phones: [],
      ContactGroups: [],
      ContactPersons: [],
      HasValidationErrors: false
    },
    DateString: '2019-09-19T00:00:00',
    Date: '/Date(1568851200000+0000)/',
    Status: 'AUTHORISED',
    LineAmountTypes: 'Inclusive',
    LineItems: [],
    SubTotal: 20.0,
    TotalTax: 0.0,
    Total: 20.0,
    UpdatedDateUTC: '/Date(1703874026517+0000)/',
    CurrencyCode: 'USD'
  },
  {
    BankTransactionID: '5e888713-511c-482e-b4ee-92120fb093ee',
    BankAccount: {
      AccountID: 'ceef66a5-a545-413b-9312-78a53caadbc4',
      Code: '090',
      Name: 'Checking Account'
    },
    Type: 'SPEND',
    Reference: 'Changed',
    IsReconciled: false,
    HasAttachments: true,
    Contact: {
      ContactID: 'c313aeb9-6fd1-4ead-9e0a-4b7e8bff0d1a',
      Name: 'Office Supplies Company',
      Addresses: [],
      Phones: [],
      ContactGroups: [],
      ContactPersons: [],
      HasValidationErrors: false
    },
    DateString: '2019-09-19T00:00:00',
    Date: '/Date(1568851200000+0000)/',
    Status: 'DELETED',
    LineAmountTypes: 'Inclusive',
    LineItems: [],
    SubTotal: 20.0,
    TotalTax: 0.0,
    Total: 20.0,
    UpdatedDateUTC: '/Date(1703874032953+0000)/',
    CurrencyCode: 'USD'
  },
  {
    BankTransactionID: 'eed7e786-92ab-4e20-91b0-f99485391e3c',
    BankAccount: {
      AccountID: 'ceef66a5-a545-413b-9312-78a53caadbc4',
      Code: '090',
      Name: 'Checking Account'
    },
    Type: 'SPEND',
    Reference: '',
    IsReconciled: false,
    HasAttachments: false,
    Contact: {
      ContactID: 'c313aeb9-6fd1-4ead-9e0a-4b7e8bff0d1a',
      Name: 'Office Supplies Company',
      Addresses: [],
      Phones: [],
      ContactGroups: [],
      ContactPersons: [],
      HasValidationErrors: false
    },
    DateString: '2019-09-19T00:00:00',
    Date: '/Date(1568851200000+0000)/',
    Status: 'AUTHORISED',
    LineAmountTypes: 'Inclusive',
    LineItems: [],
    SubTotal: 20.0,
    TotalTax: 0.0,
    Total: 20.0,
    UpdatedDateUTC: '/Date(1703874081293+0000)/',
    CurrencyCode: 'USD'
  },
  {
    BankTransactionID: 'eee0bf80-bb50-4b38-9b19-0030e158666f',
    BankAccount: {
      AccountID: 'ceef66a5-a545-413b-9312-78a53caadbc4',
      Code: '090',
      Name: 'Checking Account'
    },
    Type: 'SPEND',
    Reference: '',
    IsReconciled: false,
    HasAttachments: false,
    Contact: {
      ContactID: 'c313aeb9-6fd1-4ead-9e0a-4b7e8bff0d1a',
      Name: 'Office Supplies Company',
      Addresses: [],
      Phones: [],
      ContactGroups: [],
      ContactPersons: [],
      HasValidationErrors: false
    },
    DateString: '2019-09-19T00:00:00',
    Date: '/Date(1568851200000+0000)/',
    Status: 'AUTHORISED',
    LineAmountTypes: 'Inclusive',
    LineItems: [],
    SubTotal: 20.0,
    TotalTax: 0.0,
    Total: 20.0,
    UpdatedDateUTC: '/Date(1703874082847+0000)/',
    CurrencyCode: 'USD'
  },
  {
    BankTransactionID: '4822be01-5767-4f9a-bb11-75e24fed8c09',
    BankAccount: {
      AccountID: 'ceef66a5-a545-413b-9312-78a53caadbc4',
      Code: '090',
      Name: 'Checking Account'
    },
    Type: 'SPEND',
    Reference: 'Changed',
    IsReconciled: false,
    HasAttachments: true,
    Contact: {
      ContactID: 'c313aeb9-6fd1-4ead-9e0a-4b7e8bff0d1a',
      Name: 'Office Supplies Company',
      Addresses: [],
      Phones: [],
      ContactGroups: [],
      ContactPersons: [],
      HasValidationErrors: false
    },
    DateString: '2019-09-19T00:00:00',
    Date: '/Date(1568851200000+0000)/',
    Status: 'DELETED',
    LineAmountTypes: 'Inclusive',
    LineItems: [],
    SubTotal: 20.0,
    TotalTax: 0.0,
    Total: 20.0,
    UpdatedDateUTC: '/Date(1703874088147+0000)/',
    CurrencyCode: 'USD'
  },
  {
    BankTransactionID: 'aa48b732-4127-4d67-bd0b-79635f9a85a9',
    BankAccount: {
      AccountID: 'ceef66a5-a545-413b-9312-78a53caadbc4',
      Code: '090',
      Name: 'Checking Account'
    },
    Type: 'SPEND',
    Reference: '',
    IsReconciled: false,
    HasAttachments: false,
    Contact: {
      ContactID: 'c313aeb9-6fd1-4ead-9e0a-4b7e8bff0d1a',
      Name: 'Office Supplies Company',
      Addresses: [],
      Phones: [],
      ContactGroups: [],
      ContactPersons: [],
      HasValidationErrors: false
    },
    DateString: '2019-09-19T00:00:00',
    Date: '/Date(1568851200000+0000)/',
    Status: 'AUTHORISED',
    LineAmountTypes: 'Inclusive',
    LineItems: [],
    SubTotal: 20.0,
    TotalTax: 0.0,
    Total: 20.0,
    UpdatedDateUTC: '/Date(1703877703273+0000)/',
    CurrencyCode: 'USD'
  },
  {
    BankTransactionID: '5739b2b0-7a26-488b-94ed-0576b3d9ad6d',
    BankAccount: {
      AccountID: 'ceef66a5-a545-413b-9312-78a53caadbc4',
      Code: '090',
      Name: 'Checking Account'
    },
    Type: 'SPEND',
    Reference: '',
    IsReconciled: false,
    HasAttachments: false,
    Contact: {
      ContactID: 'c313aeb9-6fd1-4ead-9e0a-4b7e8bff0d1a',
      Name: 'Office Supplies Company',
      Addresses: [],
      Phones: [],
      ContactGroups: [],
      ContactPersons: [],
      HasValidationErrors: false
    },
    DateString: '2019-09-19T00:00:00',
    Date: '/Date(1568851200000+0000)/',
    Status: 'AUTHORISED',
    LineAmountTypes: 'Inclusive',
    LineItems: [],
    SubTotal: 20.0,
    TotalTax: 0.0,
    Total: 20.0,
    UpdatedDateUTC: '/Date(1703877704970+0000)/',
    CurrencyCode: 'USD'
  },
  {
    BankTransactionID: '8919be3c-4a70-4400-8194-fccf6a5e232e',
    BankAccount: {
      AccountID: 'ceef66a5-a545-413b-9312-78a53caadbc4',
      Code: '090',
      Name: 'Checking Account'
    },
    Type: 'SPEND',
    Reference: 'Changed',
    IsReconciled: false,
    HasAttachments: true,
    Contact: {
      ContactID: 'c313aeb9-6fd1-4ead-9e0a-4b7e8bff0d1a',
      Name: 'Office Supplies Company',
      Addresses: [],
      Phones: [],
      ContactGroups: [],
      ContactPersons: [],
      HasValidationErrors: false
    },
    DateString: '2019-09-19T00:00:00',
    Date: '/Date(1568851200000+0000)/',
    Status: 'DELETED',
    LineAmountTypes: 'Inclusive',
    LineItems: [],
    SubTotal: 20.0,
    TotalTax: 0.0,
    Total: 20.0,
    UpdatedDateUTC: '/Date(1703877710583+0000)/',
    CurrencyCode: 'USD'
  }
];

function convertMicrosoftJsonDate(inputDate) {
  // Extract the ticks from the input string
  const match = inputDate.match(/\/Date\((\d+)([+-]\d{4})\)\//);

  if (!match) {
    // Invalid input format
    return null;
  }

  // Convert ticks to milliseconds
  const ticks = parseInt(match[1], 10);
  const date = new Date(ticks);

  // Format the date
  const formattedDate = date.toLocaleString();

  return formattedDate;
}

const SamplePage = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <MainCard title="Bank Transactions">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Provider Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>SubTotal</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {(rowsPerPage > 0 ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : data).map((transaction, Id) => (
              <TableRow key={Id}>
                <TableCell>{transaction.Contact.Name}</TableCell>
                <TableCell>{transaction.Type}</TableCell>
                <TableCell>{convertMicrosoftJsonDate(transaction.Date)}</TableCell>
                <TableCell>{transaction.SubTotal}</TableCell>
                <TableCell>{transaction.Total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </MainCard>
  );
};

export default SamplePage;
