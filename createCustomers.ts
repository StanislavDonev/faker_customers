import { faker } from '@faker-js/faker';
import * as fs from 'fs';
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
        KeyAccount: boolean,
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
        KeyAccount: boolean,
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
    RequestId: faker.string.numeric(),
    Language: faker.helpers.arrayElement(['EN', 'DE', 'FR']),
    ToBusinessPartnersSet: {
      results: [{
        CustomerCode: faker.string.alphanumeric(),
        AccountGroupCode: faker.string.alpha(4),
        ProspectCode: faker.location.countryCode().concat(faker.helpers.fromRegExp(/-[0-9]{8}/)),
        Name1: faker.person.fullName(),
        Name2: faker.string.alphanumeric(),
        Name3: faker.string.alphanumeric(),
        Name4: faker.string.alphanumeric(),
        TelephoneNumber: faker.string.alphanumeric(),
        MobileNumber: faker.phone.number(),
        FaxNumber: faker.string.alphanumeric(),
        Email: faker.internet.email(),
        VATRegistrationNumber: faker.location.countryCode().concat(faker.string.numeric(11)),
        TaxCode1: faker.string.numeric(14),
        TaxCode2: faker.string.numeric(9),
        TaxCode3: faker.string.alphanumeric(),
        NaturalPerson: faker.string.alphanumeric(),
        PreferredLanguageCode: faker.helpers.arrayElement(['EN', 'DE', 'FR']),
        IsPurchaseOrderRequired: faker.string.alphanumeric(),
        IndustryKey: faker.string.alphanumeric(),
      },
      {
        CustomerCode: faker.string.alphanumeric(),
        AccountGroupCode: faker.string.alpha(4),
        ProspectCode: faker.location.countryCode().concat(faker.helpers.fromRegExp(/-[0-9]{8}/)),
        Name1: faker.person.fullName(),
        Name2: faker.string.alphanumeric(),
        Name3: faker.string.alphanumeric(),
        Name4: faker.string.alphanumeric(),
        TelephoneNumber: faker.string.alphanumeric(),
        MobileNumber: faker.phone.number(),
        FaxNumber: faker.string.alphanumeric(),
        Email: faker.internet.email(),
        VATRegistrationNumber: faker.location.countryCode().concat(faker.string.numeric(11)),
        TaxCode1: faker.string.numeric(14),
        TaxCode2: faker.string.numeric(9),
        TaxCode3: faker.string.alphanumeric(),
        NaturalPerson: faker.string.alphanumeric(),
        PreferredLanguageCode: faker.helpers.arrayElement(['EN', 'DE', 'FR']),
        IsPurchaseOrderRequired: faker.string.alphanumeric(),
        IndustryKey: faker.string.alphanumeric(),
      }]
    },
    ToAddressesSet: {
      results: [{
        CustomerCode: faker.string.alphanumeric(),
        HouseNumber: faker.string.alphanumeric(),
        City: faker.location.city(),
        Street: faker.location.street(),
        POBox: faker.string.alphanumeric(),
        POBoxCity: faker.string.alphanumeric(),
        PostalCode: faker.location.zipCode(),
        CountryCode: faker.location.countryCode(),
        RegionCode: faker.string.numeric(2),
        POBoxPostalCode: faker.string.alphanumeric(),
        GeographicalTerritoryCode: faker.location.countryCode().concat(faker.string.numeric(2)),
        TransportationZone: faker.string.alphanumeric(),
        ProspectCode: faker.location.countryCode().concat(faker.helpers.fromRegExp(/-[0-9]{8}/)),
        AccountGroupCode: faker.string.alpha({length: 4, casing: 'upper'}),
        Latitude: faker.location.latitude().toString(),
        Longitude: faker.location.longitude().toString(),
        AddressCountryCode: faker.helpers.arrayElement(['EN', 'DE', 'FR']),
      }]
    },
    ToBankAccountsSet: {
      results: []
    },
    ToSalesAreasSet: {
      results: [
        {
          CustomerCode: faker.string.alphanumeric(),
          SalesOrganizationCode: faker.location.countryCode().concat(faker.string.numeric(2)),
          DistributionChannelCode: faker.string.numeric(2),
          BusinessLineCode: faker.string.numeric(2),
          SalesOfficeCode: faker.location.countryCode().concat(faker.string.numeric(2)),
          ShippingConditionCode: faker.string.numeric(2),
          TermsOfPaymentCode: faker.helpers.fromRegExp(/[A-Z]{1}[0-9]{3}/),
          MarketSegmentCode: faker.string.alpha({length: 3, casing: 'upper'}),
          MarketSubSegmentCode: faker.helpers.fromRegExp(/[A-Z]{3}[0-9]{2}/),
          SalesChannelCode: faker.helpers.fromRegExp(/[A-Z]{3}[0-9]{2}/),
          CustomerBrandCode: faker.string.alphanumeric(),
          KeyAccount: faker.datatype.boolean(),
          SalesDistrictCode: faker.string.alphanumeric(),
          PriceListCode: faker.string.alphanumeric(),
          IncoTerm1: faker.string.alpha({length: 3, casing: 'upper'}),
        },
        {
          CustomerCode: faker.string.alphanumeric(),
          SalesOrganizationCode: faker.location.countryCode().concat(faker.string.numeric(2)),
          DistributionChannelCode: faker.string.numeric(2),
          BusinessLineCode: faker.string.numeric(2),
          SalesOfficeCode: faker.location.countryCode().concat(faker.string.numeric(2)),
          ShippingConditionCode: faker.string.numeric(2),
          TermsOfPaymentCode: faker.helpers.fromRegExp(/[A-Z]{1}[0-9]{3}/),
          MarketSegmentCode: faker.string.alpha({length: 3, casing: 'upper'}),
          MarketSubSegmentCode: faker.helpers.fromRegExp(/[A-Z]{3}[0-9]{2}/),
          SalesChannelCode: faker.helpers.fromRegExp(/[A-Z]{3}[0-9]{2}/),
          CustomerBrandCode: faker.string.alphanumeric(),
          KeyAccount: faker.datatype.boolean(),
          SalesDistrictCode: faker.string.alphanumeric(),
          PriceListCode: faker.string.alphanumeric(),
          IncoTerm1: faker.string.alpha({length: 3, casing: 'upper'}),
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