import getPDFCoverPage from '../../../src/helpers/getPDFCoverPage';
import COVER_PAGE_ALL_ELEMENTS from './fixtures/fixture-cover-page-all-elements';
import COVER_PAGE_NO_CERTIFICATE_TITLE from './fixtures/fixture-cover-page-no-certificate-title';
import COVER_PAGE_NO_ISSUER_LOGO from './fixtures/fixture-cover-page-no-issuer-logo';
import COVER_PAGE_NO_QR_CODE from './fixtures/fixture-cover-page-no-qr-code';

const mockCertificateTitle = 'mock certificate title';
const mockIssueDate = '00-00-0000 00:00:00';
const mockIssuerName = 'Mock Issuer Name';
const mockIssuerLogo = 'Mock Issuer Logo';
const mockRecipientName = 'Mock Recipient Name';
const mockQRCodeImage = 'Mock QR Code Image';
const mockIssuerPublicKey = 'Mock Issuer Public Key';

describe('getPDFCoverPage function', function () {
  describe('given all the Blockcerts info is passed', function () {
    it('should return the correct cover page template', function () {
      const result: HTMLElement = getPDFCoverPage({
        certificateTitle: mockCertificateTitle,
        issueDate: mockIssueDate,
        issuerName: mockIssuerName,
        issuerLogo: mockIssuerLogo,
        recipientName: mockRecipientName,
        qrCodeImage: mockQRCodeImage,
        issuerPublicKey: mockIssuerPublicKey
      });
      expect(result.outerHTML).toBe(COVER_PAGE_ALL_ELEMENTS);
    });
  });

  describe('given no certificate title is passed', function () {
    it('should return the correct cover page template without certificate title', function () {
      const result: HTMLElement = getPDFCoverPage({
        issueDate: mockIssueDate,
        issuerName: mockIssuerName,
        issuerLogo: mockIssuerLogo,
        recipientName: mockRecipientName,
        qrCodeImage: mockQRCodeImage,
        issuerPublicKey: mockIssuerPublicKey
      });

      expect(result.outerHTML).toBe(COVER_PAGE_NO_CERTIFICATE_TITLE);
    });
  });

  describe('given no issuer logo is passed', function () {
    it('should return the correct cover page template without issuer logo', function () {
      const result: HTMLElement = getPDFCoverPage({
        certificateTitle: mockCertificateTitle,
        issueDate: mockIssueDate,
        issuerName: mockIssuerName,
        recipientName: mockRecipientName,
        qrCodeImage: mockQRCodeImage,
        issuerPublicKey: mockIssuerPublicKey
      });
      expect(result.outerHTML).toBe(COVER_PAGE_NO_ISSUER_LOGO);
    });
  });

  describe('given no QR code image is passed', function () {
    it('should return the correct cover page template without a QR code image', function () {
      const result: HTMLElement = getPDFCoverPage({
        certificateTitle: mockCertificateTitle,
        issueDate: mockIssueDate,
        issuerName: mockIssuerName,
        issuerLogo: mockIssuerLogo,
        recipientName: mockRecipientName,
        issuerPublicKey: mockIssuerPublicKey
      });
      expect(result.outerHTML).toBe(COVER_PAGE_NO_QR_CODE);
    });
  });
});
