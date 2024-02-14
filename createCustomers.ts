import { faker } from '@faker-js/faker';
import fs from 'fs';
const numberOfCustomers = 100;

interface Customer {
  CustomerCode: string,
  RequestId: string,
  Language: string,
  ToBusinessPartnersSet: {
    results: [{
      CustomerCode: string,
      AccountGroupCode: string,
      ProspectCode: string,
      Name1: string,
      Name2: string,
      Name3: string,
      Name4: string,
      TelephoneNumber: string,
      MobileNumber: string,
      FaxNumber: string,
      Email: string,
      VATRegistrationNumber: string,
      TaxCode1: string,
      TaxCode2: string,
      TaxCode3: string,
      NaturalPerson: string,
      PreferredLanguageCode: string,
      IsPurchaseOrderRequired: string,
      IndustryKey: string,
    },
      {
        CustomerCode: string,
        AccountGroupCode: string,
        ProspectCode: string,
        Name1: string,
        Name2: string,
        Name3: string,
        Name4: string,
        TelephoneNumber: string,
        MobileNumber: string,
        FaxNumber: string,
        Email: string,
        VATRegistrationNumber: string,
        TaxCode1: string,
        TaxCode2: string,
        TaxCode3: string,
        NaturalPerson: string,
        PreferredLanguageCode: string,
        IsPurchaseOrderRequired: string,
        IndustryKey: string,

      }
    ]
  },
  ToAddressesSet: {
    results: [{
      CustomerCode: string,
      HouseNumber: string,
      City: string,
      Street: string,
      POBox: string,
      POBoxCity: string,
      PostalCode: string,
      CountryCode: string,
      RegionCode: string,
      POBoxPostalCode: string,
      GeographicalTerritoryCode: string,
      TransportationZone: string,
      ProspectCode: string,
      AccountGroupCode: string,
      Latitude: string,
      Longitude: string,
      AddressCountryCode: string,

    }
    ]
  },
  ToBankAccountsSet: {
    results: []
  },
  ToSalesAreasSet: {
    results: [
      {
        CustomerCode: string,
        SalesOrganizationCode: string,
        DistributionChannelCode: string,
        BusinessLineCode: string,
        SalesOfficeCode: string,
        ShippingConditionCode: string,
        TermsOfPaymentCode: string,
        MarketSegmentCode: string,
        MarketSubSegmentCode: string,
        SalesChannelCode: string,
        CustomerBrandCode: string,
        KeyAccount: string,
        SalesDistrictCode: string,
        PriceListCode: string,
        IncoTerm1: string,
      },
      {
        CustomerCode: string,
        SalesOrganizationCode: string,
        DistributionChannelCode: string,
        BusinessLineCode: string,
        SalesOfficeCode: string,
        ShippingConditionCode: string,
        TermsOfPaymentCode: string,
        MarketSegmentCode: string,
        MarketSubSegmentCode: string,
        SalesChannelCode: string,
        CustomerBrandCode: string,
        KeyAccount: string,
        SalesDistrictCode: string,
        PriceListCode: string,
        IncoTerm1: string,
      }
    ]
  }
}

