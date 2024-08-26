export interface Property {
  zpid: number;
  address: {
    streetAddress: string;
    zipcode: string;
    city: string;
    state: string;
  };
  price: {
    value: number;
  };
  lotSizeWithUnit: {
    lotSize: number;
    lotSizeUnit: string;
  };
  listing: {
    listingStatus: string;
  };
  propertyType: string;
  media: {
    propertyPhotoLinks: {
      highResolutionLink: string;
    };
  };
  propertyDisplayRules: {
    mls: {
      brokerName: string;
    };
  };
}
