// import Amadeus from 'amadeus';

// const amadeus = new Amadeus({
//   clientId: 'zmlIfXSQ8iQQ58JxPhELdUSIZ3NrtCrQ',
//   clientSecret: 'ZCIG6cVus3DBjhSj'
// });

// export const searchFlightOffers = async (
//   originLocationCode: string,
//   destinationLocationCode: string,
//   departureDate: string,
//   adults: string
// ): Promise<any> => {
//   try {
//     const response = await amadeus.shopping.flightOffersSearch.get({
//       originLocationCode,
//       destinationLocationCode,
//       departureDate,
//       adults
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error searching flight offers:', error);
//     throw error;
//   }
// };