export function createRandomUser(): Customer {
  return {
    CustomerCode: faker.string.numeric(10),
    RequestId: faker.string.alphanumeric(),
    Language: faker.helpers.arrayElement(['EN', 'DE', 'FR']),
    ToBusinessPartnersSet: {
      results: [{
        CustomerCode: faker.string.alphanumeric(),
        AccountGroupCode: faker.string.alphanumeric(),
        ProspectCode: faker.string.alphanumeric(),
        Name1: faker.person.fullName(),
        Name2: faker.string.alphanumeric(),
        Name3: faker.string.alphanumeric(),
        Name4: faker.string.alphanumeric(),
        TelephoneNumber: faker.string.alphanumeric(),
        MobileNumber: faker.string.alphanumeric(),
        FaxNumber: faker.string.alphanumeric(),
        Email: faker.string.alphanumeric(),
        VATRegistrationNumber: faker.string.alphanumeric(),
        TaxCode1: faker.string.alphanumeric(),
        TaxCode2: faker.string.alphanumeric(),
        TaxCode3: faker.string.alphanumeric(),
        NaturalPerson: faker.string.alphanumeric(),
        PreferredLanguageCode: faker.string.alphanumeric(),
        IsPurchaseOrderRequired: faker.string.alphanumeric(),
        IndustryKey: faker.string.alphanumeric(),
      },
      {
        CustomerCode: faker.string.alphanumeric(),
        AccountGroupCode: faker.string.alphanumeric(),
        ProspectCode: faker.string.alphanumeric(),
        Name1: faker.string.alphanumeric(),
        Name2: faker.string.alphanumeric(),
        Name3: faker.string.alphanumeric(),
        Name4: faker.string.alphanumeric(),
        TelephoneNumber: faker.string.alphanumeric(),
        MobileNumber: faker.string.alphanumeric(),
        FaxNumber: faker.string.alphanumeric(),
        Email: faker.string.alphanumeric(),
        VATRegistrationNumber: faker.string.alphanumeric(),
        TaxCode1: faker.string.alphanumeric(),
        TaxCode2: faker.string.alphanumeric(),
        TaxCode3: faker.string.alphanumeric(),
        NaturalPerson: faker.string.alphanumeric(),
        PreferredLanguageCode: faker.string.alphanumeric(),
        IsPurchaseOrderRequired: faker.string.alphanumeric(),
        IndustryKey: faker.string.alphanumeric(),
      }]
    },
    ToAddressesSet: {
      results: [{
        CustomerCode: faker.string.alphanumeric(),
        HouseNumber: faker.string.alphanumeric(),
        City: faker.string.alphanumeric(),
        Street: faker.string.alphanumeric(),
        POBox: faker.string.alphanumeric(),
        POBoxCity: faker.string.alphanumeric(),
        PostalCode: faker.string.alphanumeric(),
        CountryCode: faker.string.alphanumeric(),
        RegionCode: faker.string.alphanumeric(),
        POBoxPostalCode: faker.string.alphanumeric(),
        GeographicalTerritoryCode: faker.string.alphanumeric(),
        TransportationZone: faker.string.alphanumeric(),
        ProspectCode: faker.string.alphanumeric(),
        AccountGroupCode: faker.string.alphanumeric(),
        Latitude: faker.string.alphanumeric(),
        Longitude: faker.string.alphanumeric(),
        AddressCountryCode: faker.string.alphanumeric(),
      }]
    },
    ToBankAccountsSet: {
      results: []
    },
    ToSalesAreasSet: {
      results: [
        {
          CustomerCode: faker.string.alphanumeric(),
          SalesOrganizationCode: faker.string.alphanumeric(),
          DistributionChannelCode: faker.string.alphanumeric(),
          BusinessLineCode: faker.string.alphanumeric(),
          SalesOfficeCode: faker.string.alphanumeric(),
          ShippingConditionCode: faker.string.alphanumeric(),
          TermsOfPaymentCode: faker.string.alphanumeric(),
          MarketSegmentCode: faker.string.alphanumeric(),
          MarketSubSegmentCode: faker.string.alphanumeric(),
          SalesChannelCode: faker.string.alphanumeric(),
          CustomerBrandCode: faker.string.alphanumeric(),
          KeyAccount: faker.string.alphanumeric(),
          SalesDistrictCode: faker.string.alphanumeric(),
          PriceListCode: faker.string.alphanumeric(),
          IncoTerm1: faker.string.alphanumeric(),
        },
        {
          CustomerCode: faker.string.alphanumeric(),
          SalesOrganizationCode: faker.string.alphanumeric(),
          DistributionChannelCode: faker.string.alphanumeric(),
          BusinessLineCode: faker.string.alphanumeric(),
          SalesOfficeCode: faker.string.alphanumeric(),
          ShippingConditionCode: faker.string.alphanumeric(),
          TermsOfPaymentCode: faker.string.alphanumeric(),
          MarketSegmentCode: faker.string.alphanumeric(),
          MarketSubSegmentCode: faker.string.alphanumeric(),
          SalesChannelCode: faker.string.alphanumeric(),
          CustomerBrandCode: faker.string.alphanumeric(),
          KeyAccount: faker.string.alphanumeric(),
          SalesDistrictCode: faker.string.alphanumeric(),
          PriceListCode: faker.string.alphanumeric(),
          IncoTerm1: faker.string.alphanumeric(),
        },
      ]
    }
  };
}

export const customers: Customer[] = faker.helpers.multiple(createRandomUser, { count: numberOfCustomers });

fs.writeFile("generatedCustomers.json", JSON.stringify(customers), { flag: 'w' }, function (err: any) {
  if (err) {
    return console.log(err);
  }

  console.log("The file was saved!");
}); 