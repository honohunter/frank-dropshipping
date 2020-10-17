import PNBlack from './ProximaNovaBlack.otf';
import PNExtraBold from './ProximaNovaExtrabold.otf';
import PNBold from './ProximaNovaBold.otf';
import PNRegular from './ProximaNova-Regular.otf';
import PNThin from './ProximaNovaThin.otf';

export default [
  {
    fontFamily: 'Proxima Nova',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 100,
    src: `
        local('Proxima Nova'),
        local('ProximaNovaThin'),
        url(${PNThin}) format('opentype')
      `,
  },
  {
    fontFamily: 'Proxima Nova',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
        local('Proxima Nova'),
        local('ProximaNova-Regular'),
        url(${PNRegular}) format('opentype')
      `,
  },
  {
    fontFamily: 'Proxima Nova',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 700,
    src: `
        local('Proxima Nova'),
        local('ProximaNovaBold'),
        url(${PNBold}) format('opentype')
      `,
  },
  {
    fontFamily: 'Proxima Nova',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 800,
    src: `
        local('Proxima Nova'),
        local('ProximaNovaExtrabold'),
        url(${PNExtraBold}) format('opentype')
      `,
  },
  {
    fontFamily: 'Proxima Nova',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 900,
    src: `
        local('Proxima Nova'),
        local('ProximaNovaBlack'),
        url(${PNBlack}) format('opentype')
      `,
  },
];